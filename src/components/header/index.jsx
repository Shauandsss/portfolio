import React, { useState, useEffect } from 'react'
import './header.css'
import { Link } from "react-router-dom";

function Header( props ) {

    const[homeButton, setHomeButton] = useState(true);

    const someStyle = {
      '--mainColor': props.mainColor, 
      '--complementaryColor': props.complementaryColor
    }

    useEffect (() => {
    }, [])

    function normalizeColors () {
      someStyle = {
        '--mainColor': 'rgb(255,255,255)', 
        '--complementaryColor': 'rgb(220, 220, 220)'
      }  
    }

    function showHomeButton(show) {
      setHomeButton(show);
      console.log(showHomeButton)
    }

    return (
      <div className="Header--main" >
        <div className='Name'></div>
    
        <ul>{homeButton && 
          <li className='ReadyButtons' > 
              <a href="/portfolio/" onClick={normalizeColors} onClick={() => showHomeButton(false)} style={someStyle}>Home</a>
          </li>}   
          <li className='ReadyButtons' > 
              <a href="/portfolio/projects" onClick={() => showHomeButton(true)} style={someStyle}>Projects</a>
          </li>   
          <li className='notReadyButtons'>  
            <a style={someStyle} target="_blank" title="About me"></a>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Header;
  