import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProjectListRow({ project, index, onSelect, onHoverStart, onHoverEnd }) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      className="project-list-row"
      onClick={() => onSelect(project.id)}
      onMouseEnter={() => onHoverStart(project.heroImage)}
      onMouseLeave={onHoverEnd}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ backgroundColor: 'var(--bg-surface)' }}
    >
      <span className="list-num">{num}</span>
      <div className="list-title-wrap">
        <motion.h3 
          className="list-title"
          whileHover={{ x: 6 }}
          transition={{ duration: 0.2 }}
        >
          {project.title}
        </motion.h3>
        <span className="list-tagline">{project.tagline}</span>
      </div>
      <span className="list-cat">{project.category}</span>
      <span className="list-year">{project.year}</span>
      <motion.span 
        className="list-arrow"
        whileHover={{ x: 5 }}
      >
        <ArrowRight size={18} />
      </motion.span>
    </motion.div>
  );
}
