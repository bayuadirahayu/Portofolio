import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, LayoutGrid } from 'lucide-react';
import ProjectListRow from './ProjectListRow.jsx';
import ProjectCard from './ProjectCard.jsx';

export default function WorkSection({ 
  categories, 
  projects, 
  onSelectProject, 
  onHoverStart, 
  onHoverEnd 
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'gallery'

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.categorySlug === activeCategory);

  return (
    <section className="work-section" id="work">
      <div className="container">
        {/* Section Header Controls */}
        <div className="work-header">
          <div>
            <span className="mono-label" style={{ display: 'block', marginBottom: '0.35rem' }}>02 // Selected Work</span>
            <h2 className="section-title">
              Portfolio Index{' '}
              <span className="section-count">({filteredProjects.length})</span>
            </h2>
          </div>

          {/* View Switcher Tabs */}
          <div className="view-switcher">
            <button
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <List size={13} />
              List
            </button>
            <button
              className={`view-btn ${viewMode === 'gallery' ? 'active' : ''}`}
              onClick={() => setViewMode('gallery')}
            >
              <LayoutGrid size={13} />
              Gallery
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="category-filter-bar">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Container with Layout Animation */}
        <AnimatePresence mode="wait">
          {viewMode === 'list' ? (
            <motion.div
              key={`list-${activeCategory}`}
              className="projects-list-wrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {filteredProjects.length === 0 ? (
                <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  Tidak ada proyek dalam kategori ini.
                </div>
              ) : (
                filteredProjects.map((project, idx) => (
                  <ProjectListRow
                    key={project.id}
                    project={project}
                    index={idx}
                    onSelect={onSelectProject}
                    onHoverStart={onHoverStart}
                    onHoverEnd={onHoverEnd}
                  />
                ))
              )}
            </motion.div>
          ) : (
            <motion.div
              key={`gallery-${activeCategory}`}
              className="projects-gallery-grid"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {filteredProjects.length === 0 ? (
                <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)', gridColumn: 'span 2' }}>
                  Tidak ada proyek dalam kategori ini.
                </div>
              ) : (
                filteredProjects.map((project, idx) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={idx}
                    onSelect={onSelectProject}
                  />
                ))
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
