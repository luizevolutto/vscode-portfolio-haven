import React from 'react';
import { XIcon, SunIcon, MoonIcon } from 'lucide-react';

const SettingsMenu = ({ theme, toggleTheme, closeSettings }) => {
  return (
    <div className={`fixed top-0 right-0 h-full w-64 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg p-4 z-50`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Settings</h2>
        <button onClick={closeSettings} className="p-1 rounded-full hover:bg-gray-700 transition-colors">
          <XIcon size={20} />
        </button>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Theme</h3>
        <button
          onClick={toggleTheme}
          className={`flex items-center space-x-2 p-2 rounded ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
          } w-full`}
        >
          {theme === 'dark' ? (
            <>
              <MoonIcon size={18} />
              <span>Dark Theme</span>
            </>
          ) : (
            <>
              <SunIcon size={18} />
              <span>Light Theme</span>
            </>
          )}
        </button>
      </div>
      {/* Add more settings options here */}
    </div>
  );
};

export default SettingsMenu;