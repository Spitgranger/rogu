import "./Gallery.css";
import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "./images";

function Gallery() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="gallery">
      <div className="title">
        <div className="title-text">
          <h1>Luxury Cottage on Westview Lake</h1>
          <h4>Creedler, Oregon &#183; 183km </h4>
        </div>
      </div>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((image) => {
            return (
              <motion.div className="item" key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Gallery;
