import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import Navbar from "../Navbar";

export default function Layout() {
  return (
    <div className="flex flex-row h-screen w-screen">
      <div className="bg-neutral-800 w-[20%] fixed h-full">
        <SideBar />
      </div>

      <div className="w-[80%] ml-[20%] flex flex-col">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>

        <div className="p-4 h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
