import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <h1 className="logo">
        <a href="/">Logo</a>
      </h1>
      <ul className="main-nav">
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
