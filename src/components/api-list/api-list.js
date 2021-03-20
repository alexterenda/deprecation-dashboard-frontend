import React from 'react'
import ApiListItem from "./api-list-item";

const ApiList = (props) => {
  const listItems = props.data.versions.map((item, index) => {
    return (
      <ApiListItem
        id = {item.apis.id}
        index = {index}
        name = {item.apis.name}
        status = {item.apis.status}
        trayVersion = {item.apis.tray_version}
        latestVersion = {item.apis.latest_version}
        statusColor = {props.statusColor[index]}
        showPanel = {props.showPanel}
      />
    );
  });

  return (
    <div>
      {listItems}
    </div>
  )
}

export default ApiList;
