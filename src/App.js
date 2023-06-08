import React, { useState } from "react";
import { Layout, theme } from "antd";
import Sidebar from "./components/common/sidebar";
import Topbar from "./components/common/header";
import Home from "./components/pages/home";
import { Route, Routes } from "react-router-dom";
import TextEditor from "./components/pages/textEditor";

const { Header, Content } = Layout;
function App() {
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
                <Route path="/textEditor" element={<> <TextEditor /></>}></Route>
                {/* <Route path="/:parent/:child" element={<Component />}></Route>
                <Route path="/:parent" element={<Sublime />}></Route> */}
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
