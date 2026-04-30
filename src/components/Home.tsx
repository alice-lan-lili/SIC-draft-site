import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from './Hero';

const startups = [
  { name: 'Signalor', url: 'SIGNALOR.APP', sector: 'Data Intelligence', desc: 'An intelligence layer for culture, quantifying sentiment shifts across the internet.' },
  { name: 'Icarus', url: 'ICARUS.AERO', sector: 'Aerospace', desc: 'Sub-orbital launch systems focused on rapid reusability and affordable testing.' },
  { name: 'VoidTech', url: 'VOIDTECH.IO', sector: 'Orbital Manufacturing', desc: "Materials manufacturing modules designed for low-gravity environments." },
  { name: 'Nebula Systems', url: 'NEBULA.SYSTEMS', sector: 'Navigation', desc: 'Autonomous deep-space navigation powered by optical tracking algorithms.' },
  { name: 'QuantumLeap', url: 'QUANTUMLEAP.AI', sector: 'Life Sciences', desc: 'Quantum-enabled compute workflows accelerating pharmaceutical discovery cycles.' },
  { name: 'AstroForge', url: 'ASTROFORGE.SPACE', sector: 'Space Mining', desc: 'Extraction systems for near-earth objects and in-orbit materials refining.' },
  { name: 'Kinetic Labs', url: 'KINETICLABS.IO', sector: 'Robotics', desc: 'Robotic control stacks for extreme-environment field operations.' },
  { name: 'HelioGrid', url: 'HELIOGRID.ENERGY', sector: 'Energy', desc: 'Grid-scale optimization software for distributed renewable infrastructure.' },
  { name: 'Cryptrace', url: 'CRYPTRACE.SECURITY', sector: 'Cybersecurity', desc: 'Threat detection and response systems for high-stakes technical organizations.' },
];

const sectionReveal = {
  initial: { opacity: 0, y: 42, filter: 'blur(8px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.65 },
  viewport: { once: true, amount: 0.2 as const },
};

export default function Home() {
  return (
    <main style={{ background: 'var(--bg-primary)' }}>
      <Hero />

      <motion.section
        className="section"
        initial={sectionReveal.initial}
        whileInView={sectionReveal.whileInView}
        transition={sectionReveal.transition}
        viewport={sectionReveal.viewport}
        style={{ borderBottom: '1px solid var(--border-color)' }}
      >
        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-label">Newsroom</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>No News Available</h2>
            </div>
            <Link to="/insights" className="btn-outline">News Archive</Link>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <p className="text-muted" style={{ fontSize: '1rem' }}>No news available, check back later.</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section"
        initial={sectionReveal.initial}
        whileInView={sectionReveal.whileInView}
        transition={sectionReveal.transition}
        viewport={sectionReveal.viewport}
        style={{ borderBottom: '1px solid var(--border-color)' }}
      >
        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-label">Directory</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>Startup Preview</h2>
            </div>
            <Link to="/directory" className="btn-outline">View All 9</Link>
          </div>
          <div className="grid-3">
            {startups.slice(0, 3).map((co) => (
              <div key={co.name} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.2rem' }}>{co.name}</h3>
                  <span className="pill">{co.sector}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '0.06em' }}>{co.url}</p>
                <p className="text-muted" style={{ fontSize: '0.92rem' }}>{co.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.74rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-accent)' }}>
                  View Profile <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section"
        initial={sectionReveal.initial}
        whileInView={sectionReveal.whileInView}
        transition={sectionReveal.transition}
        viewport={sectionReveal.viewport}
        style={{ borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}
      >
        <div className="container" style={{ width: '100%' }}>
          <span className="section-label">Sponsors</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '1rem' }}>Support the Next Wave</h2>
          <p className="text-muted" style={{ maxWidth: '560px', margin: '0 auto 2rem auto' }}>
            Support founders pushing the frontier of science and engineering.
          </p>
          <Link to="/sponsors" className="btn-accent">Become a Sponsor</Link>
        </div>
      </motion.section>

      <motion.section
        className="section"
        initial={sectionReveal.initial}
        whileInView={sectionReveal.whileInView}
        transition={sectionReveal.transition}
        viewport={sectionReveal.viewport}
      >
        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-label">About</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>Meet the team behind Startup Incubator</h2>
            </div>
            <Link to="/team" className="btn-outline">Full Roster</Link>
          </div>
          <div className="grid-3">
            {[
              { name: 'Alex Chen', role: 'Managing Director', img: '/frame1.png' },
              { name: 'Sarah Jenkins', role: 'Venture Partner', img: '/frame2.png' },
              { name: 'Michael Vance', role: 'EIR - Deep Tech', img: '/frame3.png' },
            ].map((m) => (
              <div key={m.name} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                <div style={{ width: '100%', aspectRatio: '1 / 1', borderRadius: '8px', background: 'var(--bg-tertiary)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img src={m.img} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '3px' }}>{m.name}</h3>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
