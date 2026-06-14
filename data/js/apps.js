// --- APPS MANAGEMENT ---

// --- PREMIUM ZOOM TRANSITION EFFECT ---
function animateZoomOpen(element, iconEl) {
    if (!element) return;

    let rect = null;
    // Find the visual icon container to measure precise coordinates
    if (iconEl) {
        const targetIcon = iconEl.closest('.app-icon');
        if (targetIcon) {
            const visualIcon = targetIcon.querySelector('div');
            if (visualIcon) rect = visualIcon.getBoundingClientRect();
        }
        if (!rect) rect = iconEl.getBoundingClientRect();
    }

    if (!rect) {
        // Fallback to center of viewport
        const w = window.innerWidth;
        const h = window.innerHeight;
        rect = { left: w / 2 - 28, top: h / 2 - 28, width: 56, height: 56 };
    }

    const iconLeft = rect.left;
    const iconTop = rect.top;
    const iconWidth = rect.width;
    const iconHeight = rect.height;

    const winW = window.innerWidth;
    const winH = window.innerHeight;
    const scaleX = iconWidth / winW;
    const scaleY = iconHeight / winH;

    // Save initial coordinates to dataset for closure return zoom
    element.dataset.iconLeft = iconLeft;
    element.dataset.iconTop = iconTop;
    element.dataset.iconWidth = iconWidth;
    element.dataset.iconHeight = iconHeight;

    // Start positioned at the icon bounds
    element.style.display = 'flex';
    element.style.transformOrigin = 'top left';
    element.style.transform = `translate3d(${iconLeft}px, ${iconTop}px, 0) scale3d(${scaleX}, ${scaleY}, 1)`;
    element.style.borderRadius = '24px';
    element.style.opacity = '0';

    // Force browser reflow before triggering transition
    element.offsetHeight;

    // Expand to full screen with a smooth spring-back cubic bezier curves
    element.style.transition = 'transform 0.48s cubic-bezier(0.34, 1.42, 0.64, 1), opacity 0.35s ease, border-radius 0.48s ease';
    element.style.transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1)';
    element.style.borderRadius = '24px'; // Modern flagship phone rounded look
    element.style.opacity = '1';

    // Zoom and blur parent wallpaper/home screen
    const osContainer = document.getElementById('os-container');
    if (osContainer) {
        osContainer.classList.add('app-active');
    }

    // Trigger WebGL liquid ripple effect starting at the center of the icon
    if (typeof window.triggerRipple === 'function') {
        window.triggerRipple(iconLeft + iconWidth / 2, iconTop + iconHeight / 2);
    }
}

function animateZoomClose(element, callback) {
    if (!element) return;

    let iconLeft = parseFloat(element.dataset.iconLeft);
    let iconTop = parseFloat(element.dataset.iconTop);
    let iconWidth = parseFloat(element.dataset.iconWidth);
    let iconHeight = parseFloat(element.dataset.iconHeight);

    if (isNaN(iconLeft)) {
        const w = window.innerWidth;
        const h = window.innerHeight;
        iconLeft = w / 2 - 28;
        iconTop = h / 2 - 28;
        iconWidth = 56;
        iconHeight = 56;
    }

    const winW = window.innerWidth;
    const winH = window.innerHeight;
    const scaleX = iconWidth / winW;
    const scaleY = iconHeight / winH;

    // Smoothly scale back to icon bounds
    element.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.35s ease, border-radius 0.4s ease';
    element.style.transform = `translate3d(${iconLeft}px, ${iconTop}px, 0) scale3d(${scaleX}, ${scaleY}, 1)`;
    element.style.borderRadius = '24px';
    element.style.opacity = '0';

    // Restore home screen wallpaper depth and scale
    const osContainer = document.getElementById('os-container');
    if (osContainer) {
        osContainer.classList.remove('app-active');
    }

    const onEnd = (e) => {
        if (e.target !== element) return;
        element.removeEventListener('transitionend', onEnd);
        element.style.display = 'none';
        clearWrapperInlineStyles(element);
        if (callback) callback();
    };

    element.addEventListener('transitionend', onEnd);
    // Safety timeout fallback
    setTimeout(() => {
        element.style.display = 'none';
        clearWrapperInlineStyles(element);
        if (callback) callback();
    }, 450);
}

function clearWrapperInlineStyles(wrapper) {
    if (!wrapper) return;
    wrapper.style.transform = '';
    wrapper.style.transition = '';
    wrapper.style.borderRadius = '';
    wrapper.style.opacity = '';
    wrapper.style.width = '';
    wrapper.style.height = '';
    wrapper.style.left = '';
    wrapper.style.top = '';
}

// Update running app count on multitasking indicator badge
function updateTaskBadge() {
    const count = Object.keys(runningApps).length;
    const badge = document.getElementById('task-badge');
    if (count > 0) {
        badge.textContent = count;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

// Open an app (loads into header/iframe wrapper or restores from background)
function openApp(title, url, event) {
    if (typeof closeTaskSwitcher === 'function') {
        closeTaskSwitcher(false); // Hide switcher without returning to Home Screen
    }

    const container = document.getElementById('iframes-container');
    const loader = document.getElementById('app-loading');
    
    // Disable multitasking mode on app layer
    document.getElementById('app-layer').classList.remove('multitasking-active');

    // Find clicked icon to determine zoom target coordinates
    let iconEl = null;
    if (event) {
        iconEl = event.currentTarget || event.target;
    } else {
        // Fallback: search DOM for app labels
        const icons = document.querySelectorAll('.app-icon');
        for (let icon of icons) {
            const label = icon.querySelector('.app-label');
            if (label && label.textContent.trim().toLowerCase() === title.trim().toLowerCase()) {
                iconEl = icon;
                break;
            }
        }
    }

    // Hide other running app wrappers except the one being opened
    const wrappers = container.querySelectorAll('.app-wrapper');
    wrappers.forEach(w => {
        if (w.getAttribute('data-app-name') !== title) {
            w.style.display = 'none';
        }
    });

    let wrapper = runningApps[title];
    if (wrapper) {
        // App is already running -> restore visibility
        wrapper.style.display = 'flex';
    } else {
        // Open new App process
        loader.style.display = 'flex';

        wrapper = document.createElement('div');
        wrapper.className = "app-wrapper absolute inset-0 bg-white flex flex-col overflow-hidden";
        wrapper.setAttribute('data-app-name', title);

        wrapper.innerHTML = `
            <div class="app-header w-full h-12 bg-gray-100 flex items-center justify-between px-6 pt-safe pb-2 shrink-0 border-b">
                <span class="text-black font-semibold text-sm truncate w-1/2">${title}</span>
                <div class="flex gap-3">
                    <button onclick="event.stopPropagation(); goHome()" class="bg-gray-200 text-gray-700 rounded-full p-1.5 hover:bg-gray-300 transition">
                        <i data-lucide="minus" class="w-4 h-4"></i>
                    </button>
                    <button onclick="event.stopPropagation(); killApp('${title}')" class="bg-red-100 text-red-600 rounded-full p-1.5 hover:bg-red-200 transition">
                        <i data-lucide="x" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
            <div class="flex-1 relative bg-white">
                <iframe src="${url}" class="w-full h-full border-none absolute inset-0" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
            </div>
        `;

        const iframe = wrapper.querySelector('iframe');
        iframe.onload = () => { loader.style.display = 'none'; };

        container.appendChild(wrapper);
        runningApps[title] = wrapper;
        updateTaskBadge();

        if (typeof refreshIcons === 'function') {
            refreshIcons();
        }
    }

    document.getElementById('app-layer').classList.add('active');
    animateZoomOpen(wrapper, iconEl);
    currentActiveApp = title;
}

// Return to home screen
function goHome() {
    const appLayer = document.getElementById('app-layer');
    if (!appLayer) return;

    if (currentActiveApp && runningApps[currentActiveApp]) {
        const wrapper = runningApps[currentActiveApp];
        animateZoomClose(wrapper, () => {
            appLayer.classList.remove('active');
            appLayer.classList.remove('multitasking-active');
            currentActiveApp = null;
        });
    } else {
        appLayer.classList.remove('active');
        appLayer.classList.remove('multitasking-active');
        currentActiveApp = null;
        const osContainer = document.getElementById('os-container');
        if (osContainer) {
            osContainer.classList.remove('app-active');
        }
    }
}

// Terminate a specific application process
function killApp(title) {
    if (runningApps[title]) {
        const wrapper = runningApps[title];
        if (currentActiveApp === title) {
            animateZoomClose(wrapper, () => {
                wrapper.remove(); // Remove from DOM
                delete runningApps[title]; // Clean from memory
                updateTaskBadge();
                const appLayer = document.getElementById('app-layer');
                if (appLayer) {
                    appLayer.classList.remove('active');
                    appLayer.classList.remove('multitasking-active');
                }
                currentActiveApp = null;
            });
        } else {
            wrapper.remove();
            delete runningApps[title];
            updateTaskBadge();
        }
    }
}

// Terminate currently focused app
function killCurrentApp() {
    if (currentActiveApp) {
        killApp(currentActiveApp);
    } else {
        goHome();
    }
}

// Render app grid on main screen and initialize drag-and-drop
function renderApps(apps) {
    const grid = document.getElementById('app-grid');
    grid.innerHTML = '';

    apps.forEach((app, index) => {
        const appName = app.t || app.name || `App ${index}`;
        const appUrl = app.l || app.url || '#';
        const imageIcon = app.i || app.image || null;

        const appEl = document.createElement('div');
        appEl.className = 'app-icon flex flex-col items-center gap-1.5 cursor-pointer';
        
        let iconHTML = '';
        if (imageIcon === 'system:settings') {
            iconHTML = `<div class="w-14 h-14 bg-gray-300 rounded-2xl flex items-center justify-center shadow-md text-gray-800 border border-gray-100">
                            <i data-lucide="settings" class="w-7 h-7"></i>
                       </div>`;
        } else if (imageIcon === 'system:multitasking') {
            iconHTML = `<div class="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-md text-white border border-indigo-400">
                            <i data-lucide="layers" class="w-7 h-7"></i>
                       </div>`;
        } else if (imageIcon) {
            iconHTML = `<div class="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md shadow-md overflow-hidden flex items-center justify-center border border-white/20">
                            <img src="${imageIcon}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='https://via.placeholder.com/150/333333/FFFFFF?text=${appName.charAt(0)}';" draggable="false" />
                       </div>`;
        } else {
            iconHTML = `<div class="w-14 h-14 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-md text-white">
                            <i data-lucide="box" class="w-7 h-7"></i>
                       </div>`;
        }

        appEl.innerHTML = `
            ${iconHTML}
            <span class="app-label text-xs text-white text-center w-full truncate drop-shadow-md font-medium px-1">${appName}</span>
        `;

        // Click handler with native integration support
        if (appUrl === 'system:settings' || appName === 'Settings') {
            appEl.onclick = (e) => {
                if (typeof openSettings === 'function') openSettings(e);
            };
        } else if (appUrl === 'system:multitasking' || appName === 'Multitasking') {
            appEl.onclick = () => {
                if (typeof openTaskSwitcher === 'function') openTaskSwitcher();
            };
        } else {
            appEl.onclick = (e) => openApp(appName, appUrl, e);
        }
        
        grid.appendChild(appEl);
    });

    if (typeof refreshIcons === 'function') {
        refreshIcons();
    }

    // Initialize SortableJS for app reordering between main screen and dock
    new Sortable(grid, {
        group: 'shared-apps-group',
        animation: 150,
        delay: 150, // Responsive delay for mobile interaction
        delayOnTouchOnly: true,
        ghostClass: 'sortable-ghost',
        dragClass: 'sortable-drag'
    });

    const dockGrid = document.getElementById('dock-grid');
    if (dockGrid) {
        new Sortable(dockGrid, {
            group: 'shared-apps-group',
            animation: 150,
            delay: 150,
            delayOnTouchOnly: true,
            ghostClass: 'sortable-ghost',
            dragClass: 'sortable-drag'
        });
    }
}

