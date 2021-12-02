import React from "react";
import "./product.css";
// import Image from '../../img/portfolio-image.png'

const Product = ({ img, link }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href="" target="_blank" rel="noreferrer">
        <img src={Image} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
