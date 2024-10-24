import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import Navbar from "../Navbar";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <div 
        className={`bg-neutral-800 w-64 fixed h-full z-30 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SideBar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Navbar */}
        <div className="sticky top-0 z-20">
          <Navbar onMenuButtonClick={toggleSidebar} />
        </div>

        {/* Page content */}
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
