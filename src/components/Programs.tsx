import { motion } from 'framer-motion';

const pillars = [
  { n: '01', title: 'Workshops', desc: 'Hands-on engineering sprints that turn concepts into working prototypes — run by founders who have shipped.' },
  { n: '02', title: 'Weekly Momentum', desc: 'Iterate on ideas and validate markets in structured weekly sessions with dedicated Entrepreneurs-in-Residence.' },
  { n: '03', title: 'Build Your Network', desc: 'Connect with technical founders, researchers, investors, and operators across the UCSD ecosystem.' },
  { n: '04', title: 'Demo Days', desc: 'Pitch nights, investor showcases, and demo events that put your venture in front of Tier-1 capital.' },
];

const events = [
  { month: 'May', day: '14', time: '6:00 PM', title: 'Founder Mixer', loc: 'Design & Innovation Building' },
  { month: 'Jun', day: '02', time: '1:00 PM', title: 'Deep Tech Workshop', loc: 'Computer Science Center' },
  { month: 'Jun', day: '20', time: '6:30 PM', title: 'Pitch Night & Dinner', loc: 'Rady School of Management' },
  { month: 'Jul', day: '10', time: '9:00 AM', title: 'Tier-1 VC Demo Day', loc: 'Downtown San Diego' },
];

export default function Programs() {
  return (
    <section className="section">
      <div className="container">

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <span className="section-label">Programs</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Built for<br /><em>Technical Founders.</em>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', marginTop: '1.25rem', fontSize: '1rem', lineHeight: 1.7 }}>
              Our programs are designed around the principles of high-density innovation — rigorous, hands-on, and focused on creating ventures that actually ship.
            </p>
          </div>
          <button className="btn-accent">Apply to Programs</button>
        </div>

        {/* How it works */}
        <div style={{ marginBottom: '5rem' }}>
          <span className="section-label">How It Works</span>
          <div className="grid-4" style={{ marginTop: '0' }}>
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                className="glass-card"
                style={{ padding: '2rem' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-secondary)', letterSpacing: '0.1em' }}>{p.n}</span>
                <h3 style={{ fontSize: '1rem', margin: '0.75rem 0 0.6rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Events */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-label">Upcoming</span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>Events <em>&amp; Sessions.</em></h2>
            </div>
            <button className="btn-outline">View Full Schedule</button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border-color)', border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden' }}>
            {events.map((ev, i) => (
              <motion.div
                key={i}
                style={{ display: 'flex', alignItems: 'center', padding: '1.5rem 2rem', background: 'var(--bg-secondary)', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}
                whileHover={{ background: 'var(--bg-tertiary)' } as never}
                transition={{ duration: 0.15 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                  <div style={{ textAlign: 'center', minWidth: '40px' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-accent)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{ev.month}</div>
                    <div style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', lineHeight: 1 }}>{ev.day}</div>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-body)', fontWeight: 500, marginBottom: '4px' }}>{ev.title}</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>{ev.time} · {ev.loc}</span>
                  </div>
                </div>
                <button className="btn-outline" style={{ padding: '7px 20px', fontSize: '0.8rem', flexShrink: 0 }}>RSVP</button>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
