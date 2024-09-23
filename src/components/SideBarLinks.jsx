import React from "react";

import { Link, useLocation } from "react-router-dom";

export default function SideBarLinks({ item }) {
  const { pathname } = useLocation();
  return (
    <div>
      <Link
        className={`flex px-1 py-3 items-center gap-3 text-white hover:bg-neutral-700 hover:text-black ${
          pathname === item.path ? "bg-neutral-400 text-black" : ""
        }`}
        to={item.path}
      >
        <span>{item.icon}</span>
        {item.label}
      </Link>
    </div>
  );
}
