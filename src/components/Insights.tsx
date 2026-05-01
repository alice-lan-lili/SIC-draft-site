import { motion } from 'framer-motion';

const posts = [
  {
    category: 'Update',
    title: 'Cohorts expanding to hardware engineering tracks',
    desc: 'Starting next cycle, dedicated resources will support physical product development alongside software ventures.',
    date: 'Apr 12, 2026',
    readTime: '3 min',
  },
  {
    category: 'Founder Story',
    title: 'Building deep tech inside a university ecosystem',
    desc: 'The founders of VoidTech on leveraging UCSD\'s engineering labs and faculty networks to accelerate their R&D.',
    date: 'Mar 28, 2026',
    readTime: '6 min',
  },
  {
    category: 'Ecosystem',
    title: 'The UCSD to Silicon Valley pipeline',
    desc: 'Mapping the talent migration and early-stage investment flowing from San Diego into the broader tech ecosystem.',
    date: 'Feb 15, 2026',
    readTime: '5 min',
  },
];

export default function Insights() {
  return (
    <section className="section">
      <div className="container">

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <span className="section-label">Insights</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              From<br /><em>Our Ecosystem.</em>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', marginTop: '1.25rem', fontSize: '1rem', lineHeight: 1.7 }}>
              Updates from our portfolio companies, founder stories, and perspectives on the San Diego innovation ecosystem.
            </p>
          </div>
        </div>

        {/* Articles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border-color)', border: '1px solid var(--border-color)', borderRadius: '14px', overflow: 'hidden', marginBottom: '5rem' }}>
          {posts.map((post, i) => (
            <motion.div
              key={i}
              style={{ background: 'var(--bg-secondary)', padding: '2.5rem', cursor: 'pointer' }}
              whileHover={{ background: 'var(--bg-tertiary)' } as never}
              transition={{ duration: 0.15 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span className="pill">{post.category}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-secondary)' }}>{post.date} · {post.readTime} read</span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '0.75rem', lineHeight: 1.3 }}>{post.title}</h2>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '65ch' }}>{post.desc}</p>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-accent)', letterSpacing: '0.06em', textTransform: 'uppercase', flexShrink: 0, paddingTop: '0.25rem' }}>
                  Read →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="glass-card" style={{ padding: '4rem', textAlign: 'center' }}>
          <span className="section-label" style={{ textAlign: 'center' }}>Newsletter</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>
            Subscribe to <em>The Pipeline.</em>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 2.5rem auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Exclusive updates on our latest startups, incubator news, and ecosystem events delivered to your inbox.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', maxWidth: '480px', margin: '0 auto', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: '1 1 220px',
                padding: '11px 18px',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-strong)',
                color: 'var(--text-primary)',
                borderRadius: '980px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                outline: 'none',
              }}
            />
            <button className="btn-accent" style={{ flexShrink: 0 }}>Subscribe</button>
          </div>
        </div>

      </div>
    </section>
  );
}
