import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FileIcon, FolderIcon } from 'lucide-react';

const Layout = () => {
  const [openTabs, setOpenTabs] = useState(['Home']);
  const [activeTab, setActiveTab] = useState('Home');

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

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="w-64 bg-gray-800 p-4">
        <h1 className="text-xl font-bold mb-4">My Portfolio</h1>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <FolderIcon className="mr-2" size={16} />
            <span>Pages</span>
          </div>
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              className="flex items-center pl-6 py-1 hover:bg-gray-700"
              onClick={() => handleTabClick(page.name)}
            >
              <FileIcon className="mr-2" size={16} />
              <span>{page.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="bg-gray-700 flex">
          {openTabs.map((tab) => (
            <div
              key={tab}
              className={`px-4 py-2 flex items-center cursor-pointer ${
                activeTab === tab ? 'bg-gray-900' : 'bg-gray-800'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <span>{tab}</span>
              <button
                className="ml-2 text-gray-400 hover:text-white"
                onClick={(e) => handleTabClose(tab, e)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <div className="flex-1 p-4 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;