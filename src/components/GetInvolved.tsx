import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from './PageHero';

const APPLY_SUBJECT = encodeURIComponent('Startup Incubator club — role application');
const APPLY_TO = 'startupincubator@ucsd.edu';

type ClubRole = {
  id: string;
  title: string;
  tagline: string;
  bullets: string[];
};

const INTERNAL_ROLES: ClubRole[] = [
  {
    id: 'content-producer',
    title: 'Content producer',
    tagline: 'Own how our community looks and sounds on screen—from promos through Demo Day.',
    bullets: [
      'Videography and editing',
      'Scripting',
      'Storyboarding',
      'Preferred: Film major or equivalent experience',
    ],
  },
  {
    id: 'consultants',
    title: 'Consultants',
    tagline: 'Support founders with sharp thinking—research, synthesis, and clear recommendations.',
    bullets: [
      'Research and analytical thinking',
      'Communication and presentation',
      'Strategic problem solving',
    ],
  },
  {
    id: 'events-lead',
    title: 'Events lead',
    tagline: 'Run our flagship moments and the logistics that keep founders and partners coming back.',
    bullets: [
      'Strong communication and leadership',
      'Adaptability under pressure',
      'Strategic coordination',
    ],
  },
];

function applyMailto(role: string) {
  return `mailto:${APPLY_TO}?subject=${APPLY_SUBJECT}&body=${encodeURIComponent(`Role of interest: ${role}\n\nName:\nYear / major:\nPortfolio or resume link (optional):\n\n`)}`;
}

function RoleGrid({ roles, indexOffset = 0 }: { roles: ClubRole[]; indexOffset?: number }) {
  return (
    <ul className="get-involved-role-grid" role="list">
      {roles.map((role, i) => (
        <motion.li
          key={role.id}
          className="get-involved-role-card page-outline-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="get-involved-role-card__index" aria-hidden>
            {String(indexOffset + i + 1).padStart(2, '0')}
          </span>
          <h3 className="get-involved-role-card__title">{role.title}</h3>
          <p className="get-involved-role-card__tagline">{role.tagline}</p>
          <ul className="get-involved-role-card__list">
            {role.bullets.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <a className="btn-primary btn-primary--cta-alt btn-burst get-involved-role-card__apply" href={applyMailto(role.title)}>
            Apply
          </a>
        </motion.li>
      ))}
    </ul>
  );
}

export default function GetInvolved() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <PageHero
        fillViewport
        background="aurora-bottom"
        eyebrow={<span className="text-accent">Startup Incubator club</span>}
        backgroundImage="/heroes/get-involved-hiring.svg"
        backgroundPosition="center 32%"
        title={
          <>
            Now <em>Hiring</em>
          </>
        }
        subtitle="Internal club roles for Spring 2026 in content, consulting, and events, plus a space for partner and startup listings when they open."
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', alignItems: 'center' }}>
          <a className="btn-primary btn-primary--cta-alt btn-burst" href="#get-involved-internal-roles" style={{ fontWeight: 600 }}>
            View roles
          </a>
          <Link to="/programs" className="btn-outline btn-burst">
            Events calendar
          </Link>
        </div>
      </PageHero>

      <section id="get-involved-internal-roles" className="section section-after-hero get-involved-section">
        <div className="container">
          <header className="get-involved-section__intro">
            <p className="section-label">Open roles</p>
            <h2 className="get-involved-section__title">Startup Incubator Internal Roles</h2>
            <p className="text-muted get-involved-section__lede">
              Work with the cohort team on content, strategy, and programming. Time commitment is typically a few hours per week; leads
              collaborate with E-board and Project Liftoff.
            </p>
          </header>

          <RoleGrid roles={INTERNAL_ROLES} />
        </div>
      </section>

      <section id="get-involved-external-roles" className="section get-involved-section get-involved-section--external">
        <div className="container">
          <header className="get-involved-section__intro">
            <p className="section-label">Partners & startups</p>
            <h2 className="get-involved-section__title">Startup Incubator External Roles</h2>
            <p className="text-muted get-involved-section__lede">
              Sometimes portfolio companies, sponsors, and partner orgs share roles with our community. When we have active listings,
              they will appear here with how to apply.
            </p>
          </header>

          <div className="get-involved-external-placeholder page-outline-card">
            <p className="get-involved-external-placeholder__title">No external listings right now</p>
            <p className="text-muted get-involved-external-placeholder__body">
              Check back after Demo Day and recruiting cycles, or email{' '}
              <a href={`mailto:${APPLY_TO}`} className="text-accent">
                {APPLY_TO}
              </a>{' '}
              if you are a partner with a role you would like us to amplify.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
