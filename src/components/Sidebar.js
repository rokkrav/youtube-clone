import React from "react";

const Sidebar = () => {
  return (
    <div className="p-5 w-48 shadow-lg  ">
      <ul className="font-bold mb-4">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Youtube Music</li>
      </ul>
      <h1 className="font-semibold">You {">"}</h1>
      <ul className="mb-4">
        <li>Your channel</li>
        <li>History</li>
        <li>Your videos</li>
        <li>Watch later</li>
        <li>Downloads</li>
        <li>Show more</li>
      </ul>
      <h1 className="font-bold mb-1">Subscriptions</h1>
      <ul className="mb-4">
        <li>No Subscriptions</li>
      </ul>
      <h1 className="font-bold mb-2">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
