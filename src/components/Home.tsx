import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const sections = [
    {
      id: 'hero',
      content: (
        <div className="container" style={{ width: '100%' }}>
          <div style={{ minHeight: '78vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '1.6px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Startup Incubator at UC San Diego
            </p>
            <h1 style={{ fontSize: 'clamp(2.8rem, 10vw, 8rem)', maxWidth: '10ch', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
              Editorial momentum for builders.
            </h1>
            <p style={{ maxWidth: '56ch', color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              We back technical founders with a disciplined network, hands-on operators, and high-context capital.
            </p>
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <Link to="/programs" className="btn-primary">Explore Programs</Link>
              <Link to="/directory" className="btn-outline">Meet Founders</Link>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'news',
      content: (
        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.7rem' }}>
                Dispatch
              </p>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)' }}>Newsroom</h2>
            </div>
            <Link to="/insights" className="btn-outline">View News Gallery</Link>
          </div>
          <div className="grid-3">
            <div className="glass-card" style={{ padding: '2rem' }}>
              <span className="pill" style={{ marginBottom: '1rem' }}>UPDATE</span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Cohorts expanding to hardware engineering tracks</h3>
              <p className="text-muted">Starting next cycle, we are dedicating resources specifically to physical product development.</p>
            </div>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <span className="pill" style={{ marginBottom: '1rem' }}>FOUNDER STORIES</span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Building deep tech inside a university ecosystem</h3>
              <p className="text-muted">An interview with founders on converting lab discovery into venture-backed product.</p>
            </div>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <span className="pill" style={{ marginBottom: '1rem' }}>ECOSYSTEM</span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>The UCSD to Silicon Valley pipeline</h3>
              <p className="text-muted">Exploring talent migration patterns and investor attention across the region.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'directory',
      content: (
        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.7rem' }}>
                Portfolio
              </p>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)' }}>Directory</h2>
            </div>
            <Link to="/directory" className="btn-outline">View Full Directory</Link>
          </div>
          <div className="grid-2">
            {[
              { name: 'Signalor', link: 'SIGNALOR.APP', logo: 'S', desc: 'Signalor provides the intelligence layer for culture, quantifying sentiment across hundreds of channels.' },
              { name: 'VoidTech', link: 'VOIDTECH.IO', logo: 'V', desc: 'Orbital manufacturing modules enabling materials impossible to build under Earth gravity constraints.' }
            ].map((startup, idx) => (
              <motion.div
                key={idx}
                initial="rest"
                whileHover="hover"
                style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.3rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '60px', height: '60px', background: 'transparent', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', borderRadius: '12px' }}>
                    {startup.logo}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', margin: 0, marginBottom: '4px' }}>{startup.name}</h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', letterSpacing: '1px', fontFamily: 'var(--font-mono)' }}>
                      {startup.link}
                    </div>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1rem' }}>{startup.desc}</p>
                <motion.div
                  variants={{ rest: { color: 'var(--text-secondary)', x: 0 }, hover: { color: 'var(--text-primary)', x: 4 } }}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', letterSpacing: '2px', fontFamily: 'var(--font-mono)', marginTop: 'auto', textTransform: 'uppercase' }}
                >
                  View Profile <ArrowRight size={16} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'sponsors',
      content: (
        <div className="container" style={{ width: '100%', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.7rem' }}>
            Partner Network
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', marginBottom: '1rem' }}>Sponsors</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            The network behind our founders. Partner with us to accelerate the next generation of technical startups.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {['Alpha', 'Beta', 'Gamma', 'Delta'].map((s) => (
              <div key={s} style={{ width: '130px', height: '130px', borderRadius: '50%', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                {s}
              </div>
            ))}
          </div>
          <Link to="/sponsors" className="btn-accent">Become a Sponsor</Link>
        </div>
      )
    },
    {
      id: 'operations',
      content: (
        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.7rem' }}>
                Operating Layer
              </p>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)' }}>Programs and Events</h2>
            </div>
            <Link to="/programs" className="btn-outline">View Full Calendar</Link>
          </div>
          <div className="grid-2">
            <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Incubation Tracks</h3>
              <p className="text-muted" style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>Hands-on engineering sprints, operator mentorship, and high-conviction investor introductions.</p>
              <Link to="/programs" className="text-accent" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginTop: 'auto' }}>Learn More &rarr;</Link>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem', background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border-strong)' }}>
              <div style={{ fontSize: '0.8rem', letterSpacing: '1px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Next Up</div>
              <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Deep Tech Workshop</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Nov 02 • 1:00 PM • Computer Science Center</p>
              <button className="btn-primary" style={{ maxWidth: '160px' }}>RSVP Now</button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'team',
      content: (
        <div className="container" style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.7rem' }}>
                Team
              </p>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)' }}>Leadership</h2>
            </div>
            <Link to="/team" className="btn-outline">View Team Roster</Link>
          </div>
          <div className="grid-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: '1px solid var(--border-color)', background: 'transparent', margin: '0 auto 1.5rem auto' }} />
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Director {i}</h3>
                <p className="text-muted" style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>Venture Partner</p>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <main style={{ width: '100%', background: 'var(--bg-primary)' }}>
      {sections.map((section) => (
        <motion.section
          key={section.id}
          className="section"
          initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true, amount: 0.24 }}
          style={{
            borderBottom: section.id === 'team' ? 'none' : '1px solid var(--border-color)',
            paddingTop: section.id === 'hero' ? '8.5rem' : '7rem',
            paddingBottom: section.id === 'hero' ? '6rem' : '7rem'
          }}
        >
          {section.content}
        </motion.section>
      ))}

      <footer style={{ padding: '2rem 5%', borderTop: '1px solid var(--border-color)', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
            © 2026 Startup Incubator UCSD
          </div>
          <div style={{ display: 'flex', gap: '1.2rem' }}>
            <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Twitter</a>
            <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>LinkedIn</a>
            <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
