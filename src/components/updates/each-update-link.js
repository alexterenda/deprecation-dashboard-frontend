import React from 'react'
import DeprecationStatus from "../depreciation-status/deprecation-status";

const EachUpdateLink = (props) => {
  return (
    <div onClick={() => props.showUpdateEmail(props.updateId)}>
      <p>{props.version} {props.name} UPDATE </p>
      <DeprecationStatus checkStatusColor = {props.checkStatusColor} status={props.status}/>
    </div>
  )
}

export default EachUpdateLink;
