import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <SunIcon size={18} className="text-yellow-400" />
      ) : (
        <MoonIcon size={18} className="text-gray-400" />
      )}
    </button>
  );
};

export default ThemeToggle;