import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("his is the basket>>", basket);
  // basket is state
  //dispatch how we manipulate the data

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    //dispatch the item into the data layer

    //Here, you dispatch the "ADD_TO_BASKET" action with the item's details, and your reducer (defined in reducer.js) handles the state update logic by appending the item to the basket.
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image}></img>

      <button onClick={addToBasket}> Add to basket </button>
    </div>
  );
}

export default Product;
