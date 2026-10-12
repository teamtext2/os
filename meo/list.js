/**
 * ==============================================================================
 * WONTRADE - RISE OF KINGDOMS TRADING PLATFORM
 * FILE QUẢN LÝ DANH SÁCH VẬT PHẨM (Tổng số: 19 vật phẩm)
 * ==============================================================================
 * 
 * HƯỚNG DẪN:
 * Để thêm, sửa, xóa hoặc thay đổi giá/thông số vật phẩm hiển thị trên website,
 * bạn có thể chỉnh sửa trực tiếp mảng `mockProducts` trong file này.
 * (File này cũng được đặt tại js/list.js để tải trực tiếp vào trang web).
 */

var mockProducts = [
  // 1. Vật phẩm ID 2654
  {
    id: 2654,
    title: "Mùa Chinh Phạt",
    price: 466.09,
    favorites: 5,
    isFavorited: false,
    badges: [
      { text: "Chơi", type: "red" },
      { text: "BẢN ANH HÙNG CA", type: "dark" }
    ],
    info: "#2654 | Có thể nhập cư",
    stats: "Cấp độ 25 | Sức mạnh 91,652,733 | VIP 16 | Điểm Tiêu Diệt 7,527,939,303",
    tags: [
      { text: "Chỉ Huy Thức Tỉnh Huyền Thoại ×19", type: "orange" },
      { text: "Trang Bị Huyền Thoại ×43", type: "orange" },
      { text: "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×8", type: "orange" },
      { text: "Minh Văn Đặc Biệt ×9", type: "orange" },
      { text: "Minh Văn Hiếm ×14", type: "orange" },
      { text: "Số Dư Xu Lung Linh 5", type: "blue" },
      { text: "Trang Hộ Chiếu 20", type: "blue" },
      { text: "Tượng Chỉ Huy Huyền Thoại 182", type: "blue" }
    ],
    commanders: [
      { id: "arthur", name: "Arthur Pendragon", level: 60, isImg: true },
      { id: "tontu", name: "Tôn Tử", level: 60 },
      { id: "achilles", name: "Achilles", level: 60 },
      { id: "tanthuyhoang", name: "Tần Thủy Hoàng", level: 60 },
      { id: "scipio", name: "Scipio Africanus", level: 60 }
    ],
    gemMultiplier: 5,
    countdownSeconds: 7 * 86400 + 7 * 3600 + 44 * 60 + 35
  },

  // 2. Vật phẩm ID 2638
  {
    id: 2638,
    title: "5 Trang Phục Thiên Định Sức Mạnh Chỉ Huy Bộ Binh Chỉ Huy Cung Thủ Chỉ Huy Kỵ Binh",
    price: 10000,
    favorites: 2,
    isFavorited: false,
    badges: [
      { text: "Chơi", type: "red" }
    ],
    info: "#2638 | Có thể nhập cư",
    stats: "Cấp độ 25 | Sức mạnh 200,087,220 | VIP 19 | Điểm Tiêu Diệt 12,428,178,750",
    tags: [
      { text: "Chỉ Huy Thức Tỉnh Huyền Thoại ×68", type: "orange" },
      { text: "Trang Bị Huyền Thoại ×62", type: "orange" },
      { text: "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×24", type: "orange" },
      { text: "Minh Văn Đặc Biệt ×18", type: "orange" },
      { text: "Minh Văn Hiếm ×30", type: "orange" },
      { text: "Số Dư Xu Lung Linh 12", type: "blue" },
      { text: "Trang Hộ Chiếu 150", type: "blue" },
      { text: "Tượng Chỉ Huy Huyền Thoại 1,850", type: "blue" }
    ],
    commanders: [
      { id: "tontu", name: "Tôn Tử", level: 60 },
      { id: "tanthuyhoang", name: "Tần Thủy Hoàng", level: 60 },
      { id: "arthur", name: "Arthur Pendragon", level: 60, isImg: true },
      { id: "luutriet", name: "Lưu Triệt", level: 60 },
      { id: "alparslan", name: "Alp Arslan", level: 60 }
    ],
    gemMultiplier: 5,
    countdownSeconds: 14 * 86400 + 12 * 3600 + 30 * 60 + 18
  },

  // 3. Vật phẩm ID 2322
  {
    id: 2322,
    title: "Chỉ Huy Bộ Binh Chuyên Nghiệp",
    price: 1799,
    favorites: 2,
    isFavorited: false,
    badges: [
      { text: "Chơi", type: "red" }
    ],
    info: "#2322 | Có thể nhập cư",
    stats: "Cấp độ 25 | Sức mạnh 126,690,958 | VIP 19 | Điểm Tiêu Diệt 2,784,766,573",
    tags: [
      { text: "Chỉ Huy Thức Tỉnh Huyền Thoại ×60", type: "orange" },
      { text: "Trang Bị Huyền Thoại ×58", type: "orange" },
      { text: "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×13", type: "orange" },
      { text: "Minh Văn Đặc Biệt ×3", type: "orange" },
      { text: "Minh Văn Hiếm ×10", type: "orange" },
      { text: "Trang Hộ Chiếu 128", type: "blue" },
      { text: "Tượng Chỉ Huy Huyền Thoại 981", type: "blue" }
    ],
    commanders: [
      { id: "arthur", name: "Arthur Pendragon", level: 60, isImg: true },
      { id: "quanvu", name: "Quan Vũ", level: 60 },
      { id: "choiyoung", name: "Choi Young", level: 60 },
      { id: "bachkhoi", name: "Bạch Khởi", level: 60 },
      { id: "tontu", name: "Tôn Tử", level: 60 }
    ],
    gemMultiplier: 5,
    countdownSeconds: 6 * 86400 + 6 * 3600 + 58 * 60 + 40
  },

  // 4. Vật phẩm ID 1109
  {
    id: 1109,
    title: "Chỉ Huy Cung Thủ",
    price: 2696.41,
    favorites: 0,
    isFavorited: false,
    badges: [
      { text: "VUA VƯƠNG QUỐC ANH", type: "dark" }
    ],
    info: "#1109 | Có thể nhập cư",
    stats: "Cấp độ 25 | Sức mạnh 109,665,659 | VIP 17 | Điểm Tiêu Diệt 11,318,883,510",
    tags: [
      { text: "Chỉ Huy Thức Tỉnh Huyền Thoại ×36", type: "orange" },
      { text: "Trang Bị Huyền Thoại ×40", type: "orange" },
      { text: "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×13", type: "orange" },
      { text: "Minh Văn Đặc Biệt ×7", type: "orange" },
      { text: "Minh Văn Hiếm ×16", type: "orange" },
      { text: "Số Dư Xu Lung Linh 5", type: "blue" },
      { text: "Trang Hộ Chiếu 109", type: "blue" },
      { text: "Tượng Chỉ Huy Huyền Thoại 2,295", type: "blue" }
    ],
    commanders: [
      { id: "tanthuyhoang", name: "Tần Thủy Hoàng", level: 60 },
      { id: "alparslan", name: "Alp Arslan", level: 60 },
      { id: "giacatluong", name: "Gia Cát Lượng", level: 60 },
      { id: "arthur", name: "Arthur Pendragon", level: 60, isImg: true },
      { id: "luutriet", name: "Lưu Triệt", level: 60 }
    ],
    gemMultiplier: 5,
    countdownSeconds: 29 * 86400 + 17 * 3600 + 6 * 60 + 52
  },

  // 5. Vật phẩm ID 1888
  {
    id: 1888,
    title: "Kỵ Binh Siêu Tốc Nevsky + Joan | Full Đồ Cam Tài Năng",
    price: 3450,
    favorites: 8,
    isFavorited: false,
    badges: [
      { text: "Chơi", type: "red" },
      { text: "CHIẾN THẦN", type: "dark" }
    ],
    info: "#1888 | Có thể nhập cư",
    stats: "Cấp độ 25 | Sức mạnh 135,420,110 | VIP 18 | Điểm Tiêu Diệt 8,920,330,120",
    tags: [
      { text: "Chỉ Huy Thức Tỉnh Huyền Thoại ×45", type: "orange" },
      { text: "Trang Bị Huyền Thoại ×52", type: "orange" },
      { text: "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×18", type: "orange" },
      { text: "Minh Văn Đặc Biệt ×11", type: "orange" },
      { text: "Minh Văn Hiếm ×22", type: "orange" },
      { text: "Số Dư Xu Lung Linh 8", type: "blue" },
      { text: "Trang Hộ Chiếu 85", type: "blue" },
      { text: "Tượng Chỉ Huy Huyền Thoại 1,420", type: "blue" }
    ],
    commanders: [
      { id: "achilles", name: "Achilles", level: 60 },
      { id: "arthur", name: "Arthur Pendragon", level: 60, isImg: true },
      { id: "scipio", name: "Scipio Africanus", level: 60 },
      { id: "choiyoung", name: "Choi Young", level: 60 },
      { id: "alparslan", name: "Alp Arslan", level: 60 }
    ],
    gemMultiplier: 5,
    countdownSeconds: 11 * 86400 + 4 * 3600 + 15 * 60 + 20
  },

  // 6. Vật phẩm ID 2455
  {
    id: 2455,
    title: "Mùa Chinh Phạt - Full T5 3 Đạo Bộ Binh & Kỵ Binh",
    price: 1250,
    favorites: 4,
    isFavorited: false,
    badges: [
      { text: "Chơi", type: "red" }
    ],
    info: "#2455 | Có thể nhập cư",
    stats: "Cấp độ 25 | Sức mạnh 98,350,000 | VIP 16 | Điểm Tiêu Diệt 4,560,120,890",
    tags: [
      { text: "Chỉ Huy Thức Tỉnh Huyền Thoại ×28", type: "orange" },
      { text: "Trang Bị Huyền Thoại ×35", type: "orange" },
      { text: "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×10", type: "orange" },
      { text: "Minh Văn Đặc Biệt ×5", type: "orange" },
      { text: "Minh Văn Hiếm ×12", type: "orange" },
      { text: "Trang Hộ Chiếu 65", type: "blue" },
      { text: "Tượng Chỉ Huy Huyền Thoại 640", type: "blue" }
    ],
    commanders: [
      { id: "quanvu", name: "Quan Vũ", level: 60 },
      { id: "scipio", name: "Scipio Africanus", level: 60 },
      { id: "tontu", name: "Tôn Tử", level: 60 },
      { id: "bachkhoi", name: "Bạch Khởi", level: 60 },
      { id: "arthur", name: "Arthur Pendragon", level: 60, isImg: true }
    ],
    gemMultiplier: 5,
    countdownSeconds: 18 * 86400 + 19 * 3600 + 42 * 60 + 10
  },

  // 7. Vật phẩm ID 3012
  {
    id: 3012,
    title: "Acc VIP 18 - Đội Hình Cung Thủ Gia Cát Lượng Thức Tỉnh",
    price: 2150,
    favorites: 7,
    isFavorited: false,
    badges: [
      { text: "Chơi", type: "red" },
      { text: "BẢN ANH HÙNG CA", type: "dark" }
    ],
    info: "#3012 | Có thể nhập cư",
    stats: "Cấp độ 25 | Sức mạnh 115,800,450 | VIP 18 | Điểm Tiêu Diệt 6,780,210,000",
    tags: [
      { text: "Chỉ Huy Thức Tỉnh Huyền Thoại ×38", type: "orange" },
      { text: "Trang Bị Huyền Thoại ×44", type: "orange" },
      { text: "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×15", type: "orange" },
      { text: "Minh Văn Đặc Biệt ×8", type: "orange" },
      { text: "Minh Văn Hiếm ×18", type: "orange" },
      { text: "Số Dư Xu Lung Linh 6", type: "blue" },
      { text: "Trang Hộ Chiếu 92", type: "blue" },
      { text: "Tượng Chỉ Huy Huyền Thoại 1,150", type: "blue" }
    ],
    commanders: [
      { id: "giacatluong", name: "Gia Cát Lượng", level: 60 },
      { id: "tanthuyhoang", name: "Tần Thủy Hoàng", level: 60 },
      { id: "luutriet", name: "Lưu Triệt", level: 60 },
      { id: "achilles", name: "Achilles", level: 60 },
      { id: "arthur", name: "Arthur Pendragon", level: 60, isImg: true }
    ],
    gemMultiplier: 5,
    countdownSeconds: 5 * 86400 + 14 * 3600 + 22 * 60 + 45
  },

  // 8. Vật phẩm ID 1688
  {
    id: 1688,
    title: "Tài Khoản KVK 4 - Sức Mạnh 88M Sẵn 45 Hộ Chiếu",
    price: 580,
    favorites: 3,
    isFavorited: false,
    badges: [
      { text: "Chơi", type: "red" }
    ],
    info: "#1688 | Có thể nhập cư",
    stats: "Cấp độ 25 | Sức mạnh 88,240,600 | VIP 15 | Điểm Tiêu Diệt 3,120,450,200",
    tags: [
      { text: "Chỉ Huy Thức Tỉnh Huyền Thoại ×18", type: "orange" },
      { text: "Trang Bị Huyền Thoại ×28", type: "orange" },
      { text: "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×6", type: "orange" },
      { text: "Minh Văn Đặc Biệt ×4", type: "orange" },
      { text: "Minh Văn Hiếm ×9", type: "orange" },
      { text: "Trang Hộ Chiếu 45", type: "blue" },
      { text: "Tượng Chỉ Huy Huyền Thoại 320", type: "blue" }
    ],
    commanders: [
      { id: "tontu", name: "Tôn Tử", level: 60 },
      { id: "arthur", name: "Arthur Pendragon", level: 60, isImg: true },
      { id: "scipio", name: "Scipio Africanus", level: 60 },
      { id: "bachkhoi", name: "Bạch Khởi", level: 60 },
      { id: "choiyoung", name: "Choi Young", level: 60 }
    ],
    gemMultiplier: 5,
    countdownSeconds: 8 * 86400 + 9 * 3600 + 12 * 60 + 55
  },

  // 9. Vật phẩm ID 2790
  {
    id: 2790,
    title: "Siêu Phẩm VIP 19 - Full T5 5 Đạo Ra Trận KVK",
    price: 8500,
    favorites: 14,
    isFavorited: false,
    badges: [
      { text: "Chơi", type: "red" },
      { text: "VUA VƯƠNG QUỐC ANH", type: "dark" }
    ],
    info: "#2790 | Có thể nhập cư",
    stats: "Cấp độ 25 | Sức mạnh 185,600,000 | VIP 19 | Điểm Tiêu Diệt 15,200,900,000",
    tags: [
      { text: "Chỉ Huy Thức Tỉnh Huyền Thoại ×65", type: "orange" },
      { text: "Trang Bị Huyền Thoại ×70", type: "orange" },
      { text: "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×28", type: "orange" },
      { text: "Minh Văn Đặc Biệt ×20", type: "orange" },
      { text: "Minh Văn Hiếm ×35", type: "orange" },
      { text: "Số Dư Xu Lung Linh 15", type: "blue" },
      { text: "Trang Hộ Chiếu 200", type: "blue" },
      { text: "Tượng Chỉ Huy Huyền Thoại 2,500", type: "blue" }
    ],
    commanders: [
      { id: "luutriet", name: "Lưu Triệt", level: 60 },
      { id: "tanthuyhoang", name: "Tần Thủy Hoàng", level: 60 },
      { id: "quanvu", name: "Quan Vũ", level: 60 },
      { id: "scipio", name: "Scipio Africanus", level: 60 },
      { id: "arthur", name: "Arthur Pendragon", level: 60, isImg: true }
    ],
    gemMultiplier: 5,
    countdownSeconds: 21 * 86400 + 2 * 3600 + 50 * 60 + 12
  },

  // 10. Vật phẩm ID 1420
  {
    id: 1420,
    title: "Chỉ Huy Thủ Thành & Đồn Trú Vững Chắc Zenobia + YSS",
    price: 1950,
    favorites: 6,
    isFavorited: false,
    badges: [
      { text: "Chơi", type: "red" }
    ],
    info: "#1420 | Có thể nhập cư",
    stats: "Cấp độ 25 | Sức mạnh 110,400,200 | VIP 17 | Điểm Tiêu Diệt 5,890,100,400",
    tags: [
      { text: "Chỉ Huy Thức Tỉnh Huyền Thoại ×32", type: "orange" },
      { text: "Trang Bị Huyền Thoại ×38", type: "orange" },
      { text: "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×12", type: "orange" },
      { text: "Minh Văn Đặc Biệt ×6", type: "orange" },
      { text: "Minh Văn Hiếm ×15", type: "orange" },
      { text: "Số Dư Xu Lung Linh 4", type: "blue" },
      { text: "Trang Hộ Chiếu 78", type: "blue" },
      { text: "Tượng Chỉ Huy Huyền Thoại 890", type: "blue" }
    ],
    commanders: [
      { id: "bachkhoi", name: "Bạch Khởi", level: 60 },
      { id: "choiyoung", name: "Choi Young", level: 60 },
      { id: "tontu", name: "Tôn Tử", level: 60 },
      { id: "achilles", name: "Achilles", level: 60 },
      { id: "arthur", name: "Arthur Pendragon", level: 60, isImg: true }
    ],
    gemMultiplier: 5,
    countdownSeconds: 12 * 86400 + 18 * 3600 + 35 * 60 + 40
  },

  // 11. Vật phẩm ID 2108
  {
    id: 2108,
    title: "Bộ Binh Chuyên Nghiệp Quan Vũ + Scipio Prime Max Skill",
    price: 1650,
    favorites: 9,
    isFavorited: false,
    badges: [
      { text: "Chơi", type: "red" },
      { text: "CHIẾN THẦN", type: "dark" }
    ],
    info: "#2108 | Có thể nhập cư",
    stats: "Cấp độ 25 | Sức mạnh 105,200,300 | VIP 17 | Điểm Tiêu Diệt 6,100,500,000",
    tags: [
      { text: "Chỉ Huy Thức Tỉnh Huyền Thoại ×30", type: "orange" },
      { text: "Trang Bị Huyền Thoại ×42", type: "orange" },
      { text: "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×14", type: "orange" },
      { text: "Minh Văn Đặc Biệt ×8", type: "orange" },
      { text: "Minh Văn Hiếm ×17", type: "orange" },
      { text: "Trang Hộ Chiếu 88", type: "blue" },
      { text: "Tượng Chỉ Huy Huyền Thoại 750", type: "blue" }
    ],
    commanders: [
      { id: "quanvu", name: "Quan Vũ", level: 60 },
      { id: "scipio", name: "Scipio Africanus", level: 60 },
      { id: "tontu", name: "Tôn Tử", level: 60 },
      { id: "arthur", name: "Arthur Pendragon", level: 60, isImg: true },
      { id: "achilles", name: "Achilles", level: 60 }
    ],
    gemMultiplier: 5,
    countdownSeconds: 9 * 86400 + 11 * 3600 + 5 * 60 + 15
  },

  // 12. Vật phẩm ID 2855
  {
    id: 2855,
    title: "Acc Farm T5 & Chiến Đấu Đa Năng - 75M Power Giá Tốt",
    price: 380,
    favorites: 1,
    isFavorited: false,
    badges: [
      { text: "Chơi", type: "red" }
    ],
    info: "#2855 | Có thể nhập cư",
    stats: "Cấp độ 25 | Sức mạnh 75,300,100 | VIP 15 | Điểm Tiêu Diệt 2,400,000,000",
    tags: [
      { text: "Chỉ Huy Thức Tỉnh Huyền Thoại ×15", type: "orange" },
      { text: "Trang Bị Huyền Thoại ×24", type: "orange" },
      { text: "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×5", type: "orange" },
      { text: "Minh Văn Đặc Biệt ×2", type: "orange" },
      { text: "Minh Văn Hiếm ×8", type: "orange" },
      { text: "Trang Hộ Chiếu 35", type: "blue" },
      { text: "Tượng Chỉ Huy Huyền Thoại 210", type: "blue" }
    ],
    commanders: [
      { id: "tontu", name: "Tôn Tử", level: 60 },
      { id: "choiyoung", name: "Choi Young", level: 60 },
      { id: "alparslan", name: "Alp Arslan", level: 60 },
      { id: "bachkhoi", name: "Bạch Khởi", level: 60 },
      { id: "arthur", name: "Arthur Pendragon", level: 60, isImg: true }
    ],
    gemMultiplier: 5,
    countdownSeconds: 4 * 86400 + 8 * 3600 + 19 * 60 + 30
  },

  // 13. Vật phẩm ID 1777
  {
    id: 1777,
    title: "Đạo Quân Kỵ Binh Tốc Độ Cao - Xiang Yu + Nevsky",
    price: 2890,
    favorites: 11,
    isFavorited: false,
    badges: [
      { text: "Chơi", type: "red" },
      { text: "BẢN ANH HÙNG CA", type: "dark" }
    ],
    info: "#1777 | Có thể nhập cư",
    stats: "Cấp độ 25 | Sức mạnh 128,750,000 | VIP 18 | Điểm Tiêu Diệt 9,450,200,000",
    tags: [
      { text: "Chỉ Huy Thức Tỉnh Huyền Thoại ×42", type: "orange" },
      { text: "Trang Bị Huyền Thoại ×48", type: "orange" },
      { text: "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×16", type: "orange" },
      { text: "Minh Văn Đặc Biệt ×10", type: "orange" },
      { text: "Minh Văn Hiếm ×20", type: "orange" },
      { text: "Số Dư Xu Lung Linh 7", type: "blue" },
      { text: "Trang Hộ Chiếu 110", type: "blue" },
      { text: "Tượng Chỉ Huy Huyền Thoại 1,320", type: "blue" }
    ],
    commanders: [
      { id: "achilles", name: "Achilles", level: 60 },
      { id: "alparslan", name: "Alp Arslan", level: 60 },
      { id: "arthur", name: "Arthur Pendragon", level: 60, isImg: true },
      { id: "tanthuyhoang", name: "Tần Thủy Hoàng", level: 60 },
      { id: "scipio", name: "Scipio Africanus", level: 60 }
    ],
    gemMultiplier: 5,
    countdownSeconds: 15 * 86400 + 20 * 3600 + 40 * 60 + 50
  },

  // 14. Vật phẩm ID 2990
  {
    id: 2990,
    title: "Mùa Chinh Phạt - Acc Rally Chuyên Nghiệp VIP 19",
    price: 6800,
    favorites: 15,
    isFavorited: false,
    badges: [
      { text: "Chơi", type: "red" },
      { text: "CHIẾN THẦN", type: "dark" }
    ],
    info: "#2990 | Có thể nhập cư",
    stats: "Cấp độ 25 | Sức mạnh 165,800,000 | VIP 19 | Điểm Tiêu Diệt 13,800,000,000",
    tags: [
      { text: "Chỉ Huy Thức Tỉnh Huyền Thoại ×58", type: "orange" },
      { text: "Trang Bị Huyền Thoại ×65", type: "orange" },
      { text: "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×22", type: "orange" },
      { text: "Minh Văn Đặc Biệt ×16", type: "orange" },
      { text: "Minh Văn Hiếm ×28", type: "orange" },
      { text: "Số Dư Xu Lung Linh 11", type: "blue" },
      { text: "Trang Hộ Chiếu 165", type: "blue" },
      { text: "Tượng Chỉ Huy Huyền Thoại 2,100", type: "blue" }
    ],
    commanders: [
      { id: "tanthuyhoang", name: "Tần Thủy Hoàng", level: 60 },
      { id: "luutriet", name: "Lưu Triệt", level: 60 },
      { id: "quanvu", name: "Quan Vũ", level: 60 },
      { id: "giacatluong", name: "Gia Cát Lượng", level: 60 },
      { id: "arthur", name: "Arthur Pendragon", level: 60, isImg: true }
    ],
    gemMultiplier: 5,
    countdownSeconds: 25 * 86400 + 16 * 3600 + 10 * 60 + 25
  },

  // 15. Vật phẩm ID 2304
  {
    id: 2304,
    title: "Chỉ Huy Cung Thủ Boudica Prime + Zhuge Liang Max",
    price: 3200,
    favorites: 8,
    isFavorited: false,
    badges: [
      { text: "Chơi", type: "red" }
    ],
    info: "#2304 | Có thể nhập cư",
    stats: "Cấp độ 25 | Sức mạnh 122,400,000 | VIP 18 | Điểm Tiêu Diệt 7,920,400,000",
    tags: [
      { text: "Chỉ Huy Thức Tỉnh Huyền Thoại ×40", type: "orange" },
      { text: "Trang Bị Huyền Thoại ×46", type: "orange" },
      { text: "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×15", type: "orange" },
      { text: "Minh Văn Đặc Biệt ×9", type: "orange" },
      { text: "Minh Văn Hiếm ×19", type: "orange" },
      { text: "Số Dư Xu Lung Linh 6", type: "blue" },
      { text: "Trang Hộ Chiếu 95", type: "blue" },
      { text: "Tượng Chỉ Huy Huyền Thoại 1,280", type: "blue" }
    ],
    commanders: [
      { id: "giacatluong", name: "Gia Cát Lượng", level: 60 },
      { id: "tanthuyhoang", name: "Tần Thủy Hoàng", level: 60 },
      { id: "achilles", name: "Achilles", level: 60 },
      { id: "luutriet", name: "Lưu Triệt", level: 60 },
      { id: "arthur", name: "Arthur Pendragon", level: 60, isImg: true }
    ],
    gemMultiplier: 5,
    countdownSeconds: 17 * 86400 + 5 * 3600 + 33 * 60 + 12
  },

  // 16. Vật phẩm ID 1555
  {
    id: 1555,
    title: "Acc T5 Chuẩn KVK - Full Công Nghệ Quân Sự 25",
    price: 920,
    favorites: 5,
    isFavorited: false,
    badges: [
      { text: "Chơi", type: "red" },
      { text: "BẢN ANH HÙNG CA", type: "dark" }
    ],
    info: "#1555 | Có thể nhập cư",
    stats: "Cấp độ 25 | Sức mạnh 94,100,500 | VIP 16 | Điểm Tiêu Diệt 4,120,800,000",
    tags: [
      { text: "Chỉ Huy Thức Tỉnh Huyền Thoại ×24", type: "orange" },
      { text: "Trang Bị Huyền Thoại ×32", type: "orange" },
      { text: "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×8", type: "orange" },
      { text: "Minh Văn Đặc Biệt ×5", type: "orange" },
      { text: "Minh Văn Hiếm ×11", type: "orange" },
      { text: "Trang Hộ Chiếu 52", type: "blue" },
      { text: "Tượng Chỉ Huy Huyền Thoại 480", type: "blue" }
    ],
    commanders: [
      { id: "scipio", name: "Scipio Africanus", level: 60 },
      { id: "quanvu", name: "Quan Vũ", level: 60 },
      { id: "tontu", name: "Tôn Tử", level: 60 },
      { id: "choiyoung", name: "Choi Young", level: 60 },
      { id: "arthur", name: "Arthur Pendragon", level: 60, isImg: true }
    ],
    gemMultiplier: 5,
    countdownSeconds: 10 * 86400 + 12 * 3600 + 48 * 60 + 18
  },

  // 17. Vật phẩm ID 2710
  {
    id: 2710,
    title: "Acc VIP 17 - 108M Sức Mạnh Sẵn 70 Vé Hộ Chiếu Bay Ngay",
    price: 1480,
    favorites: 6,
    isFavorited: false,
    badges: [
      { text: "Chơi", type: "red" }
    ],
    info: "#2710 | Có thể nhập cư",
    stats: "Cấp độ 25 | Sức mạnh 108,600,000 | VIP 17 | Điểm Tiêu Diệt 5,430,200,000",
    tags: [
      { text: "Chỉ Huy Thức Tỉnh Huyền Thoại ×31", type: "orange" },
      { text: "Trang Bị Huyền Thoại ×39", type: "orange" },
      { text: "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×11", type: "orange" },
      { text: "Minh Văn Đặc Biệt ×7", type: "orange" },
      { text: "Minh Văn Hiếm ×14", type: "orange" },
      { text: "Số Dư Xu Lung Linh 5", type: "blue" },
      { text: "Trang Hộ Chiếu 70", type: "blue" },
      { text: "Tượng Chỉ Huy Huyền Thoại 820", type: "blue" }
    ],
    commanders: [
      { id: "choiyoung", name: "Choi Young", level: 60 },
      { id: "bachkhoi", name: "Bạch Khởi", level: 60 },
      { id: "arthur", name: "Arthur Pendragon", level: 60, isImg: true },
      { id: "tontu", name: "Tôn Tử", level: 60 },
      { id: "alparslan", name: "Alp Arslan", level: 60 }
    ],
    gemMultiplier: 5,
    countdownSeconds: 13 * 86400 + 8 * 3600 + 25 * 60 + 35
  },

  // 18. Vật phẩm ID 1999
  {
    id: 1999,
    title: "Đạo Quân Đa Năng 5 Cặp Thức Tỉnh - Đồ Cam Full Set",
    price: 4100,
    favorites: 13,
    isFavorited: false,
    badges: [
      { text: "Chơi", type: "red" },
      { text: "CHIẾN THẦN", type: "dark" }
    ],
    info: "#1999 | Có thể nhập cư",
    stats: "Cấp độ 25 | Sức mạnh 142,300,000 | VIP 18 | Điểm Tiêu Diệt 10,650,000,000",
    tags: [
      { text: "Chỉ Huy Thức Tỉnh Huyền Thoại ×48", type: "orange" },
      { text: "Trang Bị Huyền Thoại ×55", type: "orange" },
      { text: "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×19", type: "orange" },
      { text: "Minh Văn Đặc Biệt ×13", type: "orange" },
      { text: "Minh Văn Hiếm ×24", type: "orange" },
      { text: "Số Dư Xu Lung Linh 9", type: "blue" },
      { text: "Trang Hộ Chiếu 125", type: "blue" },
      { text: "Tượng Chỉ Huy Huyền Thoại 1,650", type: "blue" }
    ],
    commanders: [
      { id: "luutriet", name: "Lưu Triệt", level: 60 },
      { id: "giacatluong", name: "Gia Cát Lượng", level: 60 },
      { id: "quanvu", name: "Quan Vũ", level: 60 },
      { id: "achilles", name: "Achilles", level: 60 },
      { id: "arthur", name: "Arthur Pendragon", level: 60, isImg: true }
    ],
    gemMultiplier: 5,
    countdownSeconds: 22 * 86400 + 15 * 3600 + 55 * 60 + 40
  },

  // 19. Vật phẩm ID 2240
  {
    id: 2240,
    title: "Acc Khủng Top Vương Quốc - VIP 19 Sức Mạnh 210M 16B KP",
    price: 12500,
    favorites: 26,
    isFavorited: false,
    badges: [
      { text: "Chơi", type: "red" },
      { text: "VUA VƯƠNG QUỐC ANH", type: "dark" }
    ],
    info: "#2240 | Có thể nhập cư",
    stats: "Cấp độ 25 | Sức mạnh 210,500,000 | VIP 19 | Điểm Tiêu Diệt 16,850,000,000",
    tags: [
      { text: "Chỉ Huy Thức Tỉnh Huyền Thoại ×72", type: "orange" },
      { text: "Trang Bị Huyền Thoại ×78", type: "orange" },
      { text: "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×32", type: "orange" },
      { text: "Minh Văn Đặc Biệt ×24", type: "orange" },
      { text: "Minh Văn Hiếm ×40", type: "orange" },
      { text: "Số Dư Xu Lung Linh 18", type: "blue" },
      { text: "Trang Hộ Chiếu 220", type: "blue" },
      { text: "Tượng Chỉ Huy Huyền Thoại 3,200", type: "blue" }
    ],
    commanders: [
      { id: "tanthuyhoang", name: "Tần Thủy Hoàng", level: 60 },
      { id: "luutriet", name: "Lưu Triệt", level: 60 },
      { id: "quanvu", name: "Quan Vũ", level: 60 },
      { id: "giacatluong", name: "Gia Cát Lượng", level: 60 },
      { id: "arthur", name: "Arthur Pendragon", level: 60, isImg: true }
    ],
    gemMultiplier: 5,
    countdownSeconds: 28 * 86400 + 22 * 3600 + 59 * 60 + 50
  }
];

// Gán vào window để đảm bảo tương thích mọi ngữ cảnh trình duyệt
if (typeof window !== "undefined") {
  window.mockProducts = mockProducts;
}

// Hỗ trợ môi trường Module/NodeJS nếu cần
if (typeof module !== "undefined" && module.exports) {
  module.exports = mockProducts;
}
