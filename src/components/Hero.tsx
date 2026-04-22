import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero({ onLaunch }: { onLaunch?: () => void }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    // Normalize coordinates from -1 to 1 based on window center
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleLaunch = () => {
    if (onLaunch) onLaunch();
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', background: '#050505', perspective: '1200px' }}
    >
      {/* The Original High-Quality Photo, now existing in interactive 3D space */}
      <motion.div
        animate={{ 
          x: mousePos.x * -30, 
          y: mousePos.y * -30,
          rotateX: mousePos.y * 4,
          rotateY: mousePos.x * 4,
          scale: 1.1 // Scaled to prevent edges from showing during 3D rotation
        }}
        transition={{ type: 'spring', stiffness: 40, damping: 20 }}
        style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          zIndex: 1,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Base Image */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'url(/rocket_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />

        {/* Dynamic Glow Layer: Duplicates the image, blurs it, and pulses it using stop-motion steps.
            This makes the bright engines and stars physically "breathe" and glow. */}
        <motion.div
          animate={{ opacity: [0.2, 0.6, 0.2], filter: ['blur(8px)', 'blur(12px)', 'blur(8px)'] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "steps(4)" }}
          style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            backgroundImage: 'url(/rocket_bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'screen',
          }}
        />

        {/* Stop Motion Cinematic Flicker Overlay */}
        <motion.div
          animate={{ opacity: [0, 0.08, 0, 0.05, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, ease: "steps(3)" }}
          style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            background: '#ffffff', mixBlendMode: 'overlay'
          }}
        />
      </motion.div>

      {/* Dynamic Lighting Spotlight that follows the mouse */}
      <motion.div
        animate={{ 
          x: mousePos.x * 200, 
          y: mousePos.y * 200 
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          width: '100vw', height: '100vw',
          marginLeft: '-50vw', marginTop: '-50vw',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 40%)',
          mixBlendMode: 'screen',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      {/* Dark overlay for text readability */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        background: 'linear-gradient(to bottom, rgba(5,5,5,0.1) 0%, rgba(5,5,5,0.9) 100%)',
        zIndex: 5,
        pointerEvents: 'none'
      }} />

      {/* Main Content */}
      <motion.div 
        className="container" 
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          textAlign: 'center',
          pointerEvents: 'none'
        }}
      >
        <div style={{
          background: 'rgba(47, 14, 122, 0.4)',
          border: '1px solid var(--purple)',
          padding: '6px 20px',
          borderRadius: '100px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '2rem',
          pointerEvents: 'auto'
        }}>
          <motion.div 
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--yellow)' }}
          />
          <span style={{ fontSize: '0.75rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
            System Status: Applications Open - Spring 2026
          </span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          lineHeight: 1,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          margin: '0 0 2rem 0',
          textShadow: '0 0 40px rgba(0,0,0,0.5)',
          pointerEvents: 'auto'
        }}>
          <span style={{ color: 'var(--white)' }}>PREPARE FOR</span><br />
          <span style={{ color: 'var(--yellow)' }}>LIFTOFF</span>
        </h1>

        <p style={{
          fontSize: '1.2rem',
          maxWidth: '700px',
          color: 'rgba(255,255,255,0.9)',
          marginBottom: '3rem',
          lineHeight: 1.5,
          pointerEvents: 'auto'
        }}>
          Welcome to the largest network of entrepreneurs, builders,<br/>and founders at UCSD.
        </p>

        <motion.button
          onClick={handleLaunch}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'rgba(0,0,0,0.4)',
            color: 'var(--yellow)',
            fontFamily: 'var(--font-mono)',
            fontSize: '1.1rem',
            fontWeight: 600,
            letterSpacing: '2px',
            padding: '16px 40px',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            textTransform: 'uppercase',
            transition: 'background 0.3s ease',
            backdropFilter: 'blur(4px)',
            boxShadow: '0 0 20px rgba(75, 27, 167, 0.4)',
            pointerEvents: 'auto'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(47, 14, 122, 0.6)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.4)'}
        >
          Launch Now
          <div style={{ position: 'absolute', top: 0, left: 0, width: '20px', height: '100%', borderLeft: '2px solid var(--purple)', borderTop: '2px solid var(--purple)', borderBottom: '2px solid var(--purple)' }}></div>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '20px', height: '100%', borderRight: '2px solid var(--purple)', borderTop: '2px solid var(--purple)', borderBottom: '2px solid var(--purple)' }}></div>
        </motion.button>

      </motion.div>
    </div>
  );
}
