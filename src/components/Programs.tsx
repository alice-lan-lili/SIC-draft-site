import { motion } from 'framer-motion';
import PageHero from './PageHero';

const pillars = [
  { n: '01', title: 'Learn', desc: 'Workshops that turn entrepreneurship concepts into usable tools and clear next steps.' },
  { n: '02', title: 'Build', desc: 'Weekly momentum to iterate ideas, validate assumptions, and prototype with support.' },
  { n: '03', title: 'Connect', desc: 'Meet founders, mentors, and peers who are serious about building together.' },
  { n: '04', title: 'Launch', desc: 'Pitch nights and showcases that make progress visible and actionable.' },
];

const events = [
  { month: 'May', day: '14', time: '6:00 PM', title: 'Founder Mixer', loc: 'Design & Innovation Building' },
  { month: 'Jun', day: '02', time: '1:00 PM', title: 'Deep Tech Workshop', loc: 'Computer Science Center' },
  { month: 'Jun', day: '20', time: '6:30 PM', title: 'Pitch Night & Dinner', loc: 'Rady School of Management' },
  { month: 'Jul', day: '10', time: '9:00 AM', title: 'Tier-1 VC Demo Day', loc: 'Downtown San Diego' },
];

export default function Programs() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <PageHero
        eyebrow="Programs"
        title={
          <>
            Built for
            <br />
            <em>Technical Founders.</em>
          </>
        }
        subtitle="Clear, practical programming designed for students who want to move from curiosity to execution."
      >
        <motion.button className="btn-accent" type="button" whileTap={{ scale: 0.97 }}>
          Apply to Programs
        </motion.button>
      </PageHero>
      <section className="section section-after-hero" style={{ flex: 1 }}>
        <div className="container">
          <div style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: '1.5rem' }}>How it works</h2>
            <div className="grid-4" style={{ marginTop: '0' }}>
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  className="glass-card"
                  style={{ padding: '2rem', height: '100%' }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                >
                  <motion.span
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-secondary)', letterSpacing: '0.1em' }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3 + i * 0.2, repeat: Infinity }}
                  >
                    {p.n}
                  </motion.span>
                  <h3 style={{ fontSize: '1rem', margin: '0.75rem 0 0.6rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginBottom: '2rem',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                  Events <em>&amp; Sessions.</em>
                </h2>
              </div>
              <motion.button className="btn-outline" type="button" whileTap={{ scale: 0.98 }}>
                View Full Schedule
              </motion.button>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1px',
                background: 'var(--border-color)',
                border: '1px solid var(--border-color)',
                borderRadius: '14px',
                overflow: 'hidden',
              }}
            >
              {events.map((ev, i) => (
                <motion.div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1.5rem 2rem',
                    background: 'var(--bg-secondary)',
                    justifyContent: 'space-between',
                    gap: '2rem',
                    flexWrap: 'wrap',
                  }}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div style={{ textAlign: 'center', minWidth: '40px' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6rem',
                          color: 'var(--text-accent)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {ev.month}
                      </div>
                      <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', lineHeight: 1 }}>{ev.day}</div>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-body)', fontWeight: 500, marginBottom: '4px' }}>{ev.title}</h3>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                        {ev.time} · {ev.loc}
                      </span>
                    </div>
                  </div>
                  <motion.button className="btn-outline" style={{ padding: '7px 20px', fontSize: '0.8rem', flexShrink: 0 }} type="button" whileTap={{ scale: 0.96 }}>
                    RSVP
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
