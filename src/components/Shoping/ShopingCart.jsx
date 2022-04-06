import {
  CommentOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { favContext } from "../../context/favContext";

const ShopingCart = ({ item }) => {
  const { addProductToCart, checkItemInCard } = useContext(cartContext);
  const [checkItem, setCheckItem] = useState(checkItemInCard(item.id));
  const { addProductToCart2, checkItemInCard2 } = useContext(favContext);
  const [checkItem2, setCheckItem2] = useState(checkItemInCard2(item.id));

  return (
    <div>
      <div className="card_shop" key={item.id}>
        <div>
          <h1 id="part1" className="shop_h1">
            {item.name}
          </h1>
          <h3 className="shop_h3">Price : {item.price}</h3>
        </div>
        <div
          style={{ display: "inline-block", overflow: "hidden" }}
          className="img_main_shop"
        >
          <img className="img_shop" width="270px" src={item.img} alt="" />
        </div>
        <div style={{ marginTop: "20px" }} className="btnlogo">
          <HeartOutlined
            onClick={() => {
              addProductToCart2(item);
              setCheckItem2(checkItemInCard2(item.id));
            }}
            style={{ fontSize: "25px", color: checkItem2 ? "red" : "black" }}
          />

          <ShoppingOutlined
            key="icon-cart"
            onClick={() => {
              addProductToCart(item);
              setCheckItem(checkItemInCard(item.id));
            }}
            style={{ fontSize: "25px", color: checkItem ? "red" : "black" }}
          />

          <Link to={`/details/${item.id}`}>
            <button className="shop_delete">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
