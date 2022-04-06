import React, { useContext, useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  MenuFoldOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { authContext } from "../../context/authContext";

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2"];

const Sider = () => {
  const { currentUser, handleLogOut } = useContext(authContext);

  const [openKeys, setOpenKeys] = React.useState(["sub2"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: "100px",
        background: "none",
        position: "absolute",
        left: "16%",
        top: "1%",
      }}
      className="MenuMain"
    >
      <SubMenu
        key="sub1"
        icon={<MenuFoldOutlined style={{ color: "white" }} />}
      >
        <Link to="/models">
          <Menu.Item style={{ background: "none" }} key="1">
            Models
          </Menu.Item>
        </Link>
        <Link to="/shoping">
          <Menu.Item style={{ background: "none" }} key="2">
            Shoping
          </Menu.Item>
        </Link>
        <Link to="/card">
          <Menu.Item style={{ background: "none" }} key="3">
            Raritet
          </Menu.Item>
        </Link>
        {currentUser === "bekbolsun@gmail.com" ? (
          <Link to="/admin">
            <Menu.Item style={{ backgroundColor: "none" }} key="4">
              Admin
            </Menu.Item>
          </Link>
        ) : null}
      </SubMenu>
    </Menu>
  );
};

export default Sider;
