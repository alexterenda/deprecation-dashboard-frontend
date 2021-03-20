import React from 'react'

const Image = (props) => {
  return (
    <img  className="panel-image" src={props.logoUrl} alt="company-logo" />
  )
}

export default Image;
