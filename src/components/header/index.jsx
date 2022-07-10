import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header(props) {
  const [homeButton, setHomeButton] = useState(false);

  const someStyle = {
    "--mainColor": props.mainColor,
    "--complementaryColor": props.complementaryColor,
  };

  useEffect(() => {}, []);

  function normalizeColors() {
    someStyle = {
      "--mainColor": "rgb(255,255,255)",
      "--complementaryColor": "rgb(220, 220, 220)",
    };
  }

  function showHomeButton(show) {
    setHomeButton(show);
    console.log(showHomeButton);
  }

  return (
    <div className="Header--main">
      <div className="Name"></div>

      <ul>
        {homeButton && (
          <li className="ReadyButtons">
            <Link
              to="/portfolio/"
              onClick={normalizeColors}
              onClick={() => showHomeButton(false)}
              style={someStyle}
            >
              Home
            </Link>
          </li>
        )}
        <li className="ReadyButtons">
          <Link
            to="/portfolio/projects"
            onClick={() => showHomeButton(true)}
            style={someStyle}
          >
            Projects
          </Link>
        </li>
        {/*
        <li className="ReadyButtons">
          <Link
            to="/portfolio/aboutme"
            onClick={() => showHomeButton(true)}
            style={someStyle}
          >
            About me
          </Link>
        </li>*/}
      </ul>
    </div>
  );
}

export default Header;
