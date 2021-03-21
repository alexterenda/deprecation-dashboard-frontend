import React from "react";
import DeprecationStatus from "../depreciation-status/deprecation-status";

const ApiListItem = (props) => {
  return (
    <div
      onClick={() => props.showPanel(props.id)}
      className="api-list-item-container"
    >
      <div className="api-list-item-image-container">
        <img src={props.logo} alt="company-logo" className="api-list-item-image" />
      </div>
      <div className="api-list-item-left-container">
        <h3>{props.name}</h3>
        <p>{props.trayVersion}</p>
      </div>
      <div className="api-list-item-middle-container">
        <p>{props.trayVersion}</p>
        <p>{props.latestVersion}</p>
      </div>
      <div className="api-list-item-right-container">
        <DeprecationStatus
          checkStatusColor={props.checkStatusColor}
          status={props.status}
        />
        <div className="api-list-item-icon-container">
          <svg className="api-list-item-icon"></svg>
        </div>
      </div>
    </div>
  );
};

export default ApiListItem;
