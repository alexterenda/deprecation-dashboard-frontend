import React from "react";

const MenuLink = (props) => {
  return (
    <>
      <div className="sidebar-menulink-container">
        <div className="sidebar-menulink-item">
          <div className="sidebar-menulink-text-container">
            <a href="/" className="sidebar-menulink-text">
              {props.content}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuLink;
