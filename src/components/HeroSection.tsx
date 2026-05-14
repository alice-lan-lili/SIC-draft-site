import type { ComponentType, ReactNode } from 'react';
import AuroraBottom from './backgrounds/AuroraBottom';
import AuroraCentered from './backgrounds/AuroraCentered';
import AuroraOriginal from './backgrounds/AuroraOriginal';
import MeteorsDistant from './backgrounds/MeteorsDistant';
import MeteorsOriginal from './backgrounds/MeteorsOriginal';

export type HeroBackground =
  | 'aurora-original'
  | 'aurora-centered'
  | 'aurora-bottom'
  | 'meteors-original'
  | 'meteors-distant';

type HeroSectionProps = {
  background?: HeroBackground;
  className?: string;
  children: ReactNode;
};

const BACKGROUNDS: Record<HeroBackground, ComponentType<{ className?: string }>> = {
  'aurora-original': AuroraOriginal,
  'aurora-centered': AuroraCentered,
  'aurora-bottom': AuroraBottom,
  'meteors-original': MeteorsOriginal,
  'meteors-distant': MeteorsDistant,
};

export default function HeroSection({
  background = 'aurora-bottom',
  className = '',
  children,
}: HeroSectionProps) {
  const Background = BACKGROUNDS[background];

  const bgLayer = (
    <div
      className="hero-section__bg"
      style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      aria-hidden
    >
      <Background />
    </div>
  );

  return (
    <section
      className={`hero-section relative overflow-hidden bg-black ${className}`.trim()}
      style={{ position: 'relative', overflow: 'hidden', background: 'var(--hero-stage-bg, #0b0b0e)' }}
    >
      {bgLayer}
      <div className="relative z-10" style={{ position: 'relative', zIndex: 10 }}>
        {children}
      </div>
    </section>
  );
}
