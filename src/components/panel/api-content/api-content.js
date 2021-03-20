import React from 'react'

const ApiContent = (props) => {
  return (
    <div>
      <div>
        <h3>{props.description}</h3>
      </div>
      <div>
        <p>Current Version: {props.trayVersion}</p>
        <p>Last Updated: {props.lastUpdated}</p>
      </div>
    </div>
  )
}

export default ApiContent;
