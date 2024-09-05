import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FileIcon, FolderIcon, SettingsIcon, SearchIcon, GitBranchIcon, BellIcon } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Layout = () => {
  const [openTabs, setOpenTabs] = useState(['Home']);
  const [activeTab, setActiveTab] = useState('Home');
  const [theme, setTheme] = useState('dark');
  const location = useLocation();

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleTabClick = (pageName) => {
    if (!openTabs.includes(pageName)) {
      setOpenTabs([...openTabs, pageName]);
    }
    setActiveTab(pageName);
  };

  const handleTabClose = (pageName, e) => {
    e.preventDefault();
    e.stopPropagation();
    const newTabs = openTabs.filter((tab) => tab !== pageName);
    setOpenTabs(newTabs);
    if (activeTab === pageName) {
      setActiveTab(newTabs[newTabs.length - 1] || 'Home');
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`flex flex-col h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Top bar */}
      <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} p-2 flex justify-between items-center`}>
        <div className="flex items-center space-x-4">
          <span className="font-semibold">Portfolio VS Code</span>
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Go</span>
          <span>Run</span>
          <span>Terminal</span>
          <span>Help</span>
        </div>
        <div className="flex items-center space-x-2">
          <SearchIcon size={18} />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar */}
        <div className={`w-12 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} flex flex-col items-center py-4 space-y-4`}>
          <FileIcon size={24} />
          <SearchIcon size={24} />
          <GitBranchIcon size={24} />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* File explorer */}
        <div className={`w-64 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} p-4 overflow-y-auto`}>
          <h2 className="text-sm uppercase mb-2">Explorer</h2>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <FolderIcon className="mr-2" size={16} />
              <span>Pages</span>
            </div>
            {pages.map((page) => (
              <Link
                key={page.name}
                to={page.path}
                className={`flex items-center pl-6 py-1 ${
                  location.pathname === page.path
                    ? theme === 'dark'
                      ? 'bg-gray-700'
                      : 'bg-gray-300'
                    : ''
                } hover:${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}
                onClick={() => handleTabClick(page.name)}
              >
                <FileIcon className="mr-2" size={16} />
                <span>{page.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          {/* Tabs */}
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
                <span>{tab}</span>
                <button
                  className={`ml-2 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
                  onClick={(e) => handleTabClose(tab, e)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Page content */}
          <div className={`flex-1 p-4 overflow-auto ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
            <Outlet />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={`${theme === 'dark' ? 'bg-blue-600' : 'bg-blue-400'} text-white px-4 py-1 flex justify-between items-center text-sm`}>
        <div className="flex items-center space-x-4">
          <GitBranchIcon size={16} />
          <span>main</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Ln 1, Col 1</span>
          <span>Spaces: 2</span>
          <span>UTF-8</span>
          <span>JavaScript</span>
        </div>
      </div>
    </div>
  );
};

export default Layout;