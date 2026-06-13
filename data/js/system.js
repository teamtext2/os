// --- KHỞI TẠO & HỆ THỐNG CHUNG (SYSTEM INITIALIZATION & UTILITIES) ---

// Khởi tạo hệ thống khi trang được tải xong
window.onload = () => {
    refreshIcons();
};

// Cập nhật biểu tượng của Lucide Icons
function refreshIcons() {
    if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }
}

// Đồng hồ cập nhật mỗi giây
setInterval(() => {
    const clockEl = document.getElementById('clock');
    if (clockEl) {
        clockEl.textContent = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    }
}, 1000);

// Hiển thị thông báo Toast
function showToast(message) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = message;
        toast.style.opacity = '1';
        setTimeout(() => toast.style.opacity = '0', 3000);
    }
}

// Khởi động hệ điều hành và yêu cầu Fullscreen
function startOS() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(e => console.log(e));
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }

    const startOverlay = document.getElementById('start-overlay');
    if (startOverlay) {
        startOverlay.style.opacity = '0';
        setTimeout(() => startOverlay.style.display = 'none', 500);
    }

    setTimeout(fetchEcosystemApps, 800);
}

// Tải danh sách ứng dụng từ server
async function fetchEcosystemApps() {
    let appsToRender = FALLBACK_APPS; // Mặc định từ config.js
    try {
        const response = await fetch(DATA_URL);
        if (response.ok) {
            const data = await response.json();
            if (Array.isArray(data)) {
                appsToRender = data;
            } else if (typeof data === 'object') {
                for (let key in data) {
                    if (Array.isArray(data[key])) {
                        appsToRender = data[key];
                        break;
                    }
                }
            }
            showToast('Đã tải hệ sinh thái Text2!');
        }
    } catch (error) {
        console.warn("Lỗi mạng/CORS hoặc sự cố tải dữ liệu API, sử dụng dữ liệu dự phòng.");
    } finally {
        const totalCountEl = document.getElementById('total-apps-count');
        if (totalCountEl) {
            totalCountEl.textContent = appsToRender.length;
        }
        
        if (typeof renderApps === 'function') {
            renderApps(appsToRender);
        }
        
        const bootScreen = document.getElementById('boot-screen');
        if (bootScreen) {
            bootScreen.style.opacity = '0';
            setTimeout(() => bootScreen.style.display = 'none', 500);
        }
    }
}
