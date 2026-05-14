import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const navLinks = [
  { key: 'home', to: '/', label: 'Home' },
  { key: 'events', to: '/programs', label: 'Events' },
  { key: 'directory', to: '/directory', label: 'Directory' },
  { key: 'get-involved', to: '/get-involved', label: 'Get involved' },
  { key: 'blog', to: '/insights', label: 'Blog' },
] as const;

function navLinkIsActive(pathname: string, to: string) {
  if (to === '/') return pathname === '/';
  if (to === '/directory') return pathname === '/directory' || pathname === '/the-cohort';
  if (to === '/programs') return pathname === '/programs';
  if (to === '/get-involved') return pathname === '/get-involved' || pathname === '/work-here';
  if (to === '/insights') return pathname === '/insights' || pathname === '/mission-logs';
  return pathname === to;
}

const COMPACT_BREAKPOINT = 960;
const PROVIDED_LOGO = '/brand/logo.png';

const menuPanelVariants = {
  hidden: { opacity: 0, scale: 0.96, y: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.15, ease: [0.23, 1, 0.32, 1] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: -8,
    transition: { duration: 0.12, ease: [0.32, 0.72, 0, 1] as const },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.12 } },
};

export default function Navbar() {
  const [isCompact, setIsCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onResize = () => setIsCompact(window.innerWidth < COMPACT_BREAKPOINT);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      setMenuOpen(false);
    });
    return () => window.cancelAnimationFrame(id);
  }, [location.pathname, isCompact]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="site-nav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 'max(var(--page-gutter), env(safe-area-inset-left, 0px))',
          paddingRight: 'max(var(--page-gutter), env(safe-area-inset-right, 0px))',
          height: '64px',
          display: 'grid',
          gridTemplateColumns: isCompact ? 'minmax(0, 1fr) auto' : 'minmax(0, 1fr) auto minmax(0, 1fr)',
          alignItems: 'center',
          columnGap: '1rem',
          backdropFilter: 'blur(14px) saturate(170%)',
          WebkitBackdropFilter: 'blur(14px) saturate(170%)',
          boxShadow: 'none',
          transition: 'background 0.3s ease',
          background: 'var(--nav-glass-bg)',
        }}
      >
        <Link
          to="/"
          className="site-nav__brand"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            minWidth: 0,
            justifySelf: 'start',
          }}
        >
          <img
            src={PROVIDED_LOGO}
            alt=""
            width={34}
            height={34}
            style={{ display: 'block', flexShrink: 0, objectFit: 'cover', borderRadius: 4 }}
          />
          <span
            className="site-nav__brand-text"
            style={{
              fontWeight: 600,
              fontSize: 'clamp(0.78rem, 1.8vw, 0.88rem)',
              letterSpacing: '-0.01em',
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
              gap: 'clamp(0.75rem, 1.5vw, 1.5rem)',
              justifySelf: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            {navLinks.map((link) => {
              const active = navLinkIsActive(location.pathname, link.to);
              return (
                <Link
                  key={link.key}
                  to={link.to}
                  className={`site-nav__link${active ? ' site-nav__link--active' : ''}`}
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
            className="site-nav__icon-btn site-nav__theme-toggle"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            style={{
              borderRadius: '5px',
              width: '36px',
              height: '36px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {theme === 'light' ? <Moon size={18} strokeWidth={2} /> : <Sun size={18} strokeWidth={2} />}
          </button>

          {!isCompact && (
            <Link
              to="/signin"
              className="btn-primary btn-primary--cta-alt btn-burst nav-signin-btn"
              style={{ padding: '6px 12px', fontSize: '0.76rem' }}
            >
              Sign In
            </Link>
          )}

          {isCompact && (
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label="Menu"
              className="site-nav__icon-btn site-nav__menu"
              style={{
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
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
                  transition={{ duration: 0.12, ease: [0.23, 1, 0.32, 1] }}
                  style={{ display: 'flex' }}
                >
                  {menuOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.span>
              </AnimatePresence>
            </button>
          )}
        </div>
      </nav>

      <AnimatePresence>
        {isCompact && menuOpen && (
          <motion.button
            key="nav-backdrop"
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1001,
              background: 'rgba(0,0,0,0.45)',
              border: 'none',
              cursor: 'pointer',
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCompact && menuOpen && (
          <motion.div
            key="nav-menu"
            className="site-nav__menu-panel"
            variants={menuPanelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'fixed',
              top: '72px',
              zIndex: 1002,
              border: '1px solid var(--border-strong)',
              borderRadius: '0',
              background: 'var(--nav-drawer-bg)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              padding: '0.4rem',
              maxHeight: 'min(70vh, 520px)',
              overflowY: 'auto',
              transformOrigin: 'top right',
            }}
          >
            {navLinks.map((link, idx) => {
              const active = navLinkIsActive(location.pathname, link.to);
              return (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.04 + idx * 0.04,
                    duration: 0.2,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
                  <Link
                    to={link.to}
                    className={`site-nav__drawer-link${active ? ' site-nav__drawer-link--active' : ''}`}
                    style={{
                      display: 'block',
                      padding: '0.75rem 0.85rem',
                      borderRadius: '0',
                      color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontSize: '0.95rem',
                      whiteSpace: 'normal',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.16, duration: 0.2 }}
            >
              <Link
                to="/signin"
                className="btn-primary btn-primary--cta-alt btn-burst nav-signin-btn"
                style={{ width: '100%', marginTop: '0.35rem' }}
              >
                Sign In
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
