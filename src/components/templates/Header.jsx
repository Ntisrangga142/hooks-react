import React, { useContext } from "react";
import { Link } from "react-router";
import LoginContext from "../../contexts/Login/loginContext.js";


function Header() {
    const {isLogin, toggleLogin} = useContext(LoginContext)

  return (
    <header className="bg-white border-b border-[#DEDEDE] w-full h-[104px] flex flex-row justify-between items-center px-[130px] py-0">
      <Link to="/" className="hover:underline cursor-pointer">E-Commerce</Link>
      <Link to="/todo" className="hover:underline cursor-pointer">Todo</Link>

      <button onClick={() => (toggleLogin())} className="cursor-pointer hover:bg-[#1D4ED8] hover:text-white border border-[#1D4ED8] text-[#1D4ED8] font-normal text-sm tracking-[0.75px] rounded-[5px] no-underline px-[18px] py-[12px]" to="/login">
        {isLogin? "Log In" : "Log Out"}
      </button>
    </header>
  );
}

export default Header;
