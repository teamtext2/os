// --- TOUCH & DRAG GESTURES CONTROLLER ---

document.addEventListener('DOMContentLoaded', () => {
    const homeIndicator = document.getElementById('home-indicator');
    const appLayer = document.getElementById('app-layer');
    if (!homeIndicator || !appLayer) return;

    // --- 1. HOME INDICATOR SWIPE GESTURES (SWIPE TO CLOSE / SWIPE AND HOLD TO MULTITASK) ---
    let startY = 0;
    let currentY = 0;
    let isDragging = false;
    let startTime = 0;
    let holdTimer = null;
    let hasTriggeredHold = false;
    
    const dragThreshold = 85; // Drag threshold in pixels for natural feedback
    const holdDuration = 260; // OS standard hold duration (ms) to trigger multitasking

    let blocker = null;

    function createBlocker() {
        if (!blocker) {
            blocker = document.createElement('div');
            blocker.className = 'gesture-blocker';
            appLayer.appendChild(blocker);
        }
    }

    function removeBlocker() {
        if (blocker) {
            blocker.remove();
            blocker = null;
        }
    }

    function onStart(clientY) {
        isDragging = true;
        startY = clientY;
        currentY = clientY;
        startTime = Date.now();
        hasTriggeredHold = false;

        const isActive = appLayer.classList.contains('active');
        const isMultitasking = appLayer.classList.contains('multitasking-active');
        const activeWrapper = (typeof currentActiveApp !== 'undefined' && currentActiveApp) ? runningApps[currentActiveApp] : null;

        // If in multitasking mode and swiping the home indicator, exit multitasking back to home screen
        if (isMultitasking) {
            isDragging = false;
            if (typeof closeTaskSwitcher === 'function') {
                closeTaskSwitcher(true); // Return directly to Home screen
            }
            return;
        }

        if (isActive && activeWrapper) {
            activeWrapper.style.transition = 'none';
            createBlocker();
        } else {
            const mainScreen = document.getElementById('main-screen');
            const dockGrid = document.getElementById('dock-grid');
            if (mainScreen) { mainScreen.style.transition = 'none'; mainScreen.style.transformOrigin = 'center bottom'; }
            if (dockGrid) { dockGrid.style.transition = 'none'; dockGrid.style.transformOrigin = 'center bottom'; }
        }

        holdTimer = setTimeout(() => {
            if (isDragging) {
                const deltaY = currentY - startY;
                if (deltaY < -35) { // Swiped up a short distance
                    hasTriggeredHold = true;
                    document.getElementById('os-container').classList.add('gesture-holding');
                    
                    if (isActive && activeWrapper) {
                        activeWrapper.style.transform = `translate3d(0, ${deltaY}px, 0) scale3d(0.82, 0.82, 1)`;
                    } else {
                        const mainScreen = document.getElementById('main-screen');
                        const dockGrid = document.getElementById('dock-grid');
                        if (mainScreen) mainScreen.style.transform = `translateY(${deltaY * 0.3}px) scale(0.93)`;
                        if (dockGrid) dockGrid.style.transform = `translateY(${deltaY * 0.3}px) scale(0.93)`;
                    }
                }
            }
        }, holdDuration);
    }

    function onMove(clientY) {
        if (!isDragging) return;
        currentY = clientY;
        
        const deltaY = currentY - startY;
        
        if (deltaY < 0) {
            const isActive = appLayer.classList.contains('active');
            const activeWrapper = (typeof currentActiveApp !== 'undefined' && currentActiveApp) ? runningApps[currentActiveApp] : null;
            const percent = Math.min(Math.abs(deltaY) / window.innerHeight, 1);

            if (isActive && activeWrapper) {
                const scale = Math.max(1 - percent * 0.42, 0.78);
                const borderRadius = Math.min(Math.abs(deltaY) / 3.5, 28) + 'px';
                activeWrapper.style.transform = `translate3d(0, ${deltaY}px, 0) scale3d(${scale}, ${scale}, 1)`;
                activeWrapper.style.borderRadius = borderRadius;
            } else {
                // Home screen stretching effect
                const scale = Math.max(1 - percent * 0.22, 0.93);
                const translateY = deltaY * 0.32;
                const mainScreen = document.getElementById('main-screen');
                const dockGrid = document.getElementById('dock-grid');
                if (mainScreen) mainScreen.style.transform = `translateY(${translateY}px) scale(${scale})`;
                if (dockGrid) dockGrid.style.transform = `translateY(${translateY}px) scale(${scale})`;
            }
        }
    }

    function onEnd() {
        if (!isDragging) return;
        isDragging = false;
        clearTimeout(holdTimer);
        removeBlocker();
        document.getElementById('os-container').classList.remove('gesture-holding');

        const isActive = appLayer.classList.contains('active');
        const activeWrapper = (typeof currentActiveApp !== 'undefined' && currentActiveApp) ? runningApps[currentActiveApp] : null;
        const mainScreen = document.getElementById('main-screen');
        const dockGrid = document.getElementById('dock-grid');
        const deltaY = currentY - startY;

        if (isActive && activeWrapper) {
            if (deltaY < -dragThreshold) {
                if (hasTriggeredHold) {
                    // 1. SWIPE UP AND HOLD -> ENTER MULTITASKING SWITCHER
                    activeWrapper.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), border-radius 0.4s ease';
                    if (typeof clearWrapperInlineStyles === 'function') {
                        clearWrapperInlineStyles(activeWrapper);
                    } else {
                        activeWrapper.style.transform = '';
                        activeWrapper.style.borderRadius = '';
                    }
                    if (typeof openTaskSwitcher === 'function') {
                        openTaskSwitcher();
                    }
                } else {
                    // 2. SWIPE UP QUICKLY -> CLOSE APP SMOOTHLY TO ICON BOUNDS
                    if (typeof animateZoomClose === 'function') {
                        animateZoomClose(activeWrapper, () => {
                            appLayer.classList.remove('active');
                            appLayer.classList.remove('multitasking-active');
                            currentActiveApp = null;
                        });
                    } else {
                        activeWrapper.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease, border-radius 0.4s ease';
                        activeWrapper.style.transform = 'translateY(100%) scale(0.75)';
                        activeWrapper.style.borderRadius = '32px';
                        setTimeout(() => {
                            activeWrapper.style.transform = '';
                            activeWrapper.style.transition = '';
                            activeWrapper.style.borderRadius = '';
                            if (typeof goHome === 'function') goHome();
                        }, 400);
                    }
                }
            } else {
                // 3. SWIPE INSUFFICIENT DISTANCE -> SNAP BACK TO FULLSCREEN
                activeWrapper.style.transition = 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), border-radius 0.3s ease';
                activeWrapper.style.transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1)';
                activeWrapper.style.borderRadius = '24px';
                setTimeout(() => {
                    activeWrapper.style.transition = '';
                }, 300);
            }
        } else {
            // Home screen gestures
            const springTransition = 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)';
            if (mainScreen) { mainScreen.style.transition = springTransition; mainScreen.style.transform = ''; }
            if (dockGrid) { dockGrid.style.transition = springTransition; dockGrid.style.transform = ''; }
            
            setTimeout(() => {
                if (mainScreen) mainScreen.style.transition = '';
                if (dockGrid) dockGrid.style.transition = '';
            }, 350);

            if (deltaY < -dragThreshold && hasTriggeredHold) {
                if (typeof openTaskSwitcher === 'function') {
                    openTaskSwitcher();
                }
            }
        }
        
        hasTriggeredHold = false;
    }

    // Indicator events
    homeIndicator.addEventListener('touchstart', (e) => { onStart(e.touches[0].clientY); }, { passive: true });
    window.addEventListener('touchmove', (e) => { if (isDragging) onMove(e.touches[0].clientY); }, { passive: false });
    window.addEventListener('touchend', onEnd);

    homeIndicator.addEventListener('mousedown', (e) => { onStart(e.clientY); });
    window.addEventListener('mousemove', (e) => { if (isDragging) onMove(e.clientY); });
    window.addEventListener('mouseup', onEnd);


    // --- 2. SWIPE UP TO TERMINATE CARD IN MULTITASKING ---
    const container = document.getElementById('iframes-container');
    if (!container) return;

    let dragCard = null;
    let cardStartY = 0;
    let cardCurrentY = 0;
    let isDraggingCard = false;

    function onCardStart(clientY, target) {
        if (!appLayer.classList.contains('multitasking-active')) return;
        const wrapper = target.closest('.app-wrapper');
        if (!wrapper) return;

        dragCard = wrapper;
        isDraggingCard = true;
        cardStartY = clientY;
        cardCurrentY = clientY;
        
        dragCard.style.transition = 'none';
    }

    function onCardMove(clientY) {
        if (!isDraggingCard || !dragCard) return;
        cardCurrentY = clientY;
        const deltaY = cardCurrentY - cardStartY;

        // Allow swipe up dragging only (deltaY < 0)
        if (deltaY < 0) {
            dragCard.style.transform = `translateY(${deltaY}px)`;
            dragCard.style.opacity = Math.max(1 - Math.abs(deltaY) / 280, 0);
        }
    }

    function onCardEnd() {
        if (!isDraggingCard || !dragCard) return;
        isDraggingCard = false;
        
        const deltaY = cardCurrentY - cardStartY;
        dragCard.style.transition = 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease';

        if (deltaY < -120) {
            // Swiped far enough -> terminate app
            dragCard.style.transform = 'translateY(-100vh)';
            dragCard.style.opacity = '0';
            
            const appName = dragCard.getAttribute('data-app-name');
            setTimeout(() => {
                if (typeof killApp === 'function') {
                    killApp(appName);
                }
                // If no more apps are running, automatically exit multitasking
                if (Object.keys(runningApps).length === 0) {
                    if (typeof closeTaskSwitcher === 'function') closeTaskSwitcher(true);
                } else {
                    // Update multitasking UI
                    if (typeof openTaskSwitcher === 'function') openTaskSwitcher();
                }
            }, 300);
        } else {
            // Insufficient pull -> snap card back to grid position
            dragCard.style.transform = '';
            dragCard.style.opacity = '';
        }

        dragCard = null;
    }

    // Touch events for card
    container.addEventListener('touchstart', (e) => {
        onCardStart(e.touches[0].clientY, e.target);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
        if (isDraggingCard) {
            onCardMove(e.touches[0].clientY);
            e.preventDefault(); // prevent default scrolling during drag
        }
    }, { passive: false });

    window.addEventListener('touchend', onCardEnd);

    // Mouse events for card
    container.addEventListener('mousedown', (e) => {
        onCardStart(e.clientY, e.target);
    });

    window.addEventListener('mousemove', (e) => {
        if (isDraggingCard) {
            onCardMove(e.clientY);
        }
    });

    window.addEventListener('mouseup', onCardEnd);
});

