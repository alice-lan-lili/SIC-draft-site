import { motion } from 'framer-motion';
import PageHero from './PageHero';
import BackedByCarousel from './BackedByCarousel';

const sponsors = [
  { name: 'Partner A', tier: 'Presenting' },
  { name: 'Partner B', tier: 'Gold' },
  { name: 'Partner C', tier: 'Gold' },
  { name: 'Partner D', tier: 'Silver' },
  { name: 'Partner E', tier: 'Silver' },
  { name: 'Partner F', tier: 'Silver' },
];

const perks = [
  { title: 'Deal Flow Access', desc: 'First look at our portfolio companies before they hit the broader market.' },
  { title: 'Talent Pipeline', desc: "Direct access to UCSD's top engineering and business graduates." },
  { title: 'Brand Visibility', desc: 'Prominent placement across events, digital channels, and our annual report.' },
  { title: 'Advisory Role', desc: 'Shape program curriculum and mentor the next generation of founders.' },
];

export default function Sponsors() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <PageHero
        eyebrow={<span className="text-accent">Partners</span>}
        title={
          <>
            Build With
            <br />
            <em>Student Founders</em>
          </>
        }
        subtitle={
          'Sponsors and investors help students learn, build, connect, and launch through funding, practical support, and community access.'
        }
      >
        <p style={{ margin: 0 }}>
          <a href="mailto:startupincubator@ucsd.edu" className="home-inline-link">
            Contact us
          </a>
        </p>
      </PageHero>
      <section className="section section-after-hero">
        <div className="container">
          <div className="home-heading-stack" style={{ marginBottom: '0.85rem' }}>
            <p className="section-label">Alumni backers</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', margin: 0, lineHeight: 1.15 }}>
              Previously backed by
            </h2>
          </div>
          <BackedByCarousel style={{ marginBottom: '3.25rem' }} />

          <h2 style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)', marginBottom: '1.25rem' }}>Current partners</h2>
          <div
            className="sponsors-logo-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              marginBottom: '5rem',
            }}
          >
            {sponsors.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="page-outline-card"
                style={{
                  padding: '3rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  minHeight: '140px',
                  cursor: 'default',
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '32px',
                    background: 'var(--border-strong)',
                    borderRadius: '4px',
                    opacity: 0.35,
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {s.name} · {s.tier}
                </span>
              </motion.div>
            ))}
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '3rem' }}>
              Why Partner <em>With Us</em>
            </h2>
            <div className="grid-2">
              {perks.map((p, i) => (
                <motion.div
                  key={i}
                  className="glass-card"
                  style={{ padding: '2.5rem' }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <h3 style={{ fontSize: '1rem', marginBottom: '1rem', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                    {p.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
