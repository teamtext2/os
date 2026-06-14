// --- QUẢN LÝ ỨNG DỤNG (APPS MANAGEMENT) ---

// --- ANIMATION ZOOM HỖ TRỢ GIAO DIỆN CAO CẤP ---
function animateZoomOpen(element, iconEl) {
    if (!element) return;

    let rect = null;
    // Tìm thẻ icon thực tế có chứa ảnh hoặc biểu tượng để đo kích thước chuẩn nhất
    if (iconEl) {
        const targetIcon = iconEl.closest('.app-icon');
        if (targetIcon) {
            const visualIcon = targetIcon.querySelector('div');
            if (visualIcon) rect = visualIcon.getBoundingClientRect();
        }
        if (!rect) rect = iconEl.getBoundingClientRect();
    }

    if (!rect) {
        // Fallback ra giữa màn hình
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

    // Lưu tọa độ vào dataset để hồi phục khi đóng
    element.dataset.iconLeft = iconLeft;
    element.dataset.iconTop = iconTop;
    element.dataset.iconWidth = iconWidth;
    element.dataset.iconHeight = iconHeight;

    // Bắt đầu tại vị trí icon
    element.style.display = 'flex';
    element.style.transformOrigin = 'top left';
    element.style.transform = `translate3d(${iconLeft}px, ${iconTop}px, 0) scale3d(${scaleX}, ${scaleY}, 1)`;
    element.style.borderRadius = '24px';
    element.style.opacity = '0';

    // Buộc trình duyệt vẽ lại (reflow) trước khi chạy animation
    element.offsetHeight;

    // Phóng to toàn màn hình với hiệu ứng spring-back (đàn hồi nhẹ) cực mượt
    element.style.transition = 'transform 0.48s cubic-bezier(0.34, 1.42, 0.64, 1), opacity 0.35s ease, border-radius 0.48s ease';
    element.style.transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1)';
    element.style.borderRadius = '24px'; // Bo góc màn hình hiện đại giống flagship phone
    element.style.opacity = '1';

    // Thu nhỏ và làm mờ nhẹ hình nền màn hình chính
    const osContainer = document.getElementById('os-container');
    if (osContainer) {
        osContainer.classList.add('app-active');
    }

    // Kích hoạt hiệu ứng WebGL gợn nước lan truyền từ tâm icon
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

    // Thu nhỏ mượt mà về lại icon
    element.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.35s ease, border-radius 0.4s ease';
    element.style.transform = `translate3d(${iconLeft}px, ${iconTop}px, 0) scale3d(${scaleX}, ${scaleY}, 1)`;
    element.style.borderRadius = '24px';
    element.style.opacity = '0';

    // Trả lại hình nền màn hình chính như cũ
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
    // Timeout an toàn
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
function openApp(title, url, event) {
    if (typeof closeTaskSwitcher === 'function') {
        closeTaskSwitcher(false); // Ẩn switcher nhưng không quay lại Home screen
    }

    const container = document.getElementById('iframes-container');
    const loader = document.getElementById('app-loading');
    
    // Tắt chế độ đa nhiệm trên app-layer
    document.getElementById('app-layer').classList.remove('multitasking-active');

    // Tìm icon của app trong giao diện để xác định vị trí zoom
    let iconEl = null;
    if (event) {
        iconEl = event.currentTarget || event.target;
    } else {
        // Tìm thủ công trong lưới ứng dụng hoặc dock
        const icons = document.querySelectorAll('.app-icon');
        for (let icon of icons) {
            const label = icon.querySelector('.app-label');
            if (label && label.textContent.trim().toLowerCase() === title.trim().toLowerCase()) {
                iconEl = icon;
                break;
            }
        }
    }

    // Ẩn tất cả wrapper đang chạy khác TRỪ app sắp mở
    const wrappers = container.querySelectorAll('.app-wrapper');
    wrappers.forEach(w => {
        if (w.getAttribute('data-app-name') !== title) {
            w.style.display = 'none';
        }
    });

    let wrapper = runningApps[title];
    if (wrapper) {
        // App đã mở -> Lấy lại ra hiển thị
        wrapper.style.display = 'flex';
    } else {
        // Mở App mới
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

// Quay lại màn hình chính
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

// Tắt một ứng dụng cụ thể
function killApp(title) {
    if (runningApps[title]) {
        const wrapper = runningApps[title];
        if (currentActiveApp === title) {
            animateZoomClose(wrapper, () => {
                wrapper.remove(); // Xóa khỏi DOM
                delete runningApps[title]; // Xóa khỏi bộ nhớ
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

        // Bấm để mở app (truyền cả click event để lấy tọa độ)
        appEl.onclick = (e) => openApp(appName, appUrl, e);
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
