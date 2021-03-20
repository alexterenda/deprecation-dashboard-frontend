import React from 'react'
import PanelImage from "./image/image";
import Header from "./header/header";
import DeprecationStatus from '../depreciation-status/deprecation-status';

const Panel = (props) => {
  const currentPanelItem = props.data.versions.find(e => e.apis.id === props.panelId);

  return (
    <div>
      <div>
        <PanelImage logoUrl = {currentPanelItem.apis.logo_url} />
        <Header title = {currentPanelItem.apis.name}/>
        <DeprecationStatus checkStatusColor = {props.checkStatusColor} status = {currentPanelItem.apis.status} />
      </div>
    </div>
  )
}

export default Panel;
