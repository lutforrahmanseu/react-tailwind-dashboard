import React from "react";
import { FcBullish } from "react-icons/fc";
import { dashBoardBottomLinks, dashBoardLinks } from "../lib/Navigation";
import SideBarLinks from "./SideBarLinks";
import { HiOutlineLogout } from "react-icons/hi";

export default function SideBar() {
  return (
    <div className="flex h-screen flex-col p-3">
      <div className="flex px-1 py-3 items-center gap-3">
        <FcBullish size={30} />
        <span className="text-2xl font-bold text-white">Lutfor</span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {dashBoardLinks.map((item) => (
          <SideBarLinks key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col border-t gap-0.5 pt-2 border-neutral-700">
        {dashBoardBottomLinks.map((item) => (
          <SideBarLinks key={item.key} item={item} />
        ))}
        <div className="flex px-1 py-3 items-center gap-3 text-red-500 cursor-pointer hover:bg-neutral-700">
          <HiOutlineLogout />
          Logout
        </div>
      </div>
    </div>
  );
}
