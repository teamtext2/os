/**
 * WONTRADE - RISE OF KINGDOMS OFFICIAL TRADING PLATFORM
 * High-performance, clean vanilla JS architecture
 */

(function () {
  'use strict';

  // 1. PRODUCT DATABASE
  const PRODUCTS = [
  {
    "id": "120759733",
    "name": "Smáàky",
    "title": "Mùa Chinh Phạt",
    "server": "#2654",
    "can_migrate": true,
    "level": 25,
    "power": 91652733,
    "power_fmt": "91,652,733",
    "vip": 16,
    "kill_points": 7527939303,
    "kill_fmt": "7,527,939,303",
    "price": 466.09,
    "price_fmt": "466.09",
    "price_vnd_fmt": "11,838,686 ₫",
    "currency": "USD",
    "tags": [
      {
        "text": "Chơi",
        "bg": "#F56C6C",
        "color": "#fff"
      },
      {
        "text": "BẢN ANH HÙNG CA",
        "bg": "#666666",
        "color": "#fff"
      }
    ],
    "highlights": [
      {
        "text": "Chỉ Huy Thức Tỉnh Huyền Thoại ×19",
        "isBlue": false
      },
      {
        "text": "Trang Bị Huyền Thoại ×43",
        "isBlue": false
      },
      {
        "text": "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×8",
        "isBlue": false
      },
      {
        "text": "Minh Văn Đặc Biệt ×9",
        "isBlue": false
      },
      {
        "text": "Minh Văn Hiếm ×14",
        "isBlue": false
      },
      {
        "text": "Số Dư Xu Lung Linh 5",
        "isBlue": true
      },
      {
        "text": "Trang Hộ Chiếu 20",
        "isBlue": true
      },
      {
        "text": "Tượng Chỉ Huy Huyền Thoại ?182",
        "isBlue": true
      }
    ],
    "commanders": [
      {
        "name": "Arthur Pendragon",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/d55c4297fe47cf8f05c5891aa406cec8bdfa2d9889f61ae71c33257cf77ad7c0.png"
      },
      {
        "name": "Tôn Tử",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/e04045629e2e92b135e81723f715a0d18d6d6e379d186ccce8ba69973e2226d5.png"
      },
      {
        "name": "Achilles",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/be63e0f6a7384411e415ae5abca6b9f06e1e2d2ec439f5cc1215a01f0f721d24.png"
      },
      {
        "name": "Tần Thủy Hoàng",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/8dcee1d8d8c194a84dc0aebeac4baaf412b4d2c149e53d5f30bb1a71be637e95.png"
      },
      {
        "name": "Scipio Africanus",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/eda7f1fb3bd9478c9ffac8ed649c3b24a697a8d048873b7b1a00681741c23892.png"
      }
    ],
    "all_commanders": [
      "Arthur Pendragon",
      "Tôn Tử",
      "Achilles",
      "Tần Thủy Hoàng",
      "Scipio Africanus",
      "Hoắc Khứ Bệnh",
      "Heraclius",
      "Lưu Triệt",
      "Philip Đệ Nhị",
      "Ragnar Lodbrok",
      "Joan nhà Arc",
      "Gia Cát Lượng",
      "Æthelflæd",
      "Tào Tháo",
      "Alexander Đại đế",
      "Seondeok",
      "Ishida Mitsunari",
      "Cleopatra VII",
      "Pepin III"
    ],
    "avatar": "https://plat-fau-global.lilithgame.com/p/astc/IM/10043/0/90682157/2025-02-02/14FF6C48A89CB34DFD14BB3C0F164F55_250x250.jpg",
    "phase": "sell",
    "listing_type": "normal",
    "role_status": "can_migrate",
    "order_id": "LTP1207597332026",
    "time_left": "Còn lại 7 ngày 14 giờ"
  },
  {
    "id": "9099405",
    "name": "Lord Omi",
    "title": "5 Trang Phục Thiên Đỉnh Sức Mạnh Chỉ Huy Bộ Binh Chỉ Huy Cung Thủ Chỉ Huy Kỵ Binh",
    "server": "#2638",
    "can_migrate": true,
    "level": 25,
    "power": 200987220,
    "power_fmt": "200,987,220",
    "vip": 20,
    "kill_points": 8051349503,
    "kill_fmt": "8,051,349,503",
    "price": 1000000.0,
    "price_fmt": "1,000,000",
    "price_vnd_fmt": "25,400,000,000 ₫",
    "currency": "USD",
    "tags": [
      {
        "text": "VUA VƯƠNG QUỐC ANH",
        "bg": "#666666",
        "color": "#fff"
      }
    ],
    "highlights": [
      {
        "text": "Chỉ Huy Thức Tỉnh Huyền Thoại ×79",
        "isBlue": false
      },
      {
        "text": "Trang Bị Huyền Thoại ×62",
        "isBlue": false
      },
      {
        "text": "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×50",
        "isBlue": false
      },
      {
        "text": "Minh Văn Đặc Biệt ×17",
        "isBlue": false
      },
      {
        "text": "Minh Văn Hiếm ×27",
        "isBlue": false
      },
      {
        "text": "Tổng giá trị Vé Số Lung Linh 20",
        "isBlue": false
      },
      {
        "text": "Số Dư Xu Lung Linh 112",
        "isBlue": true
      },
      {
        "text": "Điểm VIP 1456970",
        "isBlue": false
      },
      {
        "text": "Trang Hộ Chiếu 66",
        "isBlue": true
      },
      {
        "text": "Tượng Chỉ Huy Huyền Thoại ?2709",
        "isBlue": true
      }
    ],
    "commanders": [
      {
        "name": "Tôn Tử",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/e04045629e2e92b135e81723f715a0d18d6d6e379d186ccce8ba69973e2226d5.png"
      },
      {
        "name": "Tần Thủy Hoàng",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/8dcee1d8d8c194a84dc0aebeac4baaf412b4d2c149e53d5f30bb1a71be637e95.png"
      },
      {
        "name": "Arthur Pendragon",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/d55c4297fe47cf8f05c5891aa406cec8bdfa2d9889f61ae71c33257cf77ad7c0.png"
      },
      {
        "name": "Lưu Triệt",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/16cdd9fe93503d10a31cbcb24c20aa9a6df1a644d2a22564a85d456b2bd17ae5.png"
      },
      {
        "name": "Alp Arslan",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/7939722765352811788f63d65f86b64b2d3fe321c7ca7352351004bf2d253e33.png"
      }
    ],
    "all_commanders": [
      "Tôn Tử",
      "Tần Thủy Hoàng",
      "Arthur Pendragon",
      "Lưu Triệt",
      "Alp Arslan",
      "Gajah Mada",
      "Trajan",
      "Seondeok",
      "Lapulapu",
      "Ashurbanipal",
      "Attila",
      "Scipio Africanus",
      "Hoắc Khứ Bệnh",
      "Heraclius",
      "Ishida Mitsunari",
      "Choi Young",
      "Mộc Lan",
      "Gia Cát Lượng",
      "Achilles",
      "Tào Tháo",
      "Bạch Khởi",
      "Shapur I",
      "Gonzalo de Córdoba",
      "Margaret I",
      "Shajar al-Durr",
      "Tokugawa Ieyasu",
      "Ivar",
      "Philip Đệ Nhị",
      "William Wallace",
      "Ragnar Lodbrok",
      "Scipio Aemilianus",
      "Alexander Đại đế",
      "Hector",
      "Alexander Nevsky",
      "Dido",
      "Honda Tadakatsu",
      "Kʼinich Janaabʼ Pakal",
      "Nebuchadnezzar II",
      "Amanitore",
      "Tariq ibn Ziyad",
      "Henry V",
      "Zenobia",
      "Leonidas đệ nhất",
      "Sargon Đại Đế",
      "Hermann",
      "Boudica",
      "Gilgamesh",
      "Gorgo",
      "Quan Vũ",
      "Joan nhà Arc",
      "Ramesses II",
      "Cheok Jun-gyeong",
      "William I",
      "Cyrus Đại Đế",
      "Hạng Vũ",
      "Theodora",
      "Artemisia I",
      "Takeda Shingen",
      "Harald Sigurdsson",
      "Yi Sun-sin",
      "Æthelflæd",
      "Minamoto no Yoshitsune",
      "Thành Cát Tư Hãn",
      "Saladin",
      "Mehmed II",
      "Frederick đệ nhất",
      "Constantine đệ nhất",
      "Julius Caesar",
      "Tomyris",
      "Edward của Woodstock",
      "Richard đệ nhất",
      "Yi Seong-Gye",
      "Cleopatra VII",
      "Hannibal Barca",
      "El Cid",
      "Charles Martel",
      "Ragnar Lodbrok",
      "Casimir III",
      "Pepin III"
    ],
    "avatar": "https://imimg.lilithcdn.com/llc_avatar/9099405/21/06/23/9e4050301de3ccbf_800x800.jpg",
    "phase": "sell",
    "listing_type": "designated",
    "role_status": "can_migrate",
    "order_id": "LTP90994052026",
    "time_left": "Còn lại 6 ngày 13 giờ"
  },
  {
    "id": "179810792",
    "name": "Hᵉˡˡ Titanシ",
    "title": "Mùa Chinh Phạt",
    "server": "#3497",
    "can_migrate": true,
    "level": 25,
    "power": 37022519,
    "power_fmt": "37,022,519",
    "vip": 13,
    "kill_points": 8574759703,
    "kill_fmt": "8,574,759,703",
    "price": 8540.0,
    "price_fmt": "8,540.00",
    "price_vnd_fmt": "216,916,000 ₫",
    "currency": "USD",
    "tags": [
      {
        "text": "Chơi",
        "bg": "#F56C6C",
        "color": "#fff"
      },
      {
        "text": "VUA VƯƠNG QUỐC ANH",
        "bg": "#666666",
        "color": "#fff"
      }
    ],
    "highlights": [
      {
        "text": "Chỉ Huy Thức Tỉnh Huyền Thoại ×3",
        "isBlue": false
      },
      {
        "text": "Trang Bị Huyền Thoại ×6",
        "isBlue": false
      },
      {
        "text": "Minh Văn Hiếm ×2",
        "isBlue": false
      },
      {
        "text": "Trang Hộ Chiếu 13",
        "isBlue": true
      },
      {
        "text": "Tượng Chỉ Huy Huyền Thoại ?63",
        "isBlue": true
      }
    ],
    "commanders": [
      {
        "name": "William Wallace",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/aa3090cd62144ee23d751b383a2ccaf6a6872335cd7bbbae8251aecc0fd80400.png"
      },
      {
        "name": "Æthelflæd",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/c71b04ca46b82c696c793da22edea52afbf751f3e790a942ea3cfb29b8958499.png"
      },
      {
        "name": "Lưu Triệt",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/16cdd9fe93503d10a31cbcb24c20aa9a6df1a644d2a22564a85d456b2bd17ae5.png"
      },
      {
        "name": "Arthur Pendragon",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/d55c4297fe47cf8f05c5891aa406cec8bdfa2d9889f61ae71c33257cf77ad7c0.png"
      },
      {
        "name": "Tôn Tử",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/e04045629e2e92b135e81723f715a0d18d6d6e379d186ccce8ba69973e2226d5.png"
      }
    ],
    "all_commanders": [
      "William Wallace",
      "Æthelflæd",
      "Lưu Triệt"
    ],
    "avatar": "https://plat-fau-global.lilithgame.com/p/astc/IM/10043/0/88328340/2025-03-08/4128CBE5D604CD3E573417E73D750DF8_250x250.jpg",
    "phase": "sell",
    "listing_type": "normal",
    "role_status": "can_migrate",
    "order_id": "LTP1798107922026",
    "time_left": "Còn lại 5 ngày 12 giờ"
  },
  {
    "id": "11230921",
    "name": "ᴺⱽDurmomo",
    "title": "4 Trang Phục Thiên Đỉnh Sức Mạnh Chỉ Huy Bộ Binh",
    "server": "#2766",
    "can_migrate": true,
    "level": 25,
    "power": 121865377,
    "power_fmt": "121,865,377",
    "vip": 20,
    "kill_points": 9098169903,
    "kill_fmt": "9,098,169,903",
    "price": 260000.0,
    "price_fmt": "260,000",
    "price_vnd_fmt": "6,604,000,000 ₫",
    "currency": "USD",
    "tags": [
      {
        "text": "BẢN ANH HÙNG CA",
        "bg": "#666666",
        "color": "#fff"
      }
    ],
    "highlights": [
      {
        "text": "Chỉ Huy Thức Tỉnh Huyền Thoại ×53",
        "isBlue": false
      },
      {
        "text": "Trang Bị Huyền Thoại ×46",
        "isBlue": false
      },
      {
        "text": "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×19",
        "isBlue": false
      },
      {
        "text": "Minh Văn Đặc Biệt ×7",
        "isBlue": false
      },
      {
        "text": "Minh Văn Hiếm ×23",
        "isBlue": false
      },
      {
        "text": "Số Dư Xu Lung Linh 15",
        "isBlue": true
      },
      {
        "text": "Điểm VIP 1647815",
        "isBlue": false
      },
      {
        "text": "Trang Hộ Chiếu 174",
        "isBlue": true
      },
      {
        "text": "Tượng Chỉ Huy Huyền Thoại ?519",
        "isBlue": true
      }
    ],
    "commanders": [
      {
        "name": "Tôn Tử",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/e04045629e2e92b135e81723f715a0d18d6d6e379d186ccce8ba69973e2226d5.png"
      },
      {
        "name": "Tần Thủy Hoàng",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/8dcee1d8d8c194a84dc0aebeac4baaf412b4d2c149e53d5f30bb1a71be637e95.png"
      },
      {
        "name": "Lưu Triệt",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/16cdd9fe93503d10a31cbcb24c20aa9a6df1a644d2a22564a85d456b2bd17ae5.png"
      },
      {
        "name": "Arthur Pendragon",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/d55c4297fe47cf8f05c5891aa406cec8bdfa2d9889f61ae71c33257cf77ad7c0.png"
      },
      {
        "name": "Gang Gam-chan",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/f020273333aee330dc55ed4234aedde444f58853e067030e39fd6a6c3153d7c1.png"
      }
    ],
    "all_commanders": [
      "Tôn Tử",
      "Tần Thủy Hoàng",
      "Lưu Triệt",
      "Arthur Pendragon",
      "Gang Gam-chan",
      "Gajah Mada",
      "Ragnar Lodbrok",
      "Achilles",
      "Gonzalo de Córdoba",
      "Bạch Khởi",
      "Ivan IV",
      "Philip Đệ Nhị",
      "Sargon Đại Đế",
      "Alexander Nevsky",
      "Gorgo",
      "Scipio Africanus",
      "Zenobia",
      "Theodora",
      "Joan nhà Arc",
      "Quan Vũ",
      "Hoắc Khứ Bệnh",
      "Kʼinich Janaabʼ Pakal",
      "Yi Sun-sin",
      "Gia Cát Lượng",
      "Boudica",
      "Hạng Vũ",
      "Attila",
      "Julius Caesar",
      "Constantine đệ nhất",
      "Saladin",
      "Mehmed II",
      "Thành Cát Tư Hãn",
      "Võ Tắc Thiên",
      "Æthelflæd",
      "Mộc Lan",
      "Edward của Woodstock",
      "Tào Tháo",
      "Yi Seong-Gye",
      "Richard đệ nhất",
      "Alexander Đại đế",
      "Hannibal Barca",
      "Charles Martel",
      "Minamoto no Yoshitsune",
      "Takeda Shingen",
      "William I",
      "Leonidas đệ nhất",
      "Chandragupta Maurya",
      "Hermann",
      "Tomyris",
      "Seondeok",
      "Ishida Mitsunari",
      "Hector",
      "Cleopatra VII"
    ],
    "avatar": "https://plat-fau-global.lilithgame.com/p/astc/IM/10043/0/7772277/2026-07-14/5D5231ABF9D0A26A95388733C11CFACB_250x250.jpg",
    "phase": "sell",
    "listing_type": "designated",
    "role_status": "can_migrate",
    "order_id": "LTP112309212026",
    "time_left": "Còn lại 4 ngày 11 giờ"
  },
  {
    "id": "163096129",
    "name": "Noobknife",
    "title": "Mùa Chinh Phạt",
    "server": "#2881",
    "can_migrate": true,
    "level": 25,
    "power": 83043814,
    "power_fmt": "83,043,814",
    "vip": 15,
    "kill_points": 9621580103,
    "kill_fmt": "9,621,580,103",
    "price": 35000.0,
    "price_fmt": "35,000",
    "price_vnd_fmt": "889,000,000 ₫",
    "currency": "USD",
    "tags": [
      {
        "text": "Chơi",
        "bg": "#F56C6C",
        "color": "#fff"
      },
      {
        "text": "VUA VƯƠNG QUỐC ANH",
        "bg": "#666666",
        "color": "#fff"
      }
    ],
    "highlights": [
      {
        "text": "Chỉ Huy Thức Tỉnh Huyền Thoại ×9",
        "isBlue": false
      },
      {
        "text": "Trang Bị Huyền Thoại ×19",
        "isBlue": false
      },
      {
        "text": "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×3",
        "isBlue": false
      },
      {
        "text": "Minh Văn Đặc Biệt ×2",
        "isBlue": false
      },
      {
        "text": "Minh Văn Hiếm ×6",
        "isBlue": false
      },
      {
        "text": "Số Dư Xu Lung Linh 1",
        "isBlue": true
      },
      {
        "text": "Trang Hộ Chiếu 78",
        "isBlue": true
      },
      {
        "text": "Tượng Chỉ Huy Huyền Thoại ?44",
        "isBlue": true
      }
    ],
    "commanders": [
      {
        "name": "Tần Thủy Hoàng",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/8dcee1d8d8c194a84dc0aebeac4baaf412b4d2c149e53d5f30bb1a71be637e95.png"
      },
      {
        "name": "Tôn Tử",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/e04045629e2e92b135e81723f715a0d18d6d6e379d186ccce8ba69973e2226d5.png"
      },
      {
        "name": "Alexander Nevsky",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/5a6ec28b7488173d242b75f376d981897b08be27cc011fbd6a6ae8b3c5ee9f0b.png"
      },
      {
        "name": "Seondeok",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/ad8cde252a891aa14d8227af1a07abfb7572b3e6ad064e1b6f01e8d7a6f226d4.png"
      },
      {
        "name": "Gia Cát Lượng",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/974519a0df74bfa3422cddcbde133e89d2ee2a1db6ee4a00a654fd107cf30d64.png"
      }
    ],
    "all_commanders": [
      "Tần Thủy Hoàng",
      "Tôn Tử",
      "Alexander Nevsky",
      "Seondeok",
      "Gia Cát Lượng",
      "Joan nhà Arc",
      "Lưu Triệt",
      "Scipio Africanus",
      "Æthelflæd"
    ],
    "avatar": "http://imimg.lilithcdn.com/roc/img_player_head01.png",
    "phase": "sell",
    "listing_type": "normal",
    "role_status": "can_migrate",
    "order_id": "LTP1630961292026",
    "time_left": "Còn lại 3 ngày 10 giờ"
  },
  {
    "id": "196177885",
    "name": "ᴰᴺGov Fred",
    "title": "Ngoại Mùa Mùa Chinh Phạt",
    "server": "#3726",
    "can_migrate": true,
    "level": 25,
    "power": 59958351,
    "power_fmt": "59,958,351",
    "vip": 13,
    "kill_points": 10144990303,
    "kill_fmt": "10,144,990,303",
    "price": 15000.0,
    "price_fmt": "15,000",
    "price_vnd_fmt": "381,000,000 ₫",
    "currency": "USD",
    "tags": [
      {
        "text": "VUA VƯƠNG QUỐC ANH",
        "bg": "#666666",
        "color": "#fff"
      }
    ],
    "highlights": [
      {
        "text": "Chỉ Huy Thức Tỉnh Huyền Thoại ×3",
        "isBlue": false
      },
      {
        "text": "Trang Bị Huyền Thoại ×3",
        "isBlue": false
      },
      {
        "text": "Trang Hộ Chiếu 5",
        "isBlue": true
      },
      {
        "text": "Tượng Chỉ Huy Huyền Thoại ?50",
        "isBlue": true
      }
    ],
    "commanders": [
      {
        "name": "Arthur Pendragon",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/d55c4297fe47cf8f05c5891aa406cec8bdfa2d9889f61ae71c33257cf77ad7c0.png"
      },
      {
        "name": "Æthelflæd",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/c71b04ca46b82c696c793da22edea52afbf751f3e790a942ea3cfb29b8958499.png"
      },
      {
        "name": "Minamoto no Yoshitsune",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/d55c4297fe47cf8f05c5891aa406cec8bdfa2d9889f61ae71c33257cf77ad7c0.png"
      },
      {
        "name": "Tôn Tử",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/e04045629e2e92b135e81723f715a0d18d6d6e379d186ccce8ba69973e2226d5.png"
      },
      {
        "name": "Achilles",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/be63e0f6a7384411e415ae5abca6b9f06e1e2d2ec439f5cc1215a01f0f721d24.png"
      }
    ],
    "all_commanders": [
      "Arthur Pendragon",
      "Æthelflæd",
      "Minamoto no Yoshitsune"
    ],
    "avatar": "https://plat-fau-global.lilithgame.com/p/astc/IM/10043/0/235220573/2025-05-13/1CD6ACAB6CAADD858C4DEBA09F7F4C07_250x250.jpg",
    "phase": "sell",
    "listing_type": "designated",
    "role_status": "can_migrate",
    "order_id": "LTP1961778852026",
    "time_left": "Còn lại 7 ngày 9 giờ"
  },
  {
    "id": "65363568",
    "name": "Kirgen",
    "title": "2 Trang Phục Thiên Đỉnh Sức Mạnh Chỉ Huy Bộ Binh Chỉ Huy Cung Thủ Thủ Lĩnh",
    "server": "#1109",
    "can_migrate": true,
    "level": 25,
    "power": 106775457,
    "power_fmt": "106,775,457",
    "vip": 20,
    "kill_points": 10668400503,
    "kill_fmt": "10,668,400,503",
    "price": 990000.0,
    "price_fmt": "990,000",
    "price_vnd_fmt": "25,146,000,000 ₫",
    "currency": "USD",
    "tags": [
      {
        "text": "Chơi",
        "bg": "#F56C6C",
        "color": "#fff"
      },
      {
        "text": "BẢN ANH HÙNG CA",
        "bg": "#666666",
        "color": "#fff"
      }
    ],
    "highlights": [
      {
        "text": "Chỉ Huy Thức Tỉnh Huyền Thoại ×70",
        "isBlue": false
      },
      {
        "text": "Trang Bị Huyền Thoại ×59",
        "isBlue": false
      },
      {
        "text": "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×55",
        "isBlue": false
      },
      {
        "text": "Minh Văn Đặc Biệt ×17",
        "isBlue": false
      },
      {
        "text": "Minh Văn Hiếm ×42",
        "isBlue": false
      },
      {
        "text": "Số Dư Xu Lung Linh 21",
        "isBlue": true
      },
      {
        "text": "Điểm VIP 2422155",
        "isBlue": false
      },
      {
        "text": "Trang Hộ Chiếu 107",
        "isBlue": true
      },
      {
        "text": "Tượng Chỉ Huy Huyền Thoại ?448",
        "isBlue": true
      }
    ],
    "commanders": [
      {
        "name": "Alp Arslan",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/7939722765352811788f63d65f86b64b2d3fe321c7ca7352351004bf2d253e33.png"
      },
      {
        "name": "Tần Thủy Hoàng",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/8dcee1d8d8c194a84dc0aebeac4baaf412b4d2c149e53d5f30bb1a71be637e95.png"
      },
      {
        "name": "Tôn Tử",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/e04045629e2e92b135e81723f715a0d18d6d6e379d186ccce8ba69973e2226d5.png"
      },
      {
        "name": "Lapulapu",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/2a1810acf910604c4a4a191cf6a3d0e8be7d7975f87e59e411eca6569d3535c8.png"
      },
      {
        "name": "Ivan IV",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/383ebf3e9485a13abf6f769c89adb79bb7a56ae41edff23e1561a75850f4f127.png"
      }
    ],
    "all_commanders": [
      "Alp Arslan",
      "Tần Thủy Hoàng",
      "Tôn Tử",
      "Lapulapu",
      "Ivan IV",
      "Lưu Triệt",
      "Hoắc Khứ Bệnh",
      "Belisarius",
      "Choi Young",
      "Ragnar Lodbrok",
      "Trajan",
      "Alexander Nevsky",
      "Heraclius",
      "Attila",
      "Bạch Khởi",
      "Arthur Pendragon",
      "Shapur I",
      "William Wallace",
      "Scipio Aemilianus",
      "Shajar al-Durr",
      "Philip Đệ Nhị",
      "Tariq ibn Ziyad",
      "Boudica",
      "Honda Tadakatsu",
      "Artemisia I",
      "Ramesses II",
      "Justinian I",
      "Gilgamesh",
      "Ashurbanipal",
      "Henry V",
      "Yi Sun-sin",
      "Dido",
      "Gia Cát Lượng",
      "Harald Sigurdsson",
      "Sargon Đại Đế",
      "Hermann",
      "Scipio Africanus",
      "Gorgo",
      "William I",
      "Quan Vũ",
      "Joan nhà Arc",
      "Kʼinich Janaabʼ Pakal",
      "Mộc Lan",
      "Æthelflæd",
      "Minamoto no Yoshitsune",
      "Constantine đệ nhất",
      "Saladin",
      "Thành Cát Tư Hãn",
      "Edward của Woodstock",
      "Alexander Đại đế",
      "Tào Tháo",
      "Ishida Mitsunari",
      "Richard đệ nhất",
      "Yi Seong-Gye",
      "Charles Martel",
      "Achilles",
      "Nebuchadnezzar II",
      "Frederick đệ nhất",
      "Matthias I",
      "Hector",
      "Takeda Shingen",
      "Cleopatra VII",
      "Leonidas đệ nhất",
      "Margaret I",
      "Tomyris",
      "Seondeok",
      "Ragnar Lodbrok",
      "Thutmose III",
      "El Cid",
      "Pepin III"
    ],
    "avatar": "https://plat-fau-global.lilithgame.com/p/astc/IM/10043/0/53593800/2026-05-23/0C395C7EF5487CDCE45A46B8E50FCAF9_250x250.jpg",
    "phase": "sell",
    "listing_type": "normal",
    "role_status": "can_migrate",
    "order_id": "LTP653635682026",
    "time_left": "Còn lại 6 ngày 8 giờ"
  },
  {
    "id": "34050454",
    "name": "Pxøs",
    "title": "Chỉ Huy Kỵ Binh",
    "server": "#3769",
    "can_migrate": true,
    "level": 25,
    "power": 105922745,
    "power_fmt": "105,922,745",
    "vip": 16,
    "kill_points": 11191810703,
    "kill_fmt": "11,191,810,703",
    "price": 58000.0,
    "price_fmt": "58,000",
    "price_vnd_fmt": "1,473,200,000 ₫",
    "currency": "USD",
    "tags": [
      {
        "text": "VUA VƯƠNG QUỐC ANH",
        "bg": "#666666",
        "color": "#fff"
      }
    ],
    "highlights": [
      {
        "text": "Chỉ Huy Thức Tỉnh Huyền Thoại ×30",
        "isBlue": false
      },
      {
        "text": "Trang Bị Huyền Thoại ×43",
        "isBlue": false
      },
      {
        "text": "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×17",
        "isBlue": false
      },
      {
        "text": "Minh Văn Đặc Biệt ×3",
        "isBlue": false
      },
      {
        "text": "Minh Văn Hiếm ×8",
        "isBlue": false
      },
      {
        "text": "Số Dư Xu Lung Linh 13",
        "isBlue": true
      },
      {
        "text": "Trang Hộ Chiếu 31",
        "isBlue": true
      },
      {
        "text": "Tượng Chỉ Huy Huyền Thoại ?40",
        "isBlue": true
      }
    ],
    "commanders": [
      {
        "name": "Attila",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/cd227a1617249a416a2adc5320abb135294e40c7951c61ed27ff25f8fa55222e.png"
      },
      {
        "name": "Bạch Khởi",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/ff4aa5c29a1fcc535d46fd99aabef2ab98cf89f247851f45339d6558ae771118.png"
      },
      {
        "name": "Tần Thủy Hoàng",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/8dcee1d8d8c194a84dc0aebeac4baaf412b4d2c149e53d5f30bb1a71be637e95.png"
      },
      {
        "name": "Hoắc Khứ Bệnh",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/c18858a9204410ea292b33c0727998aa5083d1146571f68ca05f7d47072b8974.png"
      },
      {
        "name": "Lưu Triệt",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/16cdd9fe93503d10a31cbcb24c20aa9a6df1a644d2a22564a85d456b2bd17ae5.png"
      }
    ],
    "all_commanders": [
      "Attila",
      "Bạch Khởi",
      "Tần Thủy Hoàng",
      "Hoắc Khứ Bệnh",
      "Lưu Triệt",
      "Arthur Pendragon",
      "Trajan",
      "Seondeok",
      "Joan nhà Arc",
      "Gia Cát Lượng",
      "Ragnar Lodbrok",
      "Boudica",
      "Hermann",
      "Heraclius",
      "Scipio Africanus",
      "Alexander Nevsky",
      "Justinian I",
      "William I",
      "Hạng Vũ",
      "Quan Vũ",
      "Mộc Lan",
      "Æthelflæd",
      "Tào Tháo",
      "Richard đệ nhất",
      "Alexander Đại đế",
      "Charles Martel",
      "Mehmed II",
      "Ishida Mitsunari",
      "Cleopatra VII",
      "Subutai"
    ],
    "avatar": "https://plat-fau-global.lilithgame.com/p/astc/IM/10043/0/250358116/2026-04-17/4E5E4A2150871BAA556DB0E034593947_250x250.jpg",
    "phase": "sell",
    "listing_type": "designated",
    "role_status": "can_migrate",
    "order_id": "LTP340504542026",
    "time_left": "Còn lại 5 ngày 7 giờ"
  },
  {
    "id": "15590441",
    "name": "WP ANDA",
    "title": "Chỉ Huy Bộ Binh",
    "server": "#2322",
    "can_migrate": true,
    "level": 25,
    "power": 126690958,
    "power_fmt": "126,690,958",
    "vip": 19,
    "kill_points": 11715220903,
    "kill_fmt": "11,715,220,903",
    "price": 179900.0,
    "price_fmt": "179,900",
    "price_vnd_fmt": "4,569,460,000 ₫",
    "currency": "USD",
    "tags": [
      {
        "text": "Chơi",
        "bg": "#F56C6C",
        "color": "#fff"
      },
      {
        "text": "VUA VƯƠNG QUỐC ANH",
        "bg": "#666666",
        "color": "#fff"
      }
    ],
    "highlights": [
      {
        "text": "Chỉ Huy Thức Tỉnh Huyền Thoại ×60",
        "isBlue": false
      },
      {
        "text": "Trang Bị Huyền Thoại ×58",
        "isBlue": false
      },
      {
        "text": "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×13",
        "isBlue": false
      },
      {
        "text": "Minh Văn Đặc Biệt ×3",
        "isBlue": false
      },
      {
        "text": "Minh Văn Hiếm ×10",
        "isBlue": false
      },
      {
        "text": "Trang Hộ Chiếu 128",
        "isBlue": true
      },
      {
        "text": "Tượng Chỉ Huy Huyền Thoại ?981",
        "isBlue": true
      }
    ],
    "commanders": [
      {
        "name": "Gorgo",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/ec0c6da23553bfc3b9f575cd9a55134a3db8ad0dc9004749f28b4a109604ba28.png"
      },
      {
        "name": "Quan Vũ",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/3201a48e21093dbeed9a3bbbe59a6e87856f2c16e198db1610f98b65e5512423.png"
      },
      {
        "name": "Choi Young",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/1976620065601b1ed254b57ec7cfc378be19e2ad436ee2cbd11d4b90aa9faf3b.png"
      },
      {
        "name": "Bạch Khởi",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/ff4aa5c29a1fcc535d46fd99aabef2ab98cf89f247851f45339d6558ae771118.png"
      },
      {
        "name": "Tôn Tử",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/e04045629e2e92b135e81723f715a0d18d6d6e379d186ccce8ba69973e2226d5.png"
      }
    ],
    "all_commanders": [
      "Gorgo",
      "Quan Vũ",
      "Choi Young",
      "Bạch Khởi",
      "Tôn Tử",
      "Hoắc Khứ Bệnh",
      "Eleanor xứ Aquitaine",
      "Margaret I",
      "Scipio Aemilianus",
      "Attila",
      "Arthur Pendragon",
      "Shajar al-Durr",
      "Hector",
      "William Wallace",
      "Lưu Triệt",
      "Tariq ibn Ziyad",
      "Heraclius",
      "Tokugawa Ieyasu",
      "Ramesses II",
      "Joan nhà Arc",
      "Sargon Đại Đế",
      "Gilgamesh",
      "Artemisia I",
      "Gia Cát Lượng",
      "Jadwiga",
      "William I",
      "Æthelflæd",
      "Ivar",
      "Yi Sun-sin",
      "Minamoto no Yoshitsune",
      "Constantine đệ nhất",
      "Babur",
      "Saladin",
      "Theodora",
      "Amanitore",
      "Harald Sigurdsson",
      "Scipio Africanus",
      "Boudica",
      "Takeda Shingen",
      "Zenobia",
      "Alexander Nevsky",
      "Leonidas đệ nhất",
      "Seondeok",
      "Cheok Jun-gyeong",
      "Flavius Aetius",
      "Kʼinich Janaabʼ Pakal",
      "Ragnar Lodbrok",
      "Julius Caesar",
      "Ishida Mitsunari",
      "Võ Tắc Thiên",
      "Edward của Woodstock",
      "Mộc Lan",
      "Tomyris",
      "Tào Tháo",
      "Yi Seong-Gye",
      "Richard đệ nhất",
      "Alexander Đại đế",
      "Charles Martel",
      "El Cid",
      "Cleopatra VII"
    ],
    "avatar": "https://imimg.lilithcdn.com/llc_avatar/15590441/21/02/13/5e0c6cb125b498df_800x800.jpg",
    "phase": "preview",
    "listing_type": "normal",
    "role_status": "can_migrate",
    "order_id": "LTP155904412026",
    "time_left": "Còn lại 4 ngày 6 giờ"
  },
  {
    "id": "29586794",
    "name": "NMD丶Jyerith",
    "title": "Chỉ Huy Cung Thủ",
    "server": "#1109",
    "can_migrate": true,
    "level": 25,
    "power": 109665659,
    "power_fmt": "109,665,659",
    "vip": 17,
    "kill_points": 12238631103,
    "kill_fmt": "12,238,631,103",
    "price": 2696.41,
    "price_fmt": "2,696.41",
    "price_vnd_fmt": "68,488,814 ₫",
    "currency": "USD",
    "tags": [
      {
        "text": "BẢN ANH HÙNG CA",
        "bg": "#666666",
        "color": "#fff"
      }
    ],
    "highlights": [
      {
        "text": "Chỉ Huy Thức Tỉnh Huyền Thoại ×36",
        "isBlue": false
      },
      {
        "text": "Trang Bị Huyền Thoại ×40",
        "isBlue": false
      },
      {
        "text": "Trang Bị Tài Năng Đặc Biệt Huyền Thoại ×13",
        "isBlue": false
      },
      {
        "text": "Minh Văn Đặc Biệt ×7",
        "isBlue": false
      },
      {
        "text": "Minh Văn Hiếm ×16",
        "isBlue": false
      },
      {
        "text": "Số Dư Xu Lung Linh 5",
        "isBlue": true
      },
      {
        "text": "Trang Hộ Chiếu 109",
        "isBlue": true
      },
      {
        "text": "Tượng Chỉ Huy Huyền Thoại ?2295",
        "isBlue": true
      }
    ],
    "commanders": [
      {
        "name": "Tần Thủy Hoàng",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/8dcee1d8d8c194a84dc0aebeac4baaf412b4d2c149e53d5f30bb1a71be637e95.png"
      },
      {
        "name": "Gorgo",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/ec0c6da23553bfc3b9f575cd9a55134a3db8ad0dc9004749f28b4a109604ba28.png"
      },
      {
        "name": "Gia Cát Lượng",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/974519a0df74bfa3422cddcbde133e89d2ee2a1db6ee4a00a654fd107cf30d64.png"
      },
      {
        "name": "Arthur Pendragon",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/d55c4297fe47cf8f05c5891aa406cec8bdfa2d9889f61ae71c33257cf77ad7c0.png"
      },
      {
        "name": "Lưu Triệt",
        "img": "https://static.farlicdn.com/p/trade-web/2104267/16cdd9fe93503d10a31cbcb24c20aa9a6df1a644d2a22564a85d456b2bd17ae5.png"
      }
    ],
    "all_commanders": [
      "Tần Thủy Hoàng",
      "Gorgo",
      "Gia Cát Lượng",
      "Arthur Pendragon",
      "Lưu Triệt",
      "Bạch Khởi",
      "Tôn Tử",
      "Joan nhà Arc",
      "Scipio Africanus",
      "Alexander Nevsky",
      "Nebuchadnezzar II",
      "Attila",
      "Shapur I",
      "Henry V",
      "Ashurbanipal",
      "Boudica",
      "Cyrus Đại Đế",
      "Ramesses II",
      "Hermann",
      "Artemisia I",
      "Gilgamesh",
      "Tào Tháo",
      "Æthelflæd",
      "Yi Seong-Gye",
      "Charles Martel",
      "Tomyris",
      "Heraclius",
      "Mộc Lan",
      "Achilles",
      "Philip Đệ Nhị",
      "Takeda Shingen",
      "El Cid",
      "Seondeok",
      "Ishida Mitsunari",
      "Frederick đệ nhất",
      "Cleopatra VII"
    ],
    "avatar": "https://plat-fau-global.lilithgame.com/p/astc/IM/10043/0/3686865/2026-05-09/E2F6562EF22C4D19EE4EA2CB5DE6B128_250x250.jpg",
    "phase": "preview",
    "listing_type": "designated",
    "role_status": "can_migrate",
    "order_id": "LTP295867942026",
    "time_left": "Còn lại 3 ngày 5 giờ"
  }
];

  // 2. APPLICATION STATE
  const state = {
    phase: 'sell', // 'sell' | 'preview'
    listingType: 'all', // 'all' | 'normal' | 'designated'
    roleStatus: 'all', // 'all' | 'can_migrate'
    minPrice: null,
    maxPrice: null,
    searchId: '',
    usableOnly: false,
    sortBy: 'default', // 'default' | 'price_asc' | 'price_desc' | 'power_desc' | 'vip_desc'
    currentPage: 1,
    itemsPerPage: 5,
    favorites: new Set(JSON.parse(localStorage.getItem('wontrade_favs') || '[]')),
    activeDropdown: null
  };

  // 3. DOM ELEMENTS CACHE
  const DOM = {
    tabSell: document.getElementById('tab-sell'),
    tabPreview: document.getElementById('tab-preview'),
    productsContainer: document.getElementById('products-container'),
    totalCountSpan: document.getElementById('total-count-text'),
    paginationContainer: document.getElementById('pagination-container'),
    resetAllBtn: document.getElementById('reset-all-btn'),
    usableOnlyCheckbox: document.getElementById('usable-only-checkbox'),
    usableOnlyCheckmark: document.getElementById('usable-only-checkmark'),
    minPriceInput: document.getElementById('min-price-input'),
    maxPriceInput: document.getElementById('max-price-input'),
    searchIdInput: document.getElementById('search-id-input'),
    // Dropdowns
    listingTypeTrigger: document.getElementById('listing-type-trigger'),
    listingTypeText: document.getElementById('listing-type-text'),
    listingTypeMenu: document.getElementById('listing-type-menu'),
    roleStatusTrigger: document.getElementById('role-status-trigger'),
    roleStatusText: document.getElementById('role-status-text'),
    roleStatusMenu: document.getElementById('role-status-menu'),
    sortTrigger: document.getElementById('sort-trigger'),
    sortText: document.getElementById('sort-text'),
    sortMenu: document.getElementById('sort-menu'),
    gameTrigger: document.getElementById('game-trigger'),
    gameMenu: document.getElementById('game-menu'),
    // Modals
    modalDetail: document.getElementById('modal-detail'),
    modalDetailBody: document.getElementById('modal-detail-body'),
    modalDetailClose: document.getElementById('modal-detail-close'),
    modalSell: document.getElementById('modal-sell'),
    modalSellClose: document.getElementById('modal-sell-close'),
    btnSellHeader: document.getElementById('btn-sell-header'),
    modalFilter: document.getElementById('modal-filter'),
    modalFilterClose: document.getElementById('modal-filter-close'),
    btnAllFilters: document.getElementById('btn-all-filters'),
    // Swiper
    swiperTrack: document.getElementById('swiper-track'),
    swiperDots: document.querySelectorAll('.adm-page-indicator-dot'),
    // Floating tools
    btnScrollTop: document.getElementById('btn-scroll-top'),
    btnCustomerService: document.getElementById('btn-customer-service'),
    btnFeedback: document.getElementById('btn-feedback'),
    modalSupport: document.getElementById('modal-support'),
    modalSupportClose: document.getElementById('modal-support-close')
  };

  // 4. TOAST NOTIFICATION UTILITY
  function showToast(message, type = 'info') {
    let toast = document.getElementById('custom-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'custom-toast';
      toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 z-[10000] px-5 py-3 rounded-xl text-white font-medium shadow-2xl flex items-center space-x-2 transition-all duration-300 opacity-0 pointer-events-none translate-y-4';
      document.body.appendChild(toast);
    }
    
    toast.style.background = type === 'success' ? '#10B981' : type === 'warning' ? '#F59E0B' : '#1F2937';
    toast.innerHTML = `
      <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        ${type === 'success' ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>' : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>'}
      </svg>
      <span>${message}</span>
    `;
    
    toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
    toast.classList.add('opacity-100', 'translate-y-0');
    
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('opacity-100', 'translate-y-0');
      toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
    }, 2600);
  }

  // 5. FILTER & SORT ENGINE
  function getFilteredProducts() {
    return PRODUCTS.filter(item => {
      // Phase filter
      if (item.phase !== state.phase) return false;

      // Listing type
      if (state.listingType !== 'all' && item.listing_type !== state.listingType) return false;

      // Role status
      if (state.roleStatus !== 'all' && item.role_status !== state.roleStatus) return false;

      // Usable only
      if (state.usableOnly && !item.can_migrate) return false;

      // Price filter
      if (state.minPrice !== null && !isNaN(state.minPrice) && item.price < state.minPrice) return false;
      if (state.maxPrice !== null && !isNaN(state.maxPrice) && item.price > state.maxPrice) return false;

      // Search ID or Keyword
      if (state.searchId.trim()) {
        const q = state.searchId.trim().toLowerCase();
        const matchId = String(item.id).includes(q);
        const matchServer = item.server.toLowerCase().includes(q);
        const matchName = item.name.toLowerCase().includes(q);
        const matchCmd = item.commanders.some(c => c.name.toLowerCase().includes(q));
        if (!matchId && !matchServer && !matchName && !matchCmd) return false;
      }

      return true;
    }).sort((a, b) => {
      switch (state.sortBy) {
        case 'price_asc': return a.price - b.price;
        case 'price_desc': return b.price - a.price;
        case 'power_desc': return b.power - a.power;
        case 'vip_desc': return b.vip - a.vip;
        default: return 0;
      }
    });
  }

  // 6. RENDER PRODUCTS
  function renderProducts() {
    const filtered = getFilteredProducts();
    const total = filtered.length;
    DOM.totalCountSpan.textContent = `Tổng số: ${total} vật phẩm`;

    const totalPages = Math.ceil(total / state.itemsPerPage) || 1;
    if (state.currentPage > totalPages) state.currentPage = totalPages;
    const startIndex = (state.currentPage - 1) * state.itemsPerPage;
    const pageItems = filtered.slice(startIndex, startIndex + state.itemsPerPage);

    if (pageItems.length === 0) {
      DOM.productsContainer.innerHTML = `
        <div class="bg-white rounded-2xl p-16 text-center my-4 flex flex-col items-center justify-center border border-gray-100 shadow-xs">
          <svg class="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3 class="text-lg font-semibold text-gray-700 mb-1">Không tìm thấy vật phẩm phù hợp</h3>
          <p class="text-sm text-gray-400 mb-5">Thử nới lỏng bộ lọc hoặc tìm kiếm với từ khóa khác</p>
          <button id="empty-reset-btn" class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-medium transition-all shadow-md hover:shadow-lg">
            Cài lại tất cả bộ lọc
          </button>
        </div>
      `;
      const btn = document.getElementById('empty-reset-btn');
      if (btn) btn.addEventListener('click', resetAllFilters);
      renderPagination(total, totalPages);
      return;
    }

    let html = '';
    pageItems.forEach(item => {
      const isFav = state.favorites.has(item.id);
      const tagBadgesHtml = item.tags.map(t => `
        <div class="font-normal rounded-md h-5 p-1.5 text-xs font-pingfang-regular flex justify-center items-center gap-1 mr-1 mt-1" style="background-color: ${t.bg}; color: ${t.color}">
          ${t.text}
        </div>
      `).join('');

      const highlightsHtml = item.highlights.map(h => {
        const colorClass = h.isBlue ? 'bg-[#F5FAFF] text-[#7AA4D6]' : 'bg-[#FFF7E9] text-[#FE7435]';
        return `
          <div class="font-normal rounded-md h-5 p-1.5 text-xs font-pingfang-regular flex justify-center items-center gap-1 mr-1 mt-1 ${colorClass} !text-xs">
            ${h.text}
          </div>
        `;
      }).join('');

      const commandersHtml = item.commanders.map(c => `
        <div class="flex flex-col items-center w-[68px] flex-shrink-0 group">
          <div class="w-[68px] h-[68px] rounded-xl overflow-hidden bg-slate-100 border border-gray-100 shadow-2xs transition-transform group-hover:scale-105">
            <img class="w-full h-full object-cover block" src="${c.img}" alt="${c.name}" loading="lazy" />
          </div>
          <p class="text-center mt-1 text-gray-700 text-xs font-pingfang-regular break-words overflow-hidden line-clamp-1 max-w-[68px] font-medium" title="${c.name}">
            ${c.name}
          </p>
        </div>
      `).join('');

      html += `
        <div class="product-card relative cursor-pointer flex flex-col w-full bg-white rounded-2xl px-[40px] py-[30px] my-[10px] transition-all duration-200" data-id="${item.id}">
          <div class="flex space-x-[25px]">
            <!-- Left Info Column -->
            <div class="w-[789px] relative">
              <div class="flex w-full justify-between items-start">
                <div class="max-w-[70%] break-words hyphens-auto pb-1">
                  <div class="relative font-pingfang-medium font-medium text-black-one text-base !text-base !leading-[18px] inline align-middle">
                    ${item.title}
                  </div>
                </div>
                <div class="flex flex-col items-end absolute right-0 top-0">
                  <div class="font-pingfang-regular font-bold text-red-primary">
                    <span class="text-[20px] mr-1">$</span><span class="text-[20px]">${item.price_fmt}</span>
                  </div>
                  <span class="text-xs text-gray-400 font-normal">≈ ${item.price_vnd_fmt}</span>
                </div>
              </div>

              <!-- Badges -->
              <div class="flex items-center flex-wrap mt-1">
                ${tagBadgesHtml}
              </div>

              <!-- Server & Migration -->
              <div class="flex flex-row flex-wrap items-center mt-1">
                <div class="flex flex-row flex-nowrap items-center">
                  <div class="text-sm font-pingfang-regular text-gray-two font-normal my-1 text-[#666]">
                    ${item.server}
                  </div>
                  <div class="w-[1px] h-3 bg-gray-four rounded mx-1"></div>
                </div>
                <div class="flex flex-row flex-nowrap items-center">
                  <div class="text-xs font-pingfang-regular text-gray-two font-normal !text-sm text-[#52c41a] flex items-center">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#52c41a] inline-block mr-1"></span> Có thể nhập cư
                  </div>
                </div>
              </div>

              <!-- Character Stats -->
              <div class="flex flex-row flex-wrap items-center mt-1">
                <div class="flex flex-row flex-nowrap items-center">
                  <span class="text-sm font-pingfang-regular text-gray-two font-normal">Cấp độ ${item.level}</span>
                  <div class="w-[1px] h-3 bg-gray-four rounded mx-1"></div>
                </div>
                <div class="flex flex-row flex-nowrap items-center">
                  <span class="text-sm font-pingfang-regular text-gray-two font-normal">Sức mạnh <strong class="text-gray-800 font-semibold">${item.power_fmt}</strong></span>
                  <div class="w-[1px] h-3 bg-gray-four rounded mx-1"></div>
                </div>
                <div class="flex flex-row flex-nowrap items-center">
                  <span class="text-sm font-pingfang-regular text-gray-two font-normal">VIP <strong class="text-[#D30000] font-semibold">${item.vip}</strong></span>
                  <div class="w-[1px] h-3 bg-gray-four rounded mx-1"></div>
                </div>
                <div class="flex flex-row flex-nowrap items-center">
                  <span class="text-sm font-pingfang-regular text-gray-two font-normal">Điểm Tiêu Diệt <strong class="text-gray-800 font-semibold">${item.kill_fmt}</strong></span>
                </div>
              </div>

              <!-- Highlights Pills -->
              <div class="flex flex-row flex-wrap mb-1 mt-2 !text-xs">
                ${highlightsHtml}
              </div>

              <!-- Time Left Notice -->
              <div class="text-xs text-gray-400 mt-2 flex items-center">
                <svg class="w-3.5 h-3.5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                ${item.time_left}
              </div>
            </div>

            <!-- Divider -->
            <div class="w-[1px] h-[127px] bg-[#f4f4f4] my-auto"></div>

            <!-- Right Commanders Roster -->
            <div class="w-[410px] flex flex-col justify-between items-end">
              <div class="flex items-center justify-between w-full">
                ${commandersHtml}
              </div>

              <!-- Lineup Badge & Action Buttons -->
              <div class="mt-3 flex items-center justify-between w-full pt-2 border-t border-gray-50">
                <div class="flex items-center text-xs text-[#666] font-medium bg-gray-50 px-2 py-1 rounded-md">
                  <img src="https://static.farlicdn.com/p/trade-web/0.1.0/_next/static/media/lineup.d3c8d5da.png" class="w-4 h-4 mr-1 object-contain" alt="lineup" />
                  <span>Đội hình tinh nhuệ ×5</span>
                </div>

                <div class="flex items-center space-x-2">
                  <button class="fav-btn p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-red-500 transition-all ${isFav ? 'active !text-red-500' : ''}" data-fav-id="${item.id}" title="Yêu thích">
                    <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </button>
                  <button class="btn-detail px-4 py-1.5 rounded-lg bg-gray-100 hover:bg-[#D30000] text-gray-700 hover:text-white text-xs font-semibold transition-all" data-id="${item.id}">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    DOM.productsContainer.innerHTML = html;
    renderPagination(total, totalPages);
    attachCardListeners();
  }

  // 7. RENDER PAGINATION
  function renderPagination(total, totalPages) {
    if (totalPages <= 1) {
      DOM.paginationContainer.innerHTML = '';
      return;
    }

    let pagesHtml = '';
    for (let i = 1; i <= totalPages; i++) {
      const isActive = i === state.currentPage;
      pagesHtml += `
        <li title="${i}" class="ant-pagination-item ant-pagination-item-${i} ${isActive ? 'ant-pagination-item-active' : ''}" data-page="${i}" tabindex="0">
          <a>${i}</a>
        </li>
      `;
    }

    DOM.paginationContainer.innerHTML = `
      <div class="flex justify-end mt-4 items-center">
        <ul class="ant-pagination css-hg1c5x">
          <li title="Trang trước" class="ant-pagination-prev ${state.currentPage === 1 ? 'ant-pagination-disabled' : ''}" id="page-prev-btn">
            <button class="ant-pagination-item-link" type="button" ${state.currentPage === 1 ? 'disabled' : ''}>
              <span class="anticon anticon-left">
                <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                  <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
                </svg>
              </span>
            </button>
          </li>
          ${pagesHtml}
          <li title="Trang tiếp" class="ant-pagination-next ${state.currentPage === totalPages ? 'ant-pagination-disabled' : ''}" id="page-next-btn">
            <button class="ant-pagination-item-link" type="button" ${state.currentPage === totalPages ? 'disabled' : ''}>
              <span class="anticon anticon-right">
                <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                  <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.86 31.86 0 000-50.4z"></path>
                </svg>
              </span>
            </button>
          </li>
        </ul>
      </div>
    `;

    DOM.paginationContainer.querySelectorAll('.ant-pagination-item').forEach(el => {
      el.addEventListener('click', () => {
        const p = parseInt(el.dataset.page);
        if (p && p !== state.currentPage) {
          state.currentPage = p;
          renderProducts();
          window.scrollTo({ top: 400, behavior: 'smooth' });
        }
      });
    });

    const prevBtn = document.getElementById('page-prev-btn');
    if (prevBtn && state.currentPage > 1) {
      prevBtn.addEventListener('click', () => {
        state.currentPage--;
        renderProducts();
        window.scrollTo({ top: 400, behavior: 'smooth' });
      });
    }

    const nextBtn = document.getElementById('page-next-btn');
    if (nextBtn && state.currentPage < totalPages) {
      nextBtn.addEventListener('click', () => {
        state.currentPage++;
        renderProducts();
        window.scrollTo({ top: 400, behavior: 'smooth' });
      });
    }
  }

  // 8. CARD CLICK & FAVORITE LISTENERS
  function attachCardListeners() {
    DOM.productsContainer.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const favBtn = e.target.closest('.fav-btn');
        if (favBtn) {
          e.stopPropagation();
          const favId = parseInt(favBtn.dataset.favId);
          toggleFavorite(favId);
          return;
        }
        const id = parseInt(card.dataset.id);
        openDetailModal(id);
      });
    });
  }

  function toggleFavorite(id) {
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
      showToast('Đã bỏ yêu thích tài khoản #' + id, 'info');
    } else {
      state.favorites.add(id);
      showToast('Đã lưu vào danh sách yêu thích!', 'success');
    }
    localStorage.setItem('wontrade_favs', JSON.stringify(Array.from(state.favorites)));
    renderProducts();
  }

  // 9. MODAL: ACCOUNT DETAIL VIEW
  function openDetailModal(id) {
    const item = PRODUCTS.find(p => p.id === id);
    if (!item) return;

    const allHeroesHtml = item.all_commanders.map(name => `
      <div class="flex items-center p-2 rounded-xl bg-gray-50 border border-gray-100 hover:border-red-200 transition-all">
        <span class="w-2 h-2 rounded-full bg-amber-500 mr-2 flex-shrink-0"></span>
        <span class="text-xs font-medium text-gray-800 break-words">${name}</span>
      </div>
    `).join('');

    const highlightsHtml = item.highlights.map(h => {
      const colorClass = h.isBlue ? 'bg-[#F5FAFF] text-[#7AA4D6] border-blue-100' : 'bg-[#FFF7E9] text-[#FE7435] border-amber-100';
      return `
        <span class="px-3 py-1 rounded-full ${colorClass} text-xs font-semibold border">
          ${h.text}
        </span>
      `;
    }).join('');

    DOM.modalDetailBody.innerHTML = `
      <div class="space-y-6">
        <!-- Header Profile Banner -->
        <div class="flex items-start justify-between pb-6 border-b border-gray-100">
          <div class="flex items-center space-x-4">
            <img src="${item.avatar}" alt="${item.name}" class="w-16 h-16 rounded-2xl object-cover border-2 border-red-500 shadow-md flex-shrink-0" />
            <div>
              <div class="flex items-center space-x-2">
                <h2 class="text-2xl font-bold text-gray-900">${item.name}</h2>
                <span class="px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-800">VIP ${item.vip}</span>
                <span class="px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-800">Đã xác minh</span>
              </div>
              <div class="flex items-center space-x-3 text-sm text-gray-500 mt-1">
                <span>Vương quốc: <strong class="text-gray-800 font-semibold">${item.server}</strong></span>
                <span>•</span>
                <span>ID nhân vật: <code class="text-xs font-mono bg-gray-100 px-1 py-0.5 rounded">${item.id}</code></span>
                <span>•</span>
                <span>Cấp độ: <strong class="text-gray-800 font-semibold">${item.level}</strong></span>
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-3xl font-extrabold text-[#D30000]">$${item.price_fmt}</div>
            <div class="text-sm text-gray-500">≈ ${item.price_vnd_fmt}</div>
          </div>
        </div>

        <!-- Highlights tags -->
        <div class="flex flex-wrap gap-2">
          ${highlightsHtml}
        </div>

        <!-- 4 Major Stat Cards -->
        <div class="grid grid-cols-4 gap-4">
          <div class="p-4 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-100">
            <div class="text-xs font-medium text-red-600 uppercase tracking-wider">Lực Chiến</div>
            <div class="text-xl font-bold text-gray-900 mt-1">${item.power_fmt}</div>
          </div>
          <div class="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100">
            <div class="text-xs font-medium text-amber-600 uppercase tracking-wider">Điểm Tiêu Diệt</div>
            <div class="text-xl font-bold text-gray-900 mt-1">${item.kill_fmt}</div>
          </div>
          <div class="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
            <div class="text-xs font-medium text-blue-600 uppercase tracking-wider">Tướng Thức Tỉnh</div>
            <div class="text-xl font-bold text-gray-900 mt-1">${item.all_commanders.length} Chỉ Huy</div>
          </div>
          <div class="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
            <div class="text-xs font-medium text-emerald-600 uppercase tracking-wider">Nhập Cư</div>
            <div class="text-xl font-bold text-gray-900 mt-1">Sẵn sàng</div>
          </div>
        </div>

        <!-- Awakened Commanders Full Grid -->
        <div>
          <h4 class="text-base font-bold text-gray-900 mb-3 flex items-center">
            <span class="w-2.5 h-2.5 rounded-full bg-[#D30000] mr-2"></span>
            Danh Sách Tướng Đã Thức Tỉnh (${item.all_commanders.length})
          </h4>
          <div class="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-48 overflow-y-auto pr-1">
            ${allHeroesHtml}
          </div>
        </div>

        <!-- Lilith Guarantee Banner -->
        <div class="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
              ✓
            </div>
            <div>
              <div class="font-bold text-sm text-gray-900">Bảo đảm chính thức 100% từ Lilith Games</div>
              <div class="text-xs text-gray-500">Tài khoản giao dịch qua hệ thống ủy thác chính thức. Bàn giao tự động qua mã OTP Lilith Passport.</div>
            </div>
          </div>
          <span class="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
            Bảo hiểm 100%
          </span>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center space-x-4 pt-4 border-t border-gray-100">
          <button id="btn-modal-buy" class="flex-1 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl text-center">
            Tiến Hành Mua Ngay
          </button>
          <button id="btn-modal-fav" class="px-5 py-3.5 rounded-xl font-semibold border border-gray-200 hover:bg-gray-50 text-gray-700 transition-all flex items-center space-x-2">
            <svg class="w-5 h-5 ${state.favorites.has(item.id) ? 'fill-red-500 text-red-500' : 'fill-none text-gray-400'}" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
            <span>${state.favorites.has(item.id) ? 'Đã yêu thích' : 'Yêu thích'}</span>
          </button>
          <button id="btn-modal-share" class="px-4 py-3.5 rounded-xl font-semibold border border-gray-200 hover:bg-gray-50 text-gray-700 transition-all" title="Sao chép liên kết">
            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
            </svg>
          </button>
        </div>
      </div>
    `;

    DOM.modalDetail.classList.add('show');

    document.getElementById('btn-modal-buy').addEventListener('click', () => {
      closeModals();
      showToast('Đang chuyển hướng sang cổng thanh toán Escrow chính thức của Lilith...', 'success');
    });

    document.getElementById('btn-modal-fav').addEventListener('click', () => {
      toggleFavorite(item.id);
      openDetailModal(item.id);
    });

    document.getElementById('btn-modal-share').addEventListener('click', () => {
      navigator.clipboard?.writeText(window.location.origin + '?id=' + item.id);
      showToast('Đã sao chép liên kết nhân vật vào clipboard!', 'success');
    });
  }

  function closeModals() {
    document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('show'));
  }

  // 10. SWIPER (BANNER CAROUSEL)
  function initSwiper() {
    const slides = [
      {
        img: 'https://plat-fau-global.lilithgame.com/p/LTP/ltp/admin/54c08be7-d0fc-48ed-beef-1de99f76e9d7.jpg?x-oss-process=image/format,webp',
        alt: 'Sự Kiện Wontrade'
      },
      {
        img: 'https://static.farlicdn.com/p/LTP/ltp/admin/764fcf7f-bcb1-46e6-ac38-1934296fe603.jpg?x-oss-process=image/format,webp',
        alt: 'KYC & Điều chỉnh phí'
      },
      {
        img: 'https://static.farlicdn.com/p/LTP/ltp/admin/96d29156-f1bb-4c4f-9ace-775b1524af85.jpg?x-oss-process=image/format,webp',
        alt: 'Quy định Chuyển nhượng Vương quốc'
      }
    ];

    let currentSlide = 0;
    let timer = null;

    function goToSlide(index) {
      currentSlide = (index + slides.length) % slides.length;
      if (DOM.swiperTrack) {
        DOM.swiperTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
      }
      DOM.swiperDots.forEach((dot, idx) => {
        dot.classList.toggle('adm-page-indicator-dot-active', idx === currentSlide);
      });
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function startAutoPlay() {
      stopAutoPlay();
      timer = setInterval(nextSlide, 4500);
    }

    function stopAutoPlay() {
      if (timer) clearInterval(timer);
    }

    DOM.swiperDots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        goToSlide(idx);
        startAutoPlay();
      });
    });

    const bannerContainer = document.querySelector('.custom-banner');
    if (bannerContainer) {
      bannerContainer.addEventListener('mouseenter', stopAutoPlay);
      bannerContainer.addEventListener('mouseleave', startAutoPlay);

      let startX = 0;
      bannerContainer.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
      bannerContainer.addEventListener('touchend', e => {
        const diff = e.changedTouches[0].clientX - startX;
        if (diff > 50) { goToSlide(currentSlide - 1); startAutoPlay(); }
        else if (diff < -50) { goToSlide(currentSlide + 1); startAutoPlay(); }
      }, { passive: true });
    }

    startAutoPlay();
  }

  // 11. DROPDOWNS CONTROLLER
  function setupDropdown(trigger, menu, textEl, onSelect) {
    if (!trigger || !menu) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.contains('show');
      closeAllDropdowns();
      if (!isOpen) {
        menu.classList.add('show');
        state.activeDropdown = menu;
      }
    });

    menu.querySelectorAll('.custom-dropdown-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.querySelectorAll('.custom-dropdown-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const val = item.dataset.value;
        const label = item.textContent.trim();
        if (textEl) textEl.textContent = label;
        menu.classList.remove('show');
        if (onSelect) onSelect(val, label);
      });
    });
  }

  function closeAllDropdowns() {
    document.querySelectorAll('.custom-dropdown-panel').forEach(p => p.classList.remove('show'));
    state.activeDropdown = null;
  }

  document.addEventListener('click', () => {
    closeAllDropdowns();
  });

  // 12. RESET ALL FILTERS
  function resetAllFilters() {
    state.phase = 'sell';
    state.listingType = 'all';
    state.roleStatus = 'all';
    state.minPrice = null;
    state.maxPrice = null;
    state.searchId = '';
    state.usableOnly = false;
    state.sortBy = 'default';
    state.currentPage = 1;

    if (DOM.minPriceInput) DOM.minPriceInput.value = '';
    if (DOM.maxPriceInput) DOM.maxPriceInput.value = '';
    if (DOM.searchIdInput) DOM.searchIdInput.value = '';
    if (DOM.listingTypeText) DOM.listingTypeText.textContent = 'Không hạn chế';
    if (DOM.roleStatusText) DOM.roleStatusText.textContent = 'Không hạn chế';
    if (DOM.sortText) DOM.sortText.textContent = 'Chung';
    if (DOM.usableOnlyCheckmark) DOM.usableOnlyCheckmark.classList.remove('bg-red-600', 'border-red-600');

    DOM.tabSell.classList.add('filter-tab-active', 'text-black-one');
    DOM.tabSell.classList.remove('text-gray-two');
    DOM.tabPreview.classList.remove('filter-tab-active', 'text-black-one');
    DOM.tabPreview.classList.add('text-gray-two');

    renderProducts();
    showToast('Đã cài lại toàn bộ bộ lọc', 'info');
  }

  // 13. INITIALIZE EVENT HANDLERS
  function initEvents() {
    DOM.tabSell.addEventListener('click', () => {
      if (state.phase === 'sell') return;
      state.phase = 'sell';
      state.currentPage = 1;
      DOM.tabSell.classList.add('filter-tab-active', 'text-black-one');
      DOM.tabSell.classList.remove('text-gray-two');
      DOM.tabPreview.classList.remove('filter-tab-active', 'text-black-one');
      DOM.tabPreview.classList.add('text-gray-two');
      renderProducts();
    });

    DOM.tabPreview.addEventListener('click', () => {
      if (state.phase === 'preview') return;
      state.phase = 'preview';
      state.currentPage = 1;
      DOM.tabPreview.classList.add('filter-tab-active', 'text-black-one');
      DOM.tabPreview.classList.remove('text-gray-two');
      DOM.tabSell.classList.remove('filter-tab-active', 'text-black-one');
      DOM.tabSell.classList.add('text-gray-two');
      renderProducts();
    });

    DOM.resetAllBtn.addEventListener('click', resetAllFilters);

    DOM.usableOnlyCheckbox.addEventListener('click', () => {
      state.usableOnly = !state.usableOnly;
      state.currentPage = 1;
      if (state.usableOnly) {
        DOM.usableOnlyCheckmark.classList.add('bg-red-600', 'border-red-600');
        DOM.usableOnlyCheckmark.innerHTML = '<svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>';
      } else {
        DOM.usableOnlyCheckmark.classList.remove('bg-red-600', 'border-red-600');
        DOM.usableOnlyCheckmark.innerHTML = '';
      }
      renderProducts();
    });

    let priceDebounce = null;
    const handlePriceChange = () => {
      clearTimeout(priceDebounce);
      priceDebounce = setTimeout(() => {
        const minVal = parseFloat(DOM.minPriceInput.value);
        const maxVal = parseFloat(DOM.maxPriceInput.value);
        state.minPrice = !isNaN(minVal) ? minVal : null;
        state.maxPrice = !isNaN(maxVal) ? maxVal : null;
        state.currentPage = 1;
        renderProducts();
      }, 300);
    };

    DOM.minPriceInput.addEventListener('input', handlePriceChange);
    DOM.maxPriceInput.addEventListener('input', handlePriceChange);

    let searchDebounce = null;
    DOM.searchIdInput.addEventListener('input', () => {
      clearTimeout(searchDebounce);
      searchDebounce = setTimeout(() => {
        state.searchId = DOM.searchIdInput.value;
        state.currentPage = 1;
        renderProducts();
      }, 300);
    });

    setupDropdown(DOM.listingTypeTrigger, DOM.listingTypeMenu, DOM.listingTypeText, (val) => {
      state.listingType = val;
      state.currentPage = 1;
      renderProducts();
    });

    setupDropdown(DOM.roleStatusTrigger, DOM.roleStatusMenu, DOM.roleStatusText, (val) => {
      state.roleStatus = val;
      state.currentPage = 1;
      renderProducts();
    });

    setupDropdown(DOM.sortTrigger, DOM.sortMenu, DOM.sortText, (val) => {
      state.sortBy = val;
      renderProducts();
    });

    setupDropdown(DOM.gameTrigger, DOM.gameMenu, null, (val, label) => {
      showToast(`Đang chuyển sang danh mục ${label}`, 'info');
    });

    DOM.btnSellHeader.addEventListener('click', () => {
      DOM.modalSell.classList.add('show');
    });
    DOM.modalSellClose.addEventListener('click', closeModals);

    DOM.btnAllFilters.addEventListener('click', () => {
      DOM.modalFilter.classList.add('show');
    });
    DOM.modalFilterClose.addEventListener('click', closeModals);

    DOM.modalDetailClose.addEventListener('click', closeModals);

    DOM.btnCustomerService.addEventListener('click', () => {
      DOM.modalSupport.classList.add('show');
    });
    if (DOM.modalSupportClose) DOM.modalSupportClose.addEventListener('click', closeModals);

    DOM.btnFeedback.addEventListener('click', () => {
      const feedback = prompt('Góp ý hoặc báo lỗi cho Wontrade:');
      if (feedback && feedback.trim()) {
        showToast('Cảm ơn bạn! Ý kiến đóng góp đã được gửi đến ban quản trị.', 'success');
      }
    });

    document.querySelectorAll('.modal-backdrop').forEach(m => {
      m.addEventListener('click', (e) => {
        if (e.target === m) closeModals();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModals();
    });

    const btnFilterApply = document.getElementById('btn-filter-apply');
    const btnFilterReset = document.getElementById('btn-filter-reset');
    if (btnFilterApply) {
      btnFilterApply.addEventListener('click', () => {
        const minVip = parseInt(document.getElementById('filter-min-vip')?.value || '0');
        const minPower = parseFloat(document.getElementById('filter-min-power')?.value || '0');
        if (minVip > 0) state.sortBy = 'vip_desc';
        closeModals();
        renderProducts();
        showToast('Đã áp dụng bộ lọc nâng cao!', 'success');
      });
    }
    if (btnFilterReset) {
      btnFilterReset.addEventListener('click', () => {
        resetAllFilters();
        closeModals();
      });
    }

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        DOM.btnScrollTop.classList.remove('opacity-0', 'pointer-events-none');
        DOM.btnScrollTop.classList.add('opacity-100');
      } else {
        DOM.btnScrollTop.classList.add('opacity-0', 'pointer-events-none');
        DOM.btnScrollTop.classList.remove('opacity-100');
      }
    }, { passive: true });

    DOM.btnScrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 14. INITIALIZATION
  function init() {
    initSwiper();
    initEvents();
    renderProducts();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
