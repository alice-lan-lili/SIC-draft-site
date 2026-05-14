export const THEME_STORAGE_KEY = 'sic-theme';

export type Theme = 'light' | 'dark';

export function getStoredTheme(): Theme {
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY);
    if (v === 'dark' || v === 'light') return v;
  } catch {
    /* ignore */
  }
  return 'light';
}

export function readThemeFromDocument(): Theme {
  const v = document.documentElement.getAttribute('data-theme');
  if (v === 'dark' || v === 'light') return v;
  return 'light';
}

export function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
}
