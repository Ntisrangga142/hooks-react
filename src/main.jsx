import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/templates/Header";
import LoginProvider from "./contexts/Login/LoginProvider";
import TodoProvider from "./contexts/TodoList/TodoProvider";
import Todo from "./components/pages/Todo.jsx";
import Router from "./Router.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProvider>
      <LoginProvider>
        {/* <Header /> */}
        {/* <Todo /> */}
        <Router />
      </LoginProvider>
    </TodoProvider>
  </StrictMode>
);
