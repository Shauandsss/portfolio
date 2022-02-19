import './scroll.css'
//import biohazard from '../../images/biohazard.png'
//import backgroundC1 from '../../images/PNeQrc.png'
import React, { useEffect, useState } from 'react'

function Scroll() {

    const[bottleFill, setBottleFill] = useState(10) 

    useEffect (() => {
        
    }, [bottleFill])

    function fill () {
        setBottleFill(bottleFill < 100 ? bottleFill + 10 : bottleFill)
    }

    return (
        <div className="container">


            {/*<div>
                <div id='c1' className="container-item c1">
                    
                    <div className='bottle' onMouseOver={fill} >
                        
                        <div className='liquid' style={{height: bottleFill + "%"}} >
                    
                            <div class="bubbles" style={{opacity: bottleFill > 50? '1': '0'}}>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/88939/drop.png" class="bubble b2" />
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/88939/drop.png" class="bubble b5" />
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/88939/drop.png" class="bubble" />
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/88939/drop.png" class="bubble b6" />
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/88939/drop.png" class="bubble b3" />
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/88939/drop.png" class="bubble b7" />
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/88939/drop.png" class="bubble b4" />
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/88939/drop.png" class="bubble b8" />
                            </div>

                        </div>
                        
                       <img src={biohazard} className="logo-biohazard" />
                    </div>
                    <img src={backgroundC1} className="background"/>
            </div>


                <div id='c2' className="container-item c2"></div>
                <div id='c3' className="container-item c3"></div>
                <div id='c4' className="container-item c4"></div>
                <div id='c5' className="container-item c5"></div>
                <div id='c6' className="container-item c6"></div>
                <div id='c7' className="container-item c7"></div>
                <div id='c8' className="container-item c8"></div>
                <div id='c9' className="container-item c9"></div>
            </div>*/}
        </div>
    );
  }
  
  export default Scroll;
  
  /*
    A Art one;
    A Invention one;
    A Nordic one;
    A Greek
    A Vaporwave 
   
  */