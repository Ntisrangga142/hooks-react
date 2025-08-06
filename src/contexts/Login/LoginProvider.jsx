import { useState } from "react";
import  LoginContext  from "./loginContext.js";

const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleLogin = () => {
    setIsLogin((isLogin) => {
      if (!isLogin) return true;
      return false;
    });
  };
  return <LoginContext.Provider value={{ isLogin, toggleLogin }}>{children}</LoginContext.Provider>;
};

export default LoginProvider;
