import React from "react";
import "./home.css";
import Image1 from "../Pictures/Screenshot_20230529-023821_Photo Editor Pro - Polish.jpg";

const Home = () => {
  return (
    <div className="container">
      <div className="image">
        <img src={Image1} alt="Kép leírása" />
      </div>
      <div className="text">
        <h1>Nails Vera</h1>
        <p>
          A szenvedély, a professzionalizmus, a minőség, a melegség azok a
          szavak, amelyek a legjobban kifejezik a Nails by Vera szalon élményét.
        </p>
      </div>
    </div>
  );
};

export default Home;
