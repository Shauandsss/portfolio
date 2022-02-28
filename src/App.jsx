import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";


import './App.css';
import Header from './components/header'
import MainFrame from './components/mainFrame'
import Contact from './components/contact'
import Projects from './components/projects'

function App() {


  const[r, setR] = useState(255);
  const[g, setG] = useState(255); 
  const[b, setB] = useState(255);  
  const[complementaryColor, setComplementaryColor] = useState(''); 

  const setRandomColor = () => {
      setR(Math.floor(Math.random() * (245 - 10 + 1) + 10))
      setG(Math.floor(Math.random() * (245 - 10 + 1) + 10))
      setB(Math.floor(Math.random() * (245 - 10 + 1) + 10))
      setComplementaryColor('rgb(' + (255-r) + ',' + (255-g) + ',' + (255-b) + ')')
  }

  return (
    <div className="App">
      <Router>

        <Route path='/'>
          <Header mainColor={"rgb(" + r + ', ' + g + ', ' + b + ")" } complementaryColor = {complementaryColor}/>
        </Route>

        <Route exact path="/portfolio/">
          <MainFrame func={setRandomColor} mainColor={"rgb(" + r + ', ' + g + ', ' + b + ")" } complementaryColor={complementaryColor}/>      
        </Route>

        <Route exact path="/portfolio/projects">
          <Projects mainColor={"rgb(" + r + ', ' + g + ', ' + b + ")" } complementaryColor={complementaryColor}/>      
        </Route>

        <Contact path="*"  mainColor={"rgb(" + r + ', ' + g + ', ' + b + ")" } complementaryColor = {complementaryColor}></Contact>

      </Router>
    </div>
  );
}

export default App;
