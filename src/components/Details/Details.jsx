import { FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { carContext } from "../../context/contextCar";
import "./Details.css";
import Navbar from "../Navbar/Navbar";
import { authContext } from "../../context/authContext";

const Details = () => {
  const { currentUser } = useContext(authContext);

  const { oneCar, getOneCar, commenter, deleteCar } = useContext(carContext);
  const params = useParams();
  const [edit, setEdit] = useState(false);
  const [modal, setModal] = useState(false);
  const [inp, setInp] = useState({ comment: "" });

  useEffect(() => {
    getOneCar(params.id);
  }, []);

  useEffect(() => {
    setEdit(oneCar);
  }, [oneCar]);

  function comment(newComment) {
    let newObj = {
      ...newComment,
      userName: currentUser,
      id: Date.now(),
    };
    let newComments = [...oneCar.comment, newObj];
    console.log(newComments, "newcom");
    commenter(params.id, newComments);
  }

  console.log(oneCar, "car");
  return (
    <>
      {edit ? (
        modal ? (
          <div style={{ backgroundColor: "black" }}>
            <Navbar />
            <div className="main_modal1">
              <img className="modal_img" src={edit.img} />

              <FullscreenExitOutlined
                onClick={() => setModal(false)}
                style={{
                  fontSize: "30px",
                  cursor: "pointer",
                  color: "white",
                }}
              />
            </div>
          </div>
        ) : (
          <div className="mainestDetails">
            <Navbar />
            <div className="details">
              <div className="main_details"></div>
              <div className="main_details2">
                <h1 className="details_h1">We want to Tell You!</h1>
                <p className="details_p">
                  Your local BMW Center is here to help you find the perfect
                  offer on a Certified Pre-Owned BMW. Please enter your
                  information and a dealer will reach out to continue the
                  conversation.
                </p>
                <h2 className="details_h2">{edit.name}</h2>
                <h3 className="details_h3">{edit.price}</h3>
                <img className="details_img" src={edit.img} alt="" />

                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <div style={{ marginRight: "20px" }}>
                    <input
                      style={{ width: "100px" }}
                      value={inp.comment}
                      name="comment"
                      onChange={(e) =>
                        setInp({ ...inp, [e.target.name]: e.target.value })
                      }
                      type="text"
                    />
                    <button
                      className="comment_delete"
                      onClick={() => comment(inp)}
                    >
                      leave
                    </button>
                    <div className="main_comment">
                      {oneCar.comment.map((item) => (
                        <div
                          style={{ borderBottom: "1px solid white" }}
                          key={item.id}
                        >
                          <h4 style={{ color: "white" }}>{item.userName}</h4>
                          <h4 style={{ color: "white" }}>{item.comment}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                  <FullscreenOutlined
                    onClick={() => setModal(true)}
                    style={{
                      fontSize: "30px",
                      cursor: "pointer",
                      color: "white",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default Details;
