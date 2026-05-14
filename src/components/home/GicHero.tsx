import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import DemoDayCountdown from './DemoDayCountdown';
import GicHeroStarfield from './GicHeroStarfield';

const HERO_TITLE = 'Startup Incubator';
const TITLE_BREAK = HERO_TITLE.indexOf(' ');
const TYPE_MS = 52;

export default function GicHero() {
  const heroShellRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const [typedLen, setTypedLen] = useState(() => (reduceMotion ? HERO_TITLE.length : 0));

  useEffect(() => {
    if (reduceMotion) {
      setTypedLen(HERO_TITLE.length);
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTypedLen(Math.min(i, HERO_TITLE.length));
      if (i >= HERO_TITLE.length) window.clearInterval(id);
    }, TYPE_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const titleComplete = typedLen >= HERO_TITLE.length;
  const line1 = typedLen <= TITLE_BREAK ? HERO_TITLE.slice(0, typedLen) : HERO_TITLE.slice(0, TITLE_BREAK);
  const line2 = typedLen <= TITLE_BREAK ? '' : HERO_TITLE.slice(TITLE_BREAK + 1, typedLen);
  const showCaret = !titleComplete;

  return (
    <section className="home-gic-hero-stage">
      <header ref={heroShellRef} className="home-gic-hero" aria-labelledby="home-gic-hero-title">
        <GicHeroStarfield scopeRef={heroShellRef} />
        <div className="home-gic-hero__grid" aria-hidden />

        <div className="home-gic-hero__inner">
          <div className="home-gic-hero__shell">
            <div className="home-gic-hero__copy">
              <h1 id="home-gic-hero-title" className="home-gic-hero__title">
                <span className="sr-only">{HERO_TITLE}</span>
                <span className="home-gic-hero__title-mark" aria-hidden>
                  <span
                    className={`home-gic-hero__title-stack${
                      titleComplete ? ' home-gic-hero__title-stack--done' : ''
                    }`}
                  >
                    <motion.span
                      className="home-gic-hero__title-line home-gic-hero__title-text"
                      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {line1}
                      {showCaret && typedLen <= TITLE_BREAK ? (
                        <span className="home-gic-hero__title-caret" />
                      ) : null}
                    </motion.span>
                    <motion.span
                      className="home-gic-hero__title-line home-gic-hero__title-text"
                      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    >
                      {line2}
                      {showCaret && typedLen > TITLE_BREAK ? (
                        <span className="home-gic-hero__title-caret" />
                      ) : null}
                    </motion.span>
                  </span>
                </span>
              </h1>
              <DemoDayCountdown />
              <a
                href="#home-cohort-section"
                className="home-gic-hero__scroll-hint"
                aria-label="Scroll to Meet the Startups section"
              >
                <span className="home-gic-hero__scroll-hint-label" aria-hidden="true">
                  Scroll
                </span>
                <span className="home-gic-hero__scroll-hint-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
