import axios from "axios";
import React, { useReducer } from "react";
const API = "http://localhost:8000/comments";
export const commentContext = React.createContext();

const INIT_STATE = {
  comments: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_COMMENT":
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};
const ContextCommentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function getComments() {
    let { data } = await axios.get(API);
    dispatch({
      type: "GET_COMMENT",
      payload: data,
    });
  }
  async function addComment(newObj) {
    await axios.post(API, newObj);
    getComments();
  }
  async function deleteComment(id) {
    await axios.delete(`${API}/${id}`);
    getComments();
  }
  return (
    <commentContext.Provider
      value={{
        comments: state.comments,
        getComments,
        addComment,
        deleteComment,
      }}
    >
      {children}
    </commentContext.Provider>
  );
};
export default ContextCommentProvider;
