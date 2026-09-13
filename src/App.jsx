import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { portfolioData } from '../data/projects.js';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import WorkSection from './components/WorkSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import CaseStudyModal from './components/CaseStudyModal.jsx';
import Footer from './components/Footer.jsx';
import FloatingPreview from './components/FloatingPreview.jsx';

const { profile, categories, projects } = portfolioData;

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoverImage, setHoverImage] = useState(null);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [toast, setToast] = useState(null);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  }

  // Hash routing for direct linking and browser history
  React.useEffect(() => {
    function parseHash() {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const id = hash.replace('#project-', '');
        const p = projects.find(x => x.id === id);
        if (p) {
          setSelectedProject(p);
          document.body.style.overflow = 'hidden';
        }
      } else if (selectedProject && !hash.startsWith('#project-')) {
        setSelectedProject(null);
        document.body.style.overflow = '';
      }
    }

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, [selectedProject]);

  const handleSelectProject = useCallback((id) => {
    const p = projects.find(x => x.id === id);
    setSelectedProject(p || null);
    if (p) {
      window.location.hash = `#project-${p.id}`;
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = '';
    if (window.location.hash.startsWith('#project-')) {
      window.history.replaceState(null, null, window.location.pathname + window.location.search);
    }
  }, []);

  const handleNavigateProject = useCallback((id) => {
    const p = projects.find(x => x.id === id);
    setSelectedProject(p || null);
    if (p) {
      window.location.hash = `#project-${p.id}`;
    }
  }, []);

  const handleHoverStart = useCallback((imgSrc) => {
    setHoverImage(imgSrc);
  }, []);

  const handleHoverEnd = useCallback(() => {
    setHoverImage(null);
  }, []);

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(null), 2800);
  }

  return (
    <div
      className="app-root"
      data-theme={theme}
    >
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero profile={profile} />

        <AboutSection profile={profile} />

        <WorkSection
          categories={categories}
          projects={projects}
          onSelectProject={handleSelectProject}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
        />

        <ContactSection profile={profile} onShowToast={showToast} />
      </main>

      <Footer profile={profile} />

      {/* Floating Cursor Image Preview */}
      <FloatingPreview
        activeImage={hoverImage}
        isVisible={!!hoverImage}
      />

      {/* Full-Screen Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            key={selectedProject.id}
            project={selectedProject}
            allProjects={projects}
            onClose={handleCloseModal}
            onNavigateProject={handleNavigateProject}
            onOpenLightbox={setLightboxSrc}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightboxSrc(null)}
          >
            <motion.img
              src={lightboxSrc}
              alt="Lightbox"
              className="lightbox-img"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast-notification"
            initial={{ opacity: 0, y: 20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 10, x: '-50%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
