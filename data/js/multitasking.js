// --- QUẢN LÝ ĐA NHIỆM (MULTITASKING & TASK SWITCHER) ---

// Mở giao diện đa nhiệm
function openTaskSwitcher() {
    if (typeof goHome === 'function') {
        goHome(); // Đảm bảo app hiện tại thu nhỏ xuống
    }
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    const apps = Object.keys(runningApps);
    if (apps.length === 0) {
        taskList.innerHTML = '<p class="text-gray-400 w-full text-center">Không có ứng dụng nào đang chạy</p>';
    } else {
        apps.forEach(appName => {
            const card = document.createElement('div');
            card.className = "shrink-0 w-3/4 max-w-[250px] h-[60vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden snap-center relative";
            
            card.innerHTML = `
                <div class="h-12 bg-gray-100 flex items-center justify-between px-4">
                    <span class="font-bold text-black truncate">${appName}</span>
                    <button onclick="event.stopPropagation(); killAppFromTask('${appName}')" class="text-red-500 bg-red-100 rounded-full p-1"><i data-lucide="x" class="w-4 h-4"></i></button>
                </div>
                <div class="flex-1 bg-gray-50 flex items-center justify-center p-4">
                    <i data-lucide="layout-template" class="w-16 h-16 text-gray-300"></i>
                    <div class="absolute inset-0 bg-transparent"></div> <!-- Khối bắt sự kiện click -->
                </div>
            `;
            // Bấm vào card để mở lại app
            card.onclick = () => {
                if (typeof openApp === 'function') {
                    openApp(appName, null); // url null vì iframe đã tồn tại
                }
            };
            taskList.appendChild(card);
        });
        
        if (typeof refreshIcons === 'function') {
            refreshIcons();
        }
    }

    document.getElementById('task-switcher-layer').classList.add('active');
}

// Đóng giao diện đa nhiệm
function closeTaskSwitcher() {
    document.getElementById('task-switcher-layer').classList.remove('active');
}

// Tắt ứng dụng từ giao diện đa nhiệm
function killAppFromTask(appName) {
    if (runningApps[appName]) {
        runningApps[appName].remove();
        delete runningApps[appName];
        if (typeof updateTaskBadge === 'function') {
            updateTaskBadge();
        }
        openTaskSwitcher(); // Làm mới danh sách hiển thị
    }
}
