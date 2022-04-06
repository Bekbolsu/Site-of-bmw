import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="main_block1">
          <h1 className="main_h1">
            Your Moment <br /> Has Arrived
          </h1>
          <h2 className="main_h2">The All Electric BMW I7 Sedan</h2>

          <button className="main_btn">Learn More</button>
        </div>
        <div className="main_block2">
          <h3 className="main_h3">The Ultimate Electric Driving Machine</h3>
        </div>
      </div>
    </div>
  );
};

export default Main;
