import { type ReactNode, useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';

export type PageHeroProps = {
  eyebrow?: string;
  /** Main heading — include <em> for accent lines */
  title: ReactNode;
  subtitle?: string;
  /** Larger default, smaller for auth-style pages */
  size?: 'default' | 'compact';
  children?: ReactNode;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  size = 'default',
  children,
}: PageHeroProps) {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const bx = useSpring(useTransform(mx, [0, 1], [28, -28]), { stiffness: 38, damping: 24 });
  const by = useSpring(useTransform(my, [0, 1], [22, -22]), { stiffness: 38, damping: 24 });
  const b2x = useSpring(useTransform(mx, [0, 1], [-22, 22]), { stiffness: 28, damping: 22 });
  const b2y = useSpring(useTransform(my, [0, 1], [18, -18]), { stiffness: 28, damping: 22 });
  const rotateZ = useTransform(mx, [0, 1], [-4, 4]);
  const meshTransform = useMotionTemplate`translate(${bx}px, ${by}px) rotate(${rotateZ}deg)`;

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (reduce || !wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  function onMouseLeave() {
    if (reduce) return;
    mx.set(0.5);
    my.set(0.5);
  }

  const minH = size === 'compact' ? 'min(260px, 42vh)' : 'clamp(300px, 42vw, 480px)';

  return (
    <motion.header
      ref={wrapRef}
      className="page-hero"
      style={{ minHeight: minH }}
      initial={false}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="page-hero__grid" aria-hidden />
      <motion.div
        className="page-hero__mesh"
        style={reduce ? { transform: 'none' } : { transform: meshTransform }}
      >
        <motion.div
          className="page-hero__blob page-hero__blob--violet"
          animate={
            reduce
              ? undefined
              : { opacity: [0.35, 0.62, 0.35], scale: [1, 1.06, 1] }
          }
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="page-hero__blob page-hero__blob--blue"
          style={{ x: b2x, y: b2y }}
          animate={reduce ? undefined : { opacity: [0.28, 0.5, 0.28] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
        <motion.div
          className="page-hero__blob page-hero__blob--gold"
          animate={reduce ? undefined : { opacity: [0.2, 0.38, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        />
      </motion.div>

      {!reduce && (
        <motion.span
          className="page-hero__orbit"
          animate={{ rotate: 360 }}
          transition={{ duration: 52, repeat: Infinity, ease: 'linear' }}
          aria-hidden
        />
      )}

      <div className="container page-hero__inner">
        <motion.div
          className="page-hero__copy"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {eyebrow && (
            <motion.p className="page-hero__eyebrow" variants={itemVariants}>
              {eyebrow}
            </motion.p>
          )}
          <motion.h1 className="page-hero__title" variants={itemVariants}>
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p className="page-hero__subtitle text-muted" variants={itemVariants}>
              {subtitle}
            </motion.p>
          )}
          {children && (
            <motion.div className="page-hero__actions" variants={itemVariants}>
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.header>
  );
}
