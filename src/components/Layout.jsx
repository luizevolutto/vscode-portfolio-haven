import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FileIcon, FolderIcon, SettingsIcon, SearchIcon, GitBranchIcon, BellIcon, ChevronRightIcon, ChevronLeftIcon, XIcon } from 'lucide-react';
import SettingsMenu from './SettingsMenu';
import TabManager from './TabManager';

const Layout = () => {
  const [openTabs, setOpenTabs] = useState(['Home']);
  const [activeTab, setActiveTab] = useState('Home');
  const [theme, setTheme] = useState('dark');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);
  const [openFiles, setOpenFiles] = useState(['Home']);
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
    if (!openFiles.includes(pageName)) {
      setOpenFiles([...openFiles, pageName]);
    }
  };

  const handleTabClose = (pageName, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (pageName !== 'Home') {
      const newTabs = openTabs.filter((tab) => tab !== pageName);
      setOpenTabs(newTabs);
      if (activeTab === pageName) {
        setActiveTab(newTabs[newTabs.length - 1] || 'Home');
      }
      const newOpenFiles = openFiles.filter((file) => file !== pageName);
      setOpenFiles(newOpenFiles);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const toggleExplorer = () => {
    setIsExplorerOpen(!isExplorerOpen);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    if (location.pathname === '/projects') {
      setIsExplorerOpen(true);
    }
  }, [location]);

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
          <button onClick={toggleSettings} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
            <SettingsIcon size={18} />
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar */}
        <div className={`w-12 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} flex flex-col items-center py-4 space-y-4`}>
          <button onClick={toggleExplorer} className={`p-2 rounded-full ${isExplorerOpen ? 'bg-gray-700' : ''} hover:bg-gray-700 transition-colors`}>
            <FileIcon size={24} />
          </button>
          <SearchIcon size={24} />
          <GitBranchIcon size={24} />
          <button onClick={toggleSettings} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
            <SettingsIcon size={24} />
          </button>
        </div>

        {/* File explorer */}
        {isExplorerOpen && (
          <div className={`w-64 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} p-4 overflow-y-auto`}>
            {/* Opened Files section */}
            <div className="mb-4">
              <h2 className="text-sm uppercase mb-2">Opened Files</h2>
              {openFiles.map((file) => (
                <div
                  key={file}
                  className={`flex items-center justify-between py-1 px-2 ${
                    activeTab === file ? (theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300') : ''
                  } hover:${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} cursor-pointer`}
                  onClick={() => handleTabClick(file)}
                >
                  <span>{file}</span>
                  {file !== 'Home' && (
                    <button
                      onClick={(e) => handleTabClose(file, e)}
                      className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
                    >
                      <XIcon size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>

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
        )}

        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          {/* Tabs */}
          <TabManager
            openTabs={openTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            handleTabClose={handleTabClose}
            theme={theme}
          />

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

      {/* Settings Menu */}
      {isSettingsOpen && (
        <SettingsMenu theme={theme} toggleTheme={toggleTheme} closeSettings={() => setIsSettingsOpen(false)} />
      )}
    </div>
  );
};

export default Layout;