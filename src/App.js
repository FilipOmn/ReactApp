import logo from './logo.svg';
import './App.css';
import Cv from "./Cv";
import About from "./About";
import Contact from './Contact';
import Wcag from './Wcag';
import Portfolio from './Portfolio';
import Popup from './Popups/Popup';
import Navbar from './Navbar';
import { useState } from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {

  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <HashRouter>
    <div className="App">
     <Navbar />
      <Switch>
        <Route exact path="/">
           <Cv />
        </Route>
         <Route path="/About">
           <About />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Portfolio">
          <Portfolio />
        </Route>
          <Route path="/Wcag">
        <Wcag />
       </Route>
     </Switch>
     <button id='PopupBtn' onClick={() => setButtonPopup(true)}></button>
     <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      <h3>hehe</h3>
     </Popup>
   </div>
  </HashRouter>
  );
}

export default App;
