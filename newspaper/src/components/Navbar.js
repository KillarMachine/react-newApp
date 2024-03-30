import React, { useState } from "react";
import PropTypes from "prop-types";
export default function NavBar(p) {
  let btn = {
    border: "2px solid gray",
  };
  return (
    <header>
      <div className="logo">
        <img src={p.imgSrc} />
        <span>{p.title}</span>
      </div>
      <nav>
        <li>
          <a href={p.btn1}>{p.btn1}</a>
        </li>
        <li>
          <a href={p.btn2}>{p.btn2}</a>
        </li>
        <li>
          <a href={p.btn3}>{p.btn3}</a>
        </li>
        <li id="new">
          <a href={p.btn4}>{p.btn4}</a>
        </li>
      </nav>
      <div className="form-check form-switch mode">
        <input
          type="checkbox"
          className="btn-check"
          id="btn-check"
          autoComplete="off"
        />
        <label
          className="btn btn-dark"
          htmlFor="btn-check"
          onClick={p.invertor}
          style={btn}
        >
          Dark Mode
        </label>
      </div>
    </header>
  );
}
NavBar.defaultProps = {
  title: "Title",
  btn1: "btn1",
  btn2: "btn2",
  btn3: "btn3",
  btn4: "btn4",
  imgSrc: "images/logo.png",
};
NavBar.propTypes = {
  title: PropTypes.string,
  btn1: PropTypes.string,
  btn2: PropTypes.string,
  btn3: PropTypes.string,
  btn4: PropTypes.string,
  imgSrc: PropTypes.string,
};
