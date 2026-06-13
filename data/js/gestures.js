// --- ĐIỀU KHIỂN CỬ CHỈ GIAO DIỆN (TOUCH & DRAG GESTURES CONTROLLER) ---

document.addEventListener('DOMContentLoaded', () => {
    const homeIndicator = document.getElementById('home-indicator');
    const appLayer = document.getElementById('app-layer');
    if (!homeIndicator || !appLayer) return;

    let startY = 0;
    let currentY = 0;
    let isDragging = false;
    let startTime = 0;
    let holdTimer = null;
    let hasTriggeredHold = false;
    
    // Ngưỡng kéo lên (pixel) để bắt đầu tính năng thoát app/đa nhiệm
    const dragThreshold = 100; 
    // Thời gian giữ (ms) để kích hoạt đa nhiệm
    const holdDuration = 280; 

    // Phần tử phủ chặn tương tác của iframe khi kéo
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

        if (isActive) {
            // Tắt transition để di chuyển tức thời theo tay
            appLayer.classList.remove('gesture-transition');
            appLayer.style.transition = 'none';
            createBlocker();
        } else {
            const mainScreen = document.getElementById('main-screen');
            const dockGrid = document.getElementById('dock-grid');
            if (mainScreen) { mainScreen.style.transition = 'none'; mainScreen.style.transformOrigin = 'center bottom'; }
            if (dockGrid) { dockGrid.style.transition = 'none'; dockGrid.style.transformOrigin = 'center bottom'; }
        }

        // Đếm ngược phát hiện nhấn giữ
        holdTimer = setTimeout(() => {
            if (isDragging) {
                const deltaY = currentY - startY;
                if (deltaY < -40) { // Đã kéo lên tối thiểu 40px
                    hasTriggeredHold = true;
                    document.getElementById('os-container').classList.add('gesture-holding');
                    
                    if (isActive) {
                        appLayer.style.transform = `translateY(${deltaY}px) scale(0.82)`;
                    } else {
                        const mainScreen = document.getElementById('main-screen');
                        const dockGrid = document.getElementById('dock-grid');
                        if (mainScreen) mainScreen.style.transform = `translateY(${deltaY * 0.3}px) scale(0.92)`;
                        if (dockGrid) dockGrid.style.transform = `translateY(${deltaY * 0.3}px) scale(0.92)`;
                    }
                }
            }
        }, holdDuration);
    }

    function onMove(clientY) {
        if (!isDragging) return;
        currentY = clientY;
        
        const deltaY = currentY - startY;
        
        // Chỉ xử lý khi kéo lên (deltaY < 0)
        if (deltaY < 0) {
            const isActive = appLayer.classList.contains('active');
            const percent = Math.min(Math.abs(deltaY) / window.innerHeight, 1);

            if (isActive) {
                const scale = Math.max(1 - percent * 0.45, 0.75);
                const borderRadius = Math.min(Math.abs(deltaY) / 4, 28) + 'px';
                appLayer.style.transform = `translateY(${deltaY}px) scale(${scale})`;
                appLayer.style.borderRadius = borderRadius;
            } else {
                // Hiệu ứng kéo nhẹ màn hình chính
                const scale = Math.max(1 - percent * 0.25, 0.92);
                const translateY = deltaY * 0.35; // hiệu ứng dây thun (rubber band)
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
        const mainScreen = document.getElementById('main-screen');
        const dockGrid = document.getElementById('dock-grid');

        if (isActive) {
            appLayer.classList.add('gesture-transition');
            appLayer.style.transition = '';
            appLayer.style.borderRadius = '';
        } else {
            const springTransition = 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)';
            if (mainScreen) { mainScreen.style.transition = springTransition; mainScreen.style.transform = ''; }
            if (dockGrid) { dockGrid.style.transition = springTransition; dockGrid.style.transform = ''; }
        }

        const deltaY = currentY - startY;

        // Phân tích hành động dựa trên khoảng cách kéo và giữ
        if (deltaY < -dragThreshold) {
            if (isActive) {
                // Đang trong App
                appLayer.style.transform = '';
                if (hasTriggeredHold) {
                    if (typeof openTaskSwitcher === 'function') openTaskSwitcher();
                    else if (typeof goHome === 'function') goHome();
                } else {
                    if (typeof goHome === 'function') goHome();
                }
            } else {
                // Đang ở Home Screen
                if (hasTriggeredHold) {
                    if (typeof openTaskSwitcher === 'function') openTaskSwitcher();
                }
            }
        } else {
            // Kéo chưa đủ -> Trả về ban đầu
            if (isActive) {
                appLayer.style.transform = '';
            }
        }
        
        hasTriggeredHold = false;
    }

    // Sự kiện Touch (Mobile)
    homeIndicator.addEventListener('touchstart', (e) => {
        onStart(e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
        if (isDragging) {
            onMove(e.touches[0].clientY);
        }
    }, { passive: false });

    window.addEventListener('touchend', () => {
        onEnd();
    });

    // Sự kiện Mouse (Desktop Testing)
    homeIndicator.addEventListener('mousedown', (e) => {
        onStart(e.clientY);
    });

    window.addEventListener('mousemove', (e) => {
        if (isDragging) {
            onMove(e.clientY);
        }
    });

    window.addEventListener('mouseup', () => {
        onEnd();
    });
});
