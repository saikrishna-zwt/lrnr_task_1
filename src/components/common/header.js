import { Dropdown, Layout, notification } from "antd";
import {
  UserOutlined,
  MenuOutlined,
  PlusOutlined,
  BellOutlined,
} from "@ant-design/icons";
import React from "react";
import ProfileMenu from "./profileMenu";
import { Link } from "react-router-dom";
const { Header } = Layout;

const Topbar = ({ setCollapsed, hiddenmenu }) => {

  const openNotification = () => {
    notification.open({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "space-between",
          zIndex: 1,
          width: "100%",
          paddingTop: "0px",
          paddingBottom: "0px",
          height: "44px !important",
          backgroundColor: "white",
          boxShadow: "0 0 10px 0 rgb(183 192 206 / 20%)",
        }}
        className="site-layout-background bg-2c2c2c"
      >
        <div
          style={{ display: "flex", msFlexDirection:"row", alignItems: "center" }}
          className="topbar-left-side"
        >
          <Link to="/" style={{all:"unset", cursor:"pointer"}}>
            <img style={{height:"30px",marginRight:"30px",marginTop:"29px"}} alt="" src="https://useaxentix.com/2.1.x/img/axentix.svg" />
            </Link>
          <span
            style={{ color: "black",cursor:"pointer" }}
            className="sidebar-menu-icon"
            onClick={() => {
              setCollapsed((prev) => !prev);
            }}
          >
            <MenuOutlined className={`${hiddenmenu}`} />
          </span>
        </div>
        <div className="topbar-right-side">
          <div className="notification">
            <button className="buttonStyleCrewMember">
              <PlusOutlined /> Invite Crew Member
            </button>
          </div>
          <div className="notification">
            <BellOutlined
              style={{ fontSize: "20px" }}
              onClick={openNotification}
            />
          </div>
          <div className="topbar-profile">
            <Dropdown overlay={<ProfileMenu />}>
              <a
                href="*"
                className="topbar-profile"
                onClick={(e) => e.preventDefault()}
              >
                <UserOutlined />
              </a>
            </Dropdown>
          </div>
          <span className="language-option-header"></span>
        </div>
      </Header>
    </Layout>
  );
};

export default Topbar;
