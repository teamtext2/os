// --- SYSTEM INITIALIZATION & UTILITIES ---

// Initialize system when page has loaded
window.onload = () => {
    refreshIcons();
};

// Refresh Lucide Icons
function refreshIcons() {
    if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }
}

// Clock updates every second
setInterval(() => {
    const clockEl = document.getElementById('clock');
    if (clockEl) {
        clockEl.textContent = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    }
}, 1000);

// Display toast notifications
function showToast(message) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = message;
        toast.style.opacity = '1';
        setTimeout(() => toast.style.opacity = '0', 3000);
    }
}

// Boot the operating system and request full screen
function startOS() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(e => console.log(e));
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }

    const startOverlay = document.getElementById('start-overlay');
    if (startOverlay) {
        startOverlay.style.opacity = '0';
        setTimeout(() => startOverlay.style.display = 'none', 500);
    }

    setTimeout(fetchEcosystemApps, 800);
}

// Load application ecosystem from server
async function fetchEcosystemApps() {
    let appsToRender = FALLBACK_APPS; // Default from config.js

    // Check if we are running under file:// protocol to avoid console CORS errors
    if (window.location.protocol === 'file:') {
        console.log("Running locally on file:// protocol. Fetching app.json is disabled to prevent CORS errors. Loading fallback apps.");
        proceedWithApps(appsToRender);
        return;
    }

    try {
        const response = await fetch(DATA_URL);
        if (response.ok) {
            const data = await response.json();
            if (Array.isArray(data)) {
                appsToRender = data;
            } else if (typeof data === 'object') {
                for (let key in data) {
                    if (Array.isArray(data[key])) {
                        appsToRender = data[key];
                        break;
                    }
                }
            }
            showToast('Loaded Text2 ecosystem!');
        }
    } catch (error) {
        console.warn("Network/CORS error or API data loading issue, using fallback data.");
    } finally {
        proceedWithApps(appsToRender);
    }
}

function proceedWithApps(appsToRender) {
    const totalCountEl = document.getElementById('total-apps-count');
    if (totalCountEl) {
        totalCountEl.textContent = appsToRender.length;
    }
    
    if (typeof renderApps === 'function') {
        renderApps(appsToRender);
    }
    
    const bootScreen = document.getElementById('boot-screen');
    if (bootScreen) {
        bootScreen.style.opacity = '0';
        setTimeout(() => bootScreen.style.display = 'none', 500);
    }
}

