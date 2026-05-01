import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Star = {
  id: number;
  left: number;
  top: number;
  size: number;
  depth: number;
  delay: number;
  duration: number;
  driftX: number;
  driftY: number;
};

function buildStars(count: number, seed: number): Star[] {
  const rnd = mulberry32(seed);
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: rnd() * 100,
    top: rnd() * 100,
    size: 0.65 + rnd() * 2.95,
    depth: rnd(),
    delay: rnd() * 3,
    duration: 1.8 + rnd() * 2.4,
    driftX: (rnd() - 0.5) * 14,
    driftY: (rnd() - 0.5) * 10,
  }));
}

export default function Hero({ onScroll }: { onScroll?: () => void }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const stars = useMemo(() => buildStars(200, 20260201), []);
  const dust = useMemo(() => buildStars(85, 20260202), []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2;
    const ny = (e.clientY / window.innerHeight - 0.5) * 2;
    setMouse({ x: nx, y: ny });
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        background: '#000',
      }}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        animate={{ x: mouse.x * -24, y: mouse.y * -16, rotateY: mouse.x * 2.2, rotateX: mouse.y * -1.8, scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 45, damping: 20 }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/rocket_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
          zIndex: 1,
          transformStyle: 'preserve-3d',
        }}
      />
      <div className="hero-loop-overlay" aria-hidden />

      {/* Tone down photo so hero copy / stars stay legible */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, transparent 42%, transparent 62%, rgba(0,0,0,0.35) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Fine dust — visible grain + parallax */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none' }}>
        {dust.map((s) => {
          const parallax = 5 + s.depth * 12;
          return (
            <motion.div
              key={`d-${s.id}`}
              animate={{
                opacity: [0.2, 0.55, 0.2],
                x: [0, s.driftX * 0.45, 0],
                y: [0, s.driftY * 0.38, 0],
              }}
              transition={{ duration: s.duration * 1.35, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
              style={{
                position: 'absolute',
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: s.size * 0.62,
                height: s.size * 0.62,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.9)',
                boxShadow: `0 0 ${2 + s.depth * 4}px rgba(255,255,255,${0.35 + s.depth * 0.35})`,
                transform: `translate3d(${mouse.x * parallax}px, ${mouse.y * (parallax * 0.88)}px, 0)`,
              }}
            />
          );
        })}
      </div>

      {/* Brighter stars — above vignette so they stay vivid */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 6, pointerEvents: 'none' }}>
        {stars.map((s) => {
          const parallax = 12 + s.depth * 40;
          const twinkleLo = 0.45 + s.depth * 0.22;
          const twinkleHi = 0.88 + s.depth * 0.11;
          const glow = 3 + s.depth * 22;
          const glowAlpha = 0.52 + s.depth * 0.44;
          return (
            <motion.div
              key={s.id}
              animate={{
                opacity: [twinkleLo, twinkleHi, twinkleLo],
                scale: [1, 1.12 + s.depth * 0.18, 1],
              }}
              transition={{ duration: s.duration, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
              style={{
                position: 'absolute',
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: s.size,
                height: s.size,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 30%, rgba(255,250,235,1), rgba(255,255,255,0.88) 40%, rgba(200,215,255,0.65) 100%)',
                boxShadow: `
                  0 0 ${glow * 0.45}px rgba(255,255,255,${glowAlpha * 0.9}),
                  0 0 ${glow}px rgba(164,189,255,${glowAlpha * 0.55})`,
                transform: `translate3d(${mouse.x * parallax}px, ${mouse.y * (parallax * 0.82)}px, 0)`,
              }}
            />
          );
        })}
      </div>

      {/* Vignette under stars (dims photo only), stronger at bottom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.02) 35%, rgba(0,0,0,0.45) 78%, rgba(0,0,0,0.88) 100%)',
          zIndex: 4,
          pointerEvents: 'none',
        }}
      />

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
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.68rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
            marginBottom: '2.25rem',
          }}
        >
          Startup Incubator · UC San Diego
        </motion.p>

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
          Welcome to the largest network of entrepreneurs, builders, and founders at UC San Diego.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.64 }}
          className="hero-cta-row"
          style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <button
            type="button"
            className="btn-primary btn-burst"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '0.9rem',
              letterSpacing: '-0.01em',
              padding: '12px 28px',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Apply Now
          </button>
          <Link
            to="/directory"
            className="btn-outline btn-burst"
            style={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '0.9rem',
              letterSpacing: '-0.01em',
              padding: '12px 28px',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
          >
            Explore Directory
          </Link>
        </motion.div>
      </motion.div>

      <motion.button
        type="button"
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
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.28)',
          }}
        >
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
