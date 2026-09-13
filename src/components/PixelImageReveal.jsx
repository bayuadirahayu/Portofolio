import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * PixelImageReveal
 * Loop Agency Framer-inspired pixelated mosaic reveal on scroll.
 * Ensures the real photo is 100% visible at all times with zero blank states,
 * while overlaying a hardware-accelerated digital pixel transition.
 */
export default function PixelImageReveal({
  src = "/assets/projects/profile/photo2.webp",
  alt = "Bayu Adi Rahayu - Profile Photo",
  className = "",
  pixelDuration = 1000
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  // Trigger transition when approaching viewport
  const isInView = useInView(containerRef, { once: true, margin: "100px" });
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [animProgress, setAnimProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isHoverGlitching, setIsHoverGlitching] = useState(false);

  // Render the pixelated image onto the canvas
  const renderPixelation = useCallback((pixelSize, img) => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;
    const naturalW = img.naturalWidth || img.width;
    const naturalH = img.naturalHeight || img.height;
    if (!naturalW || !naturalH) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: false });
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    if (width === 0 || height === 0) return;

    if (pixelSize <= 1) {
      // Crisp 1:1 render
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);
      return;
    }

    // Downscale calculation
    const scaledW = Math.max(2, Math.floor(width / pixelSize));
    const scaledH = Math.max(2, Math.floor(height / pixelSize));

    // Create temporary offscreen canvas for scaling
    const offscreen = document.createElement('canvas');
    offscreen.width = scaledW;
    offscreen.height = scaledH;
    const offCtx = offscreen.getContext('2d');
    if (!offCtx) return;

    offCtx.drawImage(img, 0, 0, scaledW, scaledH);

    // Upscale back with nearest-neighbor (crisp digital blocks)
    ctx.imageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(offscreen, 0, 0, scaledW, scaledH, 0, 0, width, height);
  }, []);

  // Update canvas sizing to match container
  const updateCanvasSize = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const rect = container.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    
    // Set actual pixel dimensions for sharpness
    if (rect.width > 0 && rect.height > 0) {
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
    }
  }, []);

  // Handle image load event
  const handleImageLoad = (e) => {
    imgRef.current = e.target;
    setIsLoaded(true);
    updateCanvasSize();
    renderPixelation(32, e.target);
  };

  // Immediate check if image is already cached / completed
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setIsLoaded(true);
      updateCanvasSize();
      renderPixelation(isComplete ? 1 : 32, img);
    }
  }, [src, isComplete, updateCanvasSize, renderPixelation]);

  // Run the Pixel Transition when scrolled into view
  useEffect(() => {
    if (!isInView || !isLoaded || !imgRef.current || isComplete) return;

    const startTime = performance.now();
    const steps = [40, 32, 24, 16, 10, 6, 3, 1];
    let animationFrameId;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / pixelDuration, 1);
      setAnimProgress(progress);

      const eased = 1 - Math.pow(1 - progress, 3);
      const stepIndex = Math.min(
        Math.floor(eased * steps.length),
        steps.length - 1
      );
      const currentPixelSize = steps[stepIndex];

      renderPixelation(currentPixelSize, imgRef.current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setIsComplete(true);
        renderPixelation(1, imgRef.current);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, isLoaded, isComplete, pixelDuration, renderPixelation]);

  // Handle Window Resize
  useEffect(() => {
    const handleResize = () => {
      updateCanvasSize();
      if (imgRef.current && isComplete) {
        renderPixelation(1, imgRef.current);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateCanvasSize, isComplete, renderPixelation]);

  // Interactive Micro-Glitch on Hover (Loop Agency signature feel)
  const triggerHoverGlitch = () => {
    if (!isComplete || isHoverGlitching || !imgRef.current) return;
    setIsHoverGlitching(true);

    const glitchSteps = [16, 8, 4, 1];
    let step = 0;
    const interval = setInterval(() => {
      if (step < glitchSteps.length) {
        renderPixelation(glitchSteps[step], imgRef.current);
        step++;
      } else {
        clearInterval(interval);
        renderPixelation(1, imgRef.current);
        setIsHoverGlitching(false);
      }
    }, 65);
  };

  return (
    <div
      ref={containerRef}
      className={`pixel-reveal-container ${className}`}
      onMouseEnter={triggerHoverGlitch}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        cursor: 'crosshair',
        backgroundColor: 'var(--bg-surface)'
      }}
    >
      {/* 
        Solid underlying image: ALWAYS visible with 100% guarantee.
        No blank box even before JS mounts or if canvas is unsupported.
      */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="eager"
        onLoad={handleImageLoad}
        onError={(e) => {
          // Fallback if primary relative path encounters any issue
          if (!e.currentTarget.src.includes('Profile-Photo2')) {
            e.currentTarget.src = '/Profile Photo2.webp';
          }
        }}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          zIndex: 1
        }}
      />

      {/* Canvas Overlay for hardware-accelerated pixel transition */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 2,
          pointerEvents: 'none',
          // Show canvas while animating, fade out when 100% complete so real crisp image shows
          opacity: (!isComplete || isHoverGlitching) ? 1 : 0,
          transition: 'opacity 0.35s ease'
        }}
      />

      {/* Loop Agency Swiss Meta Tag */}
      <div className="pixel-overlay-meta" style={{ zIndex: 3 }}>
        <span className="pixel-meta-tag">
          {!isComplete && isLoaded
            ? `SYS.TRANSITION // ${Math.round(animProgress * 100)}%`
            : "PIXEL.RESOLUTION // 100% CRISP"}
        </span>
      </div>

      {/* Subtle Digital Raster Scanline Grid during transition */}
      <motion.div
        className="pixel-raster-grid"
        style={{ zIndex: 3, pointerEvents: 'none' }}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: isComplete && !isHoverGlitching ? 0 : 0.35 }}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}
