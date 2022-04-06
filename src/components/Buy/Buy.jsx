import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Buy.css";
const Buy = () => {
  const [code, setCode] = useState("");
  const [m, setM] = useState("");
  const [y, setY] = useState("");
  const [c, setC] = useState("");
  function handle() {
    if (!m || !y || !c || !code) {
      alert("Fill in");
    } else {
      alert("You order will be in 3days");
    }
    setCode("");
    setC("");
    setM("");
    setY("");
  }

  return (
    <div className="buy_main">
      <Navbar />
      <div>
        <div
          className="buy_main_inner"
          style={{
            display: "flex",
            width: "500px",
            flexDirection: "column",

            alignItems: "center",
          }}
        >
          <div className="buy_inner_main">
            <div style={{ width: "400px" }} className="card_buy">
              <h3
                style={{
                  borderBottom: "2px solid black",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                PAYMENT WITH CARD
              </h3>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h4 style={{ margin: "10px" }}>MasterCard</h4>
                <h4 style={{ margin: "10px" }}>Maestro</h4>
                <h4 style={{ margin: "10px" }}>Visa</h4>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "30px",
              }}
            >
              <h4>Number of Card</h4>
              <input
                onChange={(e) => setCode(e.target.value)}
                value={code}
                style={{ width: "290px" }}
                type="number"
              />
            </div>
            <div style={{ display: "flex", marginTop: "20px" }}>
              <div>
                <h4>Validity</h4>
                <input
                  onChange={(e) => setM(e.target.value)}
                  value={m}
                  style={{ width: "60px", border: "1px solid black" }}
                  type="text"
                  placeholder="MM"
                />
                <input
                  onChange={(e) => setY(e.target.value)}
                  value={y}
                  style={{ width: "60px", border: "1px solid black" }}
                  type="text"
                  placeholder="YY"
                />
              </div>
              <div style={{ marginLeft: "100px" }}>
                <h4>Code</h4>
                <input
                  onChange={(e) => setC(e.target.value)}
                  value={c}
                  placeholder="CVC"
                  type="text"
                  style={{ width: "70px", border: "1px solid black" }}
                />
              </div>
            </div>
            <button onClick={() => handle()} className="buy_btn">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
