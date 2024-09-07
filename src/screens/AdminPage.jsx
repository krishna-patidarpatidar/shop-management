import React, { useState } from 'react';
import Header from '../component/Header';
import SideBar from '../component/SideBar';
import { Outlet } from 'react-router-dom';

const AdminPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isColseSidebar, setIsColseSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsColseSidebar(!isColseSidebar)
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header toggle={toggleSidebar} />

      {/* Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <SideBar isSidebarOpen={{isSidebarOpen , isColseSidebar}} />

        {/* Main Content */}
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
