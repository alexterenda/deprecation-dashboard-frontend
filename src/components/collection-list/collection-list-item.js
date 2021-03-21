import React from "react";

const CollectionListItem = (props) => {
  return (
    <div className="collection-list-item-container">
      <div>{props.name}</div>
      <div>{props.itemCount}</div>
    </div>
  );
};

export default CollectionListItem;
