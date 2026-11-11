/**
 * Serambi Digital - Main Client Scripts
 * SMK Negeri 2 Bandar Lampung
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initBookmarkButtons();
  initShareButtons();
  initNewsFilter();
  initKaryaSubmission();
});

/* ========================================================
   1. MOBILE MENU DRAWER
   ======================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileMenuDrawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = drawer.classList.contains('hidden');
    if (isHidden) {
      drawer.classList.remove('hidden');
      toggleBtn.innerHTML = '<span class="material-symbols-outlined text-[24px]">close</span>';
    } else {
      drawer.classList.add('hidden');
      toggleBtn.innerHTML = '<span class="material-symbols-outlined text-[24px]">menu</span>';
    }
  });
}

/* ========================================================
   2. TOAST NOTIFICATIONS
   ======================================================== */
function showToast(message, icon = 'check_circle') {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `
    <span class="material-symbols-outlined text-[20px] text-secondary-container">${icon}</span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

/* ========================================================
   3. BOOKMARK & SHARE
   ======================================================== */
function initBookmarkButtons() {
  const bookmarkButtons = document.querySelectorAll('[data-bookmark-btn]');
  bookmarkButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const icon = btn.querySelector('.material-symbols-outlined');
      const isBookmarked = btn.getAttribute('data-bookmarked') === 'true';

      if (isBookmarked) {
        btn.setAttribute('data-bookmarked', 'false');
        if (icon) {
          icon.textContent = 'bookmark';
          icon.style.fontVariationSettings = "'FILL' 0";
        }
        showToast('Pengumuman dihapus dari simpanan', 'bookmark_remove');
      } else {
        btn.setAttribute('data-bookmarked', 'true');
        if (icon) {
          icon.textContent = 'bookmark_added';
          icon.style.fontVariationSettings = "'FILL' 1";
        }
        showToast('Pengumuman berhasil disimpan ke daftar baca!', 'bookmark_added');
      }
    });
  });
}

function initShareButtons() {
  const shareButtons = document.querySelectorAll('[data-share-btn]');
  shareButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const title = document.title || 'Mading Digital SMKN 2 Bandar Lampung';
      const url = window.location.href;

      if (navigator.share) {
        try {
          await navigator.share({ title, text: 'Simak warta mading digital SMKN 2 Bandar Lampung ini!', url });
          return;
        } catch (err) {
          // Fallback to clipboard
        }
      }

      navigator.clipboard.writeText(url).then(() => {
        showToast('Tautan berhasil disalin ke papan klip!', 'content_copy');
      }).catch(() => {
        showToast('Gagal menyalin tautan', 'error');
      });
    });
  });
}

/* ========================================================
   4. BERITA SEARCH & FILTER SYSTEM
   ======================================================== */
function initNewsFilter() {
  const searchInput = document.getElementById('newsSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const chips = document.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('.news-card');
  const emptyState = document.getElementById('emptyState');
  const newsGrid = document.getElementById('newsGrid');
  const paginationNav = document.getElementById('paginationNav');
  const resetBtn = document.getElementById('resetFilterBtn');
  const itemCountDisplay = document.getElementById('itemCountDisplay');

  if (!cards.length) return;

  let currentCategory = 'semua';
  let currentQuery = '';

  function filterCards() {
    let visibleCount = 0;

    cards.forEach(card => {
      const cardCat = card.getAttribute('data-card-category') || '';
      const cardTitle = (card.getAttribute('data-title') || '').toLowerCase();
      const cardText = card.innerText.toLowerCase();

      const matchesCat = (currentCategory === 'semua') || (cardCat === currentCategory);
      const matchesQuery = !currentQuery || cardTitle.includes(currentQuery) || cardText.includes(currentQuery);

      if (matchesCat && matchesQuery) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (itemCountDisplay) {
      itemCountDisplay.textContent = visibleCount;
    }

    if (emptyState && newsGrid) {
      if (visibleCount === 0) {
        emptyState.classList.remove('hidden');
        emptyState.classList.add('flex');
        newsGrid.classList.add('hidden');
        if (paginationNav) paginationNav.classList.add('hidden');
      } else {
        emptyState.classList.add('hidden');
        emptyState.classList.remove('flex');
        newsGrid.classList.remove('hidden');
        if (paginationNav) paginationNav.classList.remove('hidden');
      }
    }
  }

  chips.forEach(chip => {
    chip.addEventListener('click', function() {
      chips.forEach(c => {
        c.classList.remove('bg-primary-container', 'text-on-primary', 'shadow-sm');
        c.classList.add('bg-surface-container', 'text-primary-container');
      });

      this.classList.remove('bg-surface-container', 'text-primary-container');
      this.classList.add('bg-primary-container', 'text-on-primary', 'shadow-sm');

      currentCategory = this.getAttribute('data-category');
      filterCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      currentQuery = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) {
        if (currentQuery.length > 0) {
          clearSearchBtn.classList.remove('hidden');
        } else {
          clearSearchBtn.classList.add('hidden');
        }
      }
      filterCards();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', function() {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      currentQuery = '';
      clearSearchBtn.classList.add('hidden');
      filterCards();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      if (searchInput) searchInput.value = '';
      currentQuery = '';
      if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
      currentCategory = 'semua';

      chips.forEach(c => {
        if (c.getAttribute('data-category') === 'semua') {
          c.classList.remove('bg-surface-container', 'text-primary-container');
          c.classList.add('bg-primary-container', 'text-on-primary', 'shadow-sm');
        } else {
          c.classList.remove('bg-primary-container', 'text-on-primary', 'shadow-sm');
          c.classList.add('bg-surface-container', 'text-primary-container');
        }
      });

      filterCards();
    });
  }
}

/* ========================================================
   5. AJUKAN KARYA FORM SYSTEM
   ======================================================== */
function initKaryaSubmission() {
  const form = document.getElementById('karyaForm');
  if (!form) return;

  const titleInput = document.getElementById('karyaTitle');
  const titleCharCount = document.getElementById('titleCharCount');
  const bodyTextarea = document.getElementById('karyaBody');
  const bodyWordCount = document.getElementById('bodyWordCount');
  const quoteBtn = document.getElementById('formatQuoteBtn');
  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileUploadInput');
  const clearFileBtn = document.getElementById('clearFileBtn');
  const modalCloseBtn = document.getElementById('closeModalBtn');

  // Title character counter
  if (titleInput && titleCharCount) {
    titleInput.addEventListener('input', () => {
      titleCharCount.textContent = `${titleInput.value.length} / 80 karakter`;
    });
  }

  // Body word counter
  if (bodyTextarea && bodyWordCount) {
    bodyTextarea.addEventListener('input', () => {
      const text = bodyTextarea.value.trim();
      const words = text ? text.split(/\s+/).length : 0;
      bodyWordCount.textContent = `${words} kata`;
    });
  }

  // Format Quote tool
  if (quoteBtn && bodyTextarea) {
    quoteBtn.addEventListener('click', () => {
      const start = bodyTextarea.selectionStart;
      const end = bodyTextarea.selectionEnd;
      const selected = bodyTextarea.value.substring(start, end) || 'Kutipan berharga atau opini kunci';
      const replacement = `"${selected}"`;
      bodyTextarea.value = bodyTextarea.value.substring(0, start) + replacement + bodyTextarea.value.substring(end);
      bodyTextarea.focus();
      bodyTextarea.setSelectionRange(start + 1, start + 1 + selected.length);
      
      const words = bodyTextarea.value.trim().split(/\s+/).length;
      if (bodyWordCount) bodyWordCount.textContent = `${words} kata`;
    });
  }

  // File Upload Handlers
  if (dropZone && fileInput) {
    dropZone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileSelect);
  }

  if (clearFileBtn) {
    clearFileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      clearSelectedFile();
    });
  }

  function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
      const fileNameDisplay = document.getElementById('fileNameDisplay');
      const dropZonePrompt = document.getElementById('dropZonePrompt');
      const filePreviewState = document.getElementById('filePreviewState');

      if (fileNameDisplay) fileNameDisplay.textContent = file.name;
      if (dropZonePrompt) dropZonePrompt.classList.add('hidden');
      if (filePreviewState) {
        filePreviewState.classList.remove('hidden');
        filePreviewState.classList.add('flex');
      }
    }
  }

  function clearSelectedFile() {
    if (fileInput) fileInput.value = '';
    const dropZonePrompt = document.getElementById('dropZonePrompt');
    const filePreviewState = document.getElementById('filePreviewState');

    if (dropZonePrompt) dropZonePrompt.classList.remove('hidden');
    if (filePreviewState) {
      filePreviewState.classList.add('hidden');
      filePreviewState.classList.remove('flex');
    }
  }

  // Form Submit Handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitKarya();
  });

  function submitKarya() {
    const name = document.getElementById('studentName')?.value || '';
    const studentClass = document.getElementById('studentClass')?.value || '';
    const title = document.getElementById('karyaTitle')?.value || '';
    const category = document.getElementById('karyaCategory')?.value || '';
    const body = document.getElementById('karyaBody')?.value || '';
    const btn = document.getElementById('submitButton');

    if (btn) {
      btn.innerHTML = '<span class="material-symbols-outlined text-[20px] animate-spin">refresh</span><span>Mengirimkan Naskah...</span>';
      btn.disabled = true;
    }

    try {
      const storedKarya = JSON.parse(localStorage.getItem('mading_karya_submissions') || '[]');
      storedKarya.push({
        name,
        studentClass,
        title,
        category,
        body,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('mading_karya_submissions', JSON.stringify(storedKarya));
    } catch (err) {
      console.error('Local storage error:', err);
    }

    setTimeout(() => {
      const summaryTitle = document.getElementById('submittedTitleSummary');
      const summaryAuthor = document.getElementById('submittedAuthorSummary');
      const modal = document.getElementById('successModal');

      if (summaryTitle) summaryTitle.textContent = title || 'Judul Tulisan';
      if (summaryAuthor) summaryAuthor.textContent = 'Oleh: ' + (name || 'Siswa SMKN 2 BL') + (studentClass ? ' (' + studentClass + ')' : '');

      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }

      if (btn) {
        btn.innerHTML = '<span>Ajukan Karya Sekarang</span><span class="material-symbols-outlined text-[20px]">arrow_forward</span>';
        btn.disabled = false;
      }
    }, 600);
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeSuccessModal);
  }

  function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
    form.reset();
    if (titleCharCount) titleCharCount.textContent = '0 / 80 karakter';
    if (bodyWordCount) bodyWordCount.textContent = '0 kata';
    clearSelectedFile();
  }
}
