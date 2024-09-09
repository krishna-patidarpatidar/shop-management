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
      <div className="md:flex flex-1 ">
        {/* Sidebar */}
        <div className='fixed z-50 top-[156px] md:top-[148px]'>
          <SideBar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />

        </div>
        {/* Main Content */}
        <main className="md:flex-1 p-4 mt-[140px] md:ml-[250px]">
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