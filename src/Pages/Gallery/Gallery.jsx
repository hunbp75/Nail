import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./gallery.css";

import pic001 from "./Images/V001.jpg";
import pic002 from "./Images/V002.jpg";
import pic003 from "./Images/V003.jpg";
import pic004 from "./Images/V004.jpg";
import pic005 from "./Images/V005.jpg";
import pic006 from "./Images/V006.jpg";
import pic007 from "./Images/V007.jpg";
import pic008 from "./Images/V008.jpg";
import pic009 from "./Images/V009.jpg";
import pic010 from "./Images/V010.jpg";

import pic012 from "./Images/V012.jpg";
import pic013 from "./Images/V013.jpg";
import pic014 from "./Images/V014.jpg";
import pic015 from "./Images/V015.jpg";
import pic016 from "./Images/V016.jpg";
import pic017 from "./Images/V017.jpg";
import pic018 from "./Images/V018.jpg";
import pic019 from "./Images/V019.jpg";
import pic020 from "./Images/V020.jpg";
import pic021 from "./Images/V021.jpg";
import pic022 from "./Images/V022.jpg";
import pic023 from "./Images/V023.jpg";
import pic024 from "./Images/V024.jpg";
import pic025 from "./Images/V025.jpg";
import pic026 from "./Images/V026.jpg";
import pic027 from "./Images/V027.jpg";
import pic028 from "./Images/V028.jpg";
import pic029 from "./Images/V029.jpg";
import pic030 from "./Images/V030.jpg";
import pic031 from "./Images/V031.jpg";

const Gallery = () => {
  const [modalImageIndex, setModalImageIndex] = useState(null);
  const images = [
    pic001,
    pic002,
    pic003,
    pic004,
    pic005,
    pic006,
    pic007,
    pic008,
    pic009,
    pic010,

    pic012,
    pic013,
    pic014,
    pic015,
    pic016,
    pic017,
    pic018,
    pic019,
    pic020,
    pic021,
    pic022,
    pic023,
    pic024,
    pic025,
    pic026,
    pic027,
    pic028,
    pic029,
    pic030,
    pic031,
  ];

  const openModal = (index) => {
    setModalImageIndex(index);
  };

  const closeModal = () => {
    setModalImageIndex(null);
  };

  const nextImage = () => {
    setModalImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setModalImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <h1 className="gallery_name">Galéria</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Kép leírása"
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      {modalImageIndex !== null && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[modalImageIndex]} alt="Kép leírása" />
            <span className="close" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </span>
            <span className="prev" onClick={prevImage}>
              <FontAwesomeIcon icon={faArrowCircleLeft} />
            </span>
            <span className="next" onClick={nextImage}>
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
