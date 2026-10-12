/**
 * WONTRADE - Rise of Kingdoms Trading Platform
 * Interactive logic and view simulator
 */

// Commander Portrait SVG Generator (Accurate Rise of Kingdoms style)
const commanderSvgs = {
  arthur: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <radialGradient id="arthurBg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#4a3b2c"/>
        <stop offset="100%" stop-color="#14110d"/>
      </radialGradient>
      <linearGradient id="goldHelm" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff0a6"/>
        <stop offset="50%" stop-color="#d48806"/>
        <stop offset="100%" stop-color="#874d00"/>
      </linearGradient>
    </defs>
    <rect width="100" height="100" fill="url(#arthurBg)"/>
    <!-- Armor & Cape -->
    <path d="M15 95 Q50 75 85 95 L95 100 L5 100 Z" fill="#820014"/>
    <path d="M25 88 Q50 78 75 88 L80 100 L20 100 Z" fill="url(#goldHelm)"/>
    <!-- Face -->
    <ellipse cx="50" cy="52" rx="20" ry="24" fill="#f5c29f"/>
    <!-- Hair -->
    <path d="M30 42 Q32 28 50 28 Q68 28 70 42 Q73 58 70 66 Q67 52 64 50 Q50 48 36 50 Q33 55 30 42 Z" fill="#e6b358"/>
    <!-- Beard -->
    <path d="M37 56 Q50 76 63 56 Q60 74 50 76 Q40 74 37 56 Z" fill="#c7923e"/>
    <!-- Eyes & Brows -->
    <path d="M38 46 Q43 44 48 47" stroke="#68471c" stroke-width="2.5" fill="none"/>
    <path d="M52 47 Q57 44 62 46" stroke="#68471c" stroke-width="2.5" fill="none"/>
    <circle cx="43" cy="50" r="2.5" fill="#262626"/>
    <circle cx="57" cy="50" r="2.5" fill="#262626"/>
    <!-- Nose & Smile -->
    <path d="M50 49 L48 56 L52 56" stroke="#c48259" stroke-width="1.8" fill="none"/>
    <path d="M44 62 Q50 67 56 62" stroke="#873800" stroke-width="2" fill="none"/>
    <!-- Royal Golden Crown -->
    <path d="M28 32 L34 16 L42 26 L50 12 L58 26 L66 16 L72 32 Z" fill="url(#goldHelm)" stroke="#fff" stroke-width="0.8"/>
    <circle cx="50" cy="22" r="2.5" fill="#f5222d"/>
    <circle cx="38" cy="24" r="2" fill="#1890ff"/>
    <circle cx="62" cy="24" r="2" fill="#1890ff"/>
  </svg>`,

  tontu: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <radialGradient id="tontuBg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#3d2a1c"/>
        <stop offset="100%" stop-color="#120c08"/>
      </radialGradient>
      <linearGradient id="goldSilk" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffe58f"/>
        <stop offset="50%" stop-color="#faad14"/>
        <stop offset="100%" stop-color="#874d00"/>
      </linearGradient>
    </defs>
    <rect width="100" height="100" fill="url(#tontuBg)"/>
    <!-- Robe -->
    <path d="M10 95 Q50 72 90 95 L98 100 L2 100 Z" fill="#871400"/>
    <path d="M28 85 L50 98 L72 85 L65 100 L35 100 Z" fill="url(#goldSilk)"/>
    <!-- Face -->
    <ellipse cx="50" cy="52" rx="19" ry="23" fill="#f7caa1"/>
    <!-- Strategist Hat (Ancient Chinese) -->
    <path d="M30 36 L70 36 L66 16 L34 16 Z" fill="#1f1f1f"/>
    <rect x="26" y="32" width="48" height="6" rx="2" fill="url(#goldSilk)"/>
    <circle cx="50" cy="24" r="4" fill="url(#goldSilk)"/>
    <!-- Eyes / Brow (Wise) -->
    <path d="M37 46 Q43 43 47 47" stroke="#262626" stroke-width="2.5" fill="none"/>
    <path d="M53 47 Q57 43 63 46" stroke="#262626" stroke-width="2.5" fill="none"/>
    <circle cx="42" cy="50" r="2" fill="#1f1f1f"/>
    <circle cx="58" cy="50" r="2" fill="#1f1f1f"/>
    <!-- Mustache & Goatee -->
    <path d="M38 58 Q50 63 62 58 Q66 68 62 70 Q50 63 38 70 Z" fill="#262626"/>
    <path d="M47 68 L50 86 L53 68 Z" fill="#262626"/>
  </svg>`,

  achilles: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <radialGradient id="achBg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#4d301c"/>
        <stop offset="100%" stop-color="#140a05"/>
      </radialGradient>
      <linearGradient id="bronze" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff1b8"/>
        <stop offset="50%" stop-color="#d46b08"/>
        <stop offset="100%" stop-color="#612500"/>
      </linearGradient>
    </defs>
    <rect width="100" height="100" fill="url(#achBg)"/>
    <!-- Greek Armor & Crest -->
    <path d="M15 95 Q50 78 85 95 L95 100 L5 100 Z" fill="url(#bronze)"/>
    <!-- Face -->
    <ellipse cx="50" cy="52" rx="19" ry="23" fill="#f3be98"/>
    <!-- Eyes -->
    <circle cx="43" cy="50" r="2.2" fill="#1f1f1f"/>
    <circle cx="57" cy="50" r="2.2" fill="#1f1f1f"/>
    <!-- Spartan / Greek Helmet -->
    <path d="M26 40 Q50 18 74 40 L70 54 Q65 42 58 42 L58 48 L42 48 L42 42 Q35 42 30 54 Z" fill="url(#bronze)"/>
    <!-- Helmet Crest (Red Feather) -->
    <path d="M46 10 Q50 0 54 10 L56 30 L44 30 Z" fill="#cf1322"/>
    <path d="M44 8 Q50 -2 56 8 L54 22 L46 22 Z" fill="#ff4d4f"/>
    <!-- Cheek guards -->
    <path d="M28 46 L34 68 L40 64 L36 46 Z" fill="url(#bronze)"/>
    <path d="M72 46 L66 68 L60 64 L64 46 Z" fill="url(#bronze)"/>
    <!-- Nose guard -->
    <rect x="47" y="40" width="6" height="16" fill="url(#bronze)"/>
  </svg>`,

  tanthuyhoang: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <radialGradient id="tthBg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#3b1d1d"/>
        <stop offset="100%" stop-color="#0f0707"/>
      </radialGradient>
      <linearGradient id="empGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffe7ba"/>
        <stop offset="60%" stop-color="#d48806"/>
        <stop offset="100%" stop-color="#613400"/>
      </linearGradient>
    </defs>
    <rect width="100" height="100" fill="url(#tthBg)"/>
    <!-- Black & Gold Imperial Dragon Robe -->
    <path d="M10 95 Q50 70 90 95 L100 100 L0 100 Z" fill="#141414"/>
    <path d="M30 84 L50 96 L70 84 L65 100 L35 100 Z" fill="url(#empGold)"/>
    <!-- Face -->
    <ellipse cx="50" cy="54" rx="19" ry="23" fill="#f8cfab"/>
    <!-- Beard & mustache -->
    <path d="M38 59 Q50 64 62 59 Q65 72 50 82 Q35 72 38 59 Z" fill="#141414"/>
    <!-- Eyes -->
    <circle cx="43" cy="50" r="2.2" fill="#1f1f1f"/>
    <circle cx="57" cy="50" r="2.2" fill="#1f1f1f"/>
    <!-- Imperial Flat Crown (Mianguan) -->
    <polygon points="18,24 82,24 76,14 24,14" fill="#141414" stroke="url(#empGold)" stroke-width="1.5"/>
    <!-- Hanging jade beads -->
    <line x1="26" y1="24" x2="26" y2="38" stroke="url(#empGold)" stroke-width="1.5" stroke-dasharray="2 2"/>
    <line x1="38" y1="24" x2="38" y2="38" stroke="url(#empGold)" stroke-width="1.5" stroke-dasharray="2 2"/>
    <line x1="50" y1="24" x2="50" y2="40" stroke="url(#empGold)" stroke-width="1.5" stroke-dasharray="2 2"/>
    <line x1="62" y1="24" x2="62" y2="38" stroke="url(#empGold)" stroke-width="1.5" stroke-dasharray="2 2"/>
    <line x1="74" y1="24" x2="74" y2="38" stroke="url(#empGold)" stroke-width="1.5" stroke-dasharray="2 2"/>
  </svg>`,

  scipio: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <radialGradient id="scipioBg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#4a1d1d"/>
        <stop offset="100%" stop-color="#140606"/>
      </radialGradient>
      <linearGradient id="scipioGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fff1b8"/>
        <stop offset="50%" stop-color="#d48806"/>
        <stop offset="100%" stop-color="#5c2e00"/>
      </linearGradient>
    </defs>
    <rect width="100" height="100" fill="url(#scipioBg)"/>
    <!-- Roman General Armor -->
    <path d="M12 95 Q50 72 88 95 L96 100 L4 100 Z" fill="#a8071a"/>
    <circle cx="50" cy="88" r="8" fill="url(#scipioGold)"/>
    <!-- Face -->
    <ellipse cx="50" cy="52" rx="20" ry="24" fill="#f5c29f"/>
    <!-- Eyes -->
    <circle cx="43" cy="50" r="2.2" fill="#1f1f1f"/>
    <circle cx="57" cy="50" r="2.2" fill="#1f1f1f"/>
    <!-- Roman Helmet with Crest -->
    <path d="M25 40 Q50 20 75 40 L72 50 Q50 40 28 50 Z" fill="url(#scipioGold)"/>
    <!-- Red Plume Crest -->
    <path d="M30 18 Q50 2 70 18 L66 26 Q50 14 34 26 Z" fill="#cf1322"/>
    <!-- Laurel Wreath -->
    <circle cx="34" cy="42" r="3" fill="#52c41a"/>
    <circle cx="42" cy="38" r="3" fill="#52c41a"/>
    <circle cx="58" cy="38" r="3" fill="#52c41a"/>
    <circle cx="66" cy="42" r="3" fill="#52c41a"/>
  </svg>`,

  gorgo: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <radialGradient id="gorgoBg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#3d2d47"/>
        <stop offset="100%" stop-color="#120c17"/>
      </radialGradient>
      <linearGradient id="spartanBronze" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffd591"/>
        <stop offset="50%" stop-color="#d46b08"/>
        <stop offset="100%" stop-color="#612500"/>
      </linearGradient>
    </defs>
    <rect width="100" height="100" fill="url(#gorgoBg)"/>
    <path d="M15 95 Q50 78 85 95 L95 100 L5 100 Z" fill="url(#spartanBronze)"/>
    <!-- Face -->
    <ellipse cx="50" cy="52" rx="18" ry="22" fill="#f8cbb0"/>
    <!-- Hair -->
    <path d="M28 40 Q30 20 50 20 Q70 20 72 40 L78 75 Q72 78 70 65 L66 45 Q50 42 34 45 L30 65 Q28 78 22 75 Z" fill="#1f1815"/>
    <!-- Eyes -->
    <circle cx="43" cy="50" r="2.2" fill="#1f1f1f"/>
    <circle cx="57" cy="50" r="2.2" fill="#1f1f1f"/>
    <path d="M45 61 Q50 64 55 61" stroke="#cf1322" stroke-width="2" fill="none"/>
    <!-- Tiara / Helm -->
    <polygon points="32,32 50,22 68,32 64,38 50,32 36,38" fill="url(#spartanBronze)"/>
  </svg>`,

  quanvu: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <radialGradient id="qvBg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#193822"/>
        <stop offset="100%" stop-color="#05140a"/>
      </radialGradient>
    </defs>
    <rect width="100" height="100" fill="url(#qvBg)"/>
    <!-- Green Robe -->
    <path d="M10 95 Q50 72 90 95 L100 100 L0 100 Z" fill="#135200"/>
    <!-- Reddish Warrior Face -->
    <ellipse cx="50" cy="52" rx="19" ry="23" fill="#d46b08"/>
    <!-- Green Warrior Cap -->
    <path d="M30 36 L70 36 L66 18 L34 18 Z" fill="#237804"/>
    <rect x="26" y="32" width="48" height="6" rx="2" fill="#faad14"/>
    <!-- Long Majestic Beard -->
    <path d="M36 58 Q50 64 64 58 Q66 85 50 98 Q34 85 36 58 Z" fill="#141414"/>
    <!-- Phoenix Eyes & Heavy Brows -->
    <path d="M36 45 Q43 40 48 44" stroke="#141414" stroke-width="3" fill="none"/>
    <path d="M52 44 Q57 40 64 45" stroke="#141414" stroke-width="3" fill="none"/>
    <circle cx="43" cy="48" r="2" fill="#fff"/>
    <circle cx="57" cy="48" r="2" fill="#fff"/>
  </svg>`,

  choiyoung: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <radialGradient id="cyBg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#21334f"/>
        <stop offset="100%" stop-color="#09101c"/>
      </radialGradient>
    </defs>
    <rect width="100" height="100" fill="url(#cyBg)"/>
    <!-- Armor -->
    <path d="M12 95 Q50 75 88 95 L96 100 L4 100 Z" fill="#0958d9"/>
    <!-- Face -->
    <ellipse cx="50" cy="52" rx="19" ry="23" fill="#f7caa1"/>
    <!-- Korean General Helm -->
    <path d="M28 36 L72 36 L64 16 L36 16 Z" fill="#262626"/>
    <circle cx="50" cy="14" r="5" fill="#f5222d"/>
    <!-- Eyes & Beard -->
    <circle cx="43" cy="50" r="2" fill="#1f1f1f"/>
    <circle cx="57" cy="50" r="2" fill="#1f1f1f"/>
    <path d="M42 60 Q50 64 58 60 Q56 74 50 78 Q44 74 42 60 Z" fill="#262626"/>
  </svg>`,

  bachkhoi: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <radialGradient id="bkBg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#4a1515"/>
        <stop offset="100%" stop-color="#140303"/>
      </radialGradient>
    </defs>
    <rect width="100" height="100" fill="url(#bkBg)"/>
    <!-- Spiked Iron Armor -->
    <path d="M10 95 Q50 70 90 95 L100 100 L0 100 Z" fill="#262626"/>
    <!-- Face -->
    <ellipse cx="50" cy="52" rx="19" ry="23" fill="#ebd2c0"/>
    <!-- Fierce Spiked Helm -->
    <path d="M26 38 L50 14 L74 38 L68 44 L32 44 Z" fill="#434343" stroke="#f5222d" stroke-width="1"/>
    <!-- Glowing Red Eyes -->
    <circle cx="43" cy="50" r="2.5" fill="#f5222d"/>
    <circle cx="57" cy="50" r="2.5" fill="#f5222d"/>
    <path d="M42 62 Q50 66 58 62" stroke="#262626" stroke-width="2" fill="none"/>
  </svg>`,

  giacatluong: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <radialGradient id="gclBg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#1f3b3b"/>
        <stop offset="100%" stop-color="#071414"/>
      </radialGradient>
    </defs>
    <rect width="100" height="100" fill="url(#gclBg)"/>
    <!-- Taoist Robe -->
    <path d="M10 95 Q50 72 90 95 L100 100 L0 100 Z" fill="#003a8c"/>
    <path d="M30 84 L50 96 L70 84 L65 100 L35 100 Z" fill="#ffffff"/>
    <!-- Face -->
    <ellipse cx="50" cy="52" rx="18" ry="22" fill="#fae0cc"/>
    <!-- Zhuge Liang Hat -->
    <path d="M32 34 L68 34 L64 12 L36 12 Z" fill="#141414"/>
    <rect x="28" y="30" width="44" height="6" rx="2" fill="#5cdbd3"/>
    <!-- Beard -->
    <path d="M45 62 Q50 76 55 62 Q54 82 50 86 Q46 82 45 62 Z" fill="#141414"/>
    <!-- Eyes -->
    <circle cx="43" cy="49" r="2" fill="#1f1f1f"/>
    <circle cx="57" cy="49" r="2" fill="#1f1f1f"/>
  </svg>`,

  luutriet: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <radialGradient id="ltBg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#4d3a1f"/>
        <stop offset="100%" stop-color="#140f06"/>
      </radialGradient>
    </defs>
    <rect width="100" height="100" fill="url(#ltBg)"/>
    <path d="M10 95 Q50 72 90 95 L100 100 L0 100 Z" fill="#d4380d"/>
    <!-- Face -->
    <ellipse cx="50" cy="52" rx="19" ry="23" fill="#f7caa1"/>
    <!-- Royal Imperial Crown -->
    <path d="M28 32 L34 16 L50 12 L66 16 L72 32 Z" fill="#faad14" stroke="#d48806" stroke-width="1.5"/>
    <circle cx="43" cy="50" r="2" fill="#1f1f1f"/>
    <circle cx="57" cy="50" r="2" fill="#1f1f1f"/>
    <path d="M44 64 Q50 68 56 64" stroke="#873800" stroke-width="2" fill="none"/>
  </svg>`,

  alparslan: `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <radialGradient id="alpBg" cx="50%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#3d2a1c"/>
        <stop offset="100%" stop-color="#120c08"/>
      </radialGradient>
    </defs>
    <rect width="100" height="100" fill="url(#alpBg)"/>
    <path d="M12 95 Q50 74 88 95 L96 100 L4 100 Z" fill="#874d00"/>
    <!-- Face -->
    <ellipse cx="50" cy="52" rx="19" ry="23" fill="#f5c29f"/>
    <!-- Turban Helmet -->
    <circle cx="50" cy="28" r="18" fill="#e8d8b5"/>
    <polygon points="46,14 50,4 54,14" fill="#faad14"/>
    <circle cx="43" cy="50" r="2.2" fill="#1f1f1f"/>
    <circle cx="57" cy="50" r="2.2" fill="#1f1f1f"/>
    <!-- Beard -->
    <path d="M38 58 Q50 68 62 58 Q64 78 50 82 Q36 78 38 58 Z" fill="#262626"/>
  </svg>`
};

// Dữ liệu danh sách vật phẩm được nạp từ file js/list.js
// Khi chỉnh sửa sản phẩm, chỉ cần sửa trong file js/list.js mà không cần sửa file index
var mockProducts = window.mockProducts || (typeof mockProducts !== "undefined" ? mockProducts : []);

// Helper: Format Countdown Seconds to Vietnamese string: "07ng 07g 44p"
function formatCountdown(totalSec) {
  if (totalSec <= 0) return "00ng 00g 00p";
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(days)}ng ${pad(hours)}g ${pad(mins)}p`;
}

// Render Products
function renderListings(itemsToRender) {
  const container = document.getElementById("listingsContainer");
  if (!container) return;

  // Tự động cập nhật tổng số vật phẩm hiển thị trên giao diện
  const countLabels = document.querySelectorAll(".item-count-val");
  countLabels.forEach(el => el.textContent = itemsToRender.length);

  if (itemsToRender.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: #86909c;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#bfbfbf" stroke-width="1.6" style="margin-bottom: 14px;">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          <line x1="8" y1="11" x2="14" y2="11"/>
        </svg>
        <div style="font-size: 15px; font-weight: 600; color: #4e5969;">Không tìm thấy vật phẩm phù hợp</div>
        <div style="font-size: 13px; margin-top: 6px;">Vui lòng thử lại với từ khóa hoặc mức giá khác.</div>
      </div>
    `;
    return;
  }

  container.innerHTML = itemsToRender.map(item => {
    // Badges HTML
    const badgesHtml = item.badges.map(b => `
      <span class="${b.type === 'red' ? 'badge-play' : 'badge-dark'}">${b.text}</span>
    `).join("");

    // Tags HTML
    const tagsHtml = item.tags.map(t => `
      <span class="tag-badge ${t.type}">${t.text}</span>
    `).join("");

    // Commanders HTML
    const commandersHtml = item.commanders.map(c => {
      let portraitHtml = "";
      if (c.isImg) {
        portraitHtml = `<img src="assets/arthur.jpg" alt="${c.name}" class="commander-img" onerror="this.outerHTML='${commanderSvgs.arthur.replace(/'/g, "\\'")}'" />`;
      } else {
        portraitHtml = commanderSvgs[c.id] || commanderSvgs.arthur;
      }

      return `
        <div class="commander-item">
          <div class="commander-frame">
            ${portraitHtml}
            <div class="level-badge">${c.level}</div>
          </div>
          <div class="commander-name" title="${c.name}">${c.name}</div>
        </div>
      `;
    }).join("");

    // Gem count icon
    const gemHtml = item.gemMultiplier ? `
      <div class="gem-star-count" title="Hệ số vật phẩm">
        <svg class="gem-icon" viewBox="0 0 24 24" fill="#faad14">
          <polygon points="12,2 19,8 15,22 9,22 5,8"/>
        </svg>
        *${item.gemMultiplier}
      </div>
    ` : "";

    // Formatted price
    const formattedPrice = item.price.toLocaleString("en-US", {
      minimumFractionDigits: item.price % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2
    });

    // Star SVG Icon for favorite button
    const starSvg = item.isFavorited
      ? `<svg class="star-svg active" width="15" height="15" viewBox="0 0 24 24" fill="#faad14" stroke="#faad14" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
      : `<svg class="star-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#86909c" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;

    return `
      <div class="product-card" data-id="${item.id}" onclick="handleItemCardClick(${item.id}, event)" style="cursor: pointer;">
        <!-- Mobile Price Anchor (shown on mobile layout) -->
        <div class="mobile-price-container">
          <div class="price-text">$ ${formattedPrice}</div>
          <button class="btn-fav ${item.isFavorited ? 'active' : ''}" onclick="toggleFavorite(${item.id})" aria-label="Thích">
            ${starSvg}
            <span>${item.favorites}</span>
          </button>
        </div>

        <!-- Left Column -->
        <div class="card-left">
          <div class="card-title-row">
            <span class="card-title">${item.title}</span>
            ${badgesHtml}
          </div>
          <div class="kingdom-info">
            <span>${item.info.split('|')[0].trim()}</span> | 
            <span class="immigration">${item.info.split('|')[1]?.trim() || ''}</span>
          </div>
          <div class="stats-info">${item.stats}</div>
          <div class="tags-wrap">
            ${tagsHtml}
          </div>
        </div>

        <!-- Right Column -->
        <div class="card-right">
          <!-- Desktop Price & Fav row -->
          <div class="price-fav-row">
            <div class="price-text">$ ${formattedPrice}</div>
            <button class="btn-fav ${item.isFavorited ? 'active' : ''}" onclick="toggleFavorite(${item.id})" aria-label="Thích">
              ${starSvg}
              <span>${item.favorites}</span>
            </button>
          </div>

          <!-- Commanders Row -->
          <div class="commanders-row">
            ${commandersHtml}
            ${gemHtml}
          </div>

          <!-- Time Countdown -->
          <div class="time-status">
            <svg class="time-clock-svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>Giai đoạn bán Thời gian còn lại: <strong class="timer-tick" data-sec="${item.countdownSeconds}">${formatCountdown(item.countdownSeconds)}</strong></span>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Click Item to Record History
window.handleItemCardClick = function(id, event) {
  if (event && (event.target.closest('.btn-fav') || event.target.tagName === 'BUTTON')) return;

  const item = mockProducts.find(p => p.id === id);
  if (item) {
    try {
      const STORAGE_KEY = 'wontrade_viewed_history';
      let history = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      history = history.filter(h => h.id !== item.id);
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} ${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
      history.unshift({
        id: item.id,
        title: item.title,
        price: item.price,
        info: item.info,
        stats: item.stats,
        badges: item.badges,
        tags: item.tags,
        commanders: item.commanders,
        viewedAt: timeStr
      });
      if (history.length > 50) history = history.slice(0, 50);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    } catch(e) {
      console.error(e);
    }
    showActionNotice(`Đã lưu #${item.id} vào lịch sử xem`);
  }
};

// Toggle Favorite Star
window.toggleFavorite = function(id) {
  const item = mockProducts.find(p => p.id === id);
  if (item) {
    item.isFavorited = !item.isFavorited;
    item.favorites += item.isFavorited ? 1 : -1;
    applyFilters();
  }
};

// Filter & Search Logic
function applyFilters() {
  const searchVal = (
    document.getElementById("searchInputDesktop")?.value ||
    document.getElementById("searchInputMobile")?.value ||
    ""
  ).trim().toLowerCase();

  const minPrice = parseFloat(document.getElementById("minPrice")?.value) || 0;
  const maxPrice = parseFloat(document.getElementById("maxPrice")?.value) || Infinity;
  const usableOnly = document.getElementById("usableCheck")?.checked;

  const filtered = mockProducts.filter(item => {
    // Search by ID or title
    if (searchVal) {
      const matchId = String(item.id).includes(searchVal);
      const matchTitle = item.title.toLowerCase().includes(searchVal);
      if (!matchId && !matchTitle) return false;
    }
    // Price range
    if (item.price < minPrice || item.price > maxPrice) return false;
    return true;
  });

  renderListings(filtered);

  // Update total count labels
  const countLabels = document.querySelectorAll(".item-count-val");
  countLabels.forEach(el => el.textContent = filtered.length);
}

// Reset Filters
function resetFilters() {
  const searchD = document.getElementById("searchInputDesktop");
  const searchM = document.getElementById("searchInputMobile");
  const minP = document.getElementById("minPrice");
  const maxP = document.getElementById("maxPrice");
  const usable = document.getElementById("usableCheck");

  if (searchD) searchD.value = "";
  if (searchM) searchM.value = "";
  if (minP) minP.value = "";
  if (maxP) maxP.value = "";
  if (usable) usable.checked = false;

  applyFilters();
}

// Countdown Live Tick
function startTimerTicker() {
  setInterval(() => {
    mockProducts.forEach(item => {
      if (item.countdownSeconds > 0) {
        item.countdownSeconds -= 1;
      }
    });

    const timerElements = document.querySelectorAll(".timer-tick");
    timerElements.forEach((el, idx) => {
      if (mockProducts[idx]) {
        el.textContent = formatCountdown(mockProducts[idx].countdownSeconds);
      }
    });
  }, 1000);
}

// Switch Mode (PC vs Mobile vs Auto)
window.setPreviewMode = function(mode) {
  const body = document.body;
  const btns = document.querySelectorAll(".view-mode-btn");
  btns.forEach(b => b.classList.remove("active"));

  const targetBtn = document.getElementById(`modeBtn-${mode}`);
  if (targetBtn) targetBtn.classList.add("active");

  body.classList.remove("force-mobile", "force-desktop");
  if (mode === "mobile") {
    body.classList.add("force-mobile");
  } else if (mode === "desktop") {
    body.classList.add("force-desktop");
  }
  // If auto, relies on natural media query
};

// Interactive Toast / Notification Alert
window.showActionNotice = function(msg) {
  let toast = document.getElementById("actionToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "actionToast";
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(31, 35, 41, 0.95);
      color: #fff;
      padding: 10px 22px;
      border-radius: 9999px;
      font-size: 13px;
      font-weight: 500;
      box-shadow: 0 4px 16px rgba(0,0,0,0.25);
      z-index: 999999;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.25s, transform 0.25s;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = "1";
  toast.style.transform = "translateX(-50%) translateY(0)";

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-50%) translateY(10px)";
  }, 2200);
};

// Initial DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderListings(mockProducts);
  startTimerTicker();

  // Search input listeners
  const searchD = document.getElementById("searchInputDesktop");
  const searchM = document.getElementById("searchInputMobile");
  if (searchD) searchD.addEventListener("input", applyFilters);
  if (searchM) searchM.addEventListener("input", applyFilters);

  // Price input listeners
  const minP = document.getElementById("minPrice");
  const maxP = document.getElementById("maxPrice");
  if (minP) minP.addEventListener("input", applyFilters);
  if (maxP) maxP.addEventListener("input", applyFilters);

  // Usable checkbox
  const usable = document.getElementById("usableCheck");
  if (usable) usable.addEventListener("change", applyFilters);

  // Reset button
  const resetBtn = document.getElementById("resetFilterBtn");
  if (resetBtn) resetBtn.addEventListener("click", resetFilters);

  // Tab switching
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const tabName = tab.dataset.tab;
      showActionNotice(`Đã chuyển sang: ${tab.querySelector('span')?.textContent || tab.textContent}`);
    });
  });

  // Mobile Bottom Navigation items
  const dockItems = document.querySelectorAll(".mobile-dock-item");
  dockItems.forEach(item => {
    item.addEventListener("click", () => {
      dockItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
});
