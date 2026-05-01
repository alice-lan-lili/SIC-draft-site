import { motion } from 'framer-motion';
import PageHero from './PageHero';
import { StartupLinks } from './StartupLinks';
import { cohortStartups, formatFoundersLine } from '../data/cohort';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Directory() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [location.hash]);

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Startups in
            <br />
            <em>Our Cohort.</em>
          </>
        }
        subtitle="Logos, one-liners, founders, and direct links—everything you need to explore what teams are shipping."
      />
      <section className="section section-after-hero" style={{ flex: 1 }}>
        <div className="container">
          <div style={{ display: 'grid', gap: 0 }}>
            {cohortStartups.map((startup, i) => (
              <motion.article
                key={startup.id}
                id={startup.id}
                className="directory-card-shell"
                style={{ borderTop: '1px solid var(--border-color)', padding: '1.35rem 0' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: Math.min(i * 0.04, 0.35) }}
              >
                <div
                  className="directory-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '88px minmax(0, 1fr)',
                    gap: '1.25rem 1.5rem',
                    alignItems: 'start',
                  }}
                >
                  <motion.div
                    className={startup.id === 'aesthetic' ? 'directory-logo-mark directory-logo-mark--aesthetic' : 'directory-logo-mark'}
                    data-startup-logo={startup.id}
                    style={{
                      width: 88,
                      height: 88,
                      borderRadius: 6,
                      border: '1px solid var(--border-color)',
                      background: 'var(--bg-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: startup.logoObjectFit === 'contain' ? 8 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                  >
                    <img
                      src={startup.logoSrc}
                      alt=""
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: startup.logoObjectFit ?? 'cover',
                        objectPosition: startup.logoPosition ?? 'center',
                      }}
                    />
                  </motion.div>
                  <div style={{ minWidth: 0 }}>
                    <h2 style={{ fontSize: '1.35rem', marginBottom: '0.35rem' }}>{startup.name}</h2>
                    <p
                      style={{
                        fontSize: '0.98rem',
                        color: 'var(--text-primary)',
                        marginBottom: '0.55rem',
                        fontWeight: 500,
                      }}
                    >
                      {startup.tagline}
                    </p>
                    <div style={{ marginBottom: '0.65rem' }}>
                      <StartupLinks website={startup.links.website} app={startup.links.app} compact />
                    </div>
                    {formatFoundersLine(startup.founders) && (
                      <p
                        className="directory-founders"
                        style={{
                          fontSize: '0.88rem',
                          color: 'var(--text-secondary)',
                          marginBottom: '0.5rem',
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{ color: 'var(--text-primary)', fontWeight: 600, fontFamily: 'var(--font-body)' }}
                        >
                          Founders{' '}
                        </span>
                        {formatFoundersLine(startup.founders)}
                      </p>
                    )}
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                      {startup.summary}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
