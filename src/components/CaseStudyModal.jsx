import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, Check, ChevronLeft, ChevronRight, Sun, Moon } from 'lucide-react';

export default function CaseStudyModal({ 
  project, 
  allProjects,
  onClose, 
  onNavigateProject,
  onOpenLightbox,
  theme,
  toggleTheme
}) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  if (!project) return null;

  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const prevIndex = (currentIndex - 1 + allProjects.length) % allProjects.length;
  const nextIndex = (currentIndex + 1) % allProjects.length;
  const prevProject = allProjects[prevIndex];
  const nextProject = allProjects[nextIndex];

  // Keyboard navigation & scroll lock
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigateProject(nextProject.id);
      } else if (e.key === 'ArrowLeft') {
        onNavigateProject(prevProject.id);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Reset scroll to top on project switch
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project.id, nextProject.id, prevProject.id, onClose, onNavigateProject]);

  // Track scroll progress inside the modal
  function handleScroll(e) {
    const el = e.currentTarget;
    const total = el.scrollHeight - el.clientHeight;
    if (total > 0) {
      const prog = (el.scrollTop / total) * 100;
      setScrollProgress(Math.min(100, Math.max(0, prog)));
    }
  }

  // Format team contributors
  const teamList = project.team || [
    { name: "Bayu Adi Rahayu", role: project.role || "Lead Visual & UI/UX Designer" },
    { name: project.client || "Creative Partner", role: "Product Strategy & Direction" }
  ];

  const leadIngress = project.ingress || project.tagline;

  return (
    <AnimatePresence>
      {/* Background Dimmer */}
      <motion.div
        className="case-study-overlay open"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        onClick={onClose}
      />

      {/* Full-Screen Immersive Editorial Page */}
      <motion.div
        ref={containerRef}
        className="case-study-container open"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        onScroll={handleScroll}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Reading Progress Bar */}
        <div 
          className="cs-progress-bar" 
          style={{ width: `${scrollProgress}%` }} 
        />

        {/* Sticky Editorial Header */}
        <header className="cs-header">
          <div className="cs-header-left">
            <button 
              className="cs-btn-close" 
              onClick={onClose}
              title="Close Case Study (Esc)"
              aria-label="Close Case Study"
            >
              <X size={15} />
              <span>Close</span>
              <span className="cs-shortcut-hint">[Esc]</span>
            </button>

            <div className="cs-breadcrumb">
              <span>BAY</span>
              <span>/</span>
              <span className="cs-breadcrumb-current">{project.title}</span>
            </div>
          </div>

          <div className="cs-header-right">
            {/* Quick Project Switcher */}
            <div className="cs-quick-nav">
              <button 
                className="cs-nav-btn" 
                onClick={() => onNavigateProject(prevProject.id)}
                title={`Previous: ${prevProject.title} (←)`}
                aria-label="Previous project"
              >
                <ChevronLeft size={16} />
              </button>
              <span style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.72rem', 
                color: 'var(--text-muted)',
                padding: '0 4px'
              }}>
                {String(currentIndex + 1).padStart(2, '0')}/{String(allProjects.length).padStart(2, '0')}
              </span>
              <button 
                className="cs-nav-btn" 
                onClick={() => onNavigateProject(nextProject.id)}
                title={`Next: ${nextProject.title} (→)`}
                aria-label="Next project"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Theme toggle if provided */}
            {toggleTheme && (
              <button 
                className="cs-nav-btn" 
                onClick={toggleTheme}
                title="Toggle Dark/Light theme"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </button>
            )}
          </div>
        </header>

        {/* Editorial Body Content */}
        <div className="cs-content-wrap">
          {/* Top Title & Classification */}
          <motion.div 
            className="cs-hero-section"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55 }}
          >
            <div className="cs-category-badge">
              {project.category} &bull; {project.year}
            </div>
            
            <h1 className="cs-title">{project.title}</h1>
            <p className="cs-tagline">{project.tagline}</p>

            {/* 4-Column Clean Metadata Grid (Matching /projects/form-index) */}
            <div className="cs-meta-grid">
              <div className="cs-meta-col">
                <span className="cs-meta-label">Client</span>
                <span className="cs-meta-val">{project.client || 'Commissioned Project'}</span>
              </div>
              <div className="cs-meta-col">
                <span className="cs-meta-label">Year</span>
                <span className="cs-meta-val">{project.year}</span>
              </div>
              <div className="cs-meta-col">
                <span className="cs-meta-label">Role & Services</span>
                <span className="cs-meta-val">{project.role}</span>
              </div>
              <div className="cs-meta-col">
                <span className="cs-meta-label">Timeline</span>
                <span className="cs-meta-val">{project.timeline || '4 - 6 Minggu'}</span>
              </div>
            </div>
          </motion.div>

          {/* Large Hero Media Frame */}
          <motion.div 
            className="cs-hero-media"
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {project.videoFiles && project.videoFiles.length > 0 ? (
              <video 
                controls 
                poster={project.heroImage} 
                preload="metadata" 
                playsInline
              >
                <source src={project.videoFiles[0].file} type="video/mp4" />
                Browser Anda tidak mendukung video HTML5.
              </video>
            ) : (
              <img src={project.heroImage} alt={project.title} loading="eager" />
            )}
          </motion.div>

          {/* Lead Editorial Ingress Statement */}
          <motion.h2 
            className="cs-ingress"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            {leadIngress}
          </motion.h2>

          {/* 4-Pillar Narrative Section (The Loop Agency Architecture) */}
          <div className="cs-narrative-grid">
            <motion.div 
              className="narrative-block"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="narrative-pillar-num">01 // Overview</span>
              <h3 className="narrative-title">Latar Belakang & Visi</h3>
              <p className="narrative-body">{project.overview}</p>
            </motion.div>

            <motion.div 
              className="narrative-block"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <span className="narrative-pillar-num">02 // Challenge</span>
              <h3 className="narrative-title">Tantangan Desain</h3>
              <p className="narrative-body">{project.challenge}</p>
            </motion.div>

            <motion.div 
              className="narrative-block"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              <span className="narrative-pillar-num">03 // Our Approach</span>
              <h3 className="narrative-title">Metodologi & Solusi</h3>
              <p className="narrative-body">{project.approach}</p>
            </motion.div>

            <motion.div 
              className="narrative-block"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.24 }}
            >
              <span className="narrative-pillar-num">04 // Outcome</span>
              <h3 className="narrative-title">Hasil & Dampak Nyata</h3>
              <p className="narrative-body">{project.outcome}</p>
            </motion.div>
          </div>

          {/* Project Contributors & Team Block */}
          <motion.div 
            className="cs-credits-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="cs-credits-title">Creative Team & Contributions</div>
            <div className="cs-credits-list">
              {teamList.map((member, idx) => (
                <div key={idx} className="cs-credit-item">
                  <strong>{member.name}</strong>
                  <span>({member.role})</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Deliverables & System Assets */}
          {project.deliverables && (
            <motion.div 
              className="cs-deliverables-box"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="cs-deliverables-title">Deliverables & System Assets</div>
              <ul className="cs-deliverables-list">
                {project.deliverables.map((item, idx) => (
                  <li key={idx}>
                    <Check size={16} className="deliverable-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Monumental Quote / Testimonial Block */}
          <motion.div 
            className="cs-quote-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <blockquote className="cs-quote-text">
              &ldquo;{project.quote || 'Desain yang kokoh adalah perpaduan ritme, kejelasan pesan, dan eksekusi tanpa kompromi.'}&rdquo;
            </blockquote>
            <div className="cs-quote-author">
              &mdash; {project.quoteAuthor || 'Bayu Adi Rahayu'}
            </div>
          </motion.div>

          {/* Motion Repertoire / Extra Video Clips */}
          {project.videoFiles && project.videoFiles.length > 1 && (
            <div className="cs-gallery-section">
              <div className="cs-gallery-title">Motion Clips & Reel Documentation</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {project.videoFiles.slice(1).map((vf, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      background: 'var(--bg-surface)', 
                      padding: '1.75rem', 
                      borderRadius: 14, 
                      border: '1px solid var(--border-subtle)' 
                    }}
                  >
                    <h4 style={{ 
                      fontFamily: 'var(--font-display)', 
                      fontSize: '1.15rem', 
                      marginBottom: '1rem', 
                      color: 'var(--text-primary)' 
                    }}>
                      {vf.title}
                    </h4>
                    <video controls style={{ width: '100%', borderRadius: 8 }} preload="metadata">
                      <source src={vf.file} type="video/mp4" />
                    </video>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Visual Gallery & Artifacts */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="cs-gallery-section">
              <div className="cs-gallery-title">Visual Archive & Artifacts ({project.gallery.length})</div>
              <div className="cs-gallery-grid">
                {project.gallery.map((imgSrc, idx) => (
                  <motion.div 
                    key={idx} 
                    className="cs-gallery-item"
                    onClick={() => onOpenLightbox(imgSrc)}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img 
                      src={imgSrc} 
                      alt={`${project.title} visual archive ${idx + 1}`} 
                      loading="lazy" 
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Monumental Next Project Transition Bar */}
          <motion.div 
            className="cs-next-project-bar" 
            onClick={() => onNavigateProject(nextProject.id)}
            whileHover={{ x: 6 }}
            transition={{ duration: 0.25 }}
          >
            <span className="cs-next-label">05 // Next Project</span>
            <div className="cs-next-title-row">
              <div>
                <h3 className="cs-next-title">{nextProject.title}</h3>
                <p className="cs-next-tagline">{nextProject.tagline}</p>
              </div>
              <span className="cs-next-arrow">
                <ArrowRight size={28} />
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
