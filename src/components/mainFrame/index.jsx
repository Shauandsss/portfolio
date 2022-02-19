import './mainFrame.scss'
import meImage from '../../images/Foto-web.png'
import React, { useEffect, useState } from 'react'

function Header( {func, mainColor, complementaryColor} ) {

    useEffect(() => {
        console.log('Calling func');
        func();
      }, []);

    return (
        <div className="mainFrame--main " id='c0'>
            {<div className='bg' style={{backgroundColor: 'rgba(' + (mainColor.replace('rgb(','')).replace(')', '') + ', .7)'}}></div>}
            <div className='meImage'>
                    <img src={meImage}/> 
            </div>
            <div className='texts' 
                 style={{color: complementaryColor,
                         textShadow: '4px 4px 4px ' + mainColor}}>
                <div className='title'>
                    Hi,<br/>
                    I'm Shauan,<br/>
                    web developer.<br/>
                </div>
                <div class='content'>
                    React js | Oracle db | Front end
                </div>
                
            </div>
            <div class='ball'>
                <div class='layer moving'>
                    <div class='layer gridplane xline'></div>
                    <div class='layer gridplane xline2'></div>
                    <div class='layer gridplane yline'></div>   
                    <div class='layer gridplane zline'></div>  
                </div> 
                <div class='layer clip'>
                    <div class='shade' 
                    style={{background: 'radial-gradient(at 60% 60%, ' + mainColor + ', ' + complementaryColor + ', ' + mainColor ,
                            transition: '2s all ease'
                                            }}> 
                    </div>
                </div>
            </div>
            <div class='ball2 '>
                <div class='layer2 moving'>
                    <div class='layer2 gridplane xline'></div>
                    <div class='layer2 gridplane xline2'></div>
                    <div class='layer2 gridplane yline'></div>   
                    <div class='layer2 gridplane zline'></div>  
                </div> 
                <div class='layer2 clip'>
                    <div class='shade' 
                    style={{background: 'radial-gradient(at 60% 60%, ' + mainColor + ', ' + complementaryColor + ', ' + mainColor ,
                            transition: '2s all ease'
                                            }}> 
                    </div>
                </div>
            </div>

            <div alt ='Change things'className='rainbow-button' 
            style={{backgroundColor: mainColor,
                    color: complementaryColor,
                    textShadow: '4px 4px 4px ' + mainColor,
                    transition: '1s all ease'}} onClick={func}>
            </div>
    </div>
    );
  }
  
  export default Header;
  
