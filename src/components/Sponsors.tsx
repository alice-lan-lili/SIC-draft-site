import { motion } from 'framer-motion';

export default function Sponsors() {
  const sponsors = [
    { name: "Alpha", size: 180, color: "#4B1BA7", delay: 0 },
    { name: "Beta", size: 140, color: "#FCCC3C", delay: 0.2 },
    { name: "Gamma", size: 220, color: "#2F0E7A", delay: 0.4 },
    { name: "Delta", size: 160, color: "#555555", delay: 0.6 }
  ];

  return (
    <section className="section">
      <div className="container">
        
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Sponsors</h1>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            The gravitational pull behind our startups. Partner with us to fuel the next generation of engineering breakthroughs.
          </p>
          <button className="btn-accent">Become a Sponsor</button>
        </div>

        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', minHeight: '400px', padding: '2rem 0' }}>
          {sponsors.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: item.delay }}
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4 + idx, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, filter: 'grayscale(0%)', borderColor: item.color }}
                style={{
                  width: `${item.size}px`,
                  height: `${item.size}px`,
                  borderRadius: '50%',
                  border: '2px solid var(--border-color)',
                  background: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  filter: 'grayscale(100%)', // Saturated on hover
                  transition: 'all 0.5s ease',
                  boxShadow: 'inset 0 -20px 40px rgba(0,0,0,0.5)' // Gives a 3D planetary feel
                }}
              >
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '120%', height: '120%', background: `radial-gradient(circle at 30% 30%, ${item.color} 0%, transparent 60%)`, opacity: 0.4 }} />
                
                <span style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '2px', fontFamily: 'var(--font-mono)', zIndex: 2, textTransform: 'uppercase', color: 'var(--text-primary)' }}>
                  {item.name}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
