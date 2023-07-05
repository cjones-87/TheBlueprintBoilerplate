import React from 'react';
import useTheme from '../../misc/customHooks/useTheme';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      id="darkModeToggleButton"
      onClick={toggleDarkMode}
      style={{
        backgroundColor: darkMode
          ? 'rgba(163, 0, 130, 1)'
          : 'rgba(75, 0, 130, 1)',
        color: darkMode ? 'rgba(75, 0, 130, 1)' : 'rgba(163, 0, 130, 1)',
      }}
    >
      {darkMode ? (
        <MdLightMode size={'1.5rem'} />
      ) : (
        <MdDarkMode size={'1.5rem'} />
      )}
    </button>
  );
};

export default DarkModeToggle;
