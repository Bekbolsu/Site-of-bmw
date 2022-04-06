import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import {
  CloseOutlined,
  CustomerServiceOutlined,
  HeartOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { cartContext } from "../../context/cartContext";
import { Badge, Button, Menu } from "antd";
import { authContext } from "../../context/authContext";
import { favContext } from "../../context/favContext";
import MenuMain from "../MenuMain/MenuMain";

const Navbar = () => {
  const { cartLength } = useContext(cartContext);
  const { currentUser, handleLogOut } = useContext(authContext);
  const { favLength1 } = useContext(favContext);
  const [music, setMusic] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="main2">
        <div className="navbar">
          <div className="container">
            <div className="navbar_block1">
              <Link to="/">
                <img
                  className="nav_logo"
                  src="https://www.gifservice.fr/img/gif-vignette-small/bd3a29212bd9ae2f3e2d05d296821de2/14019-1954-1970-transport-cars-bmw-logo-1954-1970.gif"
                  alt="bmw"
                />
              </Link>

              <MenuMain />

              <Link to="/models" className="nav_a">
                Models
              </Link>
              <Link to="/shoping" className="nav_a" href="">
                Shoping
              </Link>
              <Link to="/card">
                <a className="nav_a" href="">
                  Raritet
                </a>
              </Link>

              {currentUser === "bekbolsun@gmail.com" ? (
                <Link to="/admin" className="nav_a" href="">
                  Admin
                </Link>
              ) : null}
            </div>
            <div className="navbar_block2">
              <Link to="/cart">
                <Badge count={+cartLength}>
                  <ShoppingCartOutlined className="log" />
                </Badge>
              </Link>
              <Link to="/fav">
                <Badge count={+favLength1}>
                  <HeartOutlined className="log" />
                </Badge>
              </Link>
              <Link to="/auth">
                <UserOutlined className="log" />
              </Link>
              <CustomerServiceOutlined
                className="log "
                onClick={() => setMusic(true)}
              />
              {music ? (
                <div
                  className="music"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <audio
                    className="music1"
                    style={{
                      backgroundColor: "black",
                      width: "100px",
                      height: "20px",
                      marginTop: "40px",
                    }}
                    controls
                    autoPlay
                  >
                    <source
                      autoPlay
                      src="https://ytune.net/uploads/files/2020-06/future-mask-off-ablaikan-remix_(ytune.net).mp3"
                    ></source>
                  </audio>
                  <CloseOutlined
                    style={{
                      fontSize: "20px",
                      color: "white",
                      cursor: "pointer",

                      fontWeight: "bold",
                    }}
                    onClick={() => setMusic(false)}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
