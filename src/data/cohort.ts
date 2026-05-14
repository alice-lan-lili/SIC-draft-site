/** Canonical cohort list + copy for the public directory. */

export function formatFoundersLine(names: string[]): string | null {
  if (names.length === 0) return null;
  return names.join(' · ');
}

export type CohortStartupStatus = 'active';

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
  /** Directory category tags (e.g. B2B, Consumer). */
  categories: string[];
  /** Headcount when known; omit if not set internally. */
  teamSize?: number;
  status: CohortStartupStatus;
  links: {
    website?: string;
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
      'Make learning effortless and deeply personalized by using multimodal AI to help people understand, organize, and apply knowledge in one seamless platform.',
    founders: ['David Seo', 'Paul Park'],
    categories: ['Education', 'B2B'],
    teamSize: 4,
    status: 'active',
    links: { website: 'https://ssamapp.com' },
  },
  {
    id: 'revize',
    name: 'Revize',
    logoSrc: '/startups/revize.png',
    tagline: 'Measure what moves, revise what matters.',
    summary: 'Measure what moves, revise what matters.',
    founders: ['Abhay Korlapati'],
    categories: ['B2B', 'Engineering / Product / Design'],
    teamSize: 2,
    status: 'active',
    links: { website: 'https://revize.io' },
  },
  {
    id: 'complexity',
    name: 'Complexity',
    logoSrc: '/startups/complexity.png',
    tagline: 'Accelerate the pace of medical research.',
    summary: 'Accelerate the pace of medical research.',
    founders: ['Ronit Agarwala'],
    categories: ['Drug Discovery and Delivery', 'Healthcare', 'Engineering / Product / Design'],
    teamSize: 3,
    status: 'active',
    links: { website: 'https://complexitylabs.io' },
  },
  {
    id: 'unicircle',
    name: 'Unicircle',
    logoSrc: '/startups/unicircle.png',
    tagline: 'Connect students to clubs, people, and campus opportunities.',
    summary:
      'UniCircle connects students to the clubs, people, and opportunities already on their campus, making the most valuable network of their life actually accessible.',
    founders: ['Jaden Rones'],
    categories: ['B2B', 'Engineering / Product / Design', 'Operations', 'Consumer'],
    teamSize: 2,
    status: 'active',
    links: { website: 'https://unicircle.co' },
  },
  {
    id: 'aesthetic',
    name: 'Aesthetic',
    logoSrc: '/startups/aesthetic.svg',
    logoObjectFit: 'contain',
    tagline: 'Changing how influencers monetize their content.',
    summary:
      'Changing how influencers monetize their content. Late pre-seed, 1.5M @ ~10M val.',
    founders: ['Nathan Tran'],
    categories: ['Apparel and Cosmetics', 'Consumer'],
    teamSize: 6,
    status: 'active',
    links: { website: 'https://aesthetic.studio' },
  },
  {
    id: 'rialto',
    name: 'Rialto',
    logoSrc: '/startups/rialto.png',
    tagline: 'Streamline construction material procurement for contractors.',
    summary: 'Streamline construction material procurement for contractors.',
    founders: ['Tomasz Jezak'],
    categories: ['Construction', 'B2B', 'Analytics'],
    status: 'active',
    links: { website: 'https://rialto.exchange' },
  },
  {
    id: 'udown',
    name: 'UDOWN?',
    logoSrc: '/startups/udown.png',
    tagline: 'A spontaneous outing planning and ride sharing app.',
    summary:
      'A spontaneous outing planning and ride sharing app to make making friends on campus effortless.',
    founders: ['Sage Yang'],
    categories: ['Social', 'Consumer'],
    teamSize: 3,
    status: 'active',
    links: {
      website: 'https://udown.app',
      app: 'https://apps.apple.com/app/udown',
    },
  },
  {
    id: 'protellect',
    name: 'Protellect',
    logoSrc: '/startups/protellect.png',
    tagline: 'Turning experimental data into actionable biological insight.',
    summary: 'Turning experimental data into actionable biological insight.',
    founders: ['Richa Iyer'],
    categories: ['Healthcare', 'Healthcare IT', 'Diagnostics', 'Analytics'],
    teamSize: 5,
    status: 'active',
    links: { website: 'https://protellect.ai' },
  },
  {
    id: 'axiom',
    name: 'Axiom',
    logoSrc: '/startups/axiom.png',
    logoObjectFit: 'contain',
    tagline: 'Fintech · Consumer — research stocks in one place.',
    summary: 'Everything you need to research stocks, all in one place.',
    founders: ['Ryan Allen'],
    categories: ['Fintech', 'Consumer'],
    teamSize: 1,
    status: 'active',
    links: {},
  },
];
