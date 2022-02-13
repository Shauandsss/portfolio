import React, { useEffect, useState } from 'react'
import './App.css';
import Header from './components/header'
import MainFrame from './components/mainFrame'
import Scroll from './components/scroll'
import pointer from './images/pointer.png';

function App() {
  /*const[scrollNumber, setScrollNumber] = useState(0) 
  useEffect (() => {
    document.getElementById('c'+scrollNumber).scrollIntoView({ block: 'end',  behavior: 'smooth' })
  }, [scrollNumber])


  function increase () {
    setScrollNumber(scrollNumber < 9 ? scrollNumber + 1 : scrollNumber)

  }
  
  function decrease () {
    setScrollNumber(scrollNumber == 0 ? 0 : scrollNumber-1)

  }*/

  const[r, setR] = useState(0);
  const[g, setG] = useState(0); 
  const[b, setB] = useState(0);  
  const[complementaryColor, setComplementaryColor] = useState(''); 

  useEffect (() => {
      /*console.log('rgba(' + 'rgb(' + r + ',' + g + ',' + b + ')' + ', .7)')
      console.log(complementaryColor)*/
    }, [r,g,b])

  const setRandomColor = () => {
      setR(Math.floor(Math.random() * (255 - 0 + 1) + 0))
      setG(Math.floor(Math.random() * (255 - 0 + 1) + 0))
      setB(Math.floor(Math.random() * (255 - 0 + 1) + 0))
      setComplementaryColor('rgb(' + (255-r) + ',' + (255-g) + ',' + (255-b) + ')')
  }

  return (
    <div className="App">
        {/*<img
          alt='pointer Down' 
          className='pointer pointerDown' 
          src={pointer} 
          onClick={decrease}
          style={{opacity: (scrollNumber == 0 ? 0 : 1)}}
        />

        <img
          alt='pointer Up' 
          className='pointer pointerUp' 
          src={pointer} 
          onClick={increase}    
        />*/}

      <Header mainColor={"rgb(" + r + ', ' + g + ', ' + b + ")" } complementaryColor = {complementaryColor}/>
      <MainFrame func={setRandomColor} mainColor={"rgb(" + r + ', ' + g + ', ' + b + ")" } complementaryColor={complementaryColor}/>
      
      {/*<Scroll scroll={scrollNumber} />*/}
      
    </div>
  );
}

export default App;
