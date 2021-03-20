import React, { useState, useEffect, Fragment } from "react";
import Sidebar from "../components/sidebar/sidebar";
import ApiList from "../components/api-list/api-list";
import TopNav from "../components/top-nav/top-nav";
import Panel from "../components/panel/panel";
import initStateData from "./initial-state-data";
import Loader from "../components/loader/loader";

const Dashboard = () => {
  const [data, setData] = useState(initStateData);
  const [showPanel, setShowPanel] = useState(1);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setLoader(true);
      fetch('http://localhost:3001/')
        .then(res => res.json())
        .then(val => {
          console.log(val);
          const newVersions = val.apis.map((version) => {
            return {
              id: version.id,
              name: version.name,
              status: version.status,
              tray_version: version.tray_version,
              latest_version: version.latest_version,
              developer: version.developer,
              description: version.description,
              api_acc_manager: version.api_acc_manager,
              logo_url: version.logo_url,
              last_update: version.created_at
            }
          });

          const newUpdates = val.updates.map((update) => {
            return {
              id: update.id,
              api_id: update.api_id,
              status: update.status,
              deprecation_date: update.change_date,
              source: update.source,
              endpoint: update.endpoint,
              text: update.text
            }
          });
          const finalVersion = val.apis.map((fin) => {
            const nversion = newVersions.find(e => e.id === fin.id);
            const nupdate = newUpdates.filter(e => e.api_id === fin.id);
            return {
              apis: nversion,
              updates: nupdate
            }
          });
          setData({ versions: finalVersion });
          setLoader(false);
        })
        .catch(err => console.log(err));
    }
    fetchData();
  }, [])
  const handleShowPanel = (newId) => {
    setShowPanel(newId);
  };

  // console.log(data);
  
  const checkStatusColor = (status) => {
    let change;
    switch (status) {
      case "urgent":
        change = "status-red";
        break;
      case "pending":
        change = "status-orange";
        break;
      case "clear":
        change = "status-green";
        break;
      default:
        change = "status-orange";
        break;
    }
    return change;
  };

  const handleFormDataSubmit = (formData) => {
    // /updates/:id(.:format)
    alert(`
      Date: ${formData.date}
      Endpoint: ${formData.endpoint}
      Source: ${formData.source}
      Id: ${formData.id}
      Status: ${formData.status}
    `);
  }

  return (
    <div className="dashboard">
      <div className="dashboard-sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="dashboard-contents-container">
        <TopNav />
        {loader ? <Loader /> : <Fragment>
          <ApiList
            data={data}
            changeColor={showPanel}
            checkStatusColor={checkStatusColor}
            showPanel={handleShowPanel}
          />
        </Fragment>}
      </div>
      <div className="dashboard-panel-wrapper">
        {loader ? <Loader/> : <Panel
          data={data}
          panelId={showPanel}
          checkStatusColor={checkStatusColor}
          handleFormDataSubmit={handleFormDataSubmit}
        />}
      </div>
    </div>
  );
};

export default Dashboard;
