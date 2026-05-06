import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import BackedByCarousel from './BackedByCarousel';
import { cohortStartups } from '../data/cohort';

const TEAM_PHOTO = '/brand/about-team.png';

const sectionReveal = {
  initial: { opacity: 0, y: 42, filter: 'blur(8px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.65 },
  viewport: { once: true, amount: 0.2 as const },
};

export default function Home() {
  const location = useLocation();
  const carouselItems = [...cohortStartups, ...cohortStartups];

  return (
    <main>
      <Hero key={location.key || 'home-hero'} />

      <motion.section
        id="home-cohort-section"
        className="section section-home-after-hero"
        initial={sectionReveal.initial}
        whileInView={sectionReveal.whileInView}
        transition={sectionReveal.transition}
        viewport={sectionReveal.viewport}
      >
        <div className="container">
          <div className="home-heading-stack">
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.05, maxWidth: '24ch' }}>
              Startups in <em>Our Cohort</em>
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
        className="section"
        initial={sectionReveal.initial}
        whileInView={sectionReveal.whileInView}
        transition={sectionReveal.transition}
        viewport={sectionReveal.viewport}
      >
        <div className="container">
          <div className="home-heading-stack" style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)', lineHeight: 1.05, maxWidth: '22ch' }}>
              From <em>Our Founders</em>
            </h2>
            <Link to="/insights" className="home-inline-link">
              View All
            </Link>
          </div>
          <div className="home-news-body">
            <motion.article className="home-news-card">
              <h3 style={{ marginTop: '0.9rem', marginBottom: '0.65rem', fontSize: 'clamp(1.2rem, 2.6vw, 1.6rem)' }}>
                Founder Updates Coming Soon
              </h3>
              <p className="text-muted" style={{ fontSize: '1rem', maxWidth: '60ch', lineHeight: 1.65 }}>
                We will publish founder spotlights, lessons learned, and milestone recaps here once this cycle begins.
              </p>
            </motion.article>
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
          <div className="home-sponsor-intro">
            <div className="home-sponsor-intro__main">
              <div className="home-heading-stack">
                <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.05, maxWidth: '24ch' }}>
                  <em>Partnerships</em>
                </h2>
                <a href="#site-footer" className="home-inline-link">
                  Contact Us
                </a>
              </div>
              <p className="text-muted home-sponsor-intro__blurb" style={{ fontSize: '1.05rem', lineHeight: 1.68 }}>
                Startup Incubator is backed by leading sponsors and investors who want to meet serious student builders. Sponsors fund
                workshops, demo nights, and flagship events. Investors plug in through curated team intros and touchpoints across our
                pipeline. If that sounds like you, reach out anytime.
              </p>
            </div>
          </div>
          <BackedByCarousel ariaLabel="Partner logos coming soon" placeholderText="Partner" />
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
              Meet the team behind <em>Startup Incubator</em>
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
                We help UC San Diego students explore entrepreneurship by turning curiosity into actionable startup skills,
                supportive peer connections, and real-world learning.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
