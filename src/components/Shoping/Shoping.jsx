import {
  DownOutlined,
  FileSearchOutlined,
  HeartOutlined,
  SearchOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { carContext } from "../../context/contextCar";
import Filters from "../Filters/Filters";
import Navbar from "../Navbar/Navbar";
import "./Shoping.css";
import ShopingCart from "./ShopingCart";

const Shoping = () => {
  const [brand, setBrand] = useState([]);
  const [price, setPrice] = useState([1, 1000000]);
  const { car, getCar, pages } = useContext(carContext);
  const [modal, setModal] = useState(false);
  const [searchParams, setSearchparams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(1);
  const [fil, setFil] = useState(false);
  const [limit, setLimit] = useState(6);
  useEffect(() => {
    setSearchparams({
      q: search,
      _limit: limit,
      _page: page,
      brand: brand,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, page, brand, price, limit]);
  useEffect(() => {
    getCar();
  }, [searchParams]);
  useEffect(() => {
    getCar();
  }, []);

  return (
    <>
      <div className="main_shoping1">
        <Navbar />
        <div className="shop_dream">
          <div className="dream_h11">
            <span className="dream_h1">
              Your Dreams <br />
              Start Here
            </span>

            <a className="a_shop" href="#part1">
              <DownOutlined
                className="down"
                style={{
                  fontSize: "60px",
                  color: "white",
                  fontWeight: "bold",
                  marginTop: "30px",
                  cursor: "pointer",
                }}
              />
            </a>
          </div>
          <div></div>
        </div>
      </div>
      <div className="main_shoping">
        <div className="shop_search">
          <div className="fuck">
            <SearchOutlined
              onClick={() => setModal(!modal)}
              style={{
                color: "white",
                fontSize: "30px",
                cursor: "pointer",
                marginBottom: "20px",
              }}
            />
            {modal ? (
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="Search...."
                className="shop_inp"
                type="text"
              />
            ) : null}
          </div>

          <div className="fuck1">
            <FileSearchOutlined
              onClick={() => setFil(!fil)}
              style={{ fontSize: "30px", color: "white", alignItems: "center" }}
            />
            {fil ? (
              <Filters
                className="file"
                brand={brand}
                setBrand={setBrand}
                price={price}
                setPrice={setPrice}
              />
            ) : null}
          </div>
        </div>
        <div className="main_shoping_inner">
          {car.map((item) => (
            <ShopingCart item={item} key={item.id} />
          ))}
        </div>
        <div className="pagination">
          <button
            className="prev"
            disabled={page === 1 ? true : false}
            onClick={() => setPage(page - 1)}
          >
            prev
          </button>
          <span style={{ color: "white" }}>{page}</span>
          <button
            className="next"
            disabled={page === limit ? true : false}
            onClick={() => setPage(page + 1)}
          >
            next
          </button>
        </div>
      </div>
    </>
  );
};

export default Shoping;
