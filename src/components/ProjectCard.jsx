import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, index, onSelect }) {
  return (
    <motion.div
      className="gallery-card"
      onClick={() => onSelect(project.id)}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      <div className="card-media-wrap">
        <motion.img 
          src={project.heroImage} 
          alt={project.title}
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        />
        <span className="card-badge-top">{project.category}</span>
      </div>
      <div className="card-info-wrap">
        <div className="card-meta-row">
          <h3 className="card-title">{project.title}</h3>
          <span className="mono-label">{project.year}</span>
        </div>
        <p className="card-tagline">{project.tagline}</p>
      </div>
    </motion.div>
  );
}
