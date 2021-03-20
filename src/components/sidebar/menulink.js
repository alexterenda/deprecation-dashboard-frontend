import React, {Fragment} from "react";

const MenuLink = (props) => {
  return (
    <Fragment>
      <div className="sidebar-menulink-container">
        <div className="sidebar-menulink-item">
          <div className="sidebar-menulink-text-container">
            <a href="/" className="sidebar-menulink-text">
              {props.content}
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MenuLink;
