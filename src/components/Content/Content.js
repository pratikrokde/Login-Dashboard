import React from "react";
import "./Content.css";
import { Layout } from "antd";

const { Content } = Layout;

function Contents() {
  return (
    <Layout className="layoutContent">
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        Content
      </Content>
    </Layout>
  );
}

export default Contents;
