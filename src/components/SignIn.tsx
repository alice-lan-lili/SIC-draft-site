import { motion } from 'framer-motion';
import PageHero from './PageHero';

export default function SignIn() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      <PageHero
        eyebrow="Portal"
        size="compact"
        title={<em>Welcome back.</em>}
        subtitle="Sign in to the founder portal - office hours, resources, and cohort updates."
      />
      <section
        className="section section-after-hero section-signin"
        style={{ flex: 1, paddingBottom: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5%', maxWidth: '520px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card signin-card"
            style={{
              width: '100%',
              padding: '2.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.35rem',
            }}
          >
            <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-body)', fontWeight: 600, textAlign: 'center', marginBottom: '0.15rem' }}>
              Founder Portal
            </h2>
            <p className="text-muted" style={{ fontSize: '0.88rem', textAlign: 'center', marginBottom: '0.15rem' }}>
              Use your program email to authenticate.
            </p>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
              <motion.div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }} whileFocus={{ scale: 1 }}>
                <label
                  style={{
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Email address
                </label>
                <motion.input
                  type="email"
                  placeholder="founder@ucsd.edu"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-color)',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--purple-mid)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border-color)';
                  }}
                />
              </motion.div>

              <motion.div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <label
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    Password
                  </label>
                  <a href="#" className="text-muted" style={{ fontSize: '0.72rem', textDecoration: 'none' }}>
                    Forgot password?
                  </a>
                </div>
                <motion.input
                  type="password"
                  placeholder={'\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022'}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-color)',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--purple-mid)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border-color)';
                  }}
                />
              </motion.div>

              <motion.button type="submit" className="btn-accent" style={{ marginTop: '0.35rem', width: '100%', justifyContent: 'center' }} whileTap={{ scale: 0.97 }}>
                Authenticate
              </motion.button>
            </form>

            <div style={{ textAlign: 'center', marginTop: '0.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
              <p className="text-muted" style={{ fontSize: '0.82rem', lineHeight: 1.5 }}>
                Don&apos;t have an account?{' '}
                <a href="#" style={{ color: 'var(--purple-mid)', textDecoration: 'none', fontWeight: 600 }}>
                  Apply to join
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
