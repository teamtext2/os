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
            card.className = "shrink-0 w-3/4 max-w-[250px] h-[60vh] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden snap-center relative transition-transform duration-300 hover:scale-105 active:scale-95";
            
            card.innerHTML = `
                <div class="h-12 bg-white/10 flex items-center justify-between px-4 border-b border-white/10 text-white">
                    <span class="font-semibold text-white truncate">${appName}</span>
                    <button onclick="event.stopPropagation(); killAppFromTask('${appName}')" class="text-red-400 bg-red-500/10 hover:bg-red-500/20 rounded-full p-1.5 transition">
                        <i data-lucide="x" class="w-4 h-4"></i>
                    </button>
                </div>
                <div class="flex-1 bg-white/5 flex items-center justify-center p-4">
                    <i data-lucide="layout-template" class="w-16 h-16 text-white/30"></i>
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
