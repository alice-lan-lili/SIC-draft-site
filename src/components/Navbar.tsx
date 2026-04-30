import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/directory', label: 'Directory' },
  { to: '/insights', label: 'Insights' },
  { to: '/programs', label: 'Programs' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/team', label: 'Team' },
];

export default function Navbar({ isHome }: { isHome?: boolean }) {
  const [theme, setTheme] = useState('dark');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  const isTransparent = isHome && !scrolled;

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 5%',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: isTransparent
          ? 'transparent'
          : theme === 'dark'
            ? 'rgba(0,0,0,0.72)'
            : 'rgba(255,255,255,0.82)',
        backdropFilter: isTransparent ? 'none' : 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: isTransparent ? 'none' : 'blur(20px) saturate(180%)',
        borderBottom: isTransparent
          ? 'none'
          : '1px solid var(--border-color)',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexShrink: 0,
        }}
      >
        <div style={{ width: '28px', height: '28px', display: 'block', color: isTransparent ? '#FFFFFF' : '#4B1BA7' }}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#FCCC3C" strokeWidth="2" strokeLinecap="round">
              <line x1="50" y1="2" x2="50" y2="14" />
              <line x1="50" y1="86" x2="50" y2="98" />
              <line x1="2" y1="50" x2="14" y2="50" />
              <line x1="86" y1="50" x2="98" y2="50" />
              <line x1="16" y1="16" x2="24" y2="24" />
              <line x1="84" y1="84" x2="76" y2="76" />
              <line x1="16" y1="84" x2="24" y2="76" />
              <line x1="84" y1="16" x2="76" y2="24" />
            </g>
            <path d="M 38 78 A 30 30 0 0 1 20 50 A 30 30 0 0 1 38 22" stroke="#4B1BA7" strokeWidth="6" strokeLinecap="round" fill="none" />
            <polygon points="32,12 48,22 32,32" fill="#4B1BA7" />
            <path d="M 62 22 A 30 30 0 0 1 80 50 A 30 30 0 0 1 62 78" stroke="#4B1BA7" strokeWidth="6" strokeLinecap="round" fill="none" />
            <polygon points="68,88 52,78 68,68" fill="#4B1BA7" />
            <path d="M 50 26 C 36 26 32 40 38 52 C 42 58 43 60 43 66 L 57 66 C 57 60 58 58 62 52 C 68 40 64 26 50 26 Z" fill="#FCCC3C" />
            <rect x="42" y="68" width="16" height="4" rx="2" fill="#4B1BA7" />
            <rect x="43" y="74" width="14" height="4" rx="2" fill="#4B1BA7" />
            <path d="M 46 80 L 54 80 L 52 85 L 48 85 Z" fill="#4B1BA7" />
          </svg>
        </div>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: '0.88rem',
          letterSpacing: '-0.01em',
          color: isTransparent ? '#FFFFFF' : 'var(--text-primary)',
          transition: 'color 0.3s ease',
        }}>
          Startup Incubator
        </span>
      </Link>

      {/* Center nav links */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
        {navLinks.map(link => {
          const active = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: active ? 500 : 400,
                letterSpacing: '-0.01em',
                color: isTransparent
                  ? active ? '#FFFFFF' : 'rgba(255,255,255,0.6)'
                  : active ? 'var(--text-primary)' : 'var(--text-secondary)',
                transition: 'color 0.2s ease',
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Right actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          onClick={toggleTheme}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            color: isTransparent ? 'rgba(255,255,255,0.6)' : 'var(--text-secondary)',
            padding: '4px',
            transition: 'color 0.2s ease',
          }}
        >
          {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
        </button>
        <Link
          to="/signin"
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: '0.85rem',
            letterSpacing: '-0.01em',
            color: '#FFFFFF',
            background: 'var(--purple-mid)',
            padding: '7px 18px',
            borderRadius: '980px',
            display: 'inline-flex',
            alignItems: 'center',
            transition: 'opacity 0.15s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}
