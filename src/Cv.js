import Css from "./cv.css";
import JsonData from "./cv.json";

function Cv() {

  return (
    <main>
    <section className="TextSections">
      <h2>Mina Utbildningar</h2>
      <ul className="CvListItems">
        <li>{JsonData[0].Utbildning1}</li>
        <li>{JsonData[1].Utbildning2}</li>
        <li>{JsonData[2].Utbildning3}</li>
        <li>{JsonData[3].Utbildning4}</li>
      </ul>
    </section>

    <section className="TextSections">
      <h2>Mina jobberfarenheter</h2>
      <ul className="CvListItems">
        <li>{JsonData[4].Arbetserfarenheter1}</li>
        <li>{JsonData[5].Arbetserfarenheter2}</li>
        <li>{JsonData[6].Arbetserfarenheter3}</li>
        <li>{JsonData[7].Arbetserfarenheter4}</li>
        <li>{JsonData[8].Arbetserfarenheter5}</li>
      </ul>
    </section>
  </main>
  );
}

export default Cv;