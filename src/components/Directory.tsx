import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import PageHero from './PageHero';
import { StartupLinks } from './StartupLinks';
import { cohortStartups, formatFoundersLine } from '../data/cohort';
import type { CohortStartup } from '../data/cohort';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function DirectoryStartupCard({
  startup,
  index,
  expanded,
  onToggle,
}: {
  startup: CohortStartup;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const foundersLine = formatFoundersLine(startup.founders);
  const panelId = `directory-panel-${startup.id}`;
  const triggerId = `directory-trigger-${startup.id}`;

  return (
    <motion.article
      id={startup.id}
      className="directory-grid__card directory-grid__card--accordion"
      role="listitem"
      data-expanded={expanded}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.24) }}
    >
      <button
        type="button"
        id={triggerId}
        className="directory-grid__accordion-trigger"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="directory-grid__accordion-trigger-inner">
          <span className="directory-grid__accordion-trigger-row">
            <span className="directory-grid__brand">
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
              <h3 className="directory-grid__name directory-grid__name--accordion">{startup.name}</h3>
            </span>
            <span className="directory-grid__accordion-trigger-end" aria-hidden>
              <ChevronDown className="directory-grid__accordion-chevron" size={18} strokeWidth={2} />
            </span>
          </span>
          {startup.categories.length > 0 ? (
            <div className="directory-grid__categories-strip">
              <span className="directory-grid__meta-label">Categories</span>
              <div className="directory-grid__chips" role="list">
                {startup.categories.map((cat) => (
                  <span key={`${startup.id}-${cat}`} className="directory-grid__chip" role="listitem">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </span>
      </button>

      {!expanded && (startup.links.website || startup.links.app) ? (
        <div className="directory-grid__accordion-collapsed-links">
          <StartupLinks website={startup.links.website} app={startup.links.app} compact />
        </div>
      ) : null}

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="directory-grid__accordion-panel"
        hidden={!expanded}
      >
        {foundersLine ? (
          <p className="directory-grid__founders">
            <span className="directory-grid__founders-label">Founders</span>
            {foundersLine}
          </p>
        ) : null}

        {startup.summary || startup.tagline ? (
          <p className="directory-grid__summary directory-grid__summary--panel">{startup.summary || startup.tagline}</p>
        ) : null}

        <div className="directory-grid__panel-meta-row">
          {startup.teamSize != null ? (
            <p className="directory-grid__meta directory-grid__meta--inline">
              <span className="directory-grid__meta-label">Team</span>
              <span className="directory-grid__meta-value">{startup.teamSize}</span>
            </p>
          ) : null}
          <p className="directory-grid__meta directory-grid__meta--inline directory-grid__meta--status">
            <span className="directory-grid__meta-label">Status</span>
            <span className="directory-grid__status" data-directory-status={startup.status}>
              <span className="directory-grid__status-dot" aria-hidden />
              {startup.status === 'active' ? 'Active' : startup.status}
            </span>
          </p>
        </div>

        {expanded ? (
          <div className="directory-grid__links">
            <StartupLinks website={startup.links.website} app={startup.links.app} compact />
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

export default function Directory() {
  const location = useLocation();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const raw = location.hash.slice(1);
    if (raw && cohortStartups.some((s) => s.id === raw)) {
      setExpandedId(raw);
    }
    if (!raw) return;
    const el = document.getElementById(raw);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [location.hash]);

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <PageHero
        background="aurora-centered"
        eyebrow={<span className="text-accent">The Cohort</span>}
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
                  <DirectoryStartupCard
                    key={startup.id}
                    startup={startup}
                    index={i}
                    expanded={expandedId === startup.id}
                    onToggle={() =>
                      setExpandedId((cur) => (cur === startup.id ? null : startup.id))
                    }
                  />
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
