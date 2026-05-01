import { motion } from 'framer-motion';
import PageHero from './PageHero';

const departments = [
  {
    name: 'Exec',
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

export default function Team() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <PageHero
        eyebrow="Team"
        title={
          <>
            The People Behind
            <br />
            <em>the Mission.</em>
          </>
        }
        subtitle="Operators, mentors, and partners accelerating UCSD ventures from lab to launch."
      />
      <section className="section section-after-hero">
        <div className="container">
          <motion.div
            className="glass-card"
            style={{ padding: 'clamp(1.75rem, 4vw, 2.6rem)', marginBottom: 'clamp(2rem, 5vw, 3rem)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ fontSize: '1.35rem', marginBottom: '0.9rem', fontFamily: 'var(--font-body)', fontWeight: 600 }}>What we are</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              A student-run community at UC San Diego that makes entrepreneurship approachable through events, socials, and
              hands-on workshops where students ideate, meet builders, and learn the business world by doing.
            </p>
          </motion.div>

          <div className="team-split" style={{ marginBottom: 'clamp(3rem, 8vw, 6rem)' }}>
            <motion.div
              className="glass-card"
              style={{ padding: 'clamp(1.75rem, 4vw, 3rem)' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 style={{ fontSize: '1.35rem', marginBottom: '1rem', fontFamily: 'var(--font-body)', fontWeight: 600 }}>Mission</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                Help UC San Diego students explore entrepreneurship by turning curiosity into actionable startup skills,
                supportive peer connections, and real-world learning.
              </p>
            </motion.div>
            <motion.div
              className="glass-card"
              style={{ padding: 'clamp(1.75rem, 4vw, 3rem)' }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <h2 style={{ fontSize: '1.35rem', marginBottom: '1rem', fontFamily: 'var(--font-body)', fontWeight: 600 }}>Vision</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                A campus where any student, regardless of major or experience, feels confident taking the first step toward
                building something that matters.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="glass-card"
            style={{ marginBottom: 'clamp(3rem, 7vw, 5rem)', overflow: 'hidden' }}
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
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', marginBottom: '2.5rem', maxWidth: '18ch' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Who We Are.
            </motion.h2>
            <div className="team-grid">
              {departments.map((group, i) => (
                <motion.article
                  key={group.name}
                  className="team-card"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontFamily: 'var(--font-body)', fontWeight: 600, marginBottom: '0.65rem' }}>
                      {group.name}
                    </h3>
                    <div style={{ display: 'grid', gap: '0.35rem' }}>
                      {group.members.map((member) => (
                        <p key={member} style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          {member}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
