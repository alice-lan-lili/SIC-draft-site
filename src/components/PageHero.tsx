import { type ReactNode, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import HeroSection, { type HeroBackground } from './HeroSection';

export type PageHeroProps = {
  eyebrow?: ReactNode;
  /** Main heading - include <em> for accent lines */
  title: ReactNode;
  subtitle?: string;
  /** Larger default, smaller for auth-style pages */
  size?: 'default' | 'compact';
  /** Optional hero photo, defaults to homepage rocket */
  backgroundImage?: string;
  backgroundPosition?: string;
  /** Optional animated SVG background from HeroSection */
  background?: HeroBackground;
  children?: ReactNode;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  size = 'default',
  backgroundImage = '/rocket_bg.png',
  backgroundPosition = 'center center',
  background,
  children,
}: PageHeroProps) {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const photoX = useSpring(useTransform(mx, [0, 1], [20, -20]), { stiffness: 38, damping: 24 });
  const photoY = useSpring(useTransform(my, [0, 1], [14, -14]), { stiffness: 38, damping: 24 });

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
  const hasAnimatedBackground = Boolean(background);
  const heroContent = (
    <motion.header
      ref={wrapRef}
      className={`page-hero${hasAnimatedBackground ? ' page-hero--animated' : ''}`}
      style={{ minHeight: minH, ...(hasAnimatedBackground ? { background: 'transparent' } : {}) }}
      initial={false}
      onMouseMove={hasAnimatedBackground ? undefined : onMouseMove}
      onMouseLeave={hasAnimatedBackground ? undefined : onMouseLeave}
    >
      {!hasAnimatedBackground && (
        <>
          <motion.div
            className="page-hero__photo"
            aria-hidden
            style={
              reduce
                ? { backgroundImage: `url(${backgroundImage})`, backgroundPosition }
                : { x: photoX, y: photoY, backgroundImage: `url(${backgroundImage})`, backgroundPosition }
            }
          />
          <div className="page-hero__photo-overlay" aria-hidden />
        </>
      )}
      {!hasAnimatedBackground && <div className="page-hero__grain" aria-hidden />}

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

  if (!background) return heroContent;

  return <HeroSection background={background}>{heroContent}</HeroSection>;
}
