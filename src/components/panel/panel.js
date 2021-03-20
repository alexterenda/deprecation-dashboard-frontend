import React from 'react'
import PanelImage from "./image/image";

const Panel = (props) => {
  const currentPanelItem = props.data.versions.find(e => e.apis.id === props.panelId);
  console.log(currentPanelItem);

  return (
    <div>
      <div>
        <PanelImage logoUrl = {currentPanelItem.apis.logo_url} />
      </div>
    </div>
  )
}

export default Panel;
