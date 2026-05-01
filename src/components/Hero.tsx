import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero({ onScroll }: { onScroll?: () => void }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const stars = useMemo(
    () =>
      Array.from({ length: 36 }).map((_, i) => ({
        id: i,
        left: (i * 19) % 100,
        top: (i * 37) % 100,
        size: (i % 3) + 1,
        depth: (i % 5) + 1,
      })),
    []
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2;
    const ny = (e.clientY / window.innerHeight - 0.5) * 2;
    setMouse({ x: nx, y: ny });
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      background: '#000',
    }}
      onMouseMove={handleMouseMove}
    >
      {/* Space background image layer */}
      <motion.div
        animate={{ x: mouse.x * -24, y: mouse.y * -16, rotateY: mouse.x * 2.2, rotateX: mouse.y * -1.8, scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 45, damping: 20 }}
        style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/rocket_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.5,
        zIndex: 1,
        transformStyle: 'preserve-3d',
      }}
      />

      {/* Floating stars layer */}
      <motion.div
        animate={{ x: mouse.x * -42, y: mouse.y * -28 }}
        transition={{ type: 'spring', stiffness: 35, damping: 18 }}
        style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}
      >
        {stars.map((star) => (
          <motion.div
            key={star.id}
            animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.2, 1] }}
            transition={{ duration: 2.2 + star.depth * 0.15, repeat: Infinity, ease: 'easeInOut', delay: star.id * 0.04 }}
            style={{
              position: 'absolute',
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: '999px',
              background: '#fff',
              boxShadow: '0 0 10px rgba(255,255,255,0.45)',
            }}
          />
        ))}
      </motion.div>

      {/* Gradient overlay — heavier at bottom so text sits clean */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.6) 72%, rgba(0,0,0,0.96) 100%)',
        zIndex: 2,
      }} />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 5%',
        }}
      >
        {/* Status label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
            marginBottom: '2.25rem',
          }}
        >
          Applications Open — Spring 2026
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(3.5rem, 9vw, 8rem)',
            fontWeight: 400,
            lineHeight: 1.0,
            color: '#FFFFFF',
            marginBottom: '1.75rem',
            maxWidth: '860px',
          }}
        >
          Prepare for<br />
          <em>Liftoff.</em>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.52 }}
          style={{
            fontSize: '1.05rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '480px',
            lineHeight: 1.65,
            marginBottom: '3rem',
            letterSpacing: '-0.01em',
          }}
        >
          Welcome to the largest network of entrepreneurs, builders, and founders at UCSD.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.64 }}
          style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <button
            className="btn-primary"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '0.9rem',
              letterSpacing: '-0.01em',
              padding: '12px 28px',
              cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Apply Now
          </button>
          <button
            onClick={onScroll}
            className="btn-outline"
            style={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '0.9rem',
              letterSpacing: '-0.01em',
              padding: '12px 28px',
              cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
          >
            Explore Portfolio
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={onScroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          padding: '8px',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.28)',
        }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '28px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)',
          }}
        />
      </motion.button>
    </div>
  );
}
