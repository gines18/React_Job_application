import React from "react";
import logo from "../assets/logo2.jpg";
import "./Header.css";

function Header() {
  return (
    <header id="header">
      <div>
        {" "}
        <img src={logo} alt="logo" id="logo" />
      </div>
      <div>
        <div className="tracking-in-contract-bck">
          <h1>APPLY</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
