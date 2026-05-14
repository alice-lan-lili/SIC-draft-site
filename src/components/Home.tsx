import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GicHero from './home/GicHero';
import BackedByCarousel from './BackedByCarousel';
import { cohortStartups } from '../data/cohort';
import { getUpcomingProgramEvents, programEventIsoDate } from '../data/programEvents';

const TEAM_PHOTO = '/brand/about-team.png';

const sectionReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const },
  viewport: { once: true, amount: 0.22 as const },
};

export default function Home() {
  const carouselItems = [...cohortStartups, ...cohortStartups];
  const upcomingEventsPreview = useMemo(() => getUpcomingProgramEvents(undefined, 3), []);

  return (
    <main className="home-gic">
      <GicHero />

      <motion.section
        id="home-cohort-section"
        className="section section-home-after-hero home-gic-section"
        {...sectionReveal}
      >
        <div className="container">
          <div className="home-heading-stack">
            <p className="section-label">01 / Meet the Startups</p>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.05, maxWidth: '24ch' }}>
              Spring 2026 <em>Cohort</em>
            </h2>
            <Link to="/directory" className="home-inline-link">
              Meet the Startups
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

      <motion.section className="section home-gic-section" {...sectionReveal}>
        <div className="container">
          <div className="home-heading-stack" style={{ marginBottom: '1.75rem' }}>
            <p className="section-label">02 / Blog</p>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)', lineHeight: 1.05, maxWidth: '22ch' }}>
              From <em>Our Founders</em>
            </h2>
            <Link to="/insights" className="home-inline-link">
              View All
            </Link>
          </div>
          <div className="home-news-body">
            <article
              className="page-outline-card program-event-card insights-post-card home-blog-empty-preview"
              aria-label="Blog: no posts published yet. Preview of how posts will appear."
            >
              <div className="home-blog-empty-preview__inner">
                <div className="home-blog-empty-preview__row">
                  <div className="home-blog-empty-preview__main">
                    <div className="home-blog-empty-preview__meta">
                      <span className="home-blog-empty-preview__pill">Coming soon</span>
                      <span className="home-blog-empty-preview__date">Spring 2026 · First posts incoming</span>
                    </div>
                    <h3 className="home-blog-empty-preview__title">From the launchpad: founder notes and recaps</h3>
                    <p className="home-blog-empty-preview__excerpt">
                      We will publish founder spotlights, lessons learned, and milestone recaps here once this cycle
                      begins.
                    </p>
                  </div>
                  <span className="home-blog-empty-preview__cta" aria-hidden="true">
                    Read →
                  </span>
                </div>
                <p className="home-blog-empty-preview__note">
                  <span className="home-blog-empty-preview__note-mark" aria-hidden="true" />
                  No posts published yet — this card is a preview of the layout.
                </p>
              </div>
            </article>
          </div>
        </div>
      </motion.section>

      <motion.section id="home-events-section" className="section home-gic-section" {...sectionReveal}>
        <div className="container">
          <div className="home-heading-stack" style={{ marginBottom: '1.75rem' }}>
            <p className="section-label">03 / Events</p>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)', lineHeight: 1.05, maxWidth: '24ch' }}>
              Upcoming <em>Events</em>
            </h2>
            <Link to="/programs" className="home-inline-link">
              View all
            </Link>
          </div>
          <div className="home-events-preview">
            {upcomingEventsPreview.length === 0 ? (
              <p className="text-muted home-events-preview__empty" style={{ maxWidth: '56ch', lineHeight: 1.65 }}>
                We are scheduling the next workshops and community nights. Check the programs page soon for dates and
                RSVP links.
              </p>
            ) : (
              <div className="home-events-preview__grid" role="list" aria-label="Next upcoming events">
                {upcomingEventsPreview.map((ev, i) => {
                  const iso = programEventIsoDate(ev);
                  return (
                    <motion.article
                      key={ev.id}
                      className="home-events-preview__card page-outline-card"
                      role="listitem"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: i * 0.07 }}
                    >
                      <time className="home-events-preview__when" dateTime={iso || undefined}>
                        {ev.date}
                        <span className="home-events-preview__when-sep" aria-hidden>
                          {' '}
                          ·{' '}
                        </span>
                        <span className="home-events-preview__when-time">{ev.time}</span>
                      </time>
                      <h3 className="home-events-preview__title">{ev.title}</h3>
                      <p className="home-events-preview__loc">{ev.loc}</p>
                      <p className="text-muted home-events-preview__excerpt">{ev.details}</p>
                    </motion.article>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </motion.section>

      <motion.section className="section home-gic-section" {...sectionReveal}>
        <div className="container">
          <div className="home-sponsor-intro">
            <div className="home-sponsor-intro__main">
              <div className="home-heading-stack">
                <p className="section-label">04 / Get involved</p>
                <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.05, maxWidth: '24ch' }}>
                  Find your seat on a
                  <br />
                  <em>launch team</em>
                </h2>
                <Link to="/programs" className="home-inline-link">
                  View openings
                </Link>
              </div>
              <p className="text-muted home-sponsor-intro__blurb" style={{ fontSize: '1.05rem', lineHeight: 1.68 }}>
                Join SIC as an internal board member, or find intern opportunities at our startups.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="section home-gic-section" {...sectionReveal}>
        <div className="container">
          <div className="home-heading-stack" style={{ marginBottom: '1.4rem' }}>
            <p className="section-label">05 / Sponsors &amp; Partners</p>
            <h2 style={{ fontSize: 'clamp(2.1rem, 4.6vw, 3.2rem)', lineHeight: 1.06, maxWidth: '22ch' }}>
              Backed by our <em>Partners</em>
            </h2>
            <a href="#site-footer" className="home-inline-link">
              Partner With Us
            </a>
          </div>
          <p className="text-muted" style={{ marginBottom: '1.2rem', maxWidth: '68ch' }}>
            We work with sponsors and partners who support student builders through mentorship, opportunities, and events.
          </p>
          <BackedByCarousel ariaLabel="Sponsor and partner logos" placeholderText="Partner" />
        </div>
      </motion.section>

      <motion.section className="section home-gic-section" {...sectionReveal}>
        <div className="container">
          <div className="home-heading-stack" style={{ marginBottom: '2.25rem' }}>
            <p className="section-label">06 / Meet the Team</p>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.25rem)', lineHeight: 1.05 }}>
              The people behind <em>Project Liftoff</em>
            </h2>
            <Link to="/team" className="home-inline-link">
              Learn More
            </Link>
          </div>
          <div className="home-about-kinetic">
            <motion.div
              className="home-about-kinetic__photo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] as const }}
            >
              <img src={TEAM_PHOTO} alt="Startup Incubator participants at DataHacks 2026" />
            </motion.div>
            <div className="home-about-kinetic__copy">
              <h3>
                Student&#8209;run. Builder&#8209;led. Community&#8209;first.
              </h3>
              <p className="text-muted">
                We help UC San Diego students explore entrepreneurship by turning curiosity into actionable startup skills, supportive peer connections, and real-world learning.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="home-gic-cta-band" aria-labelledby="home-gic-cta-title">
        <div className="home-gic-cta-band__sheen" aria-hidden />
        <div className="container home-gic-cta-band__inner">
          <div className="home-gic-cta-band__copy">
            <h2 id="home-gic-cta-title" className="home-gic-cta-band__title">
              If that sounds like you,
              <span className="home-gic-cta-band__title-line">
                <em>come build with us.</em>
              </span>
            </h2>
            <p className="home-gic-cta-band__lede">Spring 2026 · UC San Diego</p>
          </div>
          <div className="home-gic-cta-band__actions">
            <Link to="/get-involved" className="btn-primary btn-primary--cta-alt btn-burst home-gic-cta-band__btn-primary">
              Get involved
            </Link>
            <Link to="/directory" className="btn-outline btn-burst home-gic-cta-band__btn-secondary">
              Meet the Startups
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
