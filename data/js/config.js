// --- CẤU HÌNH & TRẠNG THÁI HỆ THỐNG ---
const DATA_URL = 'app.json';
let runningApps = {}; // Quản lý đa nhiệm: { "Tên App": iframeElement }
let currentActiveApp = null; // Tên app đang mở

// Dữ liệu dự phòng khi không tải được dữ liệu từ API
const FALLBACK_APPS = [
    { "t": "Note", "l": "https://text2.co/app/note/", "i": "https://text2.co/app/note/apple-touch-icon.png"},
    { "t": "Translate", "l": "https://text2.co/app/translate/", "i": "https://text2.co/app/translate/apple-touch-icon.png"},
    { "t": "QR", "l": "https://text2.co/app/qr/", "i": "https://text2.co/app/qr/apple-touch-icon.png"},
    { "t": "Grammar", "l": "https://text2.co/app/grammar/", "i": "https://text2.co/app/grammar/apple-touch-icon.png"},
    { "t": "Chat", "l": "https://text2.co/app/chat/", "i": "https://text2.co/app/chat/apple-touch-icon.png"},
    { "t": "Calendar", "l": "https://text2.co/app/calendar/", "i": "https://text2.co/app/calendar/apple-touch-icon.png"},
    { "t": "Image", "l": "https://text2.co/app/img/", "i": "https://text2.co/app/img/apple-touch-icon.png"},
    { "t": "Weather", "l": "https://text2.co/app/weather/", "i": "https://text2.co/app/weather/apple-touch-icon.png"},
    { "t": "Doc", "l": "https://text2.co/app/doc/", "i": "https://text2.co/app/doc/apple-touch-icon.png"},
    { "t": "Generate Image", "l": "https://text2.co/app/generate-img/", "i": "https://text2.co/app/generate-img/apple-touch-icon.png"},
    { "t": "Mindmap", "l": "https://text2.co/app/mindmap/", "i": "https://text2.co/app/mindmap/apple-touch-icon.png"},
    { "t": "Chess", "l": "https://text2.co/game/chess/", "i": "https://text2.co/game/chess/apple-touch-icon.png"}
];
