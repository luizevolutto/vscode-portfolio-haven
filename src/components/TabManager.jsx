import React from 'react';
import { FileIcon, XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const TabManager = ({ openTabs, activeTab, setActiveTab, handleTabClose, theme }) => {
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} flex`}>
      {openTabs.map((tab) => (
        <div
          key={tab}
          className={`px-4 py-2 flex items-center cursor-pointer ${
            activeTab === tab
              ? theme === 'dark'
                ? 'bg-gray-900'
                : 'bg-white'
              : theme === 'dark'
              ? 'bg-gray-800'
              : 'bg-gray-200'
          }`}
          onClick={() => setActiveTab(tab)}
        >
          <FileIcon size={16} className="mr-2" />
          <Link to={tab === 'Home' ? '/' : `/${tab.toLowerCase()}`}>{tab}</Link>
          {tab !== 'Home' && (
            <button
              className={`ml-2 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
              onClick={(e) => handleTabClose(tab, e)}
            >
              <XIcon size={14} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TabManager;