import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
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
  const [isCompact, setIsCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  useEffect(() => {
    const onResize = () => setIsCompact(window.innerWidth < 1120);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, isCompact]);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  const isTransparent = isHome && !scrolled;

  return (
    <>
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 5%',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: isTransparent
          ? 'transparent'
          : theme === 'dark'
            ? 'rgba(0,0,0,0.66)'
            : 'rgba(255,255,255,0.74)',
        backdropFilter: isTransparent ? 'none' : 'blur(14px) saturate(170%)',
        WebkitBackdropFilter: isTransparent ? 'none' : 'blur(14px) saturate(170%)',
        borderBottom: isTransparent ? 'none' : '1px solid var(--border-color)',
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
          src="/favicon.svg"
          alt="Startup Incubator logo"
          width={34}
          height={34}
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
        display: isCompact ? 'none' : 'flex',
        alignItems: 'center',
        gap: '2rem',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
        {!isCompact && <Link
          to="/signin"
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: '0.85rem',
            letterSpacing: '-0.01em',
            color: 'var(--btn-text)',
            background: 'var(--btn-bg)',
            padding: '7px 18px',
            borderRadius: '5px',
            display: 'inline-flex',
            alignItems: 'center',
            border: '1px solid var(--border-strong)',
            backdropFilter: 'blur(8px)',
            transition: 'opacity 0.15s ease, background 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Sign In
        </Link>}
        {isCompact && (
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            style={{
              border: '1px solid var(--border-strong)',
              background: 'rgba(255,255,255,0.08)',
              color: isTransparent ? '#fff' : 'var(--text-primary)',
              borderRadius: '5px',
              width: '36px',
              height: '36px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              cursor: 'pointer',
            }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        )}
      </div>
    </nav>
    {isCompact && menuOpen && (
      <div
        style={{
          position: 'fixed',
          top: '72px',
          right: '5%',
          width: 'min(320px, 90vw)',
          zIndex: 1001,
          border: '1px solid var(--border-strong)',
          borderRadius: '8px',
          background: theme === 'dark' ? 'rgba(12, 12, 12, 0.88)' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          padding: '0.5rem',
        }}
      >
        {navLinks.map((link) => {
          const active = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              style={{
                display: 'block',
                padding: '0.7rem 0.75rem',
                borderRadius: '5px',
                color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                background: active ? 'rgba(255,255,255,0.08)' : 'transparent',
              }}
            >
              {link.label}
            </Link>
          );
        })}
        <Link to="/signin" className="btn-primary" style={{ width: '100%', marginTop: '0.35rem' }}>
          Sign In
        </Link>
      </div>
    )}
    </>
  );
}
