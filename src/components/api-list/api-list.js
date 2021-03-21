import React from "react";
import ApiListItem from "./api-list-item";

const ApiList = (props) => {
  const listItems = props.data.versions.map((item) => {
    return (
      <ApiListItem
        id={item.apis.id}
        name={item.apis.name}
        logoUrl={item.apis.logoUrl}
        status={item.apis.status}
        trayVersion={item.apis.tray_version}
        latestVersion={item.apis.latest_version}
        showPanel={props.showPanel}
        checkStatusColor={props.checkStatusColor}
        logo={item.apis.logo_url}
      />
    );
  });

  return (
    <div className="api-list-container">
      <div className="api-list-heading">APIs</div>
      <div className="api-list-filters-container"></div>
      <div className="api-list-items-container">{listItems}</div>
    </div>
  );
};

export default ApiList;
