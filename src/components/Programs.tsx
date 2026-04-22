import { motion } from 'framer-motion';

export default function Programs() {
  const pillars = [
    {
      step: "01",
      title: "Workshops",
      desc: "Turn concepts into usable tools through rigorous, hands-on engineering sprints."
    },
    {
      step: "02",
      title: "Weekly momentum",
      desc: "Iterate on ideas, validate markets, and rapidly prototype with dedicated EIRs."
    },
    {
      step: "03",
      title: "Meet your people",
      desc: "Connect with founders, mentors, and peers who want to collaborate and scale."
    },
    {
      step: "04",
      title: "Make progress visible",
      desc: "Pitch nights, showcases, and demo reels to put your venture in front of Tier-1 capital."
    }
  ];

  const events = [
    { date: "Oct 24", time: "5:00 PM", title: "Founder Mixer", location: "Design & Innovation Building" },
    { date: "Nov 02", time: "1:00 PM", title: "Deep Tech Workshop", location: "Computer Science Center" },
    { date: "Nov 15", time: "6:00 PM", title: "Pitch Night & Dinner", location: "Rady School of Management" },
    { date: "Dec 05", time: "9:00 AM", title: "Tier-1 VC Demo Day", location: "Downtown San Diego" }
  ];

  return (
    <section className="section">
      <div className="container">
        
        {/* Operations Pillars */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Operations</h1>
            <p className="text-muted" style={{ maxWidth: '600px' }}>
              Built on the principles of high-density innovation, our programs are designed for technical founders.
            </p>
          </div>
          <button className="btn-primary">Apply to Programs</button>
        </div>

        <div className="grid-4" style={{ marginBottom: '6rem' }}>
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx} 
              className="glass-card" 
              style={{ padding: '2.5rem 2rem' }}
            >
              <div style={{ marginBottom: '1.5rem' }}>
                <span className="pill">{pillar.step}</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{pillar.title}</h3>
              <p className="text-muted" style={{ fontSize: '0.95rem' }}>{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Events Calendar */}
        <div style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Events Calendar</h2>
              <p className="text-muted">Upcoming opportunities to connect and learn.</p>
            </div>
            <button className="btn-outline">View Full Schedule</button>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {events.map((e, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 5 }}
                className="glass-card"
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', flexWrap: 'wrap', gap: '1rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', minWidth: '300px' }}>
                  <div style={{ background: 'var(--bg-secondary)', padding: '10px 15px', borderRadius: '4px', textAlign: 'center', border: '1px solid var(--border-color)', minWidth: '80px' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-accent)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>{e.date.split(' ')[0]}</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>{e.date.split(' ')[1]}</div>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{e.title}</h3>
                    <span className="text-muted" style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>{e.time} &bull; {e.location}</span>
                  </div>
                </div>
                <button className="btn-accent" style={{ padding: '8px 24px' }}>RSVP</button>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
