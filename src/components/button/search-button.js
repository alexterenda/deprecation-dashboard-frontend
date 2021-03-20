import React from 'react'

const SearchButton = (props) => {
  return (
    <div>
      <button onClick={props.onClick}><i className="fas fa-search"></i></button>
    </div>
  )
}

export default SearchButton;
