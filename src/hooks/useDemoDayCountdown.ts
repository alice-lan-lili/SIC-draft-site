import { useEffect, useState } from 'react';

/** May 28, 2026 4:30 PM America/Los_Angeles (PDT, −07:00) */
const DEMO_DAY_TARGET_MS = Date.parse('2026-05-28T16:30:00-07:00');

export type DemoDayCountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
};

function compute(nowMs: number): DemoDayCountdownState {
  const diff = DEMO_DAY_TARGET_MS - nowMs;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
  }
  const totalSec = Math.floor(diff / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { days, hours, minutes, seconds, isComplete: false };
}

export function useDemoDayCountdown(): DemoDayCountdownState {
  const [state, setState] = useState<DemoDayCountdownState>(() => compute(Date.now()));

  useEffect(() => {
    const tick = () => setState(compute(Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return state;
}
