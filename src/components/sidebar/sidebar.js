import React from 'react'
import SideLink from "./sidelink";
import SideHeader from "./sidebar-header";

const SideBar = () => {
  const links = ["Home", "Inbox", "My APIs", "Collection", "AMBER's APIs", "GRAPHQL APIs"];
  const createLinks = links.map((link) => {
    return (
      <SideLink content = {link}/>
    );
  });

  return (
    <div>
      <SideHeader />
      <div>
        {createLinks}
      </div>
    </div>
  )
}

export default SideBar;
