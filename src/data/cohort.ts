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
    name: 'Revise',
    logoSrc: '/startups/revize.png',
    tagline: 'Measure what moves, revise what matters.',
    summary: '',
    founders: ['Abhay Korlapati'],
    links: { website: 'https://revize.io' },
  },
  {
    id: 'complexity',
    name: 'Complexity',
    logoSrc: '/startups/complexity.png',
    tagline: 'Accelerate the pace of medical research.',
    summary: 'Accelerate the pace of medical research.',
    founders: ['Ronit Agarwala'],
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
    links: { website: 'https://unicircle.co' },
  },
  {
    id: 'aesthetic',
    name: 'Aesthetic',
    logoSrc: aestheticIconUrl,
    logoObjectFit: 'contain',
    tagline: 'Changing how influencers monetize their content.',
    summary:
      'Changing how influencers monetize their content. Late pre-seed, 1.5M @ ~10M val.',
    founders: ['Nathan Tran'],
    links: { website: 'https://aesthetic.studio' },
  },
  {
    id: 'rialto',
    name: 'Rialto',
    logoSrc: '/startups/rialto.png',
    tagline: 'Streamline construction material procurement for contractors.',
    summary: 'Streamline construction material procurement for contractors.',
    founders: ['Tomasz Jezak'],
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
    links: { website: 'https://protellect.ai' },
  },
];
