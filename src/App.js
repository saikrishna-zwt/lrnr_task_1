import React, { useState } from "react";
import { Layout, theme } from "antd";
import Topbar from "./components/common/header";
import Sidebar from "./components/common/sidebar";
import { Route, Routes } from "react-router-dom";
import Component from "./components/Component";
import Home from "./components/pages/home";
import Sublime from "./components/Sublime";
const { Header, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout className="layout">
        <Topbar setCollapsed={setCollapsed} />
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar collapsed={collapsed} />
          <Layout className="site-layout">
            <Header style={{ padding: 0, background: colorBgContainer }} />
            <Content>
              <Routes>
                <Route index element={<> <Home /></>}></Route>
                <Route path="/:parent/:child" element={<Component />}></Route>
                <Route path="/:parent" element={<Sublime />}></Route>
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
