/**
 * Bayu Adi Rahayu Portfolio Application Logic
 * Inspired by Loop Agency Framer Design System
 */

// Universal compatibility for file:/// and HTTP servers
const portfolioData = window.portfolioData || (typeof require !== 'undefined' ? require('./data/projects.js').portfolioData : null);

document.addEventListener('DOMContentLoaded', () => {
  if (!portfolioData) {
    console.error("portfolioData not loaded!");
    return;
  }
  initLiveClock();
  initThemeToggle();
  initNavigation();
  initStats();
  initCategories();
  renderProjects('all', 'list');
  initViewSwitcher();
  initFloatingPreview();
  initCaseStudyReader();
  initLightbox();
  initContactActions();
  initProfileData();
});

// Current State
let currentCategory = 'all';
let currentView = 'list'; // 'list' | 'gallery'
let activeProjectIndex = 0;

/* ==========================================================================
   1. LIVE CLOCK (WIB / Asia/Jakarta)
   ========================================================================== */
function initLiveClock() {
  const clockEl = document.getElementById('live-clock');
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    // Jakarta is UTC+7
    const options = {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    const timeStr = new Intl.DateTimeFormat('id-ID', options).format(now);
    clockEl.textContent = `Bandung, ID [${timeStr} WIB]`;
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* ==========================================================================
   2. THEME TOGGLE (Dark / Light)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;

  // Check saved theme
  const savedTheme = localStorage.getItem('bar_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('bar_theme', next);
    updateThemeIcon(next);
  });
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (!toggleBtn) return;
  toggleBtn.innerHTML = theme === 'dark' 
    ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
    : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
}

/* ==========================================================================
   3. NAVIGATION
   ========================================================================== */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

/* ==========================================================================
   4. STATS INITIALIZATION
   ========================================================================== */
function initStats() {
  const statsGrid = document.getElementById('stats-grid');
  if (!statsGrid || !portfolioData) return;

  statsGrid.innerHTML = portfolioData.profile.stats.map(s => `
    <div class="stat-item">
      <div class="stat-num">${s.number}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   5. CATEGORY FILTER BAR
   ========================================================================== */
function initCategories() {
  const filterBar = document.getElementById('category-filter-bar');
  if (!filterBar || !portfolioData) return;

  filterBar.innerHTML = portfolioData.categories.map(cat => `
    <button class="filter-pill ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}">
      ${cat.name}
    </button>
  `).join('');

  filterBar.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      filterBar.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderProjects(currentCategory, currentView);
    });
  });
}

/* ==========================================================================
   6. VIEW SWITCHER (List vs Gallery)
   ========================================================================== */
function initViewSwitcher() {
  const listBtn = document.getElementById('view-list-btn');
  const galleryBtn = document.getElementById('view-gallery-btn');
  if (!listBtn || !galleryBtn) return;

  listBtn.addEventListener('click', () => {
    if (currentView === 'list') return;
    currentView = 'list';
    listBtn.classList.add('active');
    galleryBtn.classList.remove('active');
    renderProjects(currentCategory, 'list');
  });

  galleryBtn.addEventListener('click', () => {
    if (currentView === 'gallery') return;
    currentView = 'gallery';
    galleryBtn.classList.add('active');
    listBtn.classList.remove('active');
    renderProjects(currentCategory, 'gallery');
  });
}

/* ==========================================================================
   7. RENDER PROJECTS
   ========================================================================== */
function renderProjects(category = 'all', view = 'list') {
  const container = document.getElementById('projects-container');
  if (!container || !portfolioData) return;

  // Filter projects
  const filtered = category === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.categorySlug === category);

  // Update counter
  const counterEl = document.getElementById('project-count');
  if (counterEl) {
    counterEl.textContent = `(${filtered.length})`;
  }

  if (view === 'list') {
    renderListView(filtered, container);
  } else {
    renderGalleryView(filtered, container);
  }
}

function renderListView(projects, container) {
  container.className = 'projects-list-wrap';
  
  if (projects.length === 0) {
    container.innerHTML = `<div style="padding: 3rem; text-align: center; color: var(--text-muted);">Tidak ada proyek dalam kategori ini.</div>`;
    return;
  }

  container.innerHTML = projects.map((p, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    return `
      <div class="project-list-row" data-id="${p.id}" data-hero="${p.heroImage}">
        <span class="list-num">${num}</span>
        <div class="list-title-wrap">
          <h3 class="list-title">${p.title}</h3>
          <span class="list-tagline">${p.tagline}</span>
        </div>
        <span class="list-cat">${p.category}</span>
        <span class="list-year">${p.year}</span>
        <span class="list-arrow">→</span>
      </div>
    `;
  }).join('');

  // Attach click listeners to rows
  container.querySelectorAll('.project-list-row').forEach(row => {
    row.addEventListener('click', () => {
      const id = row.getAttribute('data-id');
      openCaseStudy(id);
    });
  });
}

function renderGalleryView(projects, container) {
  container.className = 'projects-gallery-grid';

  if (projects.length === 0) {
    container.innerHTML = `<div style="padding: 3rem; text-align: center; color: var(--text-muted); grid-column: span 2;">Tidak ada proyek dalam kategori ini.</div>`;
    return;
  }

  container.innerHTML = projects.map(p => `
    <div class="gallery-card" data-id="${p.id}">
      <div class="card-media-wrap">
        <img src="${p.heroImage}" alt="${p.title}" loading="lazy">
        <span class="card-badge-top">${p.category}</span>
      </div>
      <div class="card-info-wrap">
        <div class="card-meta-row">
          <h3 class="card-title">${p.title}</h3>
          <span class="mono-label">${p.year}</span>
        </div>
        <p class="card-tagline">${p.tagline}</p>
      </div>
    </div>
  `).join('');

  // Attach click listeners to cards
  container.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      openCaseStudy(id);
    });
  });
}

/* ==========================================================================
   8. FLOATING PREVIEW ON LIST HOVER
   ========================================================================== */
function initFloatingPreview() {
  const preview = document.getElementById('floating-cursor-preview');
  const previewImg = preview ? preview.querySelector('img') : null;
  if (!preview || !previewImg) return;

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  let isMoving = false;

  function updatePosition() {
    currentX += (targetX - currentX) * 0.18;
    currentY += (targetY - currentY) * 0.18;
    preview.style.left = `${currentX}px`;
    preview.style.top = `${currentY}px`;

    if (isMoving) {
      requestAnimationFrame(updatePosition);
    }
  }

  document.addEventListener('mousemove', (e) => {
    targetX = e.clientX + 25;
    targetY = e.clientY + 25;

    // Prevent offscreen
    if (targetX + 330 > window.innerWidth) {
      targetX = e.clientX - 340;
    }
    if (targetY + 230 > window.innerHeight) {
      targetY = e.clientY - 240;
    }

    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(updatePosition);
    }
  });

  const projectsContainer = document.getElementById('projects-container');
  if (projectsContainer) {
    projectsContainer.addEventListener('mouseover', (e) => {
      const row = e.target.closest('.project-list-row');
      if (row && currentView === 'list') {
        const heroUrl = row.getAttribute('data-hero');
        if (heroUrl) {
          previewImg.src = heroUrl;
          preview.classList.add('active');
        }
      }
    });

    projectsContainer.addEventListener('mouseout', (e) => {
      const row = e.target.closest('.project-list-row');
      if (row) {
        preview.classList.remove('active');
      }
    });
  }
}

/* ==========================================================================
   9. CASE STUDY READER (REPLICATING /projects/form-index ARCHITECTURE)
   ========================================================================== */
function initCaseStudyReader() {
  const overlay = document.getElementById('cs-overlay');
  const container = document.getElementById('cs-container');
  const closeBtn = document.getElementById('cs-close-btn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeCaseStudy);
  }

  if (overlay) {
    overlay.addEventListener('click', closeCaseStudy);
  }

  // Keyboard shortcut (Escape to close)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCaseStudy();
      closeLightbox();
    }
  });
}

function openCaseStudy(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (!project) return;

  activeProjectIndex = portfolioData.projects.findIndex(p => p.id === projectId);

  const container = document.getElementById('cs-container');
  const overlay = document.getElementById('cs-overlay');
  const content = document.getElementById('cs-content');
  if (!container || !content) return;

  // Next Project
  const nextIdx = (activeProjectIndex + 1) % portfolioData.projects.length;
  const nextProject = portfolioData.projects[nextIdx];

  // Render Case Study Page exactly like Loop Agency Form Index
  content.innerHTML = `
    <!-- Top Meta -->
    <div class="cs-hero-section">
      <div class="cs-category-badge">${project.category} • ${project.year}</div>
      <h1 class="cs-title">${project.title}</h1>
      <p class="cs-tagline">${project.tagline}</p>
      
      <!-- 4-Column Metadata Grid -->
      <div class="cs-meta-grid">
        <div class="cs-meta-col">
          <span class="cs-meta-label">Client</span>
          <span class="cs-meta-val">${project.client || 'Internal Project'}</span>
        </div>
        <div class="cs-meta-col">
          <span class="cs-meta-label">Year</span>
          <span class="cs-meta-val">${project.year}</span>
        </div>
        <div class="cs-meta-col">
          <span class="cs-meta-label">Role & Services</span>
          <span class="cs-meta-val">${project.role}</span>
        </div>
        <div class="cs-meta-col">
          <span class="cs-meta-label">Timeline</span>
          <span class="cs-meta-val">${project.timeline || '3 - 6 Minggu'}</span>
        </div>
      </div>
    </div>

    <!-- Hero Media -->
    <div class="cs-hero-media">
      ${project.videoFiles && project.videoFiles.length > 0 
        ? `<video controls poster="${project.heroImage}" preload="metadata">
             <source src="${project.videoFiles[0].file}" type="video/mp4">
             Browser Anda tidak mendukung video.
           </video>`
        : `<img src="${project.heroImage}" alt="${project.title}">`
      }
    </div>

    <!-- 4-Pillar Narrative Grid (The loop-agency signature) -->
    <div class="cs-narrative-grid">
      <div class="narrative-block">
        <span class="narrative-pillar-num">01 // OVERVIEW</span>
        <h3 class="narrative-title">Latar Belakang & Visi</h3>
        <p class="narrative-body">${project.overview}</p>
      </div>

      <div class="narrative-block">
        <span class="narrative-pillar-num">02 // CHALLENGE</span>
        <h3 class="narrative-title">Tantangan Desain</h3>
        <p class="narrative-body">${project.challenge}</p>
      </div>

      <div class="narrative-block">
        <span class="narrative-pillar-num">03 // OUR APPROACH</span>
        <h3 class="narrative-title">Metodologi & Solusi</h3>
        <p class="narrative-body">${project.approach}</p>
      </div>

      <div class="narrative-block">
        <span class="narrative-pillar-num">04 // OUTCOME</span>
        <h3 class="narrative-title">Hasil & Dampak Nyata</h3>
        <p class="narrative-body">${project.outcome}</p>
      </div>
    </div>

    <!-- Deliverables Checklist -->
    ${project.deliverables ? `
      <div class="cs-deliverables-box">
        <h4 class="cs-deliverables-title">Deliverables & System Assets</h4>
        <ul class="cs-deliverables-list">
          ${project.deliverables.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>
    ` : ''}

    <!-- Video Showcase (if multiple videos) -->
    ${project.videoFiles && project.videoFiles.length > 1 ? `
      <div class="cs-gallery-section">
        <h4 class="cs-gallery-title">Motion Clips & Repertoire</h4>
        <div style="display: flex; flex-direction: column; gap: 2rem;">
          ${project.videoFiles.slice(1).map(vf => `
            <div style="background: var(--bg-surface); padding: 1.5rem; border-radius: 6px; border: 1px solid var(--border-subtle);">
              <h5 style="font-family: var(--font-display); font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--text-primary);">${vf.title}</h5>
              <video controls style="width: 100%; border-radius: 4px;" preload="metadata">
                <source src="${vf.file}" type="video/mp4">
              </video>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- Visual Gallery -->
    ${project.gallery && project.gallery.length > 0 ? `
      <div class="cs-gallery-section">
        <h4 class="cs-gallery-title">Visual Archive & Artifacts</h4>
        <div class="cs-gallery-grid">
          ${project.gallery.map(imgSrc => `
            <div class="cs-gallery-item" onclick="window.openLightboxImage('${imgSrc}')">
              <img src="${imgSrc}" alt="${project.title} asset" loading="lazy">
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- Quote Block -->
    <div class="cs-quote-block">
      <blockquote class="cs-quote-text">"${project.quote || 'Desain yang kokoh adalah hasil perpaduan ritme, kejelasan pesan, dan eksekusi tanpa kompromi.'}"</blockquote>
      <div class="cs-quote-author">— ${project.quoteAuthor || 'Bayu Adi Rahayu'}</div>
    </div>

    <!-- Next Project Transition Banner -->
    <div class="cs-next-project-bar" id="cs-next-btn" data-next-id="${nextProject.id}">
      <span class="cs-next-label">Next Project</span>
      <div class="cs-next-title-row">
        <h2 class="cs-next-title">${nextProject.title}</h2>
        <span class="cs-next-arrow">→</span>
      </div>
    </div>
  `;

  // Attach next project transition
  const nextBtn = document.getElementById('cs-next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const nextId = nextBtn.getAttribute('data-next-id');
      container.scrollTop = 0;
      openCaseStudy(nextId);
    });
  }

  // Open overlays
  overlay.classList.add('open');
  container.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCaseStudy() {
  const container = document.getElementById('cs-container');
  const overlay = document.getElementById('cs-overlay');
  if (!container || !overlay) return;

  container.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ==========================================================================
   10. LIGHTBOX & MEDIA MODAL
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close-btn');

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLightbox();
    });
  }

  // Expose global helper for inline HTML
  window.openLightboxImage = function(src) {
    const modal = document.getElementById('lightbox-modal');
    const content = document.getElementById('lightbox-content');
    if (!modal || !content) return;

    content.innerHTML = `<img src="${src}" alt="Fullscreen preview">`;
    modal.classList.add('open');
  };
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;
  modal.classList.remove('open');
  const content = document.getElementById('lightbox-content');
  if (content) content.innerHTML = '';
}

/* ==========================================================================
   11. PROFILE DATA & TIMELINE
   ========================================================================== */
function initProfileData() {
  const { profile } = portfolioData;

  // Bio and name
  const nameEl = document.getElementById('profile-name');
  const rolesEl = document.getElementById('profile-roles');
  const bioLeadEl = document.getElementById('profile-bio-lead');

  if (nameEl) nameEl.textContent = profile.name;
  if (rolesEl) rolesEl.textContent = profile.roles.join(' • ');
  if (bioLeadEl) bioLeadEl.textContent = profile.bio;

  // Skills Pills
  const skillsContainer = document.getElementById('skills-pills-wrap');
  if (skillsContainer) {
    const allSkills = [
      ...profile.skills.design,
      ...profile.skills.software,
      ...profile.skills.technical
    ];
    skillsContainer.innerHTML = allSkills.map(s => `
      <span class="tag-badge">${s}</span>
    `).join('');
  }

  // Education Timeline
  const timelineContainer = document.getElementById('timeline-container');
  if (timelineContainer) {
    timelineContainer.innerHTML = profile.education.map(e => `
      <div class="timeline-item">
        <span class="timeline-period">${e.period}</span>
        <div>
          <h4 class="timeline-role">${e.degree}</h4>
          <div class="timeline-org">${e.institution} — ${e.location}</div>
          <p class="timeline-desc">${e.description}</p>
        </div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   12. CONTACT ACTIONS (COPY EMAIL & TOAST)
   ========================================================================== */
function initContactActions() {
  const copyBtn = document.getElementById('btn-copy-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(portfolioData.profile.email).then(() => {
        showToast('Email berhasil disalin: ' + portfolioData.profile.email);
      }).catch(() => {
        showToast('Gagal menyalin email.');
      });
    });
  }

  // Form submission
  const form = document.getElementById('inquiry-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      const service = document.getElementById('form-service').value;
      const message = document.getElementById('form-message').value;

      // WhatsApp redirection link
      const text = `Halo Bayu, saya ${name}. Tertarik bekerja sama untuk proyek ${service}. Detail: ${message}`;
      const waUrl = `https://wa.me/6285155321739?text=${encodeURIComponent(text)}`;

      showToast('Mengarahkan ke WhatsApp...');
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 700);
    });
  }
}

function showToast(message) {
  const toast = document.getElementById('toast-notice');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
