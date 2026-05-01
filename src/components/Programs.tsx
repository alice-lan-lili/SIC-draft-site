import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from './PageHero';

const outline = [
  { n: '01', title: 'Orientation Week', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Teams set goals, define problem space, and map first milestones.' },
  { n: '02', title: 'Build Sprint', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Founders iterate quickly through customer interviews, prototyping, and weekly reviews.' },
  { n: '03', title: 'Mentor Tracks', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Operators and mentors run targeted sessions for product, GTM, and fundraising readiness.' },
  { n: '04', title: 'Demo Prep and Showcase', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Teams finalize narrative, metrics, and presentations for community and sponsor demo night.' },
];

const events = [
  { date: 'May 14, 2026', time: '6:00 PM', title: 'Lorem Ipsum Session', loc: 'Design & Innovation Building', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { date: 'Jun 02, 2026', time: '1:00 PM', title: 'Dolor Sit Workshop', loc: 'Computer Science Center', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.' },
  { date: 'Jun 20, 2026', time: '6:30 PM', title: 'Amet Founder Forum', loc: 'Rady School of Management', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
  { date: 'Jul 10, 2026', time: '9:00 AM', title: 'Consectetur Demo Review', loc: 'Downtown San Diego', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.' },
];

export default function Programs() {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[number] | null>(null);
  const calendarDays = useMemo(
    () => [
      { date: 'May 14, 2026', events: [events[0]] },
      { date: 'Jun 02, 2026', events: [events[1]] },
      { date: 'Jun 20, 2026', events: [events[2]] },
      { date: 'Jul 10, 2026', events: [events[3]] },
    ],
    []
  );

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <PageHero
        eyebrow="Programs"
        title={
          <>
            Built for
            <br />
            <em>Technical Founders.</em>
          </>
        }
        subtitle="Clear, practical programming designed for students who want to move from curiosity to execution."
      >
        <motion.button className="btn-accent" type="button" whileTap={{ scale: 0.97 }}>
          Apply to Programs
        </motion.button>
      </PageHero>
      <section className="section section-after-hero" style={{ flex: 1 }}>
        <div className="container">
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: '1.5rem' }}>How it works</h2>
            <div className="program-outline">
              {outline.map((step, i) => (
                <motion.div
                  key={step.n}
                  className="program-outline__row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                >
                  <span className="program-outline__index">{step.n}</span>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '0.45rem' }}>{step.title}</h3>
                    <p className="text-muted" style={{ fontSize: '0.92rem', lineHeight: 1.65 }}>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {calendarOpen ? (
            <div className="program-calendar">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.25rem',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                }}
              >
                <h2 style={{ fontSize: 'clamp(1.55rem, 2.8vw, 2.1rem)' }}>Calendar View</h2>
                <button className="btn-outline" type="button" onClick={() => setCalendarOpen(false)}>
                  Back to Programs
                </button>
              </div>
              <div className="program-calendar__grid">
                {calendarDays.map((day) => (
                  <div key={day.date} className="program-calendar__day">
                    <h3 style={{ fontSize: '0.95rem', marginBottom: '0.8rem', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                      {day.date}
                    </h3>
                    <div style={{ display: 'grid', gap: '0.55rem' }}>
                      {day.events.map((event) => (
                        <button
                          key={event.title}
                          className="program-calendar__event"
                          type="button"
                          onClick={() => setSelectedEvent(event)}
                        >
                          <strong>{event.title}</strong>
                          <span>{event.time} · {event.loc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {selectedEvent && (
                <div className="program-calendar__overlay" role="dialog" aria-modal="true">
                  <div className="program-calendar__modal">
                    <h3 style={{ marginBottom: '0.5rem' }}>{selectedEvent.title}</h3>
                    <p className="text-muted" style={{ marginBottom: '0.4rem' }}>{selectedEvent.date}</p>
                    <p className="text-muted" style={{ marginBottom: '0.85rem' }}>{selectedEvent.time} · {selectedEvent.loc}</p>
                    <p style={{ fontSize: '0.92rem', lineHeight: 1.65 }}>{selectedEvent.details}</p>
                    <button className="btn-outline" type="button" style={{ marginTop: '1rem' }} onClick={() => setSelectedEvent(null)}>
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginBottom: '2rem',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
                  Events <em>&amp; Sessions.</em>
                </h2>
              </div>
              <button className="btn-outline" type="button" onClick={() => setCalendarOpen(true)}>
                View Full Schedule
              </button>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1px',
                background: 'var(--border-color)',
                border: '1px solid var(--border-color)',
                borderRadius: '14px',
                overflow: 'hidden',
              }}
            >
              {events.map((ev, i) => (
                <motion.div
                  key={ev.title}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1.5rem 2rem',
                    background: 'var(--bg-secondary)',
                    justifyContent: 'space-between',
                    gap: '2rem',
                    flexWrap: 'wrap',
                  }}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-body)', fontWeight: 500, marginBottom: '4px' }}>{ev.title}</h3>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                        {ev.date} · {ev.time} · {ev.loc}
                      </span>
                    </div>
                  </div>
                  <button className="btn-outline" style={{ padding: '7px 20px', fontSize: '0.8rem', flexShrink: 0 }} type="button">
                    RSVP
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
          )}
        </div>
      </section>
    </div>
  );
}
