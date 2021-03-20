import React from "react";

const Notifications = () => {
  return (
    <>
      <div className="notifications-container">
        <div className="notifications-icon-container">
          <div className="notifications-icon">
            <i className="fas fa-bell"></i>
          </div>
          <div className="notification-count-container">
            <p className="notification-count">2</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
