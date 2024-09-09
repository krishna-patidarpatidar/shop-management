import React, { useState } from 'react';
import Header from '../component/Header';
import SideBar from '../component/SideBar';
import { Outlet } from 'react-router-dom';

const AdminPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Header */}
      <Header toggle={toggleSidebar} />

      {/* Content Area */}
      <div className="md:flex flex-1">
        {/* Sidebar */}
        <SideBar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />

        {/* Main Content */}
        <main className="flex-1 p-4 mt-32">
          <Outlet />
        </main>
      </div>

      {/* Overlay to disable all screens except the sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-10 pointer-events-none"></div>
      )}
    </div>
  );
};

export default AdminPage;