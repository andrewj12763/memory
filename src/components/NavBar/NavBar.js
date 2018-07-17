import React from "react";
import "./NavBar.css";

const NavBar = props => (
<div className="navbar">
    <div className="logo">
      Memory Game
    </div>
    <div className="navMessage">{props.navMessage}</div>
    <div className="score">
      <p>Score: {props.score}</p>
      <p>High Score: {props.highScore}</p>
    </div>
  </div>
);

export default NavBar;