import React from 'react'

const DeprecationStatus = (props) => {
  return (
    <div className={`status ${props.checkStatusColor(props.status)}`}></div>
  )
}

export default DeprecationStatus;
