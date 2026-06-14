// --- SETTINGS NAVIGATION & MANAGER ---

// Open a settings sub-page
function openSettingsSubpage(pageId) {
    const page = document.getElementById(pageId);
    if (page) {
        page.classList.add('active');
    }
}

// Close a settings sub-page
function closeSettingsSubpage(pageId) {
    const page = document.getElementById(pageId);
    if (page) {
        page.classList.remove('active');
    }
}

// Initialize system settings from localStorage or defaults
document.addEventListener('DOMContentLoaded', () => {
    // 1. Device Name
    const savedDeviceName = localStorage.getItem('os_device_name') || 'Text2 Phone 15';
    const deviceNameInput = document.getElementById('setting-device-name-input');
    const deviceNameDisplay = document.getElementById('setting-device-name-display');
    if (deviceNameInput) {
        deviceNameInput.value = savedDeviceName;
        deviceNameInput.addEventListener('input', (e) => {
            const name = e.target.value.trim() || 'Text2 Phone';
            localStorage.setItem('os_device_name', name);
            if (deviceNameDisplay) deviceNameDisplay.textContent = name;
        });
    }
    if (deviceNameDisplay) {
        deviceNameDisplay.textContent = savedDeviceName;
    }

    // 2. Brightness
    const savedBrightness = localStorage.getItem('os_brightness') || '85';
    const brightnessSlider = document.getElementById('setting-brightness-slider');
    if (brightnessSlider) {
        brightnessSlider.value = savedBrightness;
        updateBrightness(savedBrightness);
        brightnessSlider.addEventListener('input', (e) => {
            updateBrightness(e.target.value);
        });
    }

    // 3. Dark Mode
    const savedDarkMode = localStorage.getItem('os_dark_mode') !== 'false'; // Default true
    const darkModeToggle = document.getElementById('setting-darkmode-toggle');
    if (darkModeToggle) {
        darkModeToggle.checked = savedDarkMode;
        toggleDarkMode(savedDarkMode);
        darkModeToggle.addEventListener('change', (e) => {
            toggleDarkMode(e.target.checked);
        });
    }

    // 4. Low Power Mode
    const savedLowPower = localStorage.getItem('os_low_power') === 'true';
    const lowPowerToggle = document.getElementById('setting-lowpower-toggle');
    if (lowPowerToggle) {
        lowPowerToggle.checked = savedLowPower;
        toggleLowPowerMode(savedLowPower);
        lowPowerToggle.addEventListener('change', (e) => {
            toggleLowPowerMode(e.target.checked);
        });
    }

    // 5. WebGL Ripple settings
    const rippleEnabled = localStorage.getItem('os_ripple_enabled') !== 'false'; // Default true
    const rippleToggle = document.getElementById('setting-ripple-toggle');
    if (rippleToggle) {
        rippleToggle.checked = rippleEnabled;
        setRippleEnabled(rippleEnabled);
        rippleToggle.addEventListener('change', (e) => {
            setRippleEnabled(e.target.checked);
        });
    }

    const dampingVal = localStorage.getItem('os_ripple_damping') || '0.98';
    const dampingSlider = document.getElementById('setting-ripple-damping');
    if (dampingSlider) {
        dampingSlider.value = dampingVal;
        setRippleParameter('damping', parseFloat(dampingVal));
        dampingSlider.addEventListener('input', (e) => {
            setRippleParameter('damping', parseFloat(e.target.value));
        });
    }

    const speedVal = localStorage.getItem('os_ripple_speed') || '2.0';
    const speedSlider = document.getElementById('setting-ripple-speed');
    if (speedSlider) {
        speedSlider.value = speedVal;
        setRippleParameter('speed', parseFloat(speedVal));
        speedSlider.addEventListener('input', (e) => {
            setRippleParameter('speed', parseFloat(e.target.value));
        });
    }

    const intensityVal = localStorage.getItem('os_ripple_intensity') || '1.5';
    const intensitySlider = document.getElementById('setting-ripple-intensity');
    if (intensitySlider) {
        intensitySlider.value = intensityVal;
        setRippleParameter('intensity', parseFloat(intensityVal));
        intensitySlider.addEventListener('input', (e) => {
            setRippleParameter('intensity', parseFloat(e.target.value));
        });
    }
});
