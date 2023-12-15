import React from "react";
import Sidebar from "./Sidebar";

import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const sidebarToggle = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="flex">
      {sidebarToggle ? (
        <Sidebar />
      ) : (
        <div className="p-5 ">
          <h1>🏠</h1>
          <h1>📁</h1>
          <h1>🎼</h1>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Body;
