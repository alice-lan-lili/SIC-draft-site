import { motion } from 'framer-motion';

export default function Team() {
  const members = [
    { name: "Alex Chen", role: "Managing Director" },
    { name: "Sarah Jenkins", role: "Venture Partner" },
    { name: "Michael Vance", role: "EIR - Deep Tech" },
    { name: "Elena Rostova", role: "Head of Operations" }
  ];

  return (
    <section className="section">
      <div className="container">
        
        <h1 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>The Team</h1>
        
        <div className="grid-2" style={{ marginBottom: '5rem' }}>
          <div className="glass-card" style={{ padding: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-accent)' }}>Mission</h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
              To empower UCSD's brightest minds to build generation-defining companies. We believe the next era of technological leaps will come from hard engineering and rigorous academic research translated into scalable ventures.
            </p>
          </div>
          <div className="glass-card" style={{ padding: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-accent)' }}>Vision</h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
              Creating the ultimate launchpad where academic innovation meets venture velocity. By bridging the gap between the laboratory and Silicon Valley, we ensure that groundbreaking ideas don't stay theoretical.
            </p>
          </div>
        </div>

        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Leadership</h2>
        <div className="grid-4">
          {members.map((m, i) => (
             <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="glass-card" 
                style={{ padding: '2.5rem 1.5rem', textAlign: 'center' }}
             >
                <div style={{ 
                  width: '100px', 
                  height: '100px', 
                  borderRadius: '50%', 
                  background: 'var(--bg-secondary)', 
                  border: '1px solid var(--border-color)',
                  margin: '0 auto 1.5rem auto' 
                }}></div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{m.name}</h3>
                <p style={{ color: 'var(--text-accent)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                  {m.role}
                </p>
             </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
