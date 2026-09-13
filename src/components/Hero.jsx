import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ profile }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Meta Top Strip */}
          <motion.div className="hero-meta-top" variants={itemVariants}>
            <span className="mono-label">DKV IWU Bandung &bull; RPL SMKN 1 Rongga</span>
            <span className="mono-label">Independent Practice &bull; 2026</span>
          </motion.div>

          {/* Large Editorial Headline */}
          <motion.div className="hero-title-wrap" variants={itemVariants}>
            <h1 className="hero-heading">
              Bayu Adi Rahayu<br />
              <span className="light-accent">Visual Designer & AI-Integrated Creative</span>
            </h1>
          </motion.div>

          {/* Manifesto */}
          <motion.p className="hero-manifesto" variants={itemVariants}>
            Menggabungkan kepekaan komposisi visual, identitas brand yang tajam, desain kemasan berkarakter, serta alur kerja kecerdasan buatan (AI-driven workflow) untuk merancang ekosistem digital yang fungsional dan berdaya pikat tinggi.
          </motion.p>

          {/* Stats Grid */}
          <motion.div className="hero-stats-grid" variants={itemVariants}>
            {profile.stats.map((s, idx) => (
              <div className="stat-item" key={idx}>
                <div className="stat-num">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
