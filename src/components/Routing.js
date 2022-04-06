import { Menu } from "antd";
import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { authContext } from "../context/authContext";
import Admin from "./Admin/Admin";
import Auth from "./Auth/Auth";
import Buy from "./Buy/Buy";
import Cart from "./Cart/Cart";
import Details from "./Details/Details";
import Edit from "./Edit/Edit";
import ElectroCar from "./ElectroCar/ElectroCar";
import Fav from "./Fav/Fav";
import Main from "./Main/Main";
import Models from "./Models/Models";
import Navbar from "./Navbar/Navbar";
import Shoping from "./Shoping/Shoping";
import Card from "./Card/Card";
const Routing = () => {
  const { currentUser } = useContext(authContext);
  const ADMIN_EMAIL = "bekbolsun@gmail.com";
  console.log(currentUser);
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/buy" element={<Buy />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<ElectroCar />} />
          {currentUser === ADMIN_EMAIL ? (
            <Route path="/admin" element={<Admin />} />
          ) : null}

          <Route path="/main" element={<Main />} />
          <Route path="/models" element={<Models />} />
          <Route path="/fav" element={<Fav />} />
          <Route path="/shoping" element={<Shoping />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
