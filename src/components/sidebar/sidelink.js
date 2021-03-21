import React, { Fragment } from "react";

const SideLink = (props) => {
  return (
    <div className="sidebar-sidelink-container">
      <div className="sidebar-sidelink-item">
        <div className="sidebar-sidelink-icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="sidebar-sidelink-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d={props.icon}
            />
          </svg>
        </div>
        <div className="sidebar-sidelink-text-container">
          <a href="/" className="sidebar-sidelink-text">
            {props.content}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideLink;
