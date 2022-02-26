import { Link } from "react-router-dom";
import Css from "./cv.css";

function Navbar() {

  let Timer;
  var Sequence = ['1', '2', '3', '4', '5'];
  var CurrentIndex = 0;
  
  var keyHandler = function (event){
    if (Sequence.indexOf(event.key) < 0 || event.key !== Sequence[CurrentIndex]){
      CurrentIndex = 0;
      return;
  }
    Timer = window.setTimeout(resetTimer, 4000);
    CurrentIndex++;
  
    if (Sequence.length === CurrentIndex){
      CurrentIndex = 0;
      document.getElementById("PopupBtn").click();
    }
  };
  
  function resetTimer(){
    console.log("okay");
    CurrentIndex = 0;
    window.clearTimeout(Timer);
  }
  
  document.addEventListener('keydown', keyHandler, false);

  return (
    <header className="MainHeader">
      <h1>Min CV Hemsida</h1>
      <nav>
        <Link className="NavOptions" to="/">Mitt CV</Link>
        <Link className="NavOptions" to="/About">Om mig</Link>
        <Link className="NavOptions" to="/Contact">Kontakt</Link>
        <Link className="NavOptions" to="/Portfolio">Portfolio</Link>
        <Link className="NavOptions" to="/Wcag">WCAG</Link>
      </nav>
  </header>
  );
}

export default Navbar;