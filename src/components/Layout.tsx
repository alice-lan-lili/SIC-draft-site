import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Navbar isHome={isHome} />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingTop: isHome ? 0 : '64px' }}>
        <Outlet />
        
        {!isHome && (
          <footer className="section" style={{ marginTop: 'auto', padding: '4rem 5%', borderTop: '1px solid var(--border-color)', background: 'var(--bg-primary)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
              <div>
                <h2 style={{ fontSize: '1rem', margin: 0, letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>Startup Incubator UCSD</h2>
                <p className="text-muted" style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
                  &copy; 2026. Project Liftoff.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <a href="#" className="text-muted" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Twitter</a>
                <a href="#" className="text-muted" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>LinkedIn</a>
                <a href="#" className="text-muted" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Instagram</a>
                <a href="#" className="text-muted" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact</a>
              </div>
            </div>
          </footer>
        )}
      </div>
    </>
  );
}
