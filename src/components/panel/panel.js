import React from "react";
import PanelImage from "./image/image";
import Header from "../header/header";
import ApiContent from "./api-content/api-content";
import Connection from "./connection/connection";
import DeprecationStatus from "../depreciation-status/deprecation-status";
import Updates from "../updates/updates";

const Panel = (props) => {
  const currentPanelItem = props.data.versions.find(
    (e) => e.apis.id === props.panelId
  );

  return (
    <div className="panel-container">
      <div>
        <PanelImage logoUrl={currentPanelItem.apis.logo_url} />
        <Header title={currentPanelItem.apis.name} />
        <DeprecationStatus
          checkStatusColor={props.checkStatusColor}
          status={currentPanelItem.apis.status}
        />
      </div>
      <div>
        <ApiContent
          description={currentPanelItem.apis.description}
          trayVersion={currentPanelItem.apis.tray_version}
          lastUpdated={currentPanelItem.apis.last_update}
        />
      </div>
      <div>
        <Connection
          latestVersion={currentPanelItem.apis.latest_version}
          accManager={currentPanelItem.apis.api_acc_manager}
          leadDev={currentPanelItem.apis.developer}
        />
      </div>
      <Updates
        name={currentPanelItem.apis.name}
        updates={currentPanelItem.updates}
        latestVersion={currentPanelItem.apis.latest_version}
        checkStatusColor={props.checkStatusColor}
      />
    </div>
  );
};

export default Panel;
