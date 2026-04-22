import { motion } from 'framer-motion';

export default function Insights() {
  const posts = [
    {
      category: "UPDATE",
      title: "Cohorts expanding to hardware engineering tracks",
      desc: "Starting next cycle, we are dedicating resources specifically to physical product development.",
      date: "Oct 12, 2026"
    },
    {
      category: "FOUNDER STORIES",
      title: "Building deep tech inside a university ecosystem",
      desc: "An interview with the founders of VoidTech on leveraging academic labs.",
      date: "Oct 05, 2026"
    },
    {
      category: "ECOSYSTEM",
      title: "The UCSD to Silicon Valley Pipeline",
      desc: "Exploring the talent migration and investment influx into San Diego.",
      date: "Sep 28, 2026"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Insights & News</h1>
            <p className="text-muted" style={{ maxWidth: '600px' }}>Updates from our portfolio companies and thoughts on the ecosystem.</p>
          </div>
          <button className="btn-outline">View News Gallery</button>
        </div>
        
        <div className="grid-3">
          {posts.map((post, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="glass-card"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', minHeight: '300px', cursor: 'pointer' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <span className="pill" style={{ fontSize: '0.7rem' }}>
                  {post.category}
                </span>
                <span className="text-muted" style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>{post.date}</span>
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{post.title}</h3>
              <p className="text-muted" style={{ fontSize: '0.95rem', marginTop: 'auto' }}>{post.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscribe CTA */}
        <div style={{ marginTop: '5rem', padding: '4rem 2rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Subscribe to the Pipeline</h3>
          <p className="text-muted" style={{ marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem auto' }}>
            Get exclusive updates on our latest startups, incubator news, and ecosystem events delivered straight to your inbox.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', maxWidth: '500px', margin: '0 auto', flexWrap: 'wrap' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{ 
                flex: '1 1 250px', 
                padding: '14px 20px', 
                background: 'var(--bg-tertiary)', 
                border: '1px solid var(--border-strong)', 
                color: 'var(--text-primary)',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
                fontSize: '1rem'
              }} 
            />
            <button className="btn-primary" style={{ flexShrink: 0 }}>Subscribe</button>
          </div>
        </div>

      </div>
    </section>
  );
}
