import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import Navbar from "../Navbar";

export default function Layout() {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <div className="bg-neutral-800 w-[20%]">
        <SideBar/>
      </div>
      <div className="w-[80%]">
        <div>
            <Navbar/>
        </div>
        <div className="p-4 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
