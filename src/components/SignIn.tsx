import { motion } from 'framer-motion';

export default function SignIn() {
  return (
    <div style={{ minHeight: 'calc(100vh - 100px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 5%' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card" 
        style={{ 
          maxWidth: '450px', 
          width: '100%', 
          padding: '3rem', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.5rem' 
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Welcome Back</h2>
          <p className="text-muted" style={{ fontSize: '0.9rem' }}>Sign in to the founder portal.</p>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Address</label>
            <input 
              type="email" 
              placeholder="founder@ucsd.edu"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border-color)',
                padding: '12px 16px',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-body)',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--purple)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '1px' }}>Password</label>
              <a href="#" className="text-muted" style={{ fontSize: '0.75rem', textDecoration: 'none' }}>Forgot password?</a>
            </div>
            <input 
              type="password" 
              placeholder="••••••••"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border-color)',
                padding: '12px 16px',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-body)',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--purple)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
            />
          </div>

          <button 
            type="submit" 
            className="btn-accent" 
            style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
          >
            Authenticate
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
          <p className="text-muted" style={{ fontSize: '0.85rem' }}>
            Don't have an account? <a href="#" style={{ color: 'var(--purple)', textDecoration: 'none', fontWeight: 600 }}>Apply to join</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
