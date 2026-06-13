// --- QUẢN LÝ ĐA NHIỆM TRỰC TIẾP (LIVE WINDOW MULTITASKING MANAGER) ---

// Mở giao diện đa nhiệm
function openTaskSwitcher() {
    const appLayer = document.getElementById('app-layer');
    const taskSwitcher = document.getElementById('task-switcher-layer');
    if (!appLayer || !taskSwitcher) return;

    // Hiển thị nền mờ trong suốt phía sau
    taskSwitcher.classList.add('active');
    
    // Kích hoạt chế độ hiển thị thẻ (Card) trực quan
    appLayer.classList.add('active');
    appLayer.classList.add('multitasking-active');

    // Hiển thị tất cả các app đang chạy dưới dạng thẻ preview
    const wrappers = document.querySelectorAll('#iframes-container .app-wrapper');
    wrappers.forEach(wrapper => {
        wrapper.style.display = 'flex';
        
        // Nhấp vào thẻ app để mở rộng và dùng tiếp
        wrapper.onclick = () => {
            if (appLayer.classList.contains('multitasking-active')) {
                const appName = wrapper.getAttribute('data-app-name');
                if (typeof openApp === 'function') {
                    openApp(appName, null);
                }
            }
        };
    });

    // Nhấp vào khoảng trống ngoài các card để quay lại màn hình chính
    const container = document.getElementById('iframes-container');
    if (container) {
        container.onclick = (e) => {
            if (e.target === container && appLayer.classList.contains('multitasking-active')) {
                closeTaskSwitcher();
            }
        };
    }

    // Cập nhật thông báo nếu không có ứng dụng nào chạy
    const count = Object.keys(runningApps).length;
    let emptyMsg = document.getElementById('task-empty-msg');
    if (count === 0) {
        if (!emptyMsg) {
            emptyMsg = document.createElement('div');
            emptyMsg.id = 'task-empty-msg';
            emptyMsg.className = 'absolute inset-0 flex items-center justify-center text-gray-400 text-sm pointer-events-none z-10';
            emptyMsg.textContent = 'Không có ứng dụng nào đang chạy';
            taskSwitcher.appendChild(emptyMsg);
        }
    } else {
        if (emptyMsg) emptyMsg.remove();
    }
}

// Đóng giao diện đa nhiệm và quay về màn hình tương ứng (Mặc định về Home screen)
function closeTaskSwitcher(goToHome = true) {
    const appLayer = document.getElementById('app-layer');
    const taskSwitcher = document.getElementById('task-switcher-layer');
    if (appLayer) appLayer.classList.remove('multitasking-active');
    if (taskSwitcher) taskSwitcher.classList.remove('active');

    if (goToHome) {
        if (typeof goHome === 'function') goHome();
    } else {
        // Phục hồi hiển thị app active hiện tại
        if (currentActiveApp && runningApps[currentActiveApp]) {
            Object.keys(runningApps).forEach(name => {
                runningApps[name].style.display = (name === currentActiveApp) ? 'flex' : 'none';
            });
        } else {
            if (appLayer) appLayer.classList.remove('active');
        }
    }
}

// Tắt ứng dụng từ giao diện đa nhiệm
function killAppFromTask(appName) {
    if (typeof killApp === 'function') {
        killApp(appName);
    }
}
