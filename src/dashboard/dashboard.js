import React, { useState, useEffect } from 'react'
import Sidebar from "../components/sidebar/sidebar";
import ApiList from "../components/api-list/api-list";
import TopNav from "../components/top-nav/top-nav";
import MockData from "../mock-json/mock-json";

const Dashboard = () => {
  const [data, setData] = useState(MockData);
  const [statusColor, setStatusColor] = useState([]);

  useEffect(() => {
    const new_arr = [];
    MockData.versions.forEach((_) => {
      new_arr.push('status-orange');
    });
    setStatusColor(new_arr);
  }, [])

  const checkStatusColor = (status, index) => {
    let arr = [...statusColor];
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
    arr[index] = change;
    setStatusColor(arr);
  }

  return (
    <div>
      <Sidebar />
      <TopNav />
      <ApiList 
        data = {data}
        statusColor = {statusColor}
        changeColor = {checkStatusColor}
      />
    </div>
  )
}

export default Dashboard;
