import React from "react";
import "./Dashboard.css";
import { Layout } from "antd";
import Content from "../../components/Content/Content";
import Sidebar from "../../components/Sidebar/Sidebar";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar className="sidebar" />
      <Content className="content" />
    </div>
  );
}

export default Dashboard;
