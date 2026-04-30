import { motion } from 'framer-motion';

const stats = [
  { value: '24+', label: 'Companies' },
  { value: '$4M+', label: 'Raised' },
  { value: '50+', label: 'Mentors' },
];

export default function Hero({ onScroll }: { onScroll?: () => void }) {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      background: '#000',
    }}>
      {/* Background photo */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/rocket_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.45,
        zIndex: 1,
      }} />

      {/* Gradient overlay — heavier at bottom so text sits clean */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.6) 72%, rgba(0,0,0,0.96) 100%)',
        zIndex: 2,
      }} />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 5%',
        }}
      >
        {/* Status label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
            marginBottom: '2.25rem',
          }}
        >
          Applications Open — Spring 2026
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 9vw, 8rem)',
            fontWeight: 400,
            lineHeight: 1.0,
            color: '#FFFFFF',
            marginBottom: '1.75rem',
            maxWidth: '860px',
          }}
        >
          Venture<br />
          <em>Starts Here.</em>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.52 }}
          style={{
            fontSize: '1.05rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '480px',
            lineHeight: 1.65,
            marginBottom: '3rem',
            letterSpacing: '-0.01em',
          }}
        >
          UC San Diego's startup incubator for the next generation of deep tech founders — from research lab to Series A.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.64 }}
          style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <button
            style={{
              background: '#FFFFFF',
              color: '#000000',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '0.9rem',
              letterSpacing: '-0.01em',
              padding: '12px 28px',
              borderRadius: '980px',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Apply Now
          </button>
          <button
            onClick={onScroll}
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: '#FFFFFF',
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '0.9rem',
              letterSpacing: '-0.01em',
              padding: '12px 28px',
              borderRadius: '980px',
              border: '1px solid rgba(255,255,255,0.18)',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.14)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
          >
            Explore Portfolio
          </button>
        </motion.div>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        style={{
          position: 'absolute',
          bottom: '5.5rem',
          left: 0,
          width: '100%',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          gap: '4rem',
          padding: '0 5%',
        }}
      >
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#FFFFFF',
              fontFamily: 'var(--font-body)',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              marginBottom: '4px',
            }}>
              {s.value}
            </div>
            <div style={{
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.38)',
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={onScroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          padding: '8px',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.28)',
        }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '28px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)',
          }}
        />
      </motion.button>
    </div>
  );
}
