import React, { useState } from "react";
import "./gallery.css";
import pic001 from "./Images/001.jpg";
import pic002 from "./Images/002.jpg";
import pic003 from "./Images/003.jpg";
import pic004 from "./Images/004.jpg";
import pic005 from "./Images/005.jpg";
import pic006 from "./Images/006.jpg";
import pic007 from "./Images/007.jpg";
import pic008 from "./Images/008.jpg";
import pic009 from "./Images/009.jpg";
import pic010 from "./Images/010.jpg";
import pic011 from "./Images/011.jpg";
import pic012 from "./Images/012.jpg";

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
    pic011,
    pic012,
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
      <h1>Galéria</h1>
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
              &times;
            </span>
            <span className="prev" onClick={prevImage}>
              &#8249;
            </span>
            <span className="next" onClick={nextImage}>
              &#8250;
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
