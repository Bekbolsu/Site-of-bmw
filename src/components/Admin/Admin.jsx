import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { carContext } from "../../context/contextCar";
import "./Admin.css";
import Navbar from "../Navbar/Navbar";

const Admin = () => {
  const { addCar } = useContext(carContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const { car, deleteCar, getCar } = useContext(carContext);

  useEffect(() => {
    getCar();
  }, []);
  function add() {
    let newObj = {
      name,
      price,
      img,
      comment: [],
    };
    setImg("");
    setName("");
    setPrice("");

    if (!name || !price || !img) {
      return alert("Fill in");
    } else {
      alert("You successfully added a car");
      addCar(newObj);
    }
  }
  return (
    <>
      <div className="main_admin">
        <Navbar />
        <div className="main_admin1">
          <div className="main_admin_inner">
            <div className="admin_add">
              <h1 className="admin_h1">Welcome Admin!</h1>
              <div className="admin_crud">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="admin_inp"
                  type="text"
                  placeholder="Name"
                />
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  className="admin_inp"
                  type="number"
                  placeholder="Price"
                />

                <input
                  onChange={(e) => setImg(e.target.value)}
                  value={img}
                  className="admin_inp"
                  type="text"
                  placeholder="URL of image"
                />

                <button onClick={() => add()} className="admin_btn_add">
                  Add Car
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="list_of_card">
        <div className="main_list">
          {car.map((item) => (
            <div className="admin_list" key={item.id}>
              <h1 className="list_h1">{item.name}</h1>
              <h2 className="list_h2">{item.price}</h2>
              <img className="admin_img" src={item.img} alt="" />
              <div
                className="
              list_buttons"
              >
                <button
                  onClick={() => deleteCar(item.id)}
                  className="list_delete "
                >
                  Delete
                </button>
                <Link to={`/edit/${item.id}`}>
                  <button className="list_edit">Edit</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Admin;
