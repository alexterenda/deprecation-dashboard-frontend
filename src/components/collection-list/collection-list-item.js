import React from "react";

const CollectionListItem = (props) => {
  return (
    <div className="collection-list-item-container">
      <div className="collection-list-tag-container">{props.tag}</div>
      <div className="collection-list-info-container">
        <div className="collection-list-name-container">{props.name}</div>
        <div className="collection-list-count-container">
          {props.itemCount} APIs
        </div>
      </div>
      <div className="collection-list-icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="collection-list-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </div>
    </div>
  );
};

export default CollectionListItem;
