import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function FloatingPreview({ activeImage, isVisible }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics matching Framer's cursor tracker
  const springX = useSpring(mouseX, { stiffness: 220, damping: 22, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 220, damping: 22, mass: 0.5 });

  useEffect(() => {
    function handleMouseMove(e) {
      let x = e.clientX + 25;
      let y = e.clientY + 25;

      if (x + 330 > window.innerWidth) {
        x = e.clientX - 345;
      }
      if (y + 230 > window.innerHeight) {
        y = e.clientY - 240;
      }

      mouseX.set(x);
      mouseY.set(y);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="floating-cursor-preview"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%'
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.85
      }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
    >
      {activeImage && (
        <img 
          src={activeImage} 
          alt="Preview" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      )}
    </motion.div>
  );
}
