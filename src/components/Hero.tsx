import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

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
  const reduce = useReducedMotion();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const stars = useMemo(() => buildStars(200, 20260201), []);
  const dust = useMemo(() => buildStars(85, 20260202), []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2;
    const ny = (e.clientY / window.innerHeight - 0.5) * 2;
    setMouse({ x: nx, y: ny });
  };
  const handleExplore = () => {
    const target = document.getElementById('home-cohort-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const sunParallax = reduce ? { x: 0, y: 0 } : { x: mouse.x * 14, y: mouse.y * 10 };

  return (
    <div
      className="hero-root hero-root--page-blend"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        background: 'linear-gradient(165deg, var(--poster-navy) 0%, #060a10 45%, var(--poster-navy-mid) 100%)',
      }}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        animate={{
          x: mouse.x * -28,
          y: mouse.y * -18,
          rotateY: mouse.x * 2.4,
          rotateX: mouse.y * -2,
          scale: 1.06,
        }}
        transition={{ type: 'spring', stiffness: 42, damping: 20 }}
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/rocket_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          imageRendering: 'auto',
          opacity: 0.36,
          zIndex: 1,
          transformStyle: 'preserve-3d',
        }}
      />

      <motion.div
        className="hero-poster-sun"
        style={{ x: sunParallax.x, y: sunParallax.y }}
        animate={reduce ? undefined : { scale: [1, 1.05, 1], opacity: [0.88, 1, 0.88] }}
        transition={{
          x: { type: 'spring', stiffness: 38, damping: 22 },
          y: { type: 'spring', stiffness: 38, damping: 22 },
          scale: { duration: 11, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 11, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      <div className="hero-poster-horizon" aria-hidden />

      <div className="hero-loop-overlay" aria-hidden />

      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background:
            'linear-gradient(to bottom, rgba(13,21,32,0.35) 0%, transparent 38%, transparent 58%, rgba(6,10,16,0.55) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none' }}>
        {dust.map((s) => {
          const parallax = 5 + s.depth * 12;
          return (
            <motion.div
              key={`d-${s.id}`}
              animate={
                reduce
                  ? undefined
                  : {
                      opacity: [0.18, 0.48, 0.18],
                      x: [0, s.driftX * 0.45, 0],
                      y: [0, s.driftY * 0.38, 0],
                    }
              }
              transition={{
                duration: s.duration * 1.35,
                repeat: reduce ? 0 : Infinity,
                ease: 'easeInOut',
                delay: s.delay,
              }}
              style={{
                position: 'absolute',
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: s.size * 0.62,
                height: s.size * 0.62,
                borderRadius: '50%',
                background: 'rgba(253,245,230,0.65)',
                boxShadow: `0 0 ${2 + s.depth * 4}px rgba(253,245,230,${0.25 + s.depth * 0.3})`,
                transform: `translate3d(${mouse.x * parallax}px, ${mouse.y * (parallax * 0.88)}px, 0)`,
              }}
            />
          );
        })}
      </div>

      <div style={{ position: 'absolute', inset: 0, zIndex: 6, pointerEvents: 'none' }}>
        {stars.map((s) => {
          const parallax = 12 + s.depth * 40;
          const twinkleLo = 0.38 + s.depth * 0.22;
          const twinkleHi = 0.82 + s.depth * 0.14;
          const glow = 3 + s.depth * 22;
          const glowAlpha = 0.48 + s.depth * 0.42;
          return (
            <motion.div
              key={s.id}
              animate={
                reduce
                  ? undefined
                  : {
                      opacity: [twinkleLo, twinkleHi, twinkleLo],
                      scale: [1, 1.12 + s.depth * 0.18, 1],
                    }
              }
              transition={{
                duration: s.duration,
                repeat: reduce ? 0 : Infinity,
                ease: 'easeInOut',
                delay: s.delay,
              }}
              style={{
                position: 'absolute',
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: s.size,
                height: s.size,
                borderRadius: '50%',
                background:
                  'radial-gradient(circle at 30% 30%, rgba(255,250,235,1), rgba(253,245,230,0.9) 42%, rgba(180,205,230,0.45) 100%)',
                boxShadow: `
                  0 0 ${glow * 0.45}px rgba(253,245,230,${glowAlpha * 0.85}),
                  0 0 ${glow}px rgba(91,143,185,${glowAlpha * 0.35})`,
                transform: `translate3d(${mouse.x * parallax}px, ${mouse.y * (parallax * 0.82)}px, 0)`,
              }}
            />
          );
        })}
      </div>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(6,10,16,0.2) 0%, rgba(6,10,16,0.02) 38%, rgba(6,10,16,0.55) 72%, rgba(6,10,16,0.94) 100%)',
          zIndex: 4,
          pointerEvents: 'none',
        }}
      />

      {!reduce && <div className="hero-grain" aria-hidden />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.55 }}
        style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          textAlign: 'center',
          padding: 'clamp(88px, 12vh, 132px) 5% 0',
        }}
      >
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          Startup Incubator · UC San Diego
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22 }}
        >
          <span className="hero-kicker">PROJECT</span>
          <h1 className="hero-title-poster">
            <em>LIFTOFF</em>
          </h1>
        </motion.div>

        <motion.p
          className="hero-lede"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.38 }}
        >
          The largest startup network at UC San Diego. We don&apos;t expect greatness, we build greatness within you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.48 }}
          className="hero-cta-row hero-cta-row--poster"
          style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <button type="button" className="btn-primary btn-primary--cta-alt btn-burst" style={{ fontWeight: 600, padding: '13px 30px', cursor: 'pointer' }}>
            Apply Now
          </button>
          <button
            type="button"
            onClick={handleExplore}
            className="btn-outline btn-burst"
            style={{ fontWeight: 500, padding: '13px 30px', cursor: 'pointer' }}
          >
            Explore
          </button>
        </motion.div>
      </motion.div>

      <motion.button
        type="button"
        onClick={onScroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.95 }}
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
            fontSize: '0.58rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(253, 245, 230, 0.32)',
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={reduce ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: reduce ? 0 : Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '28px',
            background: 'linear-gradient(to bottom, rgba(253,245,230,0.4), transparent)',
          }}
        />
      </motion.button>
    </div>
  );
}
