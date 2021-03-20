import React from 'react'
import SideLink from "./sidelink";

const SideBar = (props) => {
  const links = ["Home", "Inbox", "My APIs", "Collection", "AMBER's APIs", "GRAPHQL APIs"];
  const createLinks = links.map(link => <SideLink content = {link}/>)

  return (
    <div>
      <h3>tray.io</h3>
      <h1>Depreciation Dashboard</h1>
      <div>
        {createLinks}
      </div>
    </div>
  )
}

export default SideBar;
