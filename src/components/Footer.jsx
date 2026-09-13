import React from 'react';

export default function Footer({ profile }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '1.2rem', color: 'var(--text-primary)' }}>BAY</span>
          <span>&copy; {new Date().getFullYear()} {profile.name}. Handcrafted with precision.</span>
        </div>

        <div>
          <span>{profile.location} &bull; GMT+7</span>
        </div>

        <div className="footer-links">
          {profile.instagram && (
            <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="footer-link">
              Instagram
            </a>
          )}
          {profile.tiktok && (
            <a href={profile.tiktok} target="_blank" rel="noopener noreferrer" className="footer-link">
              TikTok
            </a>
          )}
          <a href={profile.behance} target="_blank" rel="noopener noreferrer" className="footer-link">
            Behance
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="footer-link">
            WhatsApp
          </a>
          <a href="#hero" className="footer-link">
            &uarr; Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
