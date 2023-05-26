import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Layout, Menu, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdditionalMenu from "./AdditionalMenu";
const { Sider } = Layout;

const initialState = [
  {
    key: 1,
    title: "Collection 1",
    id: window.crypto.randomUUID(),
    subItem: [
      {
        id: window.crypto.randomUUID(),
        label: "WSIWYG Text Editer",
        subKey: 1,
      },
    ],
  },
  {
    key: 2,
    title: "Collection 2",
    id: window.crypto.randomUUID(),
    subItem: [],
  },
  {
    key: 3,
    title: "Collection 3",
    id: window.crypto.randomUUID(),
    subItem: [],
  },
];

const getInitialValue = () => {
  const localItem = JSON.parse(localStorage.getItem("menuList"));
  if (!!localItem?.length) {
    return localItem;
  } else {
    localStorage.setItem("menuList", JSON.stringify(initialState));
    return initialState;
  }
};

const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  const [menuList, setMenuList] = useState(getInitialValue());

  const handleAddMenuItem = () => {
    const newMenuItem = {
      key: menuList.length + 1,
      title: `Collection ${menuList.length + 1}`,
      id: window.crypto.randomUUID(),
      subMenu: [],
    };
    setMenuList([...menuList, newMenuItem]);
  };

  useEffect(() => {
    localStorage.setItem("menuList", JSON.stringify(menuList));
  }, [menuList]);

  const onClickNested = (e, ele, index) => {
    e.stopPropagation();

    const updatedData = menuList.map((element, index) => {
      const sub = {
        id: window.crypto.randomUUID(),
        subKey: element?.subItem?.length ? element?.subItem?.length + 1 : 1,
        label: `Sub-Collection${
          element?.subItem?.length ? element?.subItem?.length + 1 : 1
        }`,
      };
      if (element.id === ele.id) {
        return {
          ...element,
          subItem:
            element?.subItem?.length > 0 ? [...element?.subItem, sub] : [sub],
        };
      }
      return element;
    });
    setMenuList(updatedData);
  };

  const onClickDelete = (e, ele, index) => {
    e.stopPropagation();
    const filter = menuList.filter((element, index) => {
      return element.id !== ele.id;
    });
    setMenuList(filter);
  };

  const { TabPane } = Tabs;
  const handleClick = (route) => {
    navigate(route);
  };
  const handleNavigate = (key) => {
    navigate(`/Collection${key}`);
  };

  const onDeleteSubMenu = (parentIndex, childId) => {
    const filterSet = menuList.map((j, k) => {
      if (parentIndex === k) {
        return {
          ...j,
          subItem: [...j.subItem.filter((s) => s.id !== childId)],
        };
      }
      return j;
    });
    setMenuList([...filterSet]);
    console.log(filterSet, "filterSet");
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      width={300}
      style={{ background: "white" }}
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="All" key="1">
          <AdditionalMenu handleAddMenuItem={handleAddMenuItem} />
          <Menu
            mode="inline"
            style={{
              height: "100%",
              borderRight: 0,
            }}
          >
            {menuList.map((ele, parentIndex) => {
              return (
                <>
                  {ele?.subItem?.length ? (
                    <Menu.SubMenu
                      className="submenu"
                      title={
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div> {ele.title}</div>
                          <div
                            style={{ padding: "24px" }}
                            className="hoverClass"
                          >
                            <DeleteOutlined
                              onClick={(e) =>
                                onClickDelete(e, ele, parentIndex)
                              }
                              style={{ marginLeft: "20px" }}
                            />
                          </div>
                          <div
                            style={{ padding: "24px" }}
                            className="hoverClass"
                          >
                            <PlusOutlined
                              onClick={(e) =>
                                onClickNested(e, ele, parentIndex)
                              }
                              style={{ marginLeft: "15px" }}
                            />
                          </div>
                        </div>
                      }
                      key={ele.key}
                    >
                      {ele?.subItem?.map((e, childIndex) => {
                        return (
                          <Menu.Item
                            onClick={() =>
                              handleClick(`/Collection${ele?.key}/${e.label}`)
                            }
                            className="submenu"
                          >
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <div> {e.label}</div>
                              <div
                                style={{ padding: "24px" }}
                                className="hoverClass"
                              >
                                <DeleteOutlined
                                  onClick={(f) =>
                                    onDeleteSubMenu(parentIndex, e.id)
                                  }
                                  style={{ marginLeft: "20px" }}
                                />
                              </div>
                            </div>
                          </Menu.Item>
                        );
                      })}
                    </Menu.SubMenu>
                  ) : (
                    <Menu.Item onClick={() =>handleNavigate(ele.key)} className="submenu">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div>{ele.title}</div>
                        <div style={{ padding: "24px" }} className="hoverClass">
                          <DeleteOutlined
                            onClick={(e) => onClickDelete(e, ele, parentIndex)}
                            style={{ marginLeft: "20px" }}
                          />
                        </div>
                        <div style={{ padding: "24px" }} className="hoverClass">
                          <PlusOutlined
                            onClick={(e) => onClickNested(e, ele, parentIndex)}
                            style={{ marginLeft: "15px" }}
                          />
                        </div>
                      </div>
                    </Menu.Item>
                  )}
                </>
              );
            })}
          </Menu>
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
