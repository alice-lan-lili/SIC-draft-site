import { motion } from 'framer-motion';

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
    <section className="section">
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: '5rem' }}>
          <span className="section-label">Partners</span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: '600px' }}>
              Fueling the Next<br /><em>Generation of Founders.</em>
            </h1>
            <button className="btn-accent">Become a Sponsor</button>
          </div>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', marginTop: '2rem', fontSize: '1rem', lineHeight: 1.7 }}>
            Our sponsors are more than funders — they&apos;re active participants in building UCSD&apos;s innovation ecosystem. Join us in backing the next wave of deep tech breakthroughs.
          </p>
        </div>

        {/* Sponsor grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--border-color)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          overflow: 'hidden',
          marginBottom: '5rem',
        }}>
          {sponsors.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{
                background: 'var(--bg-secondary)',
                padding: '3rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                minHeight: '140px',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
              }}
              whileHover={{ background: 'var(--bg-tertiary)' } as never}
            >
              {/* Replace this div with an <img> tag pointing to your sponsor logo */}
              <div style={{
                width: '80px',
                height: '32px',
                background: 'var(--border-strong)',
                borderRadius: '4px',
                opacity: 0.4,
              }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}>
                {s.tier}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Why sponsor */}
        <div style={{ marginBottom: '2rem' }}>
          <span className="section-label">Why Partner With Us</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '3rem' }}>
            What You Get<br /><em>As a Partner.</em>
          </h2>
        </div>
        <div className="grid-4">
          {perks.map((p, i) => (
            <div key={i} className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>{p.title}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
