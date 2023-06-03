import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image1 from "../Pictures/Screenshot_20230529-023821_Photo Editor Pro - Polish.jpg";

const Home = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="image1">
          <img src={Image1} alt="Kép leírása" />
        </div>
        <div className="text1">
          <h1>Nails Vera</h1>
          <p>
            A szenvedély, a professzionalizmus, a minőség, a melegség azok a
            szavak, amelyek a legjobban kifejezik a Nails by Vera szalon
            élményét.
          </p>
        </div>
      </div>
      <div className="marquee-container">
        <div className="marquee">
          <span>
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </span>
          <span>
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </span>
          <span>Kostka Nail System</span>
          <span>YTS Beauty Lab</span>
          <span>Jewerlyen</span>
          <span>Crystal Nails</span>
          <span>Lush</span>
        </div>
      </div>

      <div className="container2">
        <div className="image2">
          <img src={Image1} alt="Kép leírása" />
        </div>
        <div className="text2">
          <h1>Szalon Manikűr - Pedikűr, Szentendre</h1>
          <p>
            Üdvözöljük a Nails by Vera, a szentendrei körömszalonban, amely
            büszke arra, hogy a város legjobb manikűr és pedikűr szolgáltatásait
            kínálja! Profi csapatunk készen áll arra, hogy felejthetetlen
            élményt nyújtson Önnek. A körömkezelések széles választékát
            kínáljuk, amelyek garantálják az egészséges és szép körmöket. Akár
            klasszikus manikűrre, akár gyors körömkezelésre vágyik, akkor is
            professzionális eredményt Érhet el, ha a klasszikus szolgáltatásokat
            választja. Azért vagyunk itt, hogy segítsünk ötleteket készíteni és
            kiválasztani az igényeinek leginkább megfelelő megoldást. Jöjjön el
            és lazítson egy kényelmes és kellemes légkörben, miközben
            megcsinálja körmeit. Szentendre legjobb körömszalonjában. Engedje
            meg, hogy elkényeztessük, és segítünk, hogy távozáskor széles mosoly
            legyen az arcán. Az időpont egyeztetés gyors és egyszerű, ezért ne
            habozzon kapcsolatba lépni velünk, hogy időpontot foglaljunk még
            most!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
