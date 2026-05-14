import { useDemoDayCountdown } from '../../hooks/useDemoDayCountdown';

function pad2(n: number) {
  return n.toString().padStart(2, '0');
}

export default function DemoDayCountdown() {
  const { days, hours, minutes, seconds, isComplete } = useDemoDayCountdown();

  const ariaLabel = isComplete
    ? 'Demo Day has started'
    : `Time until Demo Day: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

  return (
    <div className="home-gic-hero__countdown" aria-live="polite">
      <p className="home-gic-hero__countdown-when">Demo Day · May 28 · 4:30 PM PT</p>
      {isComplete ? (
        <p className="home-gic-hero__countdown-complete">Demo Day is here — see you there.</p>
      ) : (
        <div className="home-gic-hero__countdown-readout" role="timer" aria-label={ariaLabel}>
          <span className="home-gic-hero__countdown-digits home-gic-hero__countdown-digits--c1">{days}</span>
          <span className="home-gic-hero__countdown-sep home-gic-hero__countdown-sep--c2" aria-hidden="true">
            :
          </span>
          <span className="home-gic-hero__countdown-digits home-gic-hero__countdown-digits--c3">{pad2(hours)}</span>
          <span className="home-gic-hero__countdown-sep home-gic-hero__countdown-sep--c4" aria-hidden="true">
            :
          </span>
          <span className="home-gic-hero__countdown-digits home-gic-hero__countdown-digits--c5">{pad2(minutes)}</span>
          <span className="home-gic-hero__countdown-sep home-gic-hero__countdown-sep--c6" aria-hidden="true">
            :
          </span>
          <span className="home-gic-hero__countdown-digits home-gic-hero__countdown-digits--c7">{pad2(seconds)}</span>

          <span className="home-gic-hero__countdown-sublabel home-gic-hero__countdown-sublabel--c1">Days</span>
          <span className="home-gic-hero__countdown-sublabel-spacer home-gic-hero__countdown-sublabel-spacer--c2" aria-hidden="true" />
          <span className="home-gic-hero__countdown-sublabel home-gic-hero__countdown-sublabel--c3">Hrs</span>
          <span className="home-gic-hero__countdown-sublabel-spacer home-gic-hero__countdown-sublabel-spacer--c4" aria-hidden="true" />
          <span className="home-gic-hero__countdown-sublabel home-gic-hero__countdown-sublabel--c5">Min</span>
          <span className="home-gic-hero__countdown-sublabel-spacer home-gic-hero__countdown-sublabel-spacer--c6" aria-hidden="true" />
          <span className="home-gic-hero__countdown-sublabel home-gic-hero__countdown-sublabel--c7">Sec</span>
        </div>
      )}
    </div>
  );
}
