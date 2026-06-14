// --- CÀI ĐẶT & THAY ĐỔI HÌNH NỀN (SETTINGS & WALLPAPER) ---

// Mở giao diện Cài đặt
function openSettings(event) {
    const layer = document.getElementById('settings-layer');
    if (!layer) return;

    // Tìm icon Settings vừa click để xác định vị trí zoom
    let iconEl = null;
    if (event) {
        iconEl = event.currentTarget || event.target;
    } else {
        iconEl = document.querySelector('.app-icon[onclick*="openSettings"]');
    }

    layer.classList.add('active');
    if (typeof animateZoomOpen === 'function') {
        animateZoomOpen(layer, iconEl);
    }
}

// Đóng giao diện Cài đặt
function closeSettings() {
    const layer = document.getElementById('settings-layer');
    if (!layer) return;

    if (typeof animateZoomClose === 'function') {
        animateZoomClose(layer, () => {
            layer.classList.remove('active');
        });
    } else {
        layer.classList.remove('active');
    }
}

// Thay đổi hình nền hệ thống
function changeWallpaper(url) {
    const container = document.getElementById('os-container');
    if (container) {
        // Cập nhật ảnh kết cấu (texture) của WebGL nền
        if (typeof window.updateWallpaperTexture === 'function') {
            window.updateWallpaperTexture(url);
            container.style.backgroundImage = 'none'; // Xóa ảnh nền tĩnh để tối ưu hiệu năng
        } else {
            container.style.backgroundImage = `url('${url}')`;
        }
    }

    if (typeof showToast === 'function') {
        showToast('Đã đổi hình nền thành công!');
    }
}
