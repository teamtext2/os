// --- INTERACTIVE WEBGL RIPPLE WALLPAPER ENGINE ---

(function() {
    let gl;
    let program;
    let canvas;
    let texture = null;
    let useTexture = 0;
    
    // Max 5 concurrent ripples
    const MAX_RIPPLES = 5;
    const rippleDuration = 1.5; // seconds
    // ring buffer: [x, y, age]
    let ripples = Array.from({ length: MAX_RIPPLES }, () => [0, 0, 999]);
    let currentRippleIdx = 0;
    
    let lastTime = 0;
    let startTime = Date.now();
    let currentWallpaperUrl = '';

    // Global config object that connects to the Settings interface
    window.webglConfig = {
        enabled: localStorage.getItem('os_ripple_enabled') !== 'false',
        damping: parseFloat(localStorage.getItem('os_ripple_damping') || '0.98'),
        speed: parseFloat(localStorage.getItem('os_ripple_speed') || '2.0'),
        intensity: parseFloat(localStorage.getItem('os_ripple_intensity') || '1.5')
    };

    // Vertex Shader
    const vsSource = `
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
            vUv = position * 0.5 + 0.5;
            vUv.y = 1.0 - vUv.y; // Flip Y coordinates to match texture coordinates
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `;

    // Fragment Shader with configurable uniforms
    const fsSource = `
        precision mediump float;
        varying vec2 vUv;
        uniform sampler2D uTexture;
        uniform vec2 uResolution;
        uniform float uTime;
        uniform int uUseTexture;
        
        #define MAX_RIPPLES 5
        uniform vec3 uRipples[MAX_RIPPLES]; // xy: center coordinates, z: age (seconds)
        uniform float uRippleDuration;
        
        // Dynamically configured uniform properties
        uniform float uRippleSpeed;
        uniform float uRippleDamping;
        uniform float uRippleIntensity;

        // Elegant gradient backup theme
        vec3 getGradient(vec2 uv) {
            vec2 p = uv - 0.5;
            float r = length(p);
            vec3 col1 = vec3(0.08, 0.06, 0.16); // Deep indigo
            vec3 col2 = vec3(0.18, 0.08, 0.32); // Deep violet
            vec3 col3 = vec3(0.03, 0.03, 0.08); // Obsidian dark
            
            float angle = atan(p.y, p.x);
            float wave = sin(angle * 4.0 + uTime * 0.4) * 0.08;
            
            vec3 col = mix(col1, col2, uv.x + wave);
            col = mix(col, col3, r * 1.3);
            return col;
        }

        void main() {
            vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
            vec2 uv = vUv;
            vec2 distortion = vec2(0.0);
            
            for (int i = 0; i < MAX_RIPPLES; i++) {
                float rTime = uRipples[i].z;
                if (rTime >= 0.0 && rTime < uRippleDuration) {
                    vec2 rPos = uRipples[i].xy;
                    
                    // Maintain circular aspect ratio
                    vec2 diff = (uv - rPos) * aspect;
                    float dist = length(diff);
                    
                    float speed = uRippleSpeed * 0.4; // Configurable speed multiplier
                    float waveFront = rTime * speed;
                    
                    if (dist < waveFront) {
                        float progress = rTime / uRippleDuration;
                        // Wave amplitude reduces over distance and time
                        float amplitude = 0.025 * uRippleIntensity * (1.0 - progress);
                        float wave = sin(28.0 * (dist - waveFront));
                        // High damping means wave decays slower (so lower decay rate factor)
                        float decay = exp(-dist * (6.0 - uRippleDamping * 4.0));
                        
                        vec2 dir = normalize(diff);
                        distortion += dir * wave * amplitude * decay;
                    }
                }
            }
            
            vec2 distortedUv = uv + distortion;
            distortedUv = clamp(distortedUv, 0.0, 1.0);
            
            vec3 color;
            if (uUseTexture == 1) {
                color = texture2D(uTexture, distortedUv).rgb;
            } else {
                color = getGradient(distortedUv);
            }
            
            gl_FragColor = vec4(color, 1.0);
        }
    `;

    function createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    function initShaders() {
        const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
        const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
        program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
        
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error('Program linking error:', gl.getProgramInfoLog(program));
            return false;
        }
        gl.useProgram(program);
        return true;
    }

    function initBuffers() {
        const vertices = new Float32Array([
            -1, -1,
             1, -1,
            -1,  1,
            -1,  1,
             1, -1,
             1,  1,
        ]);
        
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
        
        const posAttrib = gl.getAttribLocation(program, 'position');
        gl.enableVertexAttribArray(posAttrib);
        gl.vertexAttribPointer(posAttrib, 2, gl.FLOAT, false, 0, 0);
    }

    // Load static image to WebGL texture bindings
    function loadWallpaperTexture(url) {
        if (!gl) return;
        currentWallpaperUrl = url;
        
        const img = new Image();
        img.crossOrigin = 'anonymous'; // Important to bypass CORS limitations
        img.onload = () => {
            if (currentWallpaperUrl !== url) return;
            
            if (!texture) {
                texture = gl.createTexture();
            }
            
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
            useTexture = 1;
        };
        img.onerror = () => {
            console.warn('Failed to load wallpaper texture cross-origin. Falling back to dynamic procedural gradient.');
            useTexture = 0;
        };
        img.src = url;
    }

    function resizeCanvas() {
        if (!canvas) return;
        const width = window.innerWidth;
        const height = window.innerHeight;
        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
            gl.viewport(0, 0, width, height);
        }
    }

    function render() {
        if (!gl || !program) return;
        
        resizeCanvas();
        
        const now = (Date.now() - startTime) / 1000.0;
        const dt = now - lastTime;
        lastTime = now;
        
        // Update age of ripples
        for (let i = 0; i < MAX_RIPPLES; i++) {
            if (ripples[i][2] < rippleDuration) {
                ripples[i][2] += dt;
            }
        }
        
        // Bind basic uniforms
        const uRes = gl.getUniformLocation(program, 'uResolution');
        gl.uniform2f(uRes, canvas.width, canvas.height);
        
        const uTime = gl.getUniformLocation(program, 'uTime');
        gl.uniform1f(uTime, now);
        
        const uUseTex = gl.getUniformLocation(program, 'uUseTexture');
        gl.uniform1i(uUseTex, useTexture);
        
        const uDur = gl.getUniformLocation(program, 'uRippleDuration');
        gl.uniform1f(uDur, rippleDuration);
        
        // Bind dynamic settings uniforms
        const uSpeed = gl.getUniformLocation(program, 'uRippleSpeed');
        gl.uniform1f(uSpeed, window.webglConfig.enabled ? window.webglConfig.speed : 0.0);
        
        const uDamping = gl.getUniformLocation(program, 'uRippleDamping');
        gl.uniform1f(uDamping, window.webglConfig.damping);
        
        const uIntensity = gl.getUniformLocation(program, 'uRippleIntensity');
        gl.uniform1f(uIntensity, window.webglConfig.enabled ? window.webglConfig.intensity : 0.0);
        
        // Flatten ripple buffer
        const flatRipples = new Float32Array(MAX_RIPPLES * 3);
        for (let i = 0; i < MAX_RIPPLES; i++) {
            flatRipples[i * 3 + 0] = ripples[i][0];
            flatRipples[i * 3 + 1] = ripples[i][1];
            flatRipples[i * 3 + 2] = ripples[i][2];
        }
        const uRips = gl.getUniformLocation(program, 'uRipples');
        gl.uniform3fv(uRips, flatRipples);
        
        // Draw quad
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        
        requestAnimationFrame(render);
    }

    function init() {
        canvas = document.getElementById('webgl-canvas');
        if (!canvas) return;
        
        gl = canvas.getContext('webgl', { antialias: true, alpha: false }) || 
             canvas.getContext('experimental-webgl', { antialias: true, alpha: false });
        
        if (!gl) {
            console.error('WebGL is not supported in this browser environment.');
            canvas.style.display = 'none';
            return;
        }
        
        if (!initShaders()) return;
        initBuffers();
        
        // Sync starting background from the os-container styling
        const container = document.getElementById('os-container');
        if (container) {
            let bgStyle = container.style.backgroundImage;
            let match = bgStyle.match(/url\(['"]?([^'"]+)['"]?\)/);
            let defaultUrl = match ? match[1] : 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop';
            loadWallpaperTexture(defaultUrl);
            container.style.backgroundImage = 'none';
        }
        
        // Global tap/click gesture listeners to trigger water ripple waves
        window.addEventListener('click', (e) => {
            window.triggerRipple(e.clientX, e.clientY);
        }, { passive: true });
        
        window.addEventListener('touchstart', (e) => {
            if (e.touches && e.touches.length > 0) {
                window.triggerRipple(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: true });
        
        requestAnimationFrame(render);
    }

    window.triggerRipple = function(clientX, clientY) {
        if (!canvas || !window.webglConfig.enabled) return;
        const rect = canvas.getBoundingClientRect();
        
        // Normalize cursor screen position
        const x = (clientX - rect.left) / rect.width;
        const y = (clientY - rect.top) / rect.height;
        
        // Feed into active ripples ring buffer
        ripples[currentRippleIdx] = [x, y, 0.0];
        currentRippleIdx = (currentRippleIdx + 1) % MAX_RIPPLES;
    };

    window.updateWallpaperTexture = function(url) {
        loadWallpaperTexture(url);
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
