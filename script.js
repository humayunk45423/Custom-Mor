/**
 * Custom Mor Encyclopedia - Vanilla JS (Fastest & Minimal)
 * Wikipedia Vector 2022 interactive behavior
 * Domain: customsmor.vercel.app
 */

(function () {
  'use strict';

  // --- State ---
  let currentLang = 'bn';
  const validLangs = ['bn', 'en'];

  // Check URL param or localStorage
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  if (langParam && validLangs.includes(langParam)) {
    currentLang = langParam;
  } else {
    const savedLang = localStorage.getItem('wiki_lang');
    if (savedLang && validLangs.includes(savedLang)) {
      currentLang = savedLang;
    }
  }

  // --- DOM Elements ---
  const htmlEl = document.documentElement;
  const bodyEl = document.body;
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langTitleBtn = document.getElementById('langTitleBtn');
  const sidebarCol = document.getElementById('wikiSidebar');
  const tocToggleBtn = document.getElementById('tocToggleBtn');
  const menuBtn = document.getElementById('menuBtn');
  const modalEl = document.getElementById('mediaViewerModal');
  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDate = document.getElementById('modalDate');
  const modalAuth = document.getElementById('modalAuthority');
  const modalStatus = document.getElementById('modalStatus');
  const modalNotes = document.getElementById('modalNotes');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const searchInput = document.getElementById('wikiSearchInput');
  const searchForm = document.getElementById('wikiSearchForm');

  // --- Translation Helper ---
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('wiki_lang', lang);
    htmlEl.lang = lang;

    // Update query string cleanly without refresh
    const newUrl = new URL(window.location.href);
    if (lang === 'en') {
      newUrl.searchParams.set('lang', 'en');
    } else {
      newUrl.searchParams.delete('lang');
    }
    window.history.replaceState({}, '', newUrl.toString());

    // Switch all elements with data-bn and data-en
    document.querySelectorAll('[data-bn][data-en]').forEach((el) => {
      const text = el.getAttribute('data-' + lang);
      if (text) {
        if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
          el.placeholder = text;
        } else {
          el.innerHTML = text;
        }
      }
    });

    // Update document title (browser tab) based on language
    if (lang === 'bn') {
      document.title = 'কাস্টম মোড় — বদরগঞ্জ, রংপুর | Custom Mor Wikipedia';
    } else {
      document.title = 'Custom Mor — Badarganj, Rangpur | Custom Mor Wikipedia';
    }

    // Switch images with data-img-bn and data-img-en
    document.querySelectorAll('[data-img-bn][data-img-en]').forEach((el) => {
      const imgSrc = el.getAttribute('data-img-' + lang);
      if (imgSrc) {
        el.src = imgSrc;
      }
    });

    // Translate digits in all text nodes
    const digitMap = lang === 'en' ? 
      {'০':'0','১':'1','২':'2','৩':'3','৪':'4','৫':'5','৬':'6','৭':'7','৮':'8','৯':'9'} : 
      {'0':'০','1':'১','2':'২','3':'৩','4':'৪','5':'৫','6':'৬','7':'৭','8':'৮','9':'۹','9':'৯'};

    // Fix map definition
    const map = lang === 'en' ? 
      {'০':'0','১':'1','২':'2','৩':'3','৪':'4','৫':'5','৬':'6','৭':'7','৮':'8','৯':'9'} : 
      {'0':'০','1':'১','2':'২','3':'৩','4':'৪','5':'৫','6':'৬','7':'৭','8':'৮','9':'৯'};

    function convertDigits(node) {
      if (node.nodeType === 3) {
        node.nodeValue = node.nodeValue.replace(/[0-9০-৯]/g, match => map[match] || match);
      } else if (node.nodeType === 1 && node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE' && node.tagName !== 'INPUT') {
        node.childNodes.forEach(convertDigits);
      }
    }
    convertDigits(document.body);

    // Toggle visibility of lang-specific blocks if any
    document.querySelectorAll('.lang-block-bn').forEach((el) => {
      el.style.display = lang === 'bn' ? '' : 'none';
    });
    document.querySelectorAll('.lang-block-en').forEach((el) => {
      el.style.display = lang === 'en' ? '' : 'none';
    });

    // Update Lang button label
    if (langToggleBtn) {
      langToggleBtn.setAttribute('title', lang === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন');
    }
  }

  // Language button events
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'bn' ? 'en' : 'bn');
    });
  }
  if (langTitleBtn) {
    langTitleBtn.addEventListener('click', () => {
      applyLanguage(currentLang === 'bn' ? 'en' : 'bn');
    });
  }

  // --- Table of Contents (TOC) Toggle & ScrollSpy ---
  if (tocToggleBtn && sidebarCol) {
    tocToggleBtn.addEventListener('click', () => {
      const isCollapsed = sidebarCol.classList.toggle('collapsed');
      tocToggleBtn.textContent = isCollapsed
        ? (currentLang === 'bn' ? 'দেখান' : 'show')
        : (currentLang === 'bn' ? 'লুকান' : 'hide');
      localStorage.setItem('wiki_toc_collapsed', isCollapsed ? '1' : '0');
    });

    // Restore TOC state
    if (localStorage.getItem('wiki_toc_collapsed') === '1') {
      sidebarCol.classList.add('collapsed');
      tocToggleBtn.textContent = currentLang === 'bn' ? 'দেখান' : 'show';
    }
  }

  // Mobile menu button
  if (menuBtn && sidebarCol) {
    menuBtn.addEventListener('click', () => {
      sidebarCol.classList.toggle('mobile-open');
    });
  }

  // ScrollSpy for TOC links
  const sections = document.querySelectorAll('.wiki-section-target');
  const tocLinks = document.querySelectorAll('.wiki-toc-item a');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            tocLinks.forEach((link) => {
              const item = link.closest('.wiki-toc-item');
              if (link.getAttribute('href') === '#' + id) {
                item.classList.add('active');
              } else {
                item.classList.remove('active');
              }
            });
          }
        });
      },
      { rootMargin: '-10% 0px -75% 0px' }
    );

    sections.forEach((sec) => observer.observe(sec));
  }

  // --- Appearance Controls ("অবয়ব" widget) ---
  const fontSizeRadios = document.querySelectorAll('input[name="appearance-font-size"]');
  const widthRadios = document.querySelectorAll('input[name="appearance-width"]');
  const themeRadios = document.querySelectorAll('input[name="appearance-theme"]');

  // Font Size
  function setFontSize(size) {
    bodyEl.classList.remove('font-size-small', 'font-size-large');
    if (size === 'small') bodyEl.classList.add('font-size-small');
    if (size === 'large') bodyEl.classList.add('font-size-large');
    localStorage.setItem('wiki_font_size', size);
  }
  fontSizeRadios.forEach((radio) => {
    radio.addEventListener('change', (e) => setFontSize(e.target.value));
  });
  const savedFontSize = localStorage.getItem('wiki_font_size') || 'standard';
  const currentFontRadio = document.querySelector(`input[name="appearance-font-size"][value="${savedFontSize}"]`);
  if (currentFontRadio) {
    currentFontRadio.checked = true;
    setFontSize(savedFontSize);
  }

  // Width
  function setContentWidth(width) {
    if (width === 'wide') {
      bodyEl.classList.add('content-width-wide');
    } else {
      bodyEl.classList.remove('content-width-wide');
    }
    localStorage.setItem('wiki_width', width);
  }
  widthRadios.forEach((radio) => {
    radio.addEventListener('change', (e) => setContentWidth(e.target.value));
  });
  const savedWidth = localStorage.getItem('wiki_width') || 'standard';
  const currentWidthRadio = document.querySelector(`input[name="appearance-width"][value="${savedWidth}"]`);
  if (currentWidthRadio) {
    currentWidthRadio.checked = true;
    setContentWidth(savedWidth);
  }

  // Theme (Auto, Light, Dark)
  function setTheme(theme) {
    if (theme === 'dark') {
      bodyEl.classList.add('skin-theme-dark');
    } else if (theme === 'light') {
      bodyEl.classList.remove('skin-theme-dark');
    } else {
      // Auto
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        bodyEl.classList.add('skin-theme-dark');
      } else {
        bodyEl.classList.remove('skin-theme-dark');
      }
    }
    localStorage.setItem('wiki_theme', theme);
  }
  themeRadios.forEach((radio) => {
    radio.addEventListener('change', (e) => setTheme(e.target.value));
  });
  const savedTheme = localStorage.getItem('wiki_theme') || 'light';
  const currentThemeRadio = document.querySelector(`input[name="appearance-theme"][value="${savedTheme}"]`);
  if (currentThemeRadio) {
    currentThemeRadio.checked = true;
    setTheme(savedTheme);
  }

  // --- MediaViewer Lightbox Modal ---
  window.openMediaViewer = function (imgSrc, titleBn, titleEn, dateStr, authBn, authEn, notesBn, notesEn) {
    if (!modalEl) return;
    modalImg.src = imgSrc;
    modalTitle.textContent = currentLang === 'bn' ? titleBn : titleEn;
    modalDate.textContent = dateStr;
    modalAuth.textContent = currentLang === 'bn' ? authBn : authEn;
    modalStatus.textContent = currentLang === 'bn' ? 'যাচাইকৃত প্রামাণ্য নথি (Authenticated)' : 'Authenticated Historical Record';
    modalNotes.textContent = currentLang === 'bn' ? notesBn : notesEn;
    modalEl.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    if (modalEl) {
      modalEl.classList.remove('open');
      modalImg.src = '';
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }
  if (modalEl) {
    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalEl && modalEl.classList.contains('open')) {
      closeModal();
    }
  });

  // Attach click to image thumbs
  document.querySelectorAll('[data-viewer-img]').forEach((el) => {
    el.addEventListener('click', () => {
      const src = el.getAttribute('data-viewer-img');
      const titleBn = el.getAttribute('data-title-bn') || '';
      const titleEn = el.getAttribute('data-title-en') || '';
      const date = el.getAttribute('data-date') || '';
      const authBn = el.getAttribute('data-auth-bn') || '';
      const authEn = el.getAttribute('data-auth-en') || '';
      const notesBn = el.getAttribute('data-notes-bn') || '';
      const notesEn = el.getAttribute('data-notes-en') || '';
      window.openMediaViewer(src, titleBn, titleEn, date, authBn, authEn, notesBn, notesEn);
    });
  });

  // --- Search functionality ---
  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = searchInput.value.trim().toLowerCase();
      if (!q) return;

      // Find section heading containing text
      const headings = Array.from(document.querySelectorAll('.wiki-body h2, .wiki-body h3, .wiki-section-target'));
      const found = headings.find((h) => h.textContent.toLowerCase().includes(q));
      if (found) {
        found.scrollIntoView({ behavior: 'smooth', block: 'start' });
        found.style.backgroundColor = 'var(--wiki-highlight)';
        setTimeout(() => {
          found.style.backgroundColor = '';
        }, 2000);
      } else {
        alert(currentLang === 'bn' ? `"${q}" সম্পর্কিত কোনো অনুচ্ছেদ খুঁজে পাওয়া যায়নি।` : `No section found matching "${q}".`);
      }
    });
  }

  // Verified tag popup
  const verifiedTag = document.getElementById('verifiedTag');
  const verifiedPopup = document.getElementById('verifiedPopup');
  if (verifiedTag && verifiedPopup) {
    verifiedTag.addEventListener('click', (e) => {
      e.stopPropagation();
      verifiedPopup.classList.toggle('open');
    });
    document.addEventListener('click', () => {
      verifiedPopup.classList.remove('open');
    });
  }

  // --- Wikipedia Hover Cards (Page Previews) ---
  const hoverCard = document.createElement('div');
  hoverCard.className = 'wiki-hover-card';
  document.body.appendChild(hoverCard);

  let hoverTimeout;
  let currentTarget = null;

  document.querySelectorAll('a[href*="wikipedia.org/wiki/"]').forEach(link => {
    link.addEventListener('mouseenter', (e) => {
      clearTimeout(hoverTimeout);
      const url = new URL(link.href);
      const lang = url.hostname.split('.')[0]; // bn or en
      const title = url.pathname.split('/wiki/')[1];
      
      currentTarget = link;

      hoverTimeout = setTimeout(async () => {
        if (currentTarget !== link) return;
        
        try {
          const res = await fetch(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
          if (!res.ok) return;
          const data = await res.json();
          if (currentTarget !== link) return;

          let html = '';
          if (data.thumbnail) {
            html += `<img class="wiki-hover-card-img" src="${data.thumbnail.source}" alt="${data.title}">`;
          }
          html += `
            <div class="wiki-hover-card-content">
              <div class="wiki-hover-card-extract">${data.extract_html}</div>
              <div class="wiki-hover-card-settings" title="Settings">⚙</div>
            </div>
          `;
          hoverCard.innerHTML = html;

          // Remove any Wikipedia injected styling links
          hoverCard.querySelectorAll('link, style').forEach(el => el.remove());

          // Position card
          const rect = link.getBoundingClientRect();
          const cardWidth = 320;
          let top = rect.bottom + window.scrollY + 8; // default below
          let left = rect.left + window.scrollX - (cardWidth / 2) + (rect.width / 2);
          
          if (left < 10) left = 10;
          if (left + cardWidth > window.innerWidth) left = window.innerWidth - cardWidth - 10;
          
          // Show above if not enough space below
          if (rect.bottom + 250 > window.innerHeight && rect.top > 250) {
            top = rect.top + window.scrollY - 8;
            hoverCard.style.bottom = `${document.documentElement.scrollHeight - top}px`;
            hoverCard.style.top = 'auto';
          } else {
            hoverCard.style.top = `${top}px`;
            hoverCard.style.bottom = 'auto';
          }

          hoverCard.style.left = `${left}px`;
          hoverCard.classList.add('show');
        } catch (err) {
          console.error('Hover card fetch failed', err);
        }
      }, 500); // Wait 500ms before fetching (similar to actual Wikipedia)
    });

    link.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => {
        if (!hoverCard.matches(':hover')) {
          hoverCard.classList.remove('show');
          currentTarget = null;
        }
      }, 300);
    });
  });

  hoverCard.addEventListener('mouseleave', () => {
    hoverTimeout = setTimeout(() => {
      hoverCard.classList.remove('show');
      currentTarget = null;
    }, 300);
  });
  hoverCard.addEventListener('mouseenter', () => {
    clearTimeout(hoverTimeout);
  });

  // --- Share Button ---
  const shareTitleBtn = document.getElementById('shareTitleBtn');
  const sharePopup = document.getElementById('sharePopup');
  const shareCopyBtn = document.getElementById('shareCopyBtn');
  const shareUrlInput = document.getElementById('shareUrlInput');
  const shareFacebook = document.getElementById('shareFacebook');
  const shareTwitter = document.getElementById('shareTwitter');
  const shareWhatsapp = document.getElementById('shareWhatsapp');

  if (shareTitleBtn && sharePopup) {
    const pageUrl = window.location.href;
    const pageTitle = document.title;

    // Set URL in input
    if (shareUrlInput) shareUrlInput.value = pageUrl;

    // Set social share hrefs
    if (shareFacebook) shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
    if (shareTwitter) shareTwitter.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`;
    if (shareWhatsapp) shareWhatsapp.href = `https://wa.me/?text=${encodeURIComponent(pageTitle + ' ' + pageUrl)}`;

    // Toggle popup on button click
    shareTitleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sharePopup.classList.toggle('open');
    });

    // Close popup when clicking outside
    document.addEventListener('click', (e) => {
      if (!shareTitleBtn.contains(e.target)) {
        sharePopup.classList.remove('open');
      }
    });

    // Copy URL
    if (shareCopyBtn && shareUrlInput) {
      shareCopyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        shareUrlInput.select();
        navigator.clipboard.writeText(shareUrlInput.value).then(() => {
          shareCopyBtn.textContent = currentLang === 'bn' ? 'কপি হয়েছে!' : 'Copied!';
          shareCopyBtn.classList.add('copied');
          setTimeout(() => {
            shareCopyBtn.textContent = currentLang === 'bn' ? 'কপি' : 'Copy';
            shareCopyBtn.classList.remove('copied');
          }, 2000);
        });
      });
    }
  }

  // --- Infobox Auto Slideshow ---
  const slides = document.querySelectorAll('.infobox-slide');
  if (slides.length > 0) {
    let currentSlideIndex = 0;
    setInterval(() => {
      slides[currentSlideIndex].classList.remove('active');
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      slides[currentSlideIndex].classList.add('active');
    }, 4000); // Change image every 4 seconds
  }

  // --- Initialize Language ---
  applyLanguage(currentLang);
})();
