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

// Mở một ứng dụng (nạp vào iframe hoặc phục hồi từ nền)
function openApp(title, url) {
    if (typeof closeTaskSwitcher === 'function') {
        closeTaskSwitcher(); // Ẩn switcher nếu đang mở
    }

    const container = document.getElementById('iframes-container');
    const loader = document.getElementById('app-loading');
    
    // Ẩn tất cả iframe đang chạy
    Object.values(runningApps).forEach(ifr => ifr.style.display = 'none');

    if (runningApps[title]) {
        // App đã mở -> Lấy lại ra hiển thị
        runningApps[title].style.display = 'block';
    } else {
        // Mở App mới
        loader.style.display = 'flex';
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.className = "w-full h-full border-none absolute inset-0 bg-white";
        iframe.sandbox = "allow-scripts allow-same-origin allow-forms";
        iframe.onload = () => { loader.style.display = 'none'; };
        
        container.appendChild(iframe);
        runningApps[title] = iframe;
        updateTaskBadge();
    }

    document.getElementById('app-layer-title').textContent = title;
    document.getElementById('app-layer').classList.add('active');
    currentActiveApp = title;
}

// Quay lại màn hình chính
function goHome() {
    document.getElementById('app-layer').classList.remove('active');
    currentActiveApp = null;
}

// Tắt hẳn ứng dụng hiện tại đang mở
function killCurrentApp() {
    if (currentActiveApp && runningApps[currentActiveApp]) {
        runningApps[currentActiveApp].remove(); // Xóa khỏi DOM
        delete runningApps[currentActiveApp]; // Xóa khỏi bộ nhớ
        updateTaskBadge();
    }
    goHome();
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
