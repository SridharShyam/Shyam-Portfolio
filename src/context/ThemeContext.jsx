import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('shyam_portfolio_theme');
    if (saved) return saved;
    return 'dark'; // Default to sleek obsidian dark mode
  });

  const [switchCount, setSwitchCount] = useState(() => {
    const saved = localStorage.getItem('shyam_portfolio_switch_count');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [pipelineState, setPipelineState] = useState({
    active: false,
    step: 'DATA', // 'DATA' | 'ML' | 'AI' | 'DONE'
    targetTheme: theme,
  });

  const [easterEggActive, setEasterEggActive] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    localStorage.setItem('shyam_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const nextCount = switchCount + 1;
    setSwitchCount(nextCount);
    localStorage.setItem('shyam_portfolio_switch_count', nextCount.toString());

    // Start fast 500ms Data -> ML -> AI pipeline sequence
    setPipelineState({ active: true, step: 'DATA', targetTheme: nextTheme });

    setTimeout(() => {
      setPipelineState(prev => ({ ...prev, step: 'ML' }));
    }, 150);

    setTimeout(() => {
      setPipelineState(prev => ({ ...prev, step: 'AI' }));
    }, 300);

    setTimeout(() => {
      setTheme(nextTheme);
      setPipelineState(prev => ({ ...prev, step: 'DONE' }));
    }, 450);

    setTimeout(() => {
      setPipelineState({ active: false, step: 'DATA', targetTheme: nextTheme });
    }, 650);

    // Easter egg check on milestone iterations (e.g. 4th, 8th, 12th switch)
    if (nextCount > 0 && nextCount % 4 === 0) {
      setTimeout(() => {
        setEasterEggActive(true);
      }, 700);
    }
  }, [theme, switchCount]);

  const dismissEasterEgg = useCallback(() => {
    setEasterEggActive(false);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        switchCount,
        pipelineState,
        easterEggActive,
        dismissEasterEgg,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: 'dark',
      toggleTheme: () => {},
      switchCount: 0,
      pipelineState: { active: false, step: 'DATA', targetTheme: 'dark' },
      easterEggActive: false,
      dismissEasterEgg: () => {},
    };
  }
  return context;
};
