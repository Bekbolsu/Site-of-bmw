import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { carContext } from "../../context/contextCar";
import Navbar from "../Navbar/Navbar";
import "./Edit.css";

const Edit = () => {
  const { getOneCar, oneCar, updateCar } = useContext(carContext);

  const [edit, setEdit] = useState(oneCar);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    getOneCar(params.id);
  }, []);
  useEffect(() => {
    setEdit(oneCar);
  }, [oneCar]);
  function handleInp(e) {
    let newCar = {
      ...edit,
      [e.target.name]: e.target.value,
    };
    setEdit(newCar);
  }

  return (
    <>
      {edit ? (
        <div className="edit">
          <Navbar />
          <div className="modalofedit">
            <div className="modalofedit_inner">
              <input
                name="name"
                className="edit_inp"
                type="text"
                value={edit.name}
                onChange={handleInp}
              />
              <input
                name="price"
                className="edit_inp"
                onChange={handleInp}
                type="text"
                value={edit.price}
              />
              <input
                name="img"
                className="edit_inp"
                onChange={handleInp}
                type="text"
                value={edit.img}
              />
              <button
                onClick={() => {
                  updateCar(params.id, edit);
                  navigate("/admin");
                }}
                className="edit_btn1"
              >
                Save
              </button>
              <Link to="/admin">
                <button className="edit_btn2">Close</button>
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default Edit;
