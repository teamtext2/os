// --- SYSTEM SETTINGS FUNCTIONALITIES ---

// 1. Brightness Controller
function updateBrightness(value) {
    localStorage.setItem('os_brightness', value);
    let overlay = document.getElementById('brightness-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'brightness-overlay';
        overlay.className = 'fixed inset-0 bg-black pointer-events-none transition-opacity duration-100';
        overlay.style.zIndex = '95'; // Just below boot screen and alerts
        document.body.appendChild(overlay);
    }
    // Brightness value from 10% to 100% -> Opacity from 0.9 to 0.0
    const brightnessVal = parseInt(value, 10);
    const opacity = 1.0 - (brightnessVal / 100);
    overlay.style.opacity = opacity.toFixed(2);
    
    const sliderValDisplay = document.getElementById('setting-brightness-val');
    if (sliderValDisplay) sliderValDisplay.textContent = `${brightnessVal}%`;
}

// 2. Dark Mode Toggle
function toggleDarkMode(enabled) {
    localStorage.setItem('os_dark_mode', enabled);
    const container = document.getElementById('os-container');
    const settingsLayer = document.getElementById('settings-layer');
    
    if (enabled) {
        if (container) container.classList.add('dark');
        if (settingsLayer) {
            settingsLayer.classList.remove('bg-gray-50', 'text-black');
            settingsLayer.classList.add('bg-gray-950', 'text-white');
            const headers = settingsLayer.querySelectorAll('.header-bar');
            headers.forEach(h => {
                h.classList.remove('bg-white', 'text-black', 'border-b-gray-200');
                h.classList.add('bg-gray-900', 'text-white', 'border-b-gray-800');
            });
            const cards = settingsLayer.querySelectorAll('.settings-card');
            cards.forEach(c => {
                c.classList.remove('bg-white', 'text-black');
                c.classList.add('bg-gray-900', 'text-white');
            });
            const subpages = settingsLayer.querySelectorAll('.settings-page');
            subpages.forEach(p => {
                p.classList.remove('bg-gray-50');
                p.classList.add('bg-gray-950');
            });
        }
    } else {
        if (container) container.classList.remove('dark');
        if (settingsLayer) {
            settingsLayer.classList.remove('bg-gray-950', 'text-white');
            settingsLayer.classList.add('bg-gray-50', 'text-black');
            const headers = settingsLayer.querySelectorAll('.header-bar');
            headers.forEach(h => {
                h.classList.remove('bg-gray-900', 'text-white', 'border-b-gray-800');
                h.classList.add('bg-white', 'text-black', 'border-b-gray-200');
            });
            const cards = settingsLayer.querySelectorAll('.settings-card');
            cards.forEach(c => {
                c.classList.remove('bg-gray-900', 'text-white');
                c.classList.add('bg-white', 'text-black');
            });
            const subpages = settingsLayer.querySelectorAll('.settings-page');
            subpages.forEach(p => {
                p.classList.remove('bg-gray-950');
                p.classList.add('bg-gray-50');
            });
        }
    }
}

// 3. Low Power Mode Toggle
function toggleLowPowerMode(enabled) {
    localStorage.setItem('os_low_power', enabled);
    const container = document.getElementById('os-container');
    if (container) {
        if (enabled) {
            container.classList.add('low-power-mode');
            // Dim slightly to save battery
            const currentBrightness = parseInt(localStorage.getItem('os_brightness') || '85', 10);
            const brightnessSlider = document.getElementById('setting-brightness-slider');
            if (brightnessSlider) brightnessSlider.value = Math.min(currentBrightness, 45);
            updateBrightness(Math.min(currentBrightness, 45));
            // Show low power alert toast
            if (typeof showToast === 'function') showToast('Low Power Mode Activated');
        } else {
            container.classList.remove('low-power-mode');
            const currentBrightness = parseInt(localStorage.getItem('os_brightness') || '85', 10);
            const brightnessSlider = document.getElementById('setting-brightness-slider');
            if (brightnessSlider) brightnessSlider.value = currentBrightness;
            updateBrightness(currentBrightness);
        }
    }
}

// 4. WebGL Ripple Parameter Config
function setRippleEnabled(enabled) {
    localStorage.setItem('os_ripple_enabled', enabled);
    if (window.webglConfig) {
        window.webglConfig.enabled = enabled;
    }
    if (typeof showToast === 'function') {
        showToast(enabled ? 'WebGL Ripples Enabled' : 'WebGL Ripples Paused');
    }
}

function setRippleParameter(param, value) {
    localStorage.setItem(`os_ripple_${param}`, value);
    if (window.webglConfig) {
        window.webglConfig[param] = value;
    }
}

// 5. Wi-Fi Logic
function toggleWifi(enabled) {
    const wifiStatusText = document.getElementById('setting-wifi-status');
    const wifiSummaryText = document.getElementById('setting-wifi-summary');
    const wifiList = document.getElementById('settings-wifi-list');
    
    if (enabled) {
        if (wifiStatusText) wifiStatusText.textContent = 'Searching...';
        if (wifiSummaryText) wifiSummaryText.textContent = 'Searching...';
        
        setTimeout(() => {
            if (wifiStatusText) wifiStatusText.textContent = 'Connected';
            if (wifiSummaryText) wifiSummaryText.textContent = 'Text2_HighSpeed_5G';
            if (wifiList) wifiList.classList.remove('hidden');
        }, 1200);
    } else {
        if (wifiStatusText) wifiStatusText.textContent = 'Off';
        if (wifiSummaryText) wifiSummaryText.textContent = 'Off';
        if (wifiList) wifiList.classList.add('hidden');
    }
}

function connectWifi(networkName, element) {
    const statusLabel = element.querySelector('.network-status');
    if (statusLabel.textContent === 'Connected') return;

    // Show loading spinner
    const spinner = element.querySelector('.connection-spinner');
    if (spinner) spinner.classList.remove('hidden');
    statusLabel.textContent = 'Connecting...';

    setTimeout(() => {
        // Reset other network labels
        const allItems = document.querySelectorAll('#settings-wifi-list .network-item');
        allItems.forEach(item => {
            const label = item.querySelector('.network-status');
            const spin = item.querySelector('.connection-spinner');
            if (label) label.textContent = 'Secured';
            if (spin) spin.classList.add('hidden');
        });

        if (spinner) spinner.classList.add('hidden');
        statusLabel.textContent = 'Connected';
        
        const wifiSummaryText = document.getElementById('setting-wifi-summary');
        if (wifiSummaryText) wifiSummaryText.textContent = networkName;
        
        if (typeof showToast === 'function') showToast(`Connected to ${networkName}`);
    }, 1500);
}

// 6. Bluetooth Logic
function toggleBluetooth(enabled) {
    const btStatusText = document.getElementById('setting-bluetooth-status');
    const btSummaryText = document.getElementById('setting-bluetooth-summary');
    const btList = document.getElementById('settings-bluetooth-list');
    
    if (enabled) {
        if (btStatusText) btStatusText.textContent = 'On';
        if (btSummaryText) btSummaryText.textContent = 'On';
        if (btList) btList.classList.remove('hidden');
    } else {
        if (btStatusText) btStatusText.textContent = 'Off';
        if (btSummaryText) btSummaryText.textContent = 'Off';
        if (btList) btList.classList.add('hidden');
    }
}

function connectBluetooth(deviceName, element) {
    const statusLabel = element.querySelector('.bt-status');
    if (statusLabel.textContent === 'Connected') return;

    const spinner = element.querySelector('.bt-spinner');
    if (spinner) spinner.classList.remove('hidden');
    statusLabel.textContent = 'Connecting...';

    setTimeout(() => {
        if (spinner) spinner.classList.add('hidden');
        statusLabel.textContent = 'Connected';
        
        const btSummaryText = document.getElementById('setting-bluetooth-summary');
        if (btSummaryText) btSummaryText.textContent = `Connected: ${deviceName}`;
        
        if (typeof showToast === 'function') showToast(`Paired with ${deviceName}`);
    }, 1200);
}

// 7. Battery Monitor Simulation
document.addEventListener('DOMContentLoaded', () => {
    const batteryLevel = document.getElementById('setting-battery-level');
    const batteryHealth = document.getElementById('setting-battery-health');
    const batterySaverText = document.getElementById('setting-battery-saver-text');
    
    if (navigator.getBattery) {
        navigator.getBattery().then(battery => {
            const updateBatteryUI = () => {
                const level = Math.round(battery.level * 100);
                if (batteryLevel) batteryLevel.textContent = `${level}%`;
                if (batterySaverText) {
                    batterySaverText.textContent = battery.charging ? 'Charging' : 'Discharging';
                }
            };
            updateBatteryUI();
            battery.addEventListener('levelchange', updateBatteryUI);
            battery.addEventListener('chargingchange', updateBatteryUI);
        });
    } else {
        const randomLevel = Math.floor(Math.random() * 20) + 75; // 75% - 95%
        if (batteryLevel) batteryLevel.textContent = `${randomLevel}%`;
        if (batterySaverText) batterySaverText.textContent = 'Not Charging';
    }
    
    if (batteryHealth) {
        batteryHealth.textContent = '98% (Maximum Capacity)';
    }
});
