import React, { useContext } from "react";
import { Select, Slider } from "antd";
import { carContext } from "../../context/contextCar";
import "./Filters.css";

const Filters = ({ brand, setBrand, price, setPrice }) => {
  const { car } = useContext(carContext);
  return (
    <div className="select">
      <Select
        value={brand}
        onChange={(e) => setBrand(e)}
        placeholder="Filter by brand"
        style={{ width: "100%" }}
        allowClear
        mode="multiple"
      >
        {car.map((item) => (
          <Select.Option key={item.id} value={item.name}>
            {item.name}
          </Select.Option>
        ))}
      </Select>
      <Slider
        className="slide"
        value={price}
        onChange={(e) => setPrice(e)}
        defaultValue={[1, 100000]}
        min={0}
        max={100000}
        step={100}
        range
      />
    </div>
  );
};

export default Filters;
