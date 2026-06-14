// --- LIVE WINDOW MULTITASKING MANAGER ---

// Open multitasking switcher
function openTaskSwitcher() {
    const appLayer = document.getElementById('app-layer');
    const taskSwitcher = document.getElementById('task-switcher-layer');
    if (!appLayer || !taskSwitcher) return;

    // Display background backdrop blur
    taskSwitcher.classList.add('active');
    
    // Enable visual card switcher mode
    appLayer.classList.add('active');
    appLayer.classList.add('multitasking-active');

    // Show running applications as cards
    const wrappers = document.querySelectorAll('#iframes-container .app-wrapper');
    wrappers.forEach(wrapper => {
        wrapper.style.display = 'flex';
        if (typeof clearWrapperInlineStyles === 'function') {
            clearWrapperInlineStyles(wrapper);
        }
        
        // Click app card to restore and expand
        wrapper.onclick = (e) => {
            if (appLayer.classList.contains('multitasking-active')) {
                const appName = wrapper.getAttribute('data-app-name');
                if (typeof openApp === 'function') {
                    openApp(appName, null, e);
                }
            }
        };
    });

    // Click empty area to exit multitasking
    const container = document.getElementById('iframes-container');
    if (container) {
        container.onclick = (e) => {
            if (e.target === container && appLayer.classList.contains('multitasking-active')) {
                closeTaskSwitcher();
            }
        };
    }

    // Display message if no apps are running
    const count = Object.keys(runningApps).length;
    let emptyMsg = document.getElementById('task-empty-msg');
    if (count === 0) {
        if (!emptyMsg) {
            emptyMsg = document.createElement('div');
            emptyMsg.id = 'task-empty-msg';
            emptyMsg.className = 'absolute inset-0 flex items-center justify-center text-gray-400 text-sm pointer-events-none z-10';
            emptyMsg.textContent = 'No applications running';
            taskSwitcher.appendChild(emptyMsg);
        }
    } else {
        if (emptyMsg) emptyMsg.remove();
    }
}

// Close multitasking switcher (defaults to Home screen)
function closeTaskSwitcher(goToHome = true) {
    const appLayer = document.getElementById('app-layer');
    const taskSwitcher = document.getElementById('task-switcher-layer');
    if (appLayer) appLayer.classList.remove('multitasking-active');
    if (taskSwitcher) taskSwitcher.classList.remove('active');

    // Clear inline styles to prevent layout conflicts
    const wrappers = document.querySelectorAll('#iframes-container .app-wrapper');
    wrappers.forEach(w => {
        if (typeof clearWrapperInlineStyles === 'function') {
            clearWrapperInlineStyles(w);
        }
    });

    if (goToHome) {
        if (typeof goHome === 'function') goHome();
    } else {
        // Restore currently active application
        if (currentActiveApp && runningApps[currentActiveApp]) {
            Object.keys(runningApps).forEach(name => {
                runningApps[name].style.display = (name === currentActiveApp) ? 'flex' : 'none';
            });
            const activeW = runningApps[currentActiveApp];
            if (typeof clearWrapperInlineStyles === 'function') {
                clearWrapperInlineStyles(activeW);
            }
            activeW.style.display = 'flex';
        } else {
            if (appLayer) appLayer.classList.remove('active');
        }
    }
}

// Terminate application from multitasking switcher
function killAppFromTask(appName) {
    if (typeof killApp === 'function') {
        killApp(appName);
    }
}


