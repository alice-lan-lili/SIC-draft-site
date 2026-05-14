import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import StarField from './StarField';

export default function Layout() {
  return (
    <>
      <Navbar />
      <div
        className="layout-shell"
        style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingTop: 0 }}
      >
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, minWidth: 0 }}>
          <Outlet />
        </div>

        <SiteFooter />
      </div>
      <StarField speed={0.38} />
    </>
  );
}
