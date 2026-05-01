import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from './Hero';
import { cohortStartups } from '../data/cohort';

const TEAM_PHOTO = '/brand/about-team.png';

const sectionReveal = {
  initial: { opacity: 0, y: 42, filter: 'blur(8px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.65 },
  viewport: { once: true, amount: 0.2 as const },
};

export default function Home() {
  const carouselItems = [...cohortStartups, ...cohortStartups];

  return (
    <main style={{ background: 'var(--bg-primary)' }}>
      <Hero />

      <motion.section
        className="section"
        initial={sectionReveal.initial}
        whileInView={sectionReveal.whileInView}
        transition={sectionReveal.transition}
        viewport={sectionReveal.viewport}
      >
        <div className="container">
          <div className="home-heading-stack">
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.05, maxWidth: '24ch' }}>
              Startups in <em>Our Cohort.</em>
            </h2>
            <Link to="/directory" className="home-inline-link">
              Full Directory
            </Link>
          </div>

          <div className="home-carousel-shell">
            <div className="home-carousel-track">
              {carouselItems.map((co, i) => (
                <Link key={`${co.id}-${i}`} to={`/directory#${co.id}`} className="home-carousel-item" aria-label={`${co.name} - open directory`}>
                  <span className="home-carousel-logo" data-startup-logo={co.id}>
                    <img
                      src={co.logoSrc}
                      alt=""
                      style={{
                        objectFit: co.logoObjectFit ?? 'cover',
                        ...(co.logoPosition ? { objectPosition: co.logoPosition } : {}),
                      }}
                    />
                  </span>
                  <span className="home-carousel-name">{co.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section home-section-alt"
        initial={sectionReveal.initial}
        whileInView={sectionReveal.whileInView}
        transition={sectionReveal.transition}
        viewport={sectionReveal.viewport}
      >
        <div className="container">
          <div className="home-heading-stack" style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)', lineHeight: 1.05, maxWidth: '22ch' }}>
              From <em>Our Ecosystem.</em>
            </h2>
            <Link to="/insights" className="home-inline-link">
              View All
            </Link>
          </div>
          <div className="home-news-body">
            <motion.article className="home-news-card">
              <span className="section-label">Example</span>
              <h3 style={{ marginTop: '0.9rem', marginBottom: '0.65rem', fontSize: 'clamp(1.2rem, 2.6vw, 1.6rem)' }}>
                Lorem ipsum ecosystem update.
              </h3>
              <p className="text-muted" style={{ fontSize: '1rem', maxWidth: '60ch', lineHeight: 1.65 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis mauris ac metus pretium,
                vitae dapibus velit gravida. Integer feugiat at sapien eget semper.
              </p>
              <Link to="/insights" className="home-news-link">
                Read Sample <ArrowRight size={16} />
              </Link>
            </motion.article>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="home-sponsor-cta-wrap"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
      >
        <div className="home-sponsor-cta">
          <div className="home-sponsor-cta__sheen" aria-hidden />
          <div className="home-sponsor-cta__pulse" aria-hidden />
          <div className="container home-sponsor-cta__inner">
            <div className="home-sponsor-cta__text">
              <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', lineHeight: 1.05, marginBottom: '1rem' }}>
                Turn ideas into <em>momentum.</em>
              </h2>
              <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.65, maxWidth: '44ch' }}>
                Partner with high-agency student founders at UC San Diego through curated brand visibility, early access to
                emerging teams, and hands-on engagement across events and programming.
              </p>
            </div>
            <motion.div className="home-sponsor-cta__cta">
              <Link to="/sponsors" className="btn-accent home-sponsor-cta__btn">
                Become a Sponsor
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section"
        initial={sectionReveal.initial}
        whileInView={sectionReveal.whileInView}
        transition={sectionReveal.transition}
        viewport={sectionReveal.viewport}
      >
        <div className="container">
          <div className="home-heading-stack" style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.25rem)', lineHeight: 1.05, maxWidth: '26ch' }}>
              Meet the team behind <em>Startup Incubator.</em>
            </h2>
            <Link to="/team" className="home-inline-link">
              Learn More
            </Link>
          </div>
          <div className="home-about-kinetic">
            <motion.div
              className="home-about-kinetic__photo"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <img src={TEAM_PHOTO} alt="Startup Incubator participants at DataHacks 2026" />
            </motion.div>
            <div className="home-about-kinetic__copy">
              <h3>
                Student-run. Builder-led.
                <br />
                Community-first.
              </h3>
              <p className="text-muted">
                Help UC San Diego students explore entrepreneurship by turning curiosity into actionable startup skills,
                supportive peer connections, and real-world learning.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
