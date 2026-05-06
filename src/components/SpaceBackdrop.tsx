import { useMemo, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type StarDatum = {
  id: number;
  left: number;
  top: number;
  size: number;
  depth: number;
  delay: number;
  duration: number;
  tone: 'neutral' | 'warm' | 'cool';
};

function buildStars(count: number, seed: number): StarDatum[] {
  const rnd = mulberry32(seed);
  return Array.from({ length: count }, (_, id) => {
    const rTone = rnd();
    const tone: StarDatum['tone'] = rTone > 0.94 ? 'warm' : rTone > 0.88 ? 'cool' : 'neutral';
    const big = rnd() > 0.76;
    return {
      id,
      left: rnd() * 100,
      top: rnd() * 145 - 22,
      size: big ? 0.85 + rnd() * 1.75 : 0.2 + rnd() * 1.05,
      depth: rnd(),
      delay: rnd() * 4,
      duration: 2 + rnd() * 2.2,
      tone,
    };
  });
}

function useHtmlTheme(): 'dark' | 'light' {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof document === 'undefined') return 'dark';
    return (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    const el = document.documentElement;
    const sync = () => {
      setTheme((el.getAttribute('data-theme') as 'dark' | 'light') || 'dark');
    };
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(el, { attributes: true, attributeFilter: ['data-theme'] });
    return () => obs.disconnect();
  }, []);

  return theme;
}

/**
 * Site-wide ambient space layer: fixed behind all content, pointer-events none.
 * Does not capture clicks or cover interactive UI.
 */
export default function SpaceBackdrop() {
  const reduce = useReducedMotion();
  const theme = useHtmlTheme();
  const isLight = theme === 'light';

  const stars = useMemo(() => buildStars(isLight ? 155 : 360, 20260301), [isLight]);
  const dust = useMemo(() => buildStars(isLight ? 52 : 88, 20260302), [isLight]);

  return (
    <div className="space-backdrop" aria-hidden>
      {/* Faint diffuse galaxy knots + sparse haze — no bright horizontal band */}
      <div className="space-backdrop__milky-band" />
      <div className="space-backdrop__dust-veil" />
      <div className="space-backdrop__airglow" />

      {/* Dark mode only: poster moodboard geometry (retro-futurist lines, arcs, grids) */}
      {!isLight && (
        <div className="space-backdrop__retro" aria-hidden>
          <div className="space-backdrop__retro-diagonals" />
          <div className="space-backdrop__retro-grid" />
          <div className="space-backdrop__retro-orbit">
            <div className="space-backdrop__retro-orbit-spin" />
          </div>
          <div className="space-backdrop__retro-sunburst">
            <div className="space-backdrop__retro-sunburst-inner" />
          </div>
          <div className="space-backdrop__retro-rayfan" />
        </div>
      )}

      {/* Slow vertical drift so the field feels alive */}
      <motion.div
        className="space-backdrop__drift"
        animate={reduce ? undefined : { y: [0, -95, 0] }}
        transition={{ duration: 110, repeat: Infinity, ease: 'linear' }}
      >
        {dust.map((s) => (
          <motion.div
            key={`d-${s.id}`}
            className="space-backdrop__dust"
            animate={
              reduce
                ? undefined
                : {
                    opacity: [0.12, 0.38, 0.12],
                    x: [0, (s.id % 7) - 3, 0],
                  }
            }
            transition={{
              duration: s.duration * 1.4,
              repeat: reduce ? 0 : Infinity,
              ease: 'easeInOut',
              delay: s.delay,
            }}
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size * 0.55,
              height: s.size * 0.55,
            }}
          />
        ))}

        {stars.map((s) => {
          const lo = 0.38 + s.depth * 0.16;
          const hi = 0.68 + s.depth * 0.24;
          const toneClass =
            s.tone === 'warm'
              ? ' space-backdrop__star--warm'
              : s.tone === 'cool'
                ? ' space-backdrop__star--cool'
                : '';
          return (
            <motion.div
              key={s.id}
              className={`space-backdrop__star${toneClass}`}
              animate={reduce ? undefined : { opacity: [lo, hi, lo], scale: [1, 1.1 + s.depth * 0.12, 1] }}
              transition={{
                duration: s.duration,
                repeat: reduce ? 0 : Infinity,
                ease: 'easeInOut',
                delay: s.delay,
              }}
              style={{
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: s.size,
                height: s.size,
              }}
            />
          );
        })}
      </motion.div>

      {/* Subtle edge vignette keeps copy readable over busy zones */}
      <div className="space-backdrop__vignette" />
    </div>
  );
}
