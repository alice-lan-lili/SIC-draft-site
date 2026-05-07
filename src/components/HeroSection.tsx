import type { ComponentType, ReactNode } from 'react';
import AuroraBottom from './backgrounds/AuroraBottom';
import AuroraCentered from './backgrounds/AuroraCentered';
import AuroraOriginal from './backgrounds/AuroraOriginal';
import MeteorsDistant from './backgrounds/MeteorsDistant';
import MeteorsOriginal from './backgrounds/MeteorsOriginal';
import MeteorsStorm from './backgrounds/MeteorsStorm';

export type HeroBackground =
  | 'aurora-original'
  | 'aurora-centered'
  | 'aurora-bottom'
  | 'meteors-original'
  | 'meteors-distant'
  | 'meteors-storm';

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
  'meteors-storm': MeteorsStorm,
};

export default function HeroSection({
  background = 'aurora-bottom',
  className = '',
  children,
}: HeroSectionProps) {
  const Background = BACKGROUNDS[background];

  return (
    <section
      className={`hero-section relative overflow-hidden bg-black ${className}`.trim()}
      style={{ position: 'relative', overflow: 'hidden', background: '#000' }}
    >
      <div
        className="hero-section__bg"
        style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
        aria-hidden
      >
        <Background />
      </div>
      <div className="relative z-10" style={{ position: 'relative', zIndex: 10 }}>
        {children}
      </div>
    </section>
  );
}
