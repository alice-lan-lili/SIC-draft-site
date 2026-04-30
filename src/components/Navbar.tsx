import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ isHome }: { isHome?: boolean }) {
  const [theme, setTheme] = useState('dark');
  const [panelOpen, setPanelOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    setPanelOpen(false); // Close panel on navigation
  }, [location]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      <nav style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '1.5rem 5%',
          background: isHome ? 'transparent' : 'var(--bg-primary)',
          borderBottom: isHome ? 'none' : '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          transition: 'background 0.3s'
        }}
      >
        <div 
          style={{ position: 'relative', minWidth: '220px', zIndex: 101 }}
          onMouseEnter={() => setPanelOpen(true)}
        >
          <Link to="/" onClick={() => window.location.href = '/'} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', color: 'inherit' }}>
            {/* Highly accurate SVG representation of the provided SIC Logo */}
            <div style={{ width: '45px', height: '45px', flexShrink: 0, marginRight: '4px', background: 'transparent', borderRadius: '4px', padding: '4px' }}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Radiating yellow lines */}
                <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="50" y1="2" x2="50" y2="14" />
                  <line x1="50" y1="86" x2="50" y2="98" />
                  <line x1="2" y1="50" x2="14" y2="50" />
                  <line x1="86" y1="50" x2="98" y2="50" />
                  <line x1="16" y1="16" x2="24" y2="24" />
                  <line x1="84" y1="84" x2="76" y2="76" />
                  <line x1="16" y1="84" x2="24" y2="76" />
                  <line x1="84" y1="16" x2="76" y2="24" />
                  <line x1="33" y1="7" x2="37" y2="15" />
                  <line x1="67" y1="7" x2="63" y2="15" />
                  <line x1="33" y1="93" x2="37" y2="85" />
                  <line x1="67" y1="93" x2="63" y2="85" />
                  <line x1="7" y1="33" x2="15" y2="37" />
                  <line x1="7" y1="67" x2="15" y2="63" />
                  <line x1="93" y1="33" x2="85" y2="37" />
                  <line x1="93" y1="67" x2="85" y2="63" />
                </g>
                
                {/* Thick purple circling arrows */}
                <path d="M 38 78 A 30 30 0 0 1 20 50 A 30 30 0 0 1 38 22" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
                <polygon points="32,12 48,22 32,32" fill="currentColor" />
                
                <path d="M 62 22 A 30 30 0 0 1 80 50 A 30 30 0 0 1 62 78" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
                <polygon points="68,88 52,78 68,68" fill="currentColor" />
                
                {/* Yellow Lightbulb with purple base */}
                <path d="M 50 26 C 36 26 32 40 38 52 C 42 58 43 60 43 66 L 57 66 C 57 60 58 58 62 52 C 68 40 64 26 50 26 Z" fill="#f2f2f2" />
                <rect x="42" y="68" width="16" height="4" rx="2" fill="currentColor" />
                <rect x="43" y="74" width="14" height="4" rx="2" fill="currentColor" />
                <path d="M 46 80 L 54 80 L 52 85 L 48 85 Z" fill="currentColor" />
              </svg>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <span style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.1, fontFamily: 'var(--font-heading)', letterSpacing: '0.5px', color: 'var(--text-primary)' }}>Startup Incubator</span>
              <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-accent)', letterSpacing: '0.7px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>UC San Diego</span>
            </motion.div>
          </Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', zIndex: 101 }}>
          <Link to="/signin" className="btn-outline" style={{ padding: '8px 20px', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Sign In</Link>
          <button onClick={toggleTheme} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </nav>

      {/* Wider Side Panel Nav */}
      <AnimatePresence>
        {panelOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.5)', zIndex: 98, backdropFilter: 'blur(2px)' }}
              onMouseEnter={() => setPanelOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '400px',
                height: '100vh',
                background: 'var(--bg-secondary)',
                borderRight: '1px solid var(--border-color)',
                zIndex: 999,
                padding: '7rem 3rem 3rem 3rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                overflowY: 'auto'
              }}
            >
              {[
                { to: '/insights', label: 'News', desc: 'Ecosystem updates' },
                { to: '/directory', label: 'Directory', desc: 'Our startup portfolio' },
                { to: '/sponsors', label: 'Sponsors', desc: 'Our partners' },
                { to: '/programs', label: 'Operations and Events', desc: 'Incubation tracks & sessions' },
                { to: '/team', label: 'Team', desc: 'Leadership & EIRs' },
              ].map(link => (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  style={{ 
                    display: 'block',
                    padding: '10px 0',
                    borderBottom: '1px solid var(--border-color)'
                  }}
                  className="nav-link-group"
                >
                  <div style={{ fontSize: '1.4rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'var(--font-heading)', marginBottom: '4px' }}>
                    {link.label}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
                    {link.desc}
                  </div>
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
