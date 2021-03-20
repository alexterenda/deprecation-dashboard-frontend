import React from 'react'

const UpdateEmail = (props) => {
  return (
    <div>
      <div>
        <input type="text" placeholder="Date" />
        <input type="text" placeholder="Endpoint" />
        <input type="text" placeholder="Source" />
        <button>Update</button>
      </div>
      <div>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default UpdateEmail;
