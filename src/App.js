import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { WelcomeScreen } from './containers/WelcomeScreen'
import { GameScreen } from './containers/GameScreen'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className = 'bg'>
      <BrowserRouter>
         <Switch>
           <Route exact path = "/" component  = { WelcomeScreen } />
           <Route exact path = "/game" component  = { GameScreen } />
         </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
