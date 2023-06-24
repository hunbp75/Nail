import React, { useState } from "react";
import Modal from "react-modal";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image0 from "../Pictures/Main-bg.jpg";
import Image1 from "../Pictures/Screenshot_20230529-023821_Photo Editor Pro - Polish.jpg";
import Image2 from "../Pictures/Screenshot_20230529-024802_Photo Editor Pro - Polish.jpg";
import Manicure from "../Product/Manicure";
import Pedicure from "../Product/Pedicure";
import Nails from "../Product/Nails";
import Kids from "../Product/Kids";
import logo_1 from "../ContactUs/logo/logo_1.jpg";
import logo_2 from "../ContactUs/logo/logo_2.jpg";

const Home = () => {
  const [isManicureModalOpen, setManicureModalOpen] = useState(false);
  const [isPedicureModalOpen, setPedicureModalOpen] = useState(false);
  const [isNailsModalOpen, setNailsModalOpen] = useState(false);
  const [isKidsModalOpen, setKidsModalOpen] = useState(false);

  const openManicureModal = () => {
    setManicureModalOpen(true);
  };

  const closeManicureModal = () => {
    setManicureModalOpen(false);
  };

  const openPedicureModal = () => {
    setPedicureModalOpen(true);
  };

  const closePedicureModal = () => {
    setPedicureModalOpen(false);
  };

  const openNailsModal = () => {
    setNailsModalOpen(true);
  };

  const closeNailsModal = () => {
    setNailsModalOpen(false);
  };

  const openKidsModal = () => {
    setKidsModalOpen(true);
  };

  const closeKidsModal = () => {
    setKidsModalOpen(false);
  };

  return (
    <div className="main-container">
      <div className="bg-container">
        <div className="container">
          <div className="image0">
            <img src={Image0} alt="Kép leírása" />
          </div>
          <div className="text1">
            <h1>Nails by Vera</h1>
            <p>
              A szenvedély, a professzionalizmus, a minőség, a melegség azok a
              szavak, amelyek a legjobban kifejezik a Nails by Vera szalon
              élményét.
            </p>
          </div>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee">
          <span>
            <div className="logoContainer_home">
              <img id="logo_home" src={logo_2} alt=""></img>
              <img id="logo_home" src={logo_1} alt=""></img>
            </div>
          </span>
          <span>
            <FontAwesomeIcon icon={faFacebook} id="facebook" />{" "}
            <a
              href="https://www.facebook.com/your-facebook-page"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "black", textDecoration: "none" }}
            >
              Facebook
            </a>
          </span>
          <span>
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#E1306C" }} />{" "}
            <a
              href="https://www.instagram.com/your-instagram-page"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "black", textDecoration: "none" }}
            >
              Instagram
            </a>
          </span>{" "}
          <span> - </span>
          <span>Kostka Nail System</span>
          <span> - </span>
          <span>YTS Beauty Lab</span>
          <span> - </span>
          <span>Jewerlyen</span>
          <span> - </span>
          <span>Crystal Nails</span>
          <span> - </span>
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

      <div className="container3">
        <div className="image3">
          <img src={Image2} alt="Kép leírása" />
        </div>
        <div className="text3">
          <h1>Felejthetetlen köröm élmény</h1>
          <p>
            Az ügyfélszolgálat az első számú prioritásunk. Szeretnénk, ha minden
            ügyfelünk tökéletes manikűrrel vagy pedikűrrel, mosollyal az arcán
            távozna szalonunkból. Barátságos és jól képzett köröm technikus
            csapatunkat gondosan választották ki és képezték ki, hogy személyre
            szabott és professzionális élményt nyújtsanak az elejétől a végéig.
            Így Szentendrén elérhető kezeléseinknél a legmagasabb minőségi
            elvárásokra számíthatnak ügyfeleink
          </p>
        </div>
      </div>

      <div className="container4">
        <div className="section" onClick={openManicureModal}>
          <h4>Manikűr</h4>
          <p>
            Klasszikus manikűr, Japán manikűr, Gépi manikűr. A manikűr
            szolgáltatás az egyes ügyfelek preferenciáinak és stílusának
            megfelelően testre Szabható.
          </p>
        </div>
        <Modal
          isOpen={isManicureModalOpen}
          onRequestClose={closeManicureModal}
          contentLabel="Manikür Modal"
          className="half-modal-container"
        >
          <Manicure />
          <button onClick={closeManicureModal}>Bezárás</button>
        </Modal>

        <div className="section" onClick={openPedicureModal}>
          <h4>Pedikűr</h4>
          <p>
            SPA pedikűr. Anti-Age bőrfiatalító pedikűr. Láb Köröm Erősítés
            zselével Köröm protézis Benőtt lábköröm fájdalom és operáció mentes
            kezelése. 3TO Spange. A pedikűr szolgáltatás az egyes ügyfelek
            preferenciáinak és stílusának megfelelően testre szabható.
          </p>
        </div>
        <Modal
          isOpen={isPedicureModalOpen}
          onRequestClose={closePedicureModal}
          contentLabel="Manikür Modal"
          className="half-modal-container"
        >
          <Pedicure />
          <button onClick={closePedicureModal}>Bezárás</button>
        </Modal>

        <div className="section" onClick={openNailsModal}>
          <h4>Műköröm szolgáltatások</h4>
          <p>
            Porcelán műköröm , Zselés műköröm, Smárt polygel, Gél
            lakkszolgáltatások . A szolgáltatás az egyes ügyfelek
            preferenciáinak és stílusának megfelelően testre szabható.
          </p>
        </div>
        <Modal
          isOpen={isNailsModalOpen}
          onRequestClose={closeNailsModal}
          contentLabel="Manikür Modal"
          className="half-modal-container"
        >
          <Nails />
          <button onClick={closeNailsModal}>Bezárás</button>
        </Modal>
        <div className="section" onClick={openKidsModal}>
          <h4>Gyermek</h4>
          <p>
            Kid Fresh pedikűr/fürdő. Kid fresh Manikűr / Spa Hands / Feet.
            Kombinált gyerek manikűr + pedikűr. Ha szeretné gyermekeit egy
            kellemes élménnyel kényeztetni, együtt kikapcsolódni, és egy
            felejhetetlen élményt szerezni számára, akkor nálunk a helyük.
          </p>
        </div>
        <Modal
          isOpen={isKidsModalOpen}
          onRequestClose={closeKidsModal}
          contentLabel="Manikür Modal"
          className="half-modal-container"
        >
          <Kids />
          <button onClick={closeKidsModal}>Bezárás</button>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
