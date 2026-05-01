import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from './Hero';

const startups = [
  { name: 'ssam.ai', desc: 'AI-first founder tools for rapid decision support and workflow acceleration.' },
  { name: 'Revize', desc: 'A platform helping teams iterate quickly on strategy and execution.' },
  { name: 'Complexity', desc: 'Product infrastructure focused on simplifying hard technical coordination.' },
  { name: 'Unicircle', desc: 'Community-centric software for modern campus and startup ecosystems.' },
  { name: 'Aesthetic', desc: 'Design-forward tooling for creators and product teams.' },
  { name: 'Rialto', desc: 'Marketplace and operations rails for high-trust transactions.' },
  { name: 'UDOWN?', desc: 'A social planning layer built around intent and real-time action.' },
  { name: 'Protellect', desc: 'Protective intelligence workflows for modern teams and organizations.' },
];

const sectionReveal = {
  initial: { opacity: 0, y: 42, filter: 'blur(8px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.65 },
  viewport: { once: true, amount: 0.2 as const },
};

export default function Home() {
  return (
    <main style={{ background: 'var(--bg-primary)' }}>
      <Hero />

      <motion.section
        className="section"
        initial={sectionReveal.initial}
        whileInView={sectionReveal.whileInView}
        transition={sectionReveal.transition}
        viewport={sectionReveal.viewport}
        style={{ borderBottom: '1px solid var(--border-color)' }}
      >
        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-label">Newsroom</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>From <em>Our Ecosystem.</em></h2>
            </div>
            <Link to="/insights" className="btn-outline">View All</Link>
          </div>
          <div style={{ padding: '1.25rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
            <p className="text-muted" style={{ fontSize: '1rem', maxWidth: '52ch' }}>No news available, check back later.</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section"
        initial={sectionReveal.initial}
        whileInView={sectionReveal.whileInView}
        transition={sectionReveal.transition}
        viewport={sectionReveal.viewport}
        style={{ borderBottom: '1px solid var(--border-color)' }}
      >
        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-label">Directory</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>Startups in Our Cohort</h2>
            </div>
            <Link to="/directory" className="btn-outline">View Full Directory</Link>
          </div>
          <div style={{ display: 'grid', gap: '0' }}>
            {startups.slice(0, 3).map((co) => (
              <div
                key={co.name}
                className="cohort-preview-row"
                style={{
                  padding: '1.1rem 0',
                  borderBottom: '1px solid var(--border-color)',
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1fr) auto',
                  gap: '1rem 1.25rem',
                  alignItems: 'start',
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.35rem' }}>{co.name}</h3>
                  <p className="text-muted" style={{ fontSize: '0.92rem', lineHeight: 1.55 }}>{co.desc}</p>
                </div>
                <Link
                  to="/directory"
                  className="cohort-preview-cta"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.8rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    color: 'var(--text-accent)',
                    whiteSpace: 'nowrap',
                    alignSelf: 'start',
                    paddingTop: '0.2rem',
                  }}
                >
                  View <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section"
        initial={sectionReveal.initial}
        whileInView={sectionReveal.whileInView}
        transition={sectionReveal.transition}
        viewport={sectionReveal.viewport}
        style={{ borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}
      >
        <div className="container" style={{ width: '100%' }}>
          <span className="section-label">Sponsors</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '1rem' }}>Support the Next Wave</h2>
          <p className="text-muted" style={{ maxWidth: '560px', margin: '0 auto 2rem auto' }}>
            Support founders pushing the frontier of science and engineering.
          </p>
          <Link to="/sponsors" className="btn-accent">Become a Sponsor</Link>
        </div>
      </motion.section>

      <motion.section
        className="section"
        initial={sectionReveal.initial}
        whileInView={sectionReveal.whileInView}
        transition={sectionReveal.transition}
        viewport={sectionReveal.viewport}
      >
        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-label">About</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>Meet the team behind Startup Incubator</h2>
            </div>
            <Link to="/team" className="btn-outline">Full Roster</Link>
          </div>
          <div className="grid-3">
            {[1, 2, 3].map((id) => (
              <div key={id} className="glass-card" style={{ padding: '1rem' }}>
                <div style={{ width: '100%', aspectRatio: '1 / 1', borderRadius: '6px', background: 'var(--bg-tertiary)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src="/default-profile.svg" alt="Default team profile placeholder" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
