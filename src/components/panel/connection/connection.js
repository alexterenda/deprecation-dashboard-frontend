import React from 'react'

const Connection = (props) => {
  return (
    <div>
      <p>Latest Version: {props.latestVersion}</p>
      <p>Lead Developer: {props.leadDev}</p>
      <p>Account Manager: {props.accManager}</p>
    </div>
  )
}

export default Connection;
