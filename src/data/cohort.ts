/** Canonical cohort list + copy for the public directory. */

import aestheticIconUrl from '../assets/startups/aesthetic-icon.svg?url';

export function formatFoundersLine(names: string[]): string | null {
  if (names.length === 0) return null;
  return names.join(' · ');
}

export type CohortStartup = {
  id: string;
  name: string;
  logoSrc: string;
  /** Prefer `contain` for vector marks so they are not cropped. */
  logoObjectFit?: 'contain' | 'cover';
  logoPosition?: string;
  tagline: string;
  summary: string;
  /** Display names for founders shown on directory cards. */
  founders: string[];
  links: {
    website: string;
    /** Mobile app download / landing (store or deep link). */
    app?: string;
  };
};

export const cohortStartups: CohortStartup[] = [
  {
    id: 'ssam',
    name: 'ssam.ai',
    logoSrc: '/startups/ssam.png',
    tagline: 'Our mission: effortless, deeply personalized learning.',
    summary:
      'Multimodal AI that helps people understand, organize, and apply knowledge in one seamless platform. Built to turn information into clarity, and clarity into action.',
    founders: ['Maya Ortiz', 'Devon Shah'],
    links: { website: 'https://ssam.ai' },
  },
  {
    id: 'revize',
    name: 'Revize',
    logoSrc: '/startups/revize.png',
    tagline: 'Measure what moves, revise what matters.',
    summary:
      'Focused on iteration loops for product and go-to-market teams—turning deltas into direction with lightweight analytics and review rituals that keep momentum high.',
    founders: ['Chris Nguyen'],
    links: { website: 'https://revize.io' },
  },
  {
    id: 'complexity',
    name: 'Complexity',
    logoSrc: '/startups/complexity.png',
    tagline: 'Decoding complexity. Advancing discovery.',
    summary:
      'A networked “C” identity reflects the mission: map intricate systems, surface structure, and accelerate scientific and technical discovery for teams operating at the frontier.',
    founders: ['Priya Desai', 'Luis Romero'],
    links: { website: 'https://complexitylabs.io' },
  },
  {
    id: 'unicircle',
    name: 'Unicircle',
    logoSrc: '/startups/unicircle.png',
    tagline: 'Community infrastructure for modern builders.',
    summary:
      'Design-forward identity built around connection—helping campus and startup ecosystems form tighter circles of trust, collaboration, and shared opportunity.',
    founders: ['Sam Park', 'Jordan Lee'],
    links: { website: 'https://unicircle.co' },
  },
  {
    id: 'aesthetic',
    name: 'Aesthetic',
    logoSrc: aestheticIconUrl,
    logoObjectFit: 'contain',
    tagline: 'Style talks. We translate.',
    summary:
      'Editorial-grade creative tooling for teams who care about taste—translating brand language into consistent product surfaces, campaigns, and storytelling.',
    founders: ['Riley Chen', 'Morgan Blake'],
    links: { website: 'https://aesthetic.studio' },
  },
  {
    id: 'rialto',
    name: 'Rialto',
    logoSrc: '/startups/rialto.png',
    tagline: 'Market rails for high-trust exchange.',
    summary:
      'Building the operational backbone for marketplaces and bilateral flows—clarity at checkout, confidence in fulfillment, and calm under transaction load.',
    founders: ['Taylor Brooks'],
    links: { website: 'https://rialto.exchange' },
  },
  {
    id: 'udown',
    name: 'UDOWN?',
    logoSrc: '/startups/udown.png',
    tagline: 'A new social norm.',
    summary:
      'A social layer built around intent and real-time action—making plans legible, commitments lightweight, and “who’s in” feel effortless across friend groups and communities.',
    founders: ['Jamie Okonkwo', 'Sky Martinez'],
    links: {
      website: 'https://udown.app',
      app: 'https://apps.apple.com/app/udown',
    },
  },
  {
    id: 'protellect',
    name: 'Protellect',
    logoSrc: '/startups/protellect.png',
    tagline: 'Protective intelligence for serious teams.',
    summary:
      'Combining biological metaphors of structure with network thinking—workflows that help organizations sense risk early, coordinate response, and keep sensitive operations resilient.',
    founders: ['Naya Ibrahim'],
    links: { website: 'https://protellect.ai' },
  },
];
