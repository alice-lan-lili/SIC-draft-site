import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ArrowRight } from 'lucide-react';

const startups = [
  {
    name: 'Signalor',
    url: 'signalor.app',
    sector: 'Data Intelligence',
    stage: 'Seed',
    desc: 'Quantify sentiment across hundreds of platforms to make better investments, improve strategic marketing, and understand shifts in consumer behavior before they happen.',
    fullDesc: 'Signalor provides the intelligence layer to culture. By quantitatively observing granular sentiment data from across hundreds of platforms, the company enables investors and brands to make better decisions, improve strategic marketing, and understand shifts in consumer behavior before they happen.',
  },
  {
    name: 'Icarus',
    url: 'icarus.aero',
    sector: 'Aerospace',
    stage: 'Pre-Seed',
    desc: 'Developing the next generation of sub-orbital launch vehicles with a focus on rapid reusability and lower-cost atmospheric testing.',
    fullDesc: 'Icarus is developing the next generation of sub-orbital launch vehicles, prioritizing rapid reusability and significantly lowering the cost of atmospheric testing for aerospace engineering. Currently in late-stage testing with primary thruster systems.',
  },
  {
    name: 'VoidTech',
    url: 'voidtech.io',
    sector: 'Orbital Manufacturing',
    stage: 'Seed',
    desc: 'Specialized orbital manufacturing modules enabling material scientists to produce fiber optics and alloys impossible to create under Earth\'s gravity.',
    fullDesc: "VoidTech provides specialized orbital manufacturing modules, allowing material scientists to produce perfect fiber optics and alloys impossible to create under Earth's gravity. Seed funded and launching first payload in late 2026.",
  },
  {
    name: 'Nebula Systems',
    url: 'nebula.systems',
    sector: 'Deep Space',
    stage: 'Pre-Seed',
    desc: 'Autonomous deep-space navigation software leveraging novel optical tracking algorithms that dramatically reduce ground-station dependency.',
    fullDesc: 'Nebula Systems builds autonomous deep-space navigation software leveraging novel optical tracking algorithms. Their software dramatically reduces the need for constant ground-station contact, enabling longer and more cost-efficient deep space missions.',
  },
  {
    name: 'QuantumLeap',
    url: 'quantumleap.ai',
    sector: 'Biotech / Quantum',
    stage: 'Series A',
    desc: 'Quantum computing algorithms for rapid pharmaceutical drug discovery — shortening the discovery phase from years to weeks.',
    fullDesc: 'Quantum computing algorithms customized for rapid pharmaceutical drug discovery. By simulating molecular interactions at a quantum level, QuantumLeap shortens the discovery phase from years to weeks, dramatically accelerating time-to-trial.',
  },
  {
    name: 'AstroForge',
    url: 'astroforge.space',
    sector: 'Space Resources',
    stage: 'Pre-Seed',
    desc: 'Asteroid mining technologies targeting near-earth objects for rare-earth metals, with in-orbit extraction and refining modules.',
    fullDesc: 'AstroForge is developing asteroid mining technologies targeting near-earth objects for rare-earth metals. We are developing the extraction modules necessary to refine materials directly in orbit, eliminating the need to return raw ore to Earth.',
  },
];

export default function Directory() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="section">
      <div className="container">

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <span className="section-label">Portfolio</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              The<br /><em>Directory.</em>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', marginTop: '1rem', fontSize: '1rem', lineHeight: 1.65 }}>
              Ventures currently incubating within our ecosystem. We exclusively back deep tech and hard engineering.
            </p>
          </div>
          <button className="btn-accent">Join the Cohort</button>
        </div>

        {/* Grid */}
        <div className="grid-2">
          {startups.map((startup, idx) => (
            <motion.div
              key={idx}
              layoutId={`card-${idx}`}
              onClick={() => setSelected(idx)}
              className="glass-card"
              style={{ padding: '2.5rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              whileHover={{ borderColor: 'var(--border-strong)' } as never}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <motion.h3 layoutId={`title-${idx}`} style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{startup.name}</motion.h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-secondary)', letterSpacing: '0.04em' }}>{startup.url}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                  <span className="pill">{startup.sector}</span>
                  <span className="pill">{startup.stage}</span>
                </div>
              </div>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{startup.desc}</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--text-accent)', fontFamily: 'var(--font-mono)', marginTop: 'auto', letterSpacing: '0.06em' }}>
                VIEW PROFILE <ArrowRight size={13} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected !== null && (
            <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
                style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(12px)' }}
              />
              <motion.div
                layoutId={`card-${selected}`}
                style={{
                  width: '90%',
                  maxWidth: '640px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '16px',
                  padding: '3rem',
                  zIndex: 1001,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <motion.h2 layoutId={`title-${selected}`} style={{ fontSize: '2rem', marginBottom: '6px' }}>
                      {startups[selected].name}
                    </motion.h2>
                    <a
                      href={`https://${startups[selected].url}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-accent)', letterSpacing: '0.04em' }}
                    >
                      {startups[selected].url} <ExternalLink size={12} />
                    </a>
                  </div>
                  <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '4px' }}>
                    <X size={22} />
                  </button>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span className="pill">{startups[selected].sector}</span>
                  <span className="pill">{startups[selected].stage}</span>
                </div>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '1rem' }}>{startups[selected].fullDesc}</p>

                <button className="btn-primary" style={{ width: '100%', padding: '14px', borderRadius: '10px' }}>Contact Founders</button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
