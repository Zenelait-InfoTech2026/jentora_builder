/* ==========================================================================
   JENTORA BUILDER PVT LTD - Fullscreen Script & Email Handler
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initEmailCopy();
  updateYear();
  initVideoFallback();
});

/* --------------------------------------------------------------------------
   1. Copy Email to Clipboard
   -------------------------------------------------------------------------- */
function initEmailCopy() {
  const copyBtn = document.getElementById('copyBtn');
  const tooltip = document.getElementById('copyTooltip');
  const emailText = 'info@jentora.co.in';

  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(emailText).then(() => {
      if (tooltip) tooltip.textContent = 'Copied!';
      showToast('Email address info@jentora.co.in copied to clipboard');
      setTimeout(() => {
        if (tooltip) tooltip.textContent = 'Copy';
      }, 2000);
    }).catch(() => {
      showToast('Email address: info@jentora.co.in');
    });
  });
}

/* --------------------------------------------------------------------------
   2. Toast Notifications & Utilities
   -------------------------------------------------------------------------- */
function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${msg}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function updateYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* --------------------------------------------------------------------------
   3. Background Video Autoplay Safety Check
   -------------------------------------------------------------------------- */
function initVideoFallback() {
  const video = document.getElementById('bgVideo');
  if (video) {
    video.play().catch(() => {
      console.log('Autoplay deferred by browser policy.');
    });
  }
}
