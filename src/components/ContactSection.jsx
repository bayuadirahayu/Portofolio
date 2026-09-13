import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, MessageSquare, ExternalLink } from 'lucide-react';

export default function ContactSection({ profile, onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'UI/UX & Web Design',
    message: ''
  });

  function handleCopyEmail() {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopied(true);
      onShowToast(`Email disalin: ${profile.email}`);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const text = `Halo Bayu, saya ${formData.name}. Tertarik bekerja sama untuk proyek ${formData.service}. Detail: ${formData.message}`;
    const waUrl = `https://wa.me/6285155321739?text=${encodeURIComponent(text)}`;
    onShowToast('Mengarahkan ke WhatsApp...');
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mono-label">03 // Inquiries</span>
            <h2 className="contact-heading">Let's build a brand that's impossible to ignore.</h2>
            <p className="contact-sub">
              Terbuka untuk proyek identitas merek, desain antarmuka aplikasi, desain kemasan produk, motion graphics, maupun konsultasi kreatif berbasis AI.
            </p>

            <div className="contact-actions-list">
              {/* Email Card with Copy Button */}
              <div className="contact-card">
                <div className="contact-card-info">
                  <span className="contact-card-label">Direct Email</span>
                  <span className="contact-card-val">{profile.email}</span>
                </div>
                <button className="btn-copy-email" onClick={handleCopyEmail}>
                  {copied ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      <Check size={12} /> Copied!
                    </span>
                  ) : (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      <Copy size={12} /> Copy Email
                    </span>
                  )}
                </button>
              </div>

              {/* WhatsApp Direct */}
              <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-card-info">
                  <span className="contact-card-label">WhatsApp Fast Response</span>
                  <span className="contact-card-val">{profile.whatsappDisplay}</span>
                </div>
                <span className="mono-label" style={{ color: 'var(--text-primary)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  <MessageSquare size={13} /> Chat &rarr;
                </span>
              </a>

              {/* Social Channels & Networks */}
              <div className="contact-card">
                <div className="contact-card-info">
                  <span className="contact-card-label">Design & Social Networks</span>
                  <span className="contact-card-val">Instagram &bull; TikTok &bull; Behance &bull; LinkedIn</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
                  {profile.instagram && (
                    <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="mono-label" style={{ color: 'var(--text-primary)', display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                      Instagram <ExternalLink size={11} />
                    </a>
                  )}
                  {profile.tiktok && (
                    <a href={profile.tiktok} target="_blank" rel="noopener noreferrer" className="mono-label" style={{ color: 'var(--text-primary)', display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                      TikTok <ExternalLink size={11} />
                    </a>
                  )}
                  {profile.behance && (
                    <a href={profile.behance} target="_blank" rel="noopener noreferrer" className="mono-label" style={{ color: 'var(--text-primary)', display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                      Behance <ExternalLink size={11} />
                    </a>
                  )}
                  {profile.linkedin && (
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="mono-label" style={{ color: 'var(--text-primary)', display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                      LinkedIn <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form className="inquiry-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="form-name">Nama Lengkap *</label>
                <input
                  className="form-input"
                  type="text"
                  id="form-name"
                  placeholder="Nama Anda / Perusahaan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="form-email">Alamat Email *</label>
                <input
                  className="form-input"
                  type="email"
                  id="form-email"
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="form-service">Layanan yang Dibutuhkan</label>
                <select
                  className="form-select"
                  id="form-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="UI/UX & Web Design">UI/UX & Web Design</option>
                  <option value="Brand Identity & Logo">Brand Identity & Logo</option>
                  <option value="Packaging Design">Packaging Design</option>
                  <option value="Motion Graphics">Motion Graphics & Video</option>
                  <option value="Custom Typography">Custom Typography</option>
                  <option value="Other Creative Request">Lainnya</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="form-message">Ceritakan tentang proyek Anda *</label>
                <textarea
                  className="form-textarea"
                  id="form-message"
                  placeholder="Jelaskan kebutuhan proyek, target audiens, dan timeline Anda..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn-submit-inquiry"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Kirim Permintaan Proyek &rarr;
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
