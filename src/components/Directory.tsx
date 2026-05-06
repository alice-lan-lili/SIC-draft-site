import { motion } from 'framer-motion';
import PageHero from './PageHero';
import { StartupLinks } from './StartupLinks';
import { cohortStartups, formatFoundersLine } from '../data/cohort';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
        background="aurora-centered"
        eyebrow={<span className="text-accent">Directory</span>}
        backgroundImage="/heroes/directory-hero.svg"
        backgroundPosition="center 30%"
        title={
          <>
            Startups in
            <br />
            <em>Our Cohort</em>
          </>
        }
        subtitle="Learn more about our startups."
      />

      <section className="directory-dashboard-section section section-after-hero">
        <div className="container">
          <div className="directory-dashboard__panel">
            <div className="directory-grid-wrap">
              <div className="directory-grid" role="list" aria-label="Cohort startups">
                {cohortStartups.map((startup, i) => (
                  <motion.article
                    key={startup.id}
                    id={startup.id}
                    className="directory-grid__card"
                    role="listitem"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.24) }}
                  >
                    <div className="directory-grid__card-head">
                      <div
                        className={
                          startup.id === 'aesthetic'
                            ? 'directory-grid__logo directory-grid__logo--aesthetic'
                            : 'directory-grid__logo'
                        }
                        data-startup-logo={startup.id}
                      >
                        <img
                          src={startup.logoSrc}
                          alt=""
                          style={{
                            objectPosition: startup.logoPosition ?? 'center',
                          }}
                        />
                      </div>
                      <h3 className="directory-grid__name">{startup.name}</h3>
                    </div>

                    {formatFoundersLine(startup.founders) ? (
                      <p className="directory-grid__founders">
                        <span className="directory-grid__founders-label">Founders</span>
                        {formatFoundersLine(startup.founders)}
                      </p>
                    ) : null}

                    {startup.summary ? <p className="directory-grid__summary">{startup.summary}</p> : null}

                    <div className="directory-grid__links">
                      <StartupLinks website={startup.links.website} app={startup.links.app} compact />
                    </div>
                  </motion.article>
                ))}
                <motion.article
                  className="directory-grid__card directory-grid__card--cta"
                  role="listitem"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.35, delay: 0.26 }}
                >
                  <div className="directory-grid__card-head">
                    <div className="directory-grid__logo directory-grid__logo--cta" aria-hidden>
                      +
                    </div>
                    <h3 className="directory-grid__name">Add Your Startup</h3>
                  </div>
                  <p className="directory-grid__tagline">Building something at UCSD?</p>
                  <p className="directory-grid__summary">
                    Join the next cohort and get support on product, growth, and fundraising.
                  </p>
                  <div className="directory-grid__links">
                    <Link to="/signin" className="btn-primary btn-primary--cta-alt btn-burst directory-grid__cta-btn">
                      Apply Now
                    </Link>
                  </div>
                </motion.article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
