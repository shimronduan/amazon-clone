import React from "react";
import "./Product.css";

const Product = ({ title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p>
            {Array(rating)
              .fill()
              .map((_, i) => {
                return (
                  <span role="img" aria-label="Star" key={i}>
                    ⭐
                  </span>
                );
              })}
          </p>
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
