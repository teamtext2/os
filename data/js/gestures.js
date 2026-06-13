// --- ĐIỀU KHIỂN CỬ CHỈ GIAO DIỆN CHUẨN OS (TOUCH & DRAG GESTURES CONTROLLER) ---

document.addEventListener('DOMContentLoaded', () => {
    const homeIndicator = document.getElementById('home-indicator');
    const appLayer = document.getElementById('app-layer');
    if (!homeIndicator || !appLayer) return;

    // --- 1. CỬ CHỈ VUỐT THANH HOME (VUỐT THOÁT APP / MỞ ĐA NHIỆM) ---
    let startY = 0;
    let currentY = 0;
    let isDragging = false;
    let startTime = 0;
    let holdTimer = null;
    let hasTriggeredHold = false;
    
    const dragThreshold = 85; // Ngưỡng vuốt (pixel) nhạy và tự nhiên hơn
    const holdDuration = 260; // Thời gian giữ (ms) chuẩn OS để kích hoạt đa nhiệm

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

        // Nếu đang ở màn hình đa nhiệm mà vuốt thanh Home indicator, ta sẽ thoát đa nhiệm về Home
        if (isMultitasking) {
            isDragging = false;
            if (typeof closeTaskSwitcher === 'function') {
                closeTaskSwitcher(true); // Về thẳng Home screen
            }
            return;
        }

        if (isActive) {
            appLayer.classList.remove('gesture-transition');
            appLayer.style.transition = 'none';
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
                if (deltaY < -35) { // Đã vuốt lên một khoảng ngắn
                    hasTriggeredHold = true;
                    document.getElementById('os-container').classList.add('gesture-holding');
                    
                    if (isActive) {
                        appLayer.style.transform = `translateY(${deltaY}px) scale(0.82)`;
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
            const percent = Math.min(Math.abs(deltaY) / window.innerHeight, 1);

            if (isActive) {
                const scale = Math.max(1 - percent * 0.42, 0.78);
                const borderRadius = Math.min(Math.abs(deltaY) / 3.5, 28) + 'px';
                appLayer.style.transform = `translateY(${deltaY}px) scale(${scale})`;
                appLayer.style.borderRadius = borderRadius;
            } else {
                // Hiệu ứng co dãn màn hình chính
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
        const mainScreen = document.getElementById('main-screen');
        const dockGrid = document.getElementById('dock-grid');
        const deltaY = currentY - startY;

        if (isActive) {
            if (deltaY < -dragThreshold) {
                if (hasTriggeredHold) {
                    // 1. VUỐT LÊN VÀ GIỮ -> VÀO ĐA NHIỆM LIỀN MẠCH
                    appLayer.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), border-radius 0.4s ease';
                    appLayer.style.transform = '';
                    appLayer.style.borderRadius = '';
                    if (typeof openTaskSwitcher === 'function') {
                        openTaskSwitcher();
                    }
                } else {
                    // 2. VUỐT LÊN NHANH -> THOÁT APP MƯỢT MÀ KHÔNG BỊ GIẬT SNAP
                    appLayer.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease, border-radius 0.4s ease';
                    appLayer.style.transform = 'translateY(100%) scale(0.75)';
                    appLayer.style.borderRadius = '32px';
                    setTimeout(() => {
                        appLayer.style.transform = '';
                        appLayer.style.transition = '';
                        appLayer.style.borderRadius = '';
                        if (typeof goHome === 'function') goHome();
                    }, 400);
                }
            } else {
                // 3. VUỐT KHÔNG ĐỦ XA -> TRẢ VỀ TOÀN MÀN HÌNH MƯỢT MÀ
                appLayer.style.transition = 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), border-radius 0.3s ease';
                appLayer.style.transform = '';
                appLayer.style.borderRadius = '';
                setTimeout(() => {
                    appLayer.style.transition = '';
                }, 300);
            }
        } else {
            // Cử chỉ ở màn hình chính
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

    // Sự kiện thanh indicator
    homeIndicator.addEventListener('touchstart', (e) => { onStart(e.touches[0].clientY); }, { passive: true });
    window.addEventListener('touchmove', (e) => { if (isDragging) onMove(e.touches[0].clientY); }, { passive: false });
    window.addEventListener('touchend', onEnd);

    homeIndicator.addEventListener('mousedown', (e) => { onStart(e.clientY); });
    window.addEventListener('mousemove', (e) => { if (isDragging) onMove(e.clientY); });
    window.addEventListener('mouseup', onEnd);


    // --- 2. GESTURE VUỐT THẺ ĐỂ ĐÓNG APP TRONG ĐA NHIỆM (SWIPE UP TO CLOSE IN MULTITASKING) ---
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

        // Chỉ cho phép kéo lên (deltaY < 0)
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
            // Vuốt lên đủ xa -> Đóng ứng dụng hoàn toàn
            dragCard.style.transform = 'translateY(-100vh)';
            dragCard.style.opacity = '0';
            
            const appName = dragCard.getAttribute('data-app-name');
            setTimeout(() => {
                if (typeof killApp === 'function') {
                    killApp(appName);
                }
                // Nếu không còn app nào chạy sau khi tắt, tắt giao diện đa nhiệm
                if (Object.keys(runningApps).length === 0) {
                    if (typeof closeTaskSwitcher === 'function') closeTaskSwitcher(true);
                } else {
                    // Cập nhật lại giao diện đa nhiệm
                    if (typeof openTaskSwitcher === 'function') openTaskSwitcher();
                }
            }, 300);
        } else {
            // Kéo chưa đủ -> Đàn hồi về vị trí ban đầu trong hàng đa nhiệm
            dragCard.style.transform = '';
            dragCard.style.opacity = '';
        }

        dragCard = null;
    }

    // Touch events cho card
    container.addEventListener('touchstart', (e) => {
        onCardStart(e.touches[0].clientY, e.target);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
        if (isDraggingCard) {
            onCardMove(e.touches[0].clientY);
            e.preventDefault(); // chặn cuộn trang khi kéo card
        }
    }, { passive: false });

    window.addEventListener('touchend', onCardEnd);

    // Mouse events cho card
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
