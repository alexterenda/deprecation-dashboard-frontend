import React from 'react'
import DeprecationStatus from "../depreciation-status/deprecation-status";

const ApiListItem = (props) => {
  return (
    <div onClick={() => props.showPanel(props.id)}>
      <div>
        <h3>{props.name}</h3>
        <p>{props.trayVersion}</p>
        <p>{props.latestVersion}</p>
      </div>
      <DeprecationStatus checkStatusColor = {props.checkStatusColor} status={props.status} />
    </div>
  )
}

export default ApiListItem;
