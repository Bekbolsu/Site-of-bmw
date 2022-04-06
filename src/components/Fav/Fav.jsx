import { CommentOutlined } from "@ant-design/icons";
import { Button, List, message } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { commentContext } from "../../context/commentContext";
import { favContext } from "../../context/favContext";
import Navbar from "../Navbar/Navbar";
import "./Fav.css";

const Fav = () => {
  const { getCart2, fav, deleteFromCart, changeProductCount } =
    useContext(favContext);
  useEffect(() => {
    getCart2();
  }, []);
  return (
    <div className="mainestFav">
      <Navbar />
      <div className="main_fav">
        <div className="container1">
          <List
            itemLayout="horizontal"
            dataSource={fav.favorite}
            renderItem={(item) => (
              <List.Item
                extra={
                  <img className="img_cart1" src={item.item.img} alt="img" />
                }
              >
                <List.Item.Meta
                  title={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <h3>{item.item.name}</h3>
                        <h4>{item.item.model}</h4>
                      </div>
                    </div>
                  }
                  description={
                    <>
                      <div>{item.item.description}</div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "40%",
                          marginTop: "20px",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "30vw",
                          paddingBottom: "40px",
                        }}
                      >
                        <Button onClick={() => deleteFromCart(item.item.id)}>
                          Remove from cart
                        </Button>
                      </div>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Fav;
