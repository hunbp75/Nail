import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./store.css";

import pic001 from "./images/S001.jpg";
import pic002 from "./images/S002.jpg";
import pic003 from "./images/S003.jpg";
import pic004 from "./images/S004.jpg";
import pic005 from "./images/S005.jpg";
import pic006 from "./images/S006.jpg";
import pic007 from "./images/S007.jpg";
import pic008 from "./images/S008.jpg";
import pic009 from "./images/S009.jpg";
import pic010 from "./images/S010.jpg";
import pic011 from "./images/S011.jpg";
import pic012 from "./images/S012.jpg";
import pic013 from "./images/S013.jpg";
import pic014 from "./images/S014.jpg";
import pic015 from "./images/S015.jpg";
import pic016 from "./images/S016.jpg";
import pic017 from "./images/S017.jpg";

const Store = () => {
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
    pic011,
    pic012,
    pic013,
    pic014,
    pic015,
    pic016,
    pic017,
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
      <h1 className="gallery_name">Lakk Szépségszalon</h1>
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

export default Store;
