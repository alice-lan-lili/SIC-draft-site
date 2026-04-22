import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ArrowRight, Activity } from 'lucide-react';

export default function Directory() {
  const [selected, setSelected] = useState<number | null>(null);

  const startups = [
    { 
      name: "Signalor", 
      link: "SIGNALOR.APP", 
      logo: "S",
      desc: "Signalor provides the intelligence layer to culture. Quantitatively observe granular sentiment data from across hundreds of platforms...", 
      fullDesc: "Signalor provides the intelligence layer to culture. Quantitatively observe granular sentiment data from across hundreds of platforms to make better investments, improve strategic marketing, and understand shifts in consumer behavior before they happen."
    },
    { 
      name: "Icarus", 
      link: "ICARUS.AERO", 
      logo: "I",
      desc: "Developing the next generation of sub-orbital launch vehicles, prioritizing rapid reusability and significantly lowering the cost of atmospheric testing.", 
      fullDesc: "Icarus is developing the next generation of sub-orbital launch vehicles, prioritizing rapid reusability and significantly lowering the cost of atmospheric testing for aerospace engineering. Currently in late-stage testing with primary thruster systems."
    },
    { 
      name: "VoidTech", 
      link: "VOIDTECH.IO", 
      logo: "V",
      desc: "Specialized orbital manufacturing modules, allowing material scientists to produce perfect fiber optics and alloys impossible to create under Earth's gravity.", 
      fullDesc: "VoidTech provides specialized orbital manufacturing modules, allowing material scientists to produce perfect fiber optics and alloys impossible to create under Earth's gravity. Seed funded and launching first payload in late 2026." 
    },
    { 
      name: "Nebula Systems", 
      link: "NEBULA.SYSTEMS", 
      logo: "N",
      desc: "Autonomous deep-space navigation software leveraging novel optical tracking algorithms.", 
      fullDesc: "Nebula Systems builds autonomous deep-space navigation software leveraging novel optical tracking algorithms. Our software dramatically reduces the need for constant ground-station contact."
    },
    { 
      name: "QuantumLeap", 
      link: "QUANTUMLEAP.AI", 
      logo: "Q",
      desc: "Quantum computing algorithms customized for rapid pharmaceutical drug discovery.", 
      fullDesc: "Quantum computing algorithms customized for rapid pharmaceutical drug discovery. By simulating molecular interactions at a quantum level, we shorten the discovery phase from years to weeks."
    },
    { 
      name: "AstroForge", 
      link: "ASTROFORGE.SPACE", 
      logo: "A",
      desc: "Asteroid mining technologies targeting near-earth objects for rare-earth metals.", 
      fullDesc: "Asteroid mining technologies targeting near-earth objects for rare-earth metals. We are developing the extraction modules necessary to refine materials directly in orbit."
    }
  ];

  return (
    <section className="section">
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Directory</h1>
            <p className="text-muted" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>Explore the ventures currently incubating within our ecosystem. We exclusively back deep tech and hard engineering.</p>
          </div>
          <button className="btn-accent">Join The Cohort</button>
        </div>

        <div className="grid-2">
          {startups.map((startup, idx) => (
            <motion.div 
              key={idx}
              layoutId={`card-${idx}`}
              onClick={() => setSelected(idx)}
              initial="rest"
              whileHover="hover"
              style={{ 
                background: 'var(--bg-tertiary)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '8px',
                padding: '2.5rem', 
                cursor: 'pointer', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.5rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Dynamic Hover Background Glow */}
              <motion.div
                variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  background: 'radial-gradient(circle at 100% 100%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)',
                  pointerEvents: 'none'
                }}
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 1 }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'var(--border-color)',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--purple)',
                  fontFamily: 'var(--font-heading)',
                  borderRadius: '12px'
                }}>
                  {startup.logo}
                </div>
                <div>
                  <motion.h3 layoutId={`title-${idx}`} style={{ fontSize: '1.5rem', margin: 0, marginBottom: '4px' }}>{startup.name}</motion.h3>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', letterSpacing: '1px', fontFamily: 'var(--font-mono)' }}>
                    {startup.link}
                  </div>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1rem', zIndex: 1 }}>{startup.desc}</p>
              
              {/* Unique Motion Preview State revealed on hover */}
              <motion.div
                variants={{
                  rest: { opacity: 0, height: 0, marginTop: 0 },
                  hover: { opacity: 1, height: 'auto', marginTop: '0.5rem' }
                }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '6px',
                  padding: '1rem',
                  overflow: 'hidden',
                  zIndex: 1
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--yellow)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  <Activity size={12} /> Live Preview
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  [FILLER PREVIEW] Currently in stealth. Recent metrics show 240% MoM user acquisition in target demographics. Preparing for Series A raise in Q4.
                </p>
              </motion.div>

              <motion.div 
                variants={{ rest: { color: 'var(--text-secondary)' }, hover: { color: 'var(--purple)' } }}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', letterSpacing: '2px', fontFamily: 'var(--font-mono)', marginTop: 'auto', textTransform: 'uppercase', zIndex: 1 }}
              >
                VIEW PROFILE <ArrowRight size={16} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selected !== null && (
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
              />
              
              {/* By using a flex wrapper above, we can drop the buggy translate(-50%, -50%) which conflicts with framer motion's layoutId engine */}
              <motion.div
                layoutId={`card-${selected}`}
                style={{
                  width: '90%',
                  maxWidth: '700px',
                  background: 'var(--bg-tertiary)',
                  padding: '4rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  zIndex: 1001,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ width: '80px', height: '80px', background: 'var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 700, color: 'var(--purple)', fontFamily: 'var(--font-heading)', borderRadius: '16px' }}>
                      {startups[selected].logo}
                    </div>
                    <div>
                      <motion.h3 layoutId={`title-${selected}`} style={{ fontSize: '2.5rem', margin: 0, marginBottom: '8px' }}>{startups[selected].name}</motion.h3>
                      <a href={`https://${startups[selected].link.toLowerCase()}`} className="text-accent" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', letterSpacing: '1px' }}>
                        {startups[selected].link} <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                  <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '8px' }}>
                    <X size={28} />
                  </button>
                </div>
                
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.1rem' }}>{startups[selected].fullDesc}</p>
                
                <div style={{ marginTop: '1rem' }}>
                  <button className="btn-primary" style={{ width: '100%', padding: '16px' }}>Contact Founders</button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
