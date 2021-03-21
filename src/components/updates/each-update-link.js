import React from "react";
import DeprecationStatus from "../depreciation-status/deprecation-status";

const EachUpdateLink = (props) => {
  return (
    <div
      onClick={() => props.showUpdateEmail(props.updateId)}
      className="update-item-container"
    >
      <p>
        {props.name} UPDATE {props.version}
      </p>
      <div className="update-item-deprecation-status-container">
        <DeprecationStatus
          checkStatusColor={props.checkStatusColor}
          status={props.status}
        />
      </div>
    </div>
  );
};

export default EachUpdateLink;
