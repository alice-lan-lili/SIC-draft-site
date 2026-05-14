import { Link } from 'react-router-dom';

const footerMission =
  "The largest startup network at UC San Diego. We don't expect greatness, we build greatness within you.";

const CLUB_EMAIL = 'startup.incubator.club@gmail.com';

const navLinks = [
  { to: '/', label: 'Home', key: 'home' },
  { to: '/programs', label: 'Events', key: 'events' },
  { to: '/directory', label: 'Directory', key: 'directory' },
  { to: '/get-involved', label: 'Get involved', key: 'get-involved' },
  { to: '/insights', label: 'Blog', key: 'blog' },
];

const socialLinks = [
  {
    label: 'Instagram (UCSD)',
    href: 'https://www.instagram.com/',
    icon: 'instagram',
  },
  {
    label: 'Instagram (USD)',
    href: 'https://www.instagram.com/',
    icon: 'instagram',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: 'linkedin',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/',
    icon: 'tiktok',
  },
  {
    label: 'Discord',
    href: 'https://discord.com/',
    icon: 'discord',
  },
] as const;

function FooterIcon({ name }: { name: (typeof socialLinks)[number]['icon'] }) {
  const common = { width: 18, height: 18, className: 'site-footer__social-icon', 'aria-hidden': true as const };
  switch (name) {
    case 'instagram':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V5a5 5 0 0 0 5 5" />
        </svg>
      );
    case 'discord':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SiteFooter() {
  return (
    <footer id="site-footer" className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__col site-footer__col--nav">
          <div className="site-footer__brand">
            <span className="site-footer__brand-dot" aria-hidden />
            <span className="site-footer__brand-title">Project Liftoff</span>
          </div>
          <nav className="site-footer__nav" aria-label="Footer">
            <ul className="site-footer__nav-list">
              {navLinks.map((item) => (
                <li key={item.key}>
                  <Link to={item.to} className="site-footer__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="site-footer__col site-footer__col--follow">
          <p className="site-footer__section-label">Follow</p>
          <ul className="site-footer__social-list">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="site-footer__social-link" target="_blank" rel="noopener noreferrer">
                  <FooterIcon name={s.icon} />
                  <span>{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col site-footer__col--aside">
          <div className="site-footer__aside-intro">
            <p className="site-footer__mission">{footerMission}</p>
            <a className="site-footer__email" href={`mailto:${CLUB_EMAIL}`}>
              {CLUB_EMAIL}
            </a>
          </div>
          <p className="site-footer__copyright">&copy; 2026 Startup Incubator Club</p>
        </div>
      </div>
    </footer>
  );
}
