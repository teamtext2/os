// --- QUẢN LÝ ỨNG DỤNG (APPS MANAGEMENT) ---

// Cập nhật số lượng app đang chạy trên biểu tượng đa nhiệm
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

// Mở một ứng dụng (nạp vào wrapper chứa header riêng và iframe hoặc phục hồi từ nền)
function openApp(title, url) {
    if (typeof closeTaskSwitcher === 'function') {
        closeTaskSwitcher(false); // Ẩn switcher nhưng không quay lại Home screen
    }

    const container = document.getElementById('iframes-container');
    const loader = document.getElementById('app-loading');
    
    // Ẩn tất cả wrapper đang chạy
    const wrappers = container.querySelectorAll('.app-wrapper');
    wrappers.forEach(w => w.style.display = 'none');

    // Tắt chế độ đa nhiệm trên app-layer
    document.getElementById('app-layer').classList.remove('multitasking-active');

    if (runningApps[title]) {
        // App đã mở -> Lấy lại ra hiển thị
        runningApps[title].style.display = 'flex';
    } else {
        // Mở App mới
        loader.style.display = 'flex';

        const wrapper = document.createElement('div');
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
    currentActiveApp = title;
}

// Quay lại màn hình chính
function goHome() {
    const appLayer = document.getElementById('app-layer');
    if (appLayer) {
        appLayer.classList.remove('active');
        appLayer.classList.remove('multitasking-active');
    }
    currentActiveApp = null;
}

// Tắt một ứng dụng cụ thể
function killApp(title) {
    if (runningApps[title]) {
        runningApps[title].remove(); // Xóa khỏi DOM
        delete runningApps[title]; // Xóa khỏi bộ nhớ
        updateTaskBadge();
    }
    if (currentActiveApp === title) {
        goHome();
    }
}

// Tắt hẳn ứng dụng hiện tại đang mở
function killCurrentApp() {
    if (currentActiveApp) {
        killApp(currentActiveApp);
    } else {
        goHome();
    }
}

// Render lưới ứng dụng lên màn hình chính và thiết lập kéo thả
function renderApps(apps) {
    const grid = document.getElementById('app-grid');
    grid.innerHTML = '';

    apps.forEach((app, index) => {
        const appName = app.t || app.name || `App ${index}`;
        const appUrl = app.l || app.url || '#';
        const imageIcon = app.i || app.image || null;

        const appEl = document.createElement('div');
        appEl.className = 'app-icon flex flex-col items-center gap-1.5 cursor-pointer';
        
        let iconHTML = imageIcon 
            ? `<div class="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md shadow-md overflow-hidden flex items-center justify-center border border-white/20">
                    <img src="${imageIcon}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='https://via.placeholder.com/150/333333/FFFFFF?text=${appName.charAt(0)}';" draggable="false" />
               </div>`
            : `<div class="w-14 h-14 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-md text-white">
                    <i data-lucide="box" class="w-7 h-7"></i>
               </div>`;

        appEl.innerHTML = `
            ${iconHTML}
            <span class="app-label text-xs text-white text-center w-full truncate drop-shadow-md font-medium px-1">${appName}</span>
        `;

        // Bấm để mở app
        appEl.onclick = () => openApp(appName, appUrl);
        grid.appendChild(appEl);
    });

    if (typeof refreshIcons === 'function') {
        refreshIcons();
    }

    // Kích hoạt tính năng kéo thả SortableJS (kết nối lưới ứng dụng và dock)
    new Sortable(grid, {
        group: 'shared-apps-group',
        animation: 150,
        delay: 150, // Nhạy hơn cho trải nghiệm mượt mà
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
