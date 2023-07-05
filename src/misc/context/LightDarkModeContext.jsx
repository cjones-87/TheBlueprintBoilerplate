import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);

const LightDarkModeContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((current) => !current);

  useEffect(() => {
    const storedTheme = localStorage.getItem('blueprintBoilerplateColorTheme');
    if (storedTheme) {
      setDarkMode(JSON.parse(storedTheme));
    }
  }, []);

  useEffect(
    () =>
      localStorage.setItem(
        'blueprintBoilerplateColorTheme',
        JSON.stringify(darkMode)
      ),
    [darkMode]
  );

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default LightDarkModeContext;
