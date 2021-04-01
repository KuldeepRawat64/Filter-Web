import React from "react";
// import { NavBtn, NavBtnLink } from "../components/Navbar/NavbarElements";
import "./style.css";

const Home = () => {
  return (
    <div>
      <section className="container">
        <h1>
          FLUTTER WEB. <br />
          THE BASICS
        </h1>
        <h4>
          This site teaches the CSS fundamentals that are used in any website's
          layout. I assume you already know what selectors, properties, and
          values are. And you probably know a thing or two about layout, though
          it may still be a rage-provoking activity for you. If you want to
          learn HTML and CSS from the
        </h4>
      </section>
      <section className="section">
        <button className="btn">Join Course</button>
      </section>
    </div>
  );
};

export default Home;
