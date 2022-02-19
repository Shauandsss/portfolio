import React from 'react'
import './header.css'

function Header( props ) {
    const someStyle = {
      '--mainColor': props.mainColor, 
      '--complementaryColor': props.complementaryColor
    }

    return (
      <div className="Header--main" >
          <div className='Name'></div>

        {console.log(props.mainColor)}
        <ul>
          <li>
            <a style={someStyle}  target="_blank" title="Related works"></a>
          </li>
          <li>
            <a style={someStyle}  target="_blank" title="About me"></a>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Header;
  