import React from "react";
import ApiListItem from "./api-list-item";

const ApiList = (props) => {
  const listItems = props.data.versions.map((item) => {
    return (
      <ApiListItem
        id={item.apis.id}
        name={item.apis.name}
        status={item.apis.status}
        trayVersion={item.apis.tray_version}
        latestVersion={item.apis.latest_version}
        showPanel={props.showPanel}
        checkStatusColor={props.checkStatusColor}
      />
    );
  });

  return <div className="api-list-container">{listItems}</div>;
};

export default ApiList;
