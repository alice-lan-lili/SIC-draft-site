import { motion } from 'framer-motion';

const leadership = [
  { name: 'Alex Chen', role: 'Managing Director', img: '/frame1.png' },
  { name: 'Sarah Jenkins', role: 'Venture Partner', img: '/frame2.png' },
  { name: 'Michael Vance', role: 'EIR — Deep Tech', img: '/frame3.png' },
  { name: 'Elena Rostova', role: 'Head of Operations', img: '/frame4.png' },
];

export default function Team() {
  return (
    <section className="section">
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: '5rem' }}>
          <span className="section-label">About Us</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '640px' }}>
            The People Behind<br /><em>the Mission.</em>
          </h1>
        </div>

        {/* Mission / Vision */}
        <div className="grid-2" style={{ marginBottom: '6rem' }}>
          <div className="glass-card" style={{ padding: '3rem' }}>
            <span className="section-label">Mission</span>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              To empower UCSD's brightest minds to build generation-defining companies. We believe the next era of technological leaps will come from rigorous academic research translated into scalable ventures.
            </p>
          </div>
          <div className="glass-card" style={{ padding: '3rem' }}>
            <span className="section-label">Vision</span>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              Creating the ultimate launchpad where academic innovation meets venture velocity — bridging the gap between the laboratory and Silicon Valley so that groundbreaking ideas don't stay theoretical.
            </p>
          </div>
        </div>

        {/* Leadership */}
        <div>
          <span className="section-label">Leadership</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '3rem' }}>Who We Are.</h2>
          <div className="grid-4">
            {leadership.map((m, i) => (
              <motion.div
                key={i}
                className="glass-card"
                style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: '8px',
                  background: 'var(--bg-tertiary)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)',
                }}>
                  <img
                    src={m.img}
                    alt={m.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={e => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-body)', fontWeight: 600, marginBottom: '4px' }}>{m.name}</h3>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
