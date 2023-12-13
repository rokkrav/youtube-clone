import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";

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
      <MainContainer />
    </div>
  );
};

export default Body;
