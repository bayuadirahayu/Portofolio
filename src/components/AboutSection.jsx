import React from 'react';
import { motion } from 'framer-motion';
import PixelImageReveal from './PixelImageReveal.jsx';

export default function AboutSection({ profile }) {
  const allSkills = [
    ...profile.skills.design,
    ...profile.skills.software,
    ...profile.skills.technical
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Photo Column with Loop Agency Pixel Transition */}
          <motion.div 
            className="about-photo-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="photo-frame">
              <PixelImageReveal 
                src="/assets/projects/profile/photo2.webp" 
                alt="Bayu Adi Rahayu" 
              />
            </div>
            <div className="photo-caption-bar">
              <span>Bayu Adi Rahayu</span>
              <span>Visual Creative</span>
            </div>
          </motion.div>

          {/* Info Column */}
          <motion.div 
            className="about-info-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mono-label">01 // Profile & Practice</span>
            <h2 className="about-heading">{profile.name}</h2>
            <div className="mono-label" style={{ color: 'var(--text-primary)', fontSize: '0.85rem' }}>
              {profile.roles.join(' • ')}
            </div>

            <p className="about-bio-lead">{profile.bio}</p>

            <p className="about-bio-text">
              Fokus berkarya pada irisan antara sistem identitas visual yang terstruktur, desain kemasan artisan, serta prototipe antarmuka digital performa tinggi. Pendekatan desain didasari oleh efisiensi, pengurangan elemen yang tidak perlu, dan penajaman pesan inti sehingga setiap karya tampil percaya diri dan mudah dikenali.
            </p>

            {/* Skills Breakdown */}
            <div className="skill-group-wrap">
              <h4 className="skill-group-title">Keahlian & Perangkat Lunak</h4>
              <div className="tags-wrap">
                {allSkills.map((s, idx) => (
                  <span key={idx} className="tag-badge">{s}</span>
                ))}
              </div>
            </div>

            {/* Education & History */}
            <div className="skill-group-wrap">
              <h4 className="skill-group-title">Pendidikan & Riwayat Akademik</h4>
              <div className="timeline-list">
                {profile.education.map((e, idx) => (
                  <div key={idx} className="timeline-item">
                    <span className="timeline-period">{e.period}</span>
                    <div>
                      <h4 className="timeline-role">{e.degree}</h4>
                      <div className="timeline-org">{e.institution} — {e.location}</div>
                      <p className="timeline-desc">{e.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
