import React from "react";
import CollectionListItem from "./collection-list-item";

const CollectionList = () => {
  const collectionListItems = [
    {
      tag: "GA",
      class: "collection-list-item-1",
      name: "GraphQL APIs",
      itemCount: "6",
    },
    {
      tag: "E",
      class: "collection-list-item-2",
      name: "Ecommerce",
      itemCount: "28",
    },
  ];

  const createCollectionListItems = collectionListItems.map((item) => {
    return (
      <CollectionListItem
        name={item.name}
        itemCount={item.itemCount}
        tag={item.tag}
        class={item.class}
      />
    );
  });

  return (
    <div className="collection-list-container">
      <h2 className="collection-list-heading">Collections</h2>
      <div className="collection-list-items-container">
        {createCollectionListItems}
      </div>
    </div>
  );
};

export default CollectionList;
