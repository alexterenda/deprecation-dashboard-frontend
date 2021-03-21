import React from "react";
import DeprecationStatus from "../depreciation-status/deprecation-status";

const ApiListItem = (props) => {
  return (
    <div
      onClick={() => props.showPanel(props.id)}
      className="api-list-item-container"
    >
      <div className="api-list-item-image-container">
        <img
          src="https://4bo0cq4bxnou2rimh3hwzwi8-wpengine.netdna-ssl.com/blog/wp-content/uploads/2018/02/22852120_1266763086768693_6004893502123596052_n.png"
          alt=""
          className="api-list-item-image"
        />
      </div>
      <div className="api-list-item-left-container">
        <h3 className="api-list-item-name">{props.name}</h3>
        <div className="api-list-item-developer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="api-list-item-developer-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <p className="api-list-item-developer-name">{props.trayVersion}</p>
        </div>
      </div>
      <div className="api-list-item-middle-container">
        <p className="api-list-item-value-text">
          <span className="api-list-item-label-text">Using: </span>
          {props.trayVersion}
        </p>
        <div className="api-list-text-container-bottom">
          <p className="api-list-item-value-text">
            <span className="api-list-item-label-text">Latest: </span>
            {props.latestVersion}
          </p>
        </div>
      </div>
      <div className="api-list-item-right-container">
        <DeprecationStatus
          checkStatusColor={props.checkStatusColor}
          status={props.status}
        />
        <div className="api-list-item-icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="api-list-item-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ApiListItem;
