import axios from "axios";
import React, { useReducer } from "react";
export const carContext = React.createContext();
const API = "http://localhost:8000/cars";
const INIT_STATE = {
  car: [],
  oneCar: null,
  pages: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CAR":
      return {
        ...state,
        car: action.payload,
        pages: Math.ceil(action.payload["x-total-count"] / 2),
      };
    case "GET_ONE":
      return {
        ...state,
        oneCar: action.payload,
      };
    default:
      return state;
  }
};

const CarContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function getCar() {
    let { data } = await axios.get(API + window.location.search);
    dispatch({
      type: "GET_CAR",
      payload: data,
    });
  }
  async function addCar(newObj) {
    await axios.post(API, newObj);
    getCar();
  }
  async function getOneCar(id) {
    let { data } = await axios.get(`${API}/${id}`);
    console.log(data);
    dispatch({
      type: "GET_ONE",
      payload: data,
    });
  }
  async function deleteCar(id) {
    await axios.delete(`${API}/${id}`);
    getCar();
  }
  async function updateCar(id, edited) {
    await axios.patch(`${API}/${id}`, edited);
    getCar();
  }
  async function commenter(id, comments) {
    await axios.patch(`${API}/${id}`, { comment: comments });
    getOneCar(id);
  }

  return (
    <carContext.Provider
      value={{
        car: state.car,
        pages: state.pages,
        oneCar: state.oneCar,
        getOneCar,
        addCar,
        getCar,
        deleteCar,
        updateCar,
        commenter,
      }}
    >
      {children}
    </carContext.Provider>
  );
};
export default CarContextProvider;
