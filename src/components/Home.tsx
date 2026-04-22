import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './Hero';
import { Link } from 'react-router-dom';

function CosmicOverlay({ active }: { active: boolean }) {
  const isLightMode = document.documentElement.getAttribute('data-theme') === 'light';

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 105, pointerEvents: 'none', mixBlendMode: 'screen' }}
        >
          {/* Hyper-dense high-speed star streaks (Warp Speed) */}
          {Array.from({ length: 150 }).map((_, i) => {
            const size = Math.random() * 2 + 1;
            const duration = Math.random() * 0.2 + 0.4; // Very fast to fit 0.8s
            const delay = Math.random() * 0.3;
            return (
              <motion.div
                key={`hyper-star-${i}`}
                initial={{ y: '120vh', opacity: 0, scaleY: 1 }}
                animate={{ y: '-120vh', opacity: [0, 1, 1, 0], scaleY: [1, 20, 20, 1] }}
                transition={{ duration, ease: "easeIn", delay }}
                style={{
                  position: 'absolute',
                  left: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size * 4}px`,
                  background: 'rgba(255,255,255,0.8)',
                  boxShadow: `0 0 ${size * 4}px rgba(255,255,255,0.5)`,
                  borderRadius: '10px'
                }}
              />
            )
          })}

          {/* Massive atmospheric blast / nebula expansion - monochrome */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: '50vh' }}
            animate={{ scale: 4, opacity: [0, 0.4, 0], y: '-50vh' }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: 'absolute',
              left: '30%',
              width: '40vw',
              height: '40vw',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 60%)',
              filter: 'blur(60px)'
            }}
          />
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: '80vh' }}
            animate={{ scale: 5, opacity: [0, 0.3, 0], y: '-80vh' }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            style={{
              position: 'absolute',
              right: '20%',
              width: '50vw',
              height: '50vw',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 60%)',
              filter: 'blur(80px)'
            }}
          />

          {/* Hyper-white flash simulating breaking atmosphere or warp threshold - Only in Light Mode */}
          {isLightMode && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.4, times: [0, 0.4, 1], ease: "easeInOut", delay: 0.1 }}
              style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: '#ffffff',
                mixBlendMode: 'overlay'
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  const [slide, setSlide] = useState(-1);
  const [isWarping, setIsWarping] = useState(false);

  const isWarpingRef = useRef(isWarping);
  const slideRef = useRef(slide);
  const scrollCooldown = useRef(false);

  useEffect(() => {
    isWarpingRef.current = isWarping;
    slideRef.current = slide;
  }, [isWarping, slide]);

  const handleLaunch = () => {
    setIsWarping(true);
    setSlide(0);
    setTimeout(() => setIsWarping(false), 1000); // Overlay covers the 0.8s transition perfectly
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (slideRef.current === -1 || isWarpingRef.current) return;
      
      e.preventDefault(); 
      
      if (scrollCooldown.current) return;
      
      if (e.deltaY > 15) {
        scrollCooldown.current = true;
        setSlide(s => Math.min(s + 1, 4));
        setTimeout(() => { scrollCooldown.current = false; }, 800); // 800ms cooldown for 0.8s transition
      } else if (e.deltaY < -15) {
        scrollCooldown.current = true;
        setSlide(s => Math.max(s - 1, -1));
        setTimeout(() => { scrollCooldown.current = false; }, 800);
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const slides = [
    {
      id: 'news',
      content: (
        <div style={{ height: '100%', padding: '6rem 5% 100px 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="container" style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>News</h2>
                <p className="text-muted">Latest insights and ecosystem updates.</p>
              </div>
              <Link to="/insights" className="btn-outline">View News Gallery</Link>
            </div>
            <div className="grid-3">
              <div className="glass-card" style={{ padding: '2rem' }}>
                <span className="pill" style={{ marginBottom: '1rem' }}>UPDATE</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Cohorts expanding to hardware engineering tracks</h3>
                <p className="text-muted">Starting next cycle, we are dedicating resources specifically to physical product development.</p>
              </div>
              <div className="glass-card" style={{ padding: '2rem' }}>
                <span className="pill" style={{ marginBottom: '1rem' }}>FOUNDER STORIES</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Building deep tech inside a university ecosystem</h3>
                <p className="text-muted">An interview with the founders of VoidTech on leveraging academic labs.</p>
              </div>
              <div className="glass-card" style={{ padding: '2rem' }}>
                <span className="pill" style={{ marginBottom: '1rem' }}>ECOSYSTEM</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>The UCSD to Silicon Valley Pipeline</h3>
                <p className="text-muted">Exploring the talent migration and investment influx into San Diego.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'directory',
      content: (
        <div style={{ height: '100%', padding: '6rem 5% 100px 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="container" style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Directory</h2>
                <p className="text-muted">Our startup portfolio.</p>
              </div>
              <Link to="/directory" className="btn-outline">View Full Directory</Link>
            </div>
            <div className="grid-2">
              <div className="glass-card" style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}></div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Signalor</h3>
                  <p className="text-muted">Building autonomous drone infrastructure.</p>
                </div>
              </div>
              <div className="glass-card" style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}></div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>VoidTech</h3>
                  <p className="text-muted">Deep tech materials for aerospace.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'sponsors',
      content: (
        <div style={{ height: '100%', padding: '6rem 5% 100px 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="container" style={{ width: '100%', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Sponsors</h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto 4rem auto' }}>
              The gravitational pull behind our startups. Partner with us to fuel the next generation of engineering breakthroughs.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
               {['Alpha', 'Beta', 'Gamma', 'Delta'].map(s => (
                  <div key={s} style={{ width: '100px', height: '100px', borderRadius: '50%', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>{s}</div>
               ))}
            </div>
            <Link to="/sponsors" className="btn-accent">Become a Sponsor</Link>
          </div>
        </div>
      )
    },
    {
      id: 'operations',
      content: (
        <div style={{ height: '100%', padding: '6rem 5% 100px 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="container" style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Operations and Events</h2>
                <p className="text-muted">High-density innovation tracks and upcoming sessions.</p>
              </div>
              <Link to="/programs" className="btn-outline">View Full Calendar</Link>
            </div>
            <div className="grid-2">
              <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Incubation Tracks</h3>
                <p className="text-muted" style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>We accelerate deep tech ventures through rigorous, hands-on engineering sprints, dedicated mentorship from EIRs, and Tier-1 capital exposure.</p>
                <Link to="/programs" className="text-accent" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginTop: 'auto' }}>Learn More &rarr;</Link>
              </div>
              <div className="glass-card" style={{ padding: '2.5rem', background: 'var(--purple)', color: 'var(--white)' }}>
                <div style={{ fontSize: '0.8rem', letterSpacing: '1px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>Next Up</div>
                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Deep Tech Workshop</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>Nov 02 &bull; 1:00 PM &bull; Computer Science Center</p>
                <button className="btn-accent" style={{ background: 'var(--white)', color: 'var(--purple)' }}>RSVP Now</button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'team',
      content: (
        <div style={{ height: '100%', padding: '6rem 5% 100px 5%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="container" style={{ width: '100%' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Team</h2>
                <p className="text-muted">The minds empowering UCSD's brightest.</p>
              </div>
              <Link to="/team" className="btn-outline">View Team Roster</Link>
            </div>
            <div className="grid-3">
              {[1,2,3].map(i => (
                <div key={i} className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                   <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--border-color)', margin: '0 auto 1.5rem auto' }}></div>
                   <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Director {i}</h3>
                   <p className="text-muted" style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>Venture Partner</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', background: 'var(--bg-primary)' }}>
      
      <CosmicOverlay active={isWarping} />

      <AnimatePresence initial={false}>
        {slide === -1 && (
          <motion.div
            initial={{ y: '-100vh', opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100vh', opacity: 0.5 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 100 }}
          >
            <Hero onLaunch={handleLaunch} />
          </motion.div>
        )}
      </AnimatePresence>

      {slides.map((s, idx) => {
        const zIndex = idx; 
        const y = idx > slide ? '100vh' : '0vh';

        return (
          <motion.div
            key={s.id}
            initial={false}
            animate={{ y }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex,
              background: 'var(--bg-primary)',
              willChange: 'transform'
            }}
          >
            {s.content}
          </motion.div>
        );
      })}

      <AnimatePresence>
        {slide >= 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              width: '100%', 
              padding: '2rem 5%', 
              background: 'rgba(5, 5, 5, 0.8)',
              backdropFilter: 'blur(10px)',
              borderTop: '1px solid var(--border-color)',
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              zIndex: 200,
              color: '#fff'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>&copy; 2026 Startup Incubator UCSD</div>
              <div style={{ display: 'flex', gap: '8px' }}>
                {slides.map((_, idx) => (
                  <div key={idx} style={{ 
                    width: '6px', height: '6px', borderRadius: '50%', 
                    background: slide === idx ? 'var(--yellow)' : 'rgba(255,255,255,0.2)',
                    transition: 'background 0.3s'
                  }} />
                ))}
              </div>
            </div>
            
            {/* Socials & Contact */}
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>Twitter</a>
              <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>LinkedIn</a>
              <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
