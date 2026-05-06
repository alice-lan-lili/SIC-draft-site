import type { CSSProperties } from 'react';

/**
 * Investor / alumni backers — placeholder marquee until logos are wired up.
 */
const SLOT_COUNT = 12;

export default function BackedByCarousel({
  className,
  style,
  ariaLabel = 'Partner logos coming soon',
  placeholderText = 'Logo',
}: {
  className?: string;
  style?: CSSProperties;
  ariaLabel?: string;
  placeholderText?: string;
}) {
  const slots = [...Array.from({ length: SLOT_COUNT }, (_, i) => i), ...Array.from({ length: SLOT_COUNT }, (_, i) => i)];

  return (
    <div
      className={[className, 'home-carousel-shell'].filter(Boolean).join(' ')}
      style={style}
      role="region"
      aria-label={ariaLabel}
    >
      <div className="home-carousel-track home-carousel-track--backed-by" aria-hidden>
        {slots.map((_, idx) => (
          <div key={`bk-${idx}`} className="home-carousel-item home-carousel-item--placeholder">
            <span className="home-carousel-logo home-carousel-logo--placeholder" />
            <span className="home-carousel-name home-carousel-name--placeholder">{placeholderText}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
