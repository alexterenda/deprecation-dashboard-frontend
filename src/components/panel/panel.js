import React, { Fragment } from "react";

import PanelImage from "./image/image";
import Header from "../header/header";
import ApiContent from "./api-content/api-content";
import Connection from "./connection/connection";

import DeprecationStatus from "../depreciation-status/deprecation-status";
import Updates from "../updates/updates";
import Loader from "../../components/loader/loader";
import Divider from "../../components/divider/divider.js";

const Panel = (props) => {
  let currentPanelItem;
  if (!props.data.tester) {
    currentPanelItem = props.data.versions.find(
      (e) => e.apis.id === props.panelId
    );
  }

  return (
    <div className="panel-container">
      {!props.data.tester ? (
        <Fragment>
          <div className="panel-header-contents-container">
            <div className="panel-api-contents-container">
              <div className="panel-api-contents-header-container">
                <div className="panel-api-contents-header-container-left">
                  <Header title = {currentPanelItem.apis.name}/>
                </div>
                <div className="panel-api-contents-header-container-right">
                  <DeprecationStatus checkStatusColor = {props.checkStatusColor} status = {currentPanelItem.apis.status} />
                </div>
              </div>
              <div className="panel-api-contents-account-container">
                <p className="panel-api-contents-account-header">
                  Account Manager
                </p>
                <p className="panel-api-contents-account">
                  {currentPanelItem.apis.api_acc_manager}
                </p>
              </div>
            </div>
            <div className="panel-image-container">
              <PanelImage logoUrl = {currentPanelItem.apis.logo_url} />
            </div>
          </div>
          <Divider />
          <div className="panel-description-container">
            <p className="panel-connection-header">Description</p>
            <p className="panel-description">
              {currentPanelItem.apis.description}
            </p>
          </div>
          <Divider />
          <div className="panel-connection-container">
            <h3 className="panel-connection-header">Connection</h3>
            <div className="panel-connection-containers-container">
              <div className="panel-connection-container-left">
                <p className="panel-connection-text-item">
                  <p className="panel-connection-label-text">
                    Lead Developer:
                    <span className="panel-connection-value-text">
                      {currentPanelItem.apis.developer}
                    </span>
                  </p>
                </p>
                <p className="panel-connection-text-item">
                  <p className="panel-connection-label-text">
                    Last Updated:
                    <span className="panel-connection-value-text">
                      {currentPanelItem.apis.last_update}
                    </span>
                  </p>
                </p>
              </div>
              <div className="panel-connection-container-right">
                <p className="panel-connection-text-item">
                  <p className="panel-connection-label-text">
                    Using:
                    <span className="panel-connection-value-text">
                      {currentPanelItem.apis.tray_version}
                    </span>
                  </p>
                </p>
                <p className="panel-connection-text-item">
                  <p className="panel-connection-label-text">
                    Latest:
                    <span className="panel-connection-value-text">
                      {currentPanelItem.apis.latest_version}
                    </span>
                  </p>
                </p>
              </div>
            </div>
          </div>
          <Divider />
          <div className="panel-updates-contents-container">
            <h3 className="panel-connection-header">Updates</h3>
            <div className="panel-updates-wrapper">
              <Updates
                name={currentPanelItem.apis.name}
                updates={currentPanelItem.updates}
                latestVersion={currentPanelItem.apis.latest_version}
                checkStatusColor={props.checkStatusColor}
                handleFormDataSubmit={props.handleFormDataSubmit}
                handleAddNote={props.handleAddNote}
                notes={currentPanelItem.notes}
                users={currentPanelItem.users}
                apiId={currentPanelItem.apis.id}
                handleAddNewUpdate={props.handleAddNewUpdate}
                newUpdate={props.newUpdate}
                handleStateUpdate={props.handleStateUpdate}
              />
            </div>
          </div>
          <div className="display-none">
            <ApiContent
              description = {currentPanelItem.apis.description}
              trayVersion = {currentPanelItem.apis.tray_version}
              lastUpdated = {currentPanelItem.apis.last_update}
            />

            <Connection
              latestVersion = {currentPanelItem.apis.latest_version}
              accManager = {currentPanelItem.apis.api_acc_manager}
              leadDev = {currentPanelItem.apis.developer}
            />
          </div>
        </Fragment>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Panel;
