import React from 'react'
import DeprecationStatus from "../depreciation-status/deprecation-status";

const EachUpdateLink = (props) => {
  return (
    <div>
      <p>{props.name} UPDATE {props.version}</p>
      <p>{props.date}</p>
      <a href={props.source} target="blank">{props.link}</a>
      <p>Description: {props.text}</p>
      <DeprecationStatus checkStatusColor = {props.checkStatusColor} status={props.status}/>
    </div>
  )
}

export default EachUpdateLink;
