import React, { useState, useEffect } from 'react'
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
  }

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
  }

  return (
    <div>
      <Sidebar />
      <TopNav />
      <ApiList 
        data = {data}
        checkStatusColor = {checkStatusColor}
        changeColor = {showPanel}
        showPanel = {handleShowPanel}
      />
      <Panel 
        data = {data}
        panelId = {showPanel}
        checkStatusColor = {checkStatusColor}
      />
    </div>
  )
}

export default Dashboard;
