import Css from "./cv.css";

function Contact() {

  function changeBackground() {
    document.body.style.background = "url(https://images.wallpaperscraft.com/image/single/pineapple_fruit_ripe_116106_1920x1080.jpg)";
  }
  
  function triggerBackgroundChange(){
    localStorage.setItem("VarKey", Var_1);
    console.log(VarStored);
    changeBackground();
  }
  
  function backgroundOnLoad(){
    console.log(VarStored);
    if(VarStored === "a"){
      changeBackground();
    }
  }
  
  function revertBackgroundChange(){
    localStorage.setItem("VarKey", Var_2);
    document.body.style.background = "";
  }
  
  var Var_1 = "a";
  var Var_2 = "b";
  
  var VarStored = localStorage.getItem("VarKey");

  return (
    <main>
    <section className="TextSections">
      <h2>Mina Kontaktuppgifter</h2>
      <p onClick={triggerBackgroundChange}>Mail: NågonsGmail@gmail.com</p>
      <p onClick={revertBackgroundChange}>Telefån: 076 123 45</p>
    </section>
  </main>
  );
}

export default Contact;