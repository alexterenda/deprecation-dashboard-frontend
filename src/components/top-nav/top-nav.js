import React from "react";
import Search from "../search-bar/search";
import Notifications from "../notifications/notifications";

const TopNav = () => {
  return (
    <div className="topnav-container">
      <Search />
      <Notifications />
    </div>
  );
};

export default TopNav;
