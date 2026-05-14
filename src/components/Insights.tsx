import { motion } from 'framer-motion';
import PageHero from './PageHero';

const posts = [
  {
    category: 'Example Post',
    title: 'Lorem ipsum dolor sit amet',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ligula risus. Integer in sapien non lorem elementum sagittis et eu lacus.',
    date: 'Apr 30, 2026',
    readTime: '2 min',
  },
];

export default function Insights() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <PageHero
        background="aurora-bottom"
        eyebrow={<span className="text-accent">Blog</span>}
        backgroundImage="/heroes/insights-hero.svg"
        backgroundPosition="center 35%"
        title={
          <>
            From
            <br />
            <em>Our Founders</em>
          </>
        }
        subtitle="Portfolio updates, founder stories, and perspectives on the San Diego innovation ecosystem."
      />
      <section className="section section-after-hero">
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginBottom: '5rem',
            }}
          >
            {posts.map((post, i) => (
              <motion.article
                key={i}
                className="page-outline-card program-event-card insights-post-card"
                style={{ padding: '2.5rem', cursor: 'pointer' }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileTap={{ scale: 0.997 }}
              >
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                      <motion.span className="pill">
                        {post.category}
                      </motion.span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-secondary)' }}>
                        {post.date} · {post.readTime} read
                      </span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', marginBottom: '0.75rem', lineHeight: 1.3 }}>{post.title}</h2>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '65ch' }}>
                      {post.desc}
                    </p>
                  </div>
                  <motion.button
                    type="button"
                    className="insights-read-cta"
                    initial={{ opacity: 0.75, x: 0 }}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Read →
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="insights-newsletter"
            style={{ padding: 'clamp(2.5rem, 6vw, 4rem)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="insights-newsletter__glow" aria-hidden />
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '1rem', position: 'relative' }}>
              Subscribe to <em>The Pipeline</em>
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                maxWidth: '440px',
                margin: '0 auto 2rem auto',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                position: 'relative',
              }}
            >
              Exclusive updates on our latest startups, incubator news, and ecosystem events delivered to your inbox.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                justifyContent: 'center',
                maxWidth: '480px',
                margin: '0 auto',
                flexWrap: 'wrap',
                position: 'relative',
              }}
            >
              <motion.input
                type="email"
                className="insights-newsletter__email"
                placeholder="your@email.com"
                whileFocus={{ scale: 1.02 }}
                style={{
                  flex: '1 1 220px',
                  padding: '11px 18px',
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
              <motion.button
                className="btn-primary btn-primary--cta-alt btn-burst"
                style={{ flexShrink: 0, fontWeight: 600, padding: '13px 30px', borderRadius: 0 }}
                type="button"
                whileTap={{ scale: 0.96 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
