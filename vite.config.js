import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

function copyStaticAssetsPlugin() {
  return {
    name: 'copy-static-assets',
    closeBundle() {
      const copyList = [
        { src: 'assets', dest: 'dist/assets' },
        { src: 'Portofolio', dest: 'dist/Portofolio' },
        { src: 'Profile Photo.webp', dest: 'dist/Profile Photo.webp' },
        { src: 'Profile Photo2.webp', dest: 'dist/Profile Photo2.webp' },
        { src: 'Profile Photo.png', dest: 'dist/Profile Photo.png' },
        { src: 'Profile Photo2.png', dest: 'dist/Profile Photo2.png' },
        { src: 'Bayu adi rahayu-resume .pdf', dest: 'dist/Bayu adi rahayu-resume .pdf' },
        { src: 'public', dest: 'dist' }
      ];

      for (const item of copyList) {
        if (fs.existsSync(item.src)) {
          const destDir = path.dirname(item.dest);
          if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
          }
          fs.cpSync(item.src, item.dest, {
            recursive: true,
            force: true,
            filter: (source) => {
              const s = source.toLowerCase();
              return !s.endsWith('.mov') && !s.endsWith('.zip');
            }
          });
          console.log(`[copy-static-assets] Copied ${item.src} -> ${item.dest}`);
        }
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), copyStaticAssetsPlugin()],
  server: {
    port: 5173,
    open: true
  }
});
