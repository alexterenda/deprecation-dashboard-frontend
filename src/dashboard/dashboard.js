import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar/sidebar";
import ApiList from "../components/api-list/api-list";
import TopNav from "../components/top-nav/top-nav";
import Panel from "../components/panel/panel";
import MockData from "../mock-json/mock-json";

const Dashboard = () => {
  const [data, setData] = useState(MockData);
  const [showPanel, setShowPanel] = useState(1);

  const handleShowPanel = (newId) => {
    setShowPanel(newId);
  };

  const checkStatusColor = (status) => {
    let change;
    switch (status) {
      case "1":
        change = "status-red";
        break;
      case "2":
        change = "status-orange";
        break;
      case "3":
        change = "status-green";
        break;
      default:
        change = "status-orange";
        break;
    }
    return change;
  };

  return (
    <div className="dashboard">
      <div className="dashboard-sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="dashboard-contents-container">
        <TopNav />
        <ApiList
          data={data}
          changeColor={showPanel}
          checkStatusColor={checkStatusColor}
          showPanel={handleShowPanel}
        />
      </div>
      <div className="dashboard-panel-wrapper">
        <Panel
          data={data}
          panelId={showPanel}
          checkStatusColor={checkStatusColor}
        />
      </div>
    </div>
  );
};

export default Dashboard;
