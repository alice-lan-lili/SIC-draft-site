import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from './PageHero';
import { PROGRAM_EVENTS, type ProgramEvent } from '../data/programEvents';

const CALENDAR_YEAR = 2026;
const CALENDAR_MONTH = 5; // June (0-indexed)
const WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Programs() {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<ProgramEvent | null>(null);
  const now = useMemo(() => new Date(), []);
  const upcomingEvents = useMemo(
    () => PROGRAM_EVENTS.filter((event) => new Date(event.date).getTime() >= now.getTime()),
    [now]
  );
  const monthLabel = useMemo(
    () =>
      new Date(CALENDAR_YEAR, CALENDAR_MONTH, 1).toLocaleDateString(undefined, {
        month: 'long',
        year: 'numeric',
      }),
    []
  );

  const monthCells = useMemo(() => {
    const firstWeekday = new Date(CALENDAR_YEAR, CALENDAR_MONTH, 1).getDay();
    const daysInMonth = new Date(CALENDAR_YEAR, CALENDAR_MONTH + 1, 0).getDate();
    const eventMap = new Map<number, ProgramEvent[]>();

    PROGRAM_EVENTS.forEach((event) => {
      const d = new Date(event.date);
      if (d.getFullYear() === CALENDAR_YEAR && d.getMonth() === CALENDAR_MONTH) {
        const day = d.getDate();
        const existing = eventMap.get(day) ?? [];
        eventMap.set(day, [...existing, event]);
      }
    });

    const totalCells = Math.ceil((firstWeekday + daysInMonth) / 7) * 7;
    return Array.from({ length: totalCells }, (_, idx) => {
      const dayNumber = idx - firstWeekday + 1;
      if (dayNumber < 1 || dayNumber > daysInMonth) {
        return { key: `empty-${idx}`, dayNumber: null as number | null, events: [] as ProgramEvent[] };
      }
      return {
        key: `day-${dayNumber}`,
        dayNumber,
        events: eventMap.get(dayNumber) ?? [],
      };
    });
  }, []);

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <PageHero
        background="meteors-original"
        eyebrow={<span className="text-accent">Programs</span>}
        backgroundImage="/heroes/programs-hero.svg"
        backgroundPosition="center 28%"
        title={
          <>
            Programs and <em>events.</em>
          </>
        }
        subtitle="Clear, practical programming designed for students who want to move from curiosity to execution."
      >
        <Link to="/get-involved" className="btn-primary btn-primary--cta-alt btn-burst" style={{ fontWeight: 600, padding: '13px 30px', borderRadius: 0 }}>
          Club roles
        </Link>
      </PageHero>
      <section className="section section-after-hero" style={{ flex: 1 }}>
        <div className="container">
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
                <h2 style={{ fontSize: 'clamp(1.55rem, 2.8vw, 2.1rem)' }}>{monthLabel}</h2>
                <button className="home-inline-link program-schedule-link-btn" type="button" onClick={() => setCalendarOpen(false)}>
                  Back
                </button>
              </div>
              <div className="program-calendar__weekdays" aria-hidden>
                {WEEKDAY_LABELS.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
              {upcomingEvents.length === 0 ? (
                <div className="program-empty-state">
                  <h3>No Upcoming Events</h3>
                  <p className="text-muted">New sessions and workshops will appear here once they are scheduled.</p>
                </div>
              ) : (
                <div className="program-calendar__month-grid">
                  {monthCells.map((cell) => (
                    <div key={cell.key} className={`program-calendar__cell${cell.dayNumber ? '' : ' program-calendar__cell--outside'}`}>
                      {cell.dayNumber ? (
                        <>
                          <span className="program-calendar__cell-daynum">{cell.dayNumber}</span>
                          <div style={{ display: 'grid', gap: '0.4rem' }}>
                            {cell.events.map((event) => (
                              <button
                                key={event.id}
                                className="program-calendar__event-chip"
                                type="button"
                                onClick={() => setSelectedEvent(event)}
                              >
                                <strong>{event.title}</strong>
                                <span>{event.time}</span>
                              </button>
                            ))}
                          </div>
                        </>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}

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
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '0.65rem' }}>
                Upcoming <em>Events</em>
              </h2>
              <button className="home-inline-link program-schedule-link-btn" type="button" onClick={() => setCalendarOpen(true)}>
                View Full Schedule
              </button>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {upcomingEvents.length === 0 ? (
                <div className="program-empty-state">
                  <h3>No Upcoming Events</h3>
                  <p className="text-muted">We are planning the next event block now. Check back soon.</p>
                </div>
              ) : (
                upcomingEvents.map((ev, i) => (
                <motion.div
                  key={ev.id}
                  className="page-outline-card program-event-card"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '1.5rem 2rem',
                    justifyContent: 'space-between',
                    gap: '2rem',
                    flexWrap: 'wrap',
                  }}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="program-event-card__content" style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1rem', fontFamily: 'var(--font-body)', fontWeight: 500, marginBottom: '4px' }}>{ev.title}</h3>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                        {ev.date} · {ev.time} · {ev.loc}
                      </span>
                      <div className="program-event-card__details">
                        <p>{ev.details}</p>
                        <p>
                          <strong>Format:</strong> In-person session
                          <br />
                          <strong>Audience:</strong> Founders and builders
                          <br />
                          <strong>Bring:</strong> laptop and questions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="home-inline-link program-schedule-link-btn program-rsvp-btn" style={{ fontSize: '0.8rem', flexShrink: 0 }} type="button">
                    RSVP
                  </button>
                </motion.div>
                ))
              )}
            </div>

            <div style={{ marginTop: '3.2rem' }}>
              <h2 style={{ fontSize: 'clamp(1.55rem, 2.6vw, 2.1rem)', marginBottom: '0.75rem' }}>
                Past <em>Events</em>
              </h2>
              <p className="text-muted" style={{ marginBottom: '1rem', maxWidth: '56ch' }}>
                Gallery from previous sessions and demos.
              </p>
              <div className="program-gallery-empty">
                <div className="program-gallery-empty__tile" />
                <div className="program-gallery-empty__tile" />
                <div className="program-gallery-empty__tile" />
              </div>
            </div>
          </div>
          )}
        </div>
      </section>
    </div>
  );
}
