import { useReducer } from "react";

import {TodoContext} from "./todoContext.js";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          name: action.value.name,
          status: false,
        },
      ];

    case "TOOGLE_TODO":
      return state.map((todo, index) =>
        index === action.value.index
          ? { ...todo, status: !todo.status }
          : todo
      );

    case "DELETE_TODO":
      return state.filter((_, index) => index !== action.value.index);

    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
