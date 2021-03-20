import React from 'react'

const ApiListItem = (props) => {
  return (
    <div onClick={() => props.showPanel(props.id)}>
      <div>
        <h3>{props.name}</h3>
        <p>{props.trayVersion}</p>
        <p>{props.latestVersion}</p>
      </div>
      <div className={`status ${props.statusColor}`}></div>
    </div>
  )
}

export default ApiListItem;
