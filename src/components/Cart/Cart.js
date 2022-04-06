import { CommentOutlined } from "@ant-design/icons";
import { Alert, Button, InputNumber, List, message, Modal } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";

const Cart = () => {
  const { getCart, cart, deleteFromCart, changeProductCount } =
    useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  return (
    <div className="mainestCart">
      <Navbar />
      <div className="cart">
        <div className="container">
          <List
            itemLayout="horizontal"
            dataSource={cart.products}
            footer={
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <h2> Total: {cart.totalPrice}</h2>{" "}
                <Link to="/buy">
                  <Button
                    className="buy_btn"
                    style={{ width: "200px", height: "40px" }}
                    type="primary"
                  >
                    BUY
                  </Button>
                </Link>
              </div>
            }
            renderItem={(item) => (
              <List.Item
                extra={
                  <img className="img_cart" src={item.item.img} alt="img" />
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
                      <h3>{"$" + item.item.price}</h3>
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
                      >
                        <div>
                          <h4>Quantity</h4>
                          <Button
                            onClick={() =>
                              changeProductCount(item.count - 1, item.item.id)
                            }
                          >
                            -
                          </Button>
                          <InputNumber disabled value={item.count} />
                          <Button
                            onClick={() =>
                              changeProductCount(item.count + 1, item.item.id)
                            }
                          >
                            +
                          </Button>
                        </div>
                        <div>
                          <h4>SubPrice</h4>
                          <h3> {"$" + item.subPrice}</h3>
                        </div>
                      </div>
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

export default Cart;
