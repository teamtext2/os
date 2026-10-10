/**
 * RISE OF KINGDOMS - VIP SERVICES & COMMUNITY
 * Javascript Logic Tối Ưu Cho Cả PC & Mobile
 * Micro-animations Nhẹ Nhàng, Hiện Đại, Hiệu Năng Cao
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Quản lý Theme (Sáng: Vàng Trắng / Tối: Vàng Obsidian) với SVG
  initThemeManager();

  // 2. Chuyển đổi Tabs & Hiệu ứng chuyển động mượt mà
  initTabsManager();

  // 3. Sao chép thông tin (Copy to Clipboard) với Micro-Feedback Checkmark
  initCopyActions();

  // 4. Modal QR Ngân Hàng
  initQrModal();

  // 5. Scroll to top & Header Scroll Thông Minh
  initScrollActions();

  // 6. Cập nhật năm bản quyền tự động
  initDynamicYear();
});

/* ===================================================
   1. QUẢN LÝ THEME (LIGHT / DARK) BẰNG SVG THUẦN
   =================================================== */
function initThemeManager() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;

  const currentTheme = localStorage.getItem('rok_theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('rok_theme', nextTheme);
    updateThemeIcon(nextTheme);
    showToast(`Đã chuyển sang nền ${nextTheme === 'dark' ? 'Hoàng Kim Tối' : 'Vàng Trắng Tinh Khiết'}`);
  });

  function updateThemeIcon(theme) {
    if (theme === 'dark') {
      // SVG Mặt Trời Hoàng Kim
      themeToggleBtn.innerHTML = `
        <svg class="svg-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
      themeToggleBtn.setAttribute('title', 'Chuyển sang nền Vàng Trắng');
    } else {
      // SVG Mặt Trăng Lưỡi Liềm
      themeToggleBtn.innerHTML = `
        <svg class="svg-icon" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
      themeToggleBtn.setAttribute('title', 'Chuyển sang nền Hoàng Kim Tối');
    }
  }
}

/* ===================================================
   2. QUẢN LÝ TABS NỘI DUNG VỚI HIỆU ỨNG MƯỢT
   =================================================== */
function initTabsManager() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  function switchTab(targetId) {
    if (!targetId) return;
    const cleanId = targetId.replace('#', '');
    const targetBtn = document.querySelector(`.tab-btn[data-tab="${cleanId}"]`);
    const targetPane = document.getElementById(cleanId);

    if (targetBtn && targetPane) {
      tabButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanes.forEach(p => p.classList.remove('active'));

      targetBtn.classList.add('active');
      targetBtn.setAttribute('aria-selected', 'true');
      
      // Kích hoạt lại animation để tab luôn có hiệu ứng êm ái
      targetPane.classList.add('active');
      targetPane.style.animation = 'none';
      targetPane.offsetHeight; // force reflow
      targetPane.style.animation = '';
    }
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      switchTab(targetId);

      // Nếu người dùng đang cuộn dở trên mobile, cuộn nhẹ về đầu phần nội dung tab
      if (window.innerWidth <= 768) {
        const tabsNav = document.querySelector('.nav-tabs');
        if (tabsNav) {
          const rect = tabsNav.getBoundingClientRect();
          if (rect.top < 60) {
            window.scrollTo({
              top: window.scrollY + rect.top - 70,
              behavior: 'smooth'
            });
          }
        }
      }
    });
  });

  // Hỗ trợ click từ các liên kết có hash (như footer)
  document.querySelectorAll('a[href^="#tab-"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href');
      if (hash) {
        e.preventDefault();
        switchTab(hash);
        const navTabs = document.querySelector('.nav-tabs');
        if (navTabs) {
          navTabs.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

/* ===================================================
   3. SAO CHÉP THÔNG TIN VỚI MICRO-FEEDBACK TỨC THÌ
   =================================================== */
let toastTimeout;
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  // Icon SVG Checkmark xanh lục bảo ngọc sắc nét
  toast.innerHTML = `
    <svg class="svg-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

function initCopyActions() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    // Lưu lại icon SVG gốc
    btn.dataset.originalSvg = btn.innerHTML;

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const content = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-label') || 'thông tin';

      if (!content) return;

      const triggerSuccessFeedback = () => {
        showToast(`Đã sao chép ${label}: ${content}`);

        // Micro-feedback checkmark ngay trên nút bấm
        btn.classList.add('copied');
        btn.innerHTML = `
          <svg class="svg-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;

        clearTimeout(btn._resetTimer);
        btn._resetTimer = setTimeout(() => {
          btn.innerHTML = btn.dataset.originalSvg;
          btn.classList.remove('copied');
        }, 1400);
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(content)
          .then(triggerSuccessFeedback)
          .catch(() => fallbackCopy(content, label, triggerSuccessFeedback));
      } else {
        fallbackCopy(content, label, triggerSuccessFeedback);
      }
    });
  });

  function fallbackCopy(text, label, callback) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    tempInput.style.position = 'fixed';
    tempInput.style.left = '-9999px';
    tempInput.style.top = '-9999px';
    document.body.appendChild(tempInput);
    tempInput.focus();
    tempInput.select();
    try {
      document.execCommand('copy');
      if (typeof callback === 'function') {
        callback();
      } else {
        showToast(`Đã sao chép ${label}: ${text}`);
      }
    } catch (err) {
      showToast('Không thể tự động sao chép!');
    }
    document.body.removeChild(tempInput);
  }
}

/* ===================================================
   4. MODAL XEM MÃ QR THANH TOÁN
   =================================================== */
function initQrModal() {
  const modal = document.getElementById('qrModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBankTitle = document.getElementById('modalBankTitle');
  const modalQrImg = document.getElementById('modalQrImg');

  if (!modal) return;

  document.querySelectorAll('[data-qr-open]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const qrUrl = btn.getAttribute('data-qr-img');
      const bankName = btn.getAttribute('data-bank-name') || 'Mã QR Ngân Hàng';

      if (modalBankTitle) modalBankTitle.textContent = bankName;
      if (modalQrImg && qrUrl) modalQrImg.src = qrUrl;

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ===================================================
   5. NÚT CUỘN LÊN ĐẦU TRANG & HEADER SCROLL THÔNG MINH
   =================================================== */
function initScrollActions() {
  const scrollBtn = document.getElementById('scrollToTopBtn');
  const header = document.querySelector('.site-header');

  let lastScrollY = window.scrollY;
  let stopScrollTimer = null;
  let isTicking = false;

  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });

  function handleScroll() {
    const currentScrollY = window.scrollY;

    // 1. Quản lý nút Scroll To Top
    if (scrollBtn) {
      if (currentScrollY > 300) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    }

    // 2. Quản lý Header ẩn/hiện thông minh
    if (!header) return;

    if (currentScrollY <= 30) {
      // Đang ở sát đỉnh trang: luôn hiện trạng thái nguyên bản
      header.classList.remove('header-hidden');
      header.classList.remove('header-scrolled');
    } else {
      header.classList.add('header-scrolled');

      // Cuộn xuống -> Ẩn header để tối đa không gian đọc
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        header.classList.add('header-hidden');
      } 
      // Cuộn ngược lên -> Hiện header ngay lập tức
      else if (currentScrollY < lastScrollY) {
        header.classList.remove('header-hidden');
      }
    }

    lastScrollY = currentScrollY;

    // 3. Khi dừng cuộn: nhẹ nhàng hiện lại header
    clearTimeout(stopScrollTimer);
    stopScrollTimer = setTimeout(() => {
      if (header) {
        header.classList.remove('header-hidden');
      }
    }, 700);
  }

  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/* ===================================================
   6. CẬP NHẬT NĂM BẢN QUYỀN TỰ ĐỘNG
   =================================================== */
function initDynamicYear() {
  const footerYear = document.getElementById('footerYear');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
}
