import React from "react";
import CollectionListItem from "./collection-list-item";

const CollectionList = () => {
  const collectionListItems = [
    {
      name: "GraphQL APIs",
      itemCount: "6",
    },
    {
      name: "Ecommerce",
      itemCount: "28",
    },
    {
      name: "Payments",
      itemCount: "5",
    },
  ];

  const createCollectionListItems = collectionListItems.map((item) => {
    return <CollectionListItem name={item.name} itemCount={item.itemCount} />;
  });

  return (
    <div className="collection-list-container">{createCollectionListItems}</div>
  );
};

export default CollectionList;
