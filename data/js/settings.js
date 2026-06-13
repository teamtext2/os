// --- CÀI ĐẶT & THAY ĐỔI HÌNH NỀN (SETTINGS & WALLPAPER) ---

// Mở giao diện Cài đặt
function openSettings() {
    document.getElementById('settings-layer').classList.add('active');
}

// Đóng giao diện Cài đặt
function closeSettings() {
    document.getElementById('settings-layer').classList.remove('active');
}

// Thay đổi hình nền hệ thống
function changeWallpaper(url) {
    document.getElementById('os-container').style.backgroundImage = `url('${url}')`;
    if (typeof showToast === 'function') {
        showToast('Đã đổi hình nền thành công!');
    }
}
