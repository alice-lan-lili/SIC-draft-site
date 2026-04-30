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
      {/* Logo — external asset so colors always render; larger + stacked above centered nav */}
      <Link
        to="/"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexShrink: 0,
          position: 'relative',
          zIndex: 20,
        }}
      >
        <img
          src="/logo-sic.svg"
          alt=""
          width={40}
          height={40}
          style={{ display: 'block', flexShrink: 0 }}
        />
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
        zIndex: 10,
        pointerEvents: 'auto',
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
