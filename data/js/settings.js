// --- SETTINGS & WALLPAPER MANAGEMENT ---

// Open Settings
function openSettings(event) {
    const layer = document.getElementById('settings-layer');
    if (!layer) return;

    // Find clicked Settings icon to locate zoom origin
    let iconEl = null;
    if (event) {
        iconEl = event.currentTarget || event.target;
    } else {
        iconEl = document.querySelector('.app-icon[onclick*="openSettings"]');
    }

    layer.classList.add('active');
    if (typeof animateZoomOpen === 'function') {
        animateZoomOpen(layer, iconEl);
    }
}

// Close Settings
function closeSettings() {
    const layer = document.getElementById('settings-layer');
    if (!layer) return;

    if (typeof animateZoomClose === 'function') {
        animateZoomClose(layer, () => {
            layer.classList.remove('active');
        });
    } else {
        layer.classList.remove('active');
    }
}

// Change system wallpaper
function changeWallpaper(url) {
    const container = document.getElementById('os-container');
    if (container) {
        // Update WebGL background texture
        if (typeof window.updateWallpaperTexture === 'function') {
            window.updateWallpaperTexture(url);
            container.style.backgroundImage = 'none'; // Clear static background image to optimize rendering performance
        } else {
            container.style.backgroundImage = `url('${url}')`;
        }
    }

    if (typeof showToast === 'function') {
        showToast('Wallpaper changed successfully!');
    }
}

