import { ArrowRight } from 'lucide-react';

const startups = [
  {
    name: 'ssam.ai',
    oneLiner: 'AI-first founder tools for rapid decision support and workflow acceleration.',
    details: 'Building practical AI copilots to help startup teams operate faster with clearer prioritization.',
  },
  {
    name: 'Revize',
    oneLiner: 'A platform helping teams iterate quickly on strategy and execution.',
    details: 'Focused on reducing revision loops and making product direction easier to communicate and execute.',
  },
  {
    name: 'Complexity',
    oneLiner: 'Product infrastructure focused on simplifying hard technical coordination.',
    details: 'Brings structure to complex build processes so teams can move from ambiguity to delivery.',
  },
  {
    name: 'Unicircle',
    oneLiner: 'Community-centric software for modern campus and startup ecosystems.',
    details: 'Designed to strengthen high-intent connections between founders, collaborators, and opportunities.',
  },
  {
    name: 'Aesthetic',
    oneLiner: 'Design-forward tooling for creators and product teams.',
    details: 'Improves speed and consistency across product design workflows without sacrificing quality.',
  },
  {
    name: 'Rialto',
    oneLiner: 'Marketplace and operations rails for high-trust transactions.',
    details: 'Developing the reliability and visibility layer needed for seamless high-value exchanges.',
  },
  {
    name: 'UDOWN?',
    oneLiner: 'A social planning layer built around intent and real-time action.',
    details: 'Turning “maybe plans” into coordinated activity with clearer context and momentum.',
  },
  {
    name: 'Protellect',
    oneLiner: 'Protective intelligence workflows for modern teams and organizations.',
    details: 'Creating operational tooling that helps teams identify risk and respond with confidence.',
  },
];

export default function Directory() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.4rem', flexWrap: 'wrap', gap: '1.2rem' }}>
          <div>
            <span className="section-label">Portfolio</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Startups in Our Cohort</h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', marginTop: '0.8rem', fontSize: '1rem', lineHeight: 1.65 }}>
              Current ventures in Startup Incubator. We&apos;ll continue enriching these profiles as more founder details are finalized.
            </p>
          </div>
          <button className="btn-accent">Join the Cohort</button>
        </div>

        <div style={{ display: 'grid', gap: '0.3rem' }}>
          {startups.map((startup) => (
            <article key={startup.name} style={{ borderTop: '1px solid var(--border-color)', padding: '1.1rem 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{ maxWidth: '72ch' }}>
                  <h2 style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>{startup.name}</h2>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{startup.oneLiner}</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{startup.details}</p>
                </div>
                <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.76rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-accent)', whiteSpace: 'nowrap' }}>
                  View Profile <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
