import React, { useState } from 'react';
import {Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import AnimalsContainer from './Animals-container/Animals-container'
import LandingPage from './LandingPage/landingpage';

function App() {

  // const [showLanding, setShowLanding] = useState('true')
  // const disableModal = () => {
  //   setShowLanding(false)
  // }

  return (
    <div className="App">
      <h1 className ="logo">Petful</h1>
      <hr/>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/adopt" component={AnimalsContainer} />
      </Switch>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
