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

const COMPACT_BREAKPOINT = 960;

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
    const onResize = () => setIsCompact(window.innerWidth < COMPACT_BREAKPOINT);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, isCompact]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

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
          display: 'grid',
          gridTemplateColumns: isCompact ? 'minmax(0, 1fr) auto' : 'minmax(0, 1fr) auto minmax(0, 1fr)',
          alignItems: 'center',
          columnGap: '1rem',
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
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            minWidth: 0,
            justifySelf: 'start',
          }}
        >
          <img
            src="/logo-sic.svg?v=3"
            alt=""
            width={34}
            height={34}
            style={{ display: 'block', flexShrink: 0 }}
          />
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: 'clamp(0.78rem, 1.8vw, 0.88rem)',
              letterSpacing: '-0.01em',
              color: isTransparent ? '#FFFFFF' : 'var(--text-primary)',
              lineHeight: 1.15,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Startup Incubator
          </span>
        </Link>

        {!isCompact && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(1rem, 2vw, 1.75rem)',
              justifySelf: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            {navLinks.map((link) => {
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
                      ? active
                        ? '#FFFFFF'
                        : 'rgba(255,255,255,0.6)'
                      : active
                        ? 'var(--text-primary)'
                        : 'var(--text-secondary)',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            justifySelf: 'end',
          }}
        >
          <button
            type="button"
            onClick={toggleTheme}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid var(--border-strong)',
              borderRadius: '5px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              color: isTransparent ? 'rgba(255,255,255,0.75)' : 'var(--text-secondary)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          {!isCompact && (
            <Link to="/signin" className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.82rem' }}>
              Sign In
            </Link>
          )}

          {isCompact && (
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label="Menu"
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
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1001,
              background: 'rgba(0,0,0,0.45)',
              border: 'none',
              cursor: 'pointer',
            }}
          />
          <div
            style={{
              position: 'fixed',
              top: '72px',
              left: '5%',
              right: '5%',
              zIndex: 1002,
              border: '1px solid var(--border-strong)',
              borderRadius: '8px',
              background: theme === 'dark' ? 'rgba(12, 12, 12, 0.92)' : 'rgba(255, 255, 255, 0.94)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              padding: '0.4rem',
              maxHeight: 'min(70vh, 520px)',
              overflowY: 'auto',
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
                    padding: '0.75rem 0.85rem',
                    borderRadius: '5px',
                    color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                    background: active ? 'rgba(255,255,255,0.06)' : 'transparent',
                    fontSize: '0.95rem',
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
        </>
      )}
    </>
  );
}
