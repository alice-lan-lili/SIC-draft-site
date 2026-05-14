import { useCallback, useEffect, useState } from 'react';
import { applyTheme, readThemeFromDocument, type Theme } from '../theme';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => readThemeFromDocument());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  }, []);

  return { theme, setTheme, toggleTheme };
}
