import React, { useState,useEffect } from "react";
import MenuTree from "./commonSubComponents/menuLIst";
import { Layout, Tabs } from "antd";
import { menuItems } from "../../menu";

const { Sider } = Layout;

const getInitialValue = () => {
  const localItem = JSON.parse(localStorage.getItem("menuList"));
  if (!!localItem?.length) {
    return localItem;
  } else {
    localStorage.setItem("menuList", JSON.stringify(menuItems));
    return menuItems;
  }
};

const Sidebar = ({ collapsed }) => {

  const [menuList, setMenulist] = useState(getInitialValue());
  const { TabPane } = Tabs;



  useEffect(() => {
    localStorage.setItem("menuList", JSON.stringify(menuList));
  }, [menuList]);

  return (
    <Sider
      collapsed={collapsed}
      collapsible
      style={{ background: "white" }}
      width={300}
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="All" key="1">
          <div>
            <MenuTree
              setMenulist={setMenulist}
              menuList={menuList}
              style={{ height: "100%" }}
            />
          </div>
        </TabPane>
        <TabPane style={{ margin: "20px" }} tab="Graph" key="2">
          <div> This Contains Graph </div>
          <p> Which is under process</p>
        </TabPane>
      </Tabs>
    </Sider>
  );
};

export default Sidebar;
