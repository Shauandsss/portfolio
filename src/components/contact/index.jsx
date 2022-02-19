import './contact.scss'
import React, { useEffect, useState } from 'react'
import linkedinLogo from '../../images/LinkedIn_Logo.svg-w.png'
import gitHubLogo from '../../images/GitHub-Emblem-w.png'
import gmailLogo from '../../images/gmail-logo-1-1-w.png'

function Contact ( props ) {

    const[showContacts, setShowContacts] = useState(false);

    useEffect(() => {

    }, []);

    function visibilityContacts () {
        setShowContacts(showContacts ? false : true)
    }

    return (
        <div className="container" id='c0'>
            <div style={{
                          color: props.complementaryColor,
                          textShadow: '4px 4px 4px ' + props.MainColor,
                          boxShadow: '4px 4px 4px ' + props.MainColor}}  onMouseEnter={visibilityContacts} className='item main-item' content={showContacts ? 'Chat me, gonna be a pleasure' : 'Wanna talk to me?'}>
            </div>
            {<div className='itens' style={{transition: '1s all ease',
                          opacity: showContacts ? '1' : '0',
                          visibility: showContacts ? 'visible' : 'hidden'}}>
                <a target="_blank" href='https://www.linkedin.com/in/shauan-santos-b04459187/' >
                    <div className='item i-1'>
                        <img src={linkedinLogo} alt="" />
                    </div>
                </a>
                <a target="_blank" href='https://github.com/Shauandsss'>
                    <div className='item i-2'>
                        <img src={gitHubLogo} alt="" />
                    </div>
                </a>
                <a target="_blank" href="mailto:shauandss@gmail.com">
                    <div  className='item i-3'>
                        <img src={gmailLogo} alt="" />
                    </div>
                </a>
            </div>}
        </div>
    );
  }
  
  export default Contact;
  
