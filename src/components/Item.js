import React, { useState } from "react";

function Item({ name, category }) {
  const [cartItem, setCart] = useState(true);
  const itemClass = cartItem ? "" : "in-cart";

  //function to add items to cart
  function addItems(event) {
    setCart((cartItem) => !cartItem);
  }
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItems}>Add to Cart
      {cartItem ? "Add To Cart" : "Remove"}
      </button>
    </li>
  );
}

export default Item;
