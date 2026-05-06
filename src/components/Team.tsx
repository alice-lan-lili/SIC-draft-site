import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from './PageHero';

const departments = [
  {
    name: 'Board',
    members: ['Lorem Ipsum', 'Dolor Sit', 'Amet Consectetur'],
  },
  {
    name: 'Marketing',
    members: ['Adipiscing Elit', 'Sed Do', 'Eiusmod Tempor'],
  },
  {
    name: 'Growth',
    members: ['Incididunt Ut', 'Labore Et', 'Dolore Magna'],
  },
  {
    name: 'Events',
    members: ['Aliqua Enim', 'Minim Veniam', 'Quis Nostrud'],
  },
  {
    name: 'Finance',
    members: ['Exercitation Ullamco', 'Laboris Nisi', 'Ut Aliquip'],
  },
  {
    name: 'Operations',
    members: ['Ex Ea', 'Commodo Consequat', 'Duis Aute'],
  },
];

const TEAM_PHOTO = '/brand/about-team.png';
const missionVisionPanels = [
  {
    key: 'mission',
    title: 'Mission',
    summary:
      'We help UC San Diego students explore entrepreneurship by turning curiosity into actionable startup skills, supportive peer connections, and real-world learning.',
  },
  {
    key: 'vision',
    title: 'Vision',
    summary:
      'A campus where any student, regardless of major or experience, feels confident taking the first step toward building something that matters.',
  },
];

export default function Team() {
  const [activeTeam, setActiveTeam] = useState(departments[0].name);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const activeGroup = departments.find((group) => group.name === activeTeam) ?? departments[0];

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <PageHero
        background="aurora-original"
        eyebrow={<span className="text-accent">Team</span>}
        backgroundImage="/heroes/team-hero.svg"
        backgroundPosition="center 30%"
        title={
          <>
            The People Behind
            <br />
            <em>the Mission</em>
          </>
        }
        subtitle="We are a student-run community at UC San Diego that makes entrepreneurship approachable through events, socials, and hands-on workshops where students ideate, meet builders, and learn the business world by doing."
      />
      <section className="section section-after-hero section-team-page">
        <div className="container">
          <div className="team-mv-grid" style={{ marginBottom: 'clamp(4.5rem, 10vw, 7.5rem)' }}>
            {missionVisionPanels.map((panel, i) => (
              <motion.article
                key={panel.key}
                className="team-mv-panel"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <h2 className="team-mv-panel__title">
                  Our <em>{panel.title}</em>
                </h2>
                <p className="team-mv-panel__summary">{panel.summary}</p>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="glass-card"
            style={{ marginBottom: 'clamp(4.5rem, 9vw, 7rem)', overflow: 'hidden' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <img
              src={TEAM_PHOTO}
              alt="Startup Incubator team and participants"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </motion.div>

          <div>
            <motion.h2
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', marginBottom: '2.5rem', maxWidth: '26ch' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Who We <em>Are</em>
            </motion.h2>
            <button
              type="button"
              className="team-filter-toggle"
              aria-expanded={filtersOpen}
              aria-controls="team-filter-bar"
              onClick={() => setFiltersOpen((open) => !open)}
            >
              Filter Team
            </button>
            <div
              id="team-filter-bar"
              className={`team-filter-bar${filtersOpen ? ' team-filter-bar--open' : ''}`}
              role="tablist"
              aria-label="Team filters"
            >
              {departments.map((group) => (
                <button
                  key={group.name}
                  type="button"
                  role="tab"
                  aria-selected={activeTeam === group.name}
                  className={`team-filter-btn${activeTeam === group.name ? ' team-filter-btn--active' : ''}`}
                  onClick={() => {
                    setActiveTeam(group.name);
                    setFiltersOpen(false);
                  }}
                >
                  {group.name}
                </button>
              ))}
            </div>
            <motion.div
              key={activeGroup.name}
              className="team-headshot-grid"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              {activeGroup.members.map((member) => (
                <article key={`${activeGroup.name}-${member}`} className="team-headshot-card">
                  <div className="team-headshot-placeholder" aria-hidden>
                    <span>Photo</span>
                  </div>
                  <p>{member}</p>
                </article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
