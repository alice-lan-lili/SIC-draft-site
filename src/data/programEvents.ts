export type ProgramEvent = {
  id: string;
  date: string;
  time: string;
  title: string;
  loc: string;
  details: string;
};

export const PROGRAM_EVENTS: ProgramEvent[] = [
  {
    id: 'lorem-ipsum-session',
    date: 'May 14, 2026',
    time: '6:00 PM',
    title: 'Lorem Ipsum Session',
    loc: 'Design & Innovation Building',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 'dolor-sit-workshop',
    date: 'Jun 02, 2026',
    time: '1:00 PM',
    title: 'Dolor Sit Workshop',
    loc: 'Computer Science Center',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
  },
  {
    id: 'amet-founder-forum',
    date: 'Jun 20, 2026',
    time: '6:30 PM',
    title: 'Amet Founder Forum',
    loc: 'Rady School of Management',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
  },
  {
    id: 'consectetur-demo-review',
    date: 'Jul 10, 2026',
    time: '9:00 AM',
    title: 'Consectetur Demo Review',
    loc: 'Downtown San Diego',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
  },
];

/** Upcoming events sorted by date (same filter as Programs calendar list). */
export function getUpcomingProgramEvents(now = new Date(), limit?: number): ProgramEvent[] {
  const ms = now.getTime();
  const sorted = PROGRAM_EVENTS.filter((e) => new Date(e.date).getTime() >= ms).sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  return limit != null ? sorted.slice(0, limit) : sorted;
}

export function programEventIsoDate(ev: ProgramEvent): string {
  const d = new Date(ev.date);
  if (Number.isNaN(d.getTime())) return '';
  return d.toISOString().slice(0, 10);
}
