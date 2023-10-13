import React, { useState } from 'react';
import './cart.css';
import imgSrc1 from '../leftbarcontent/images/bakery4.jpg'
const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="cart-box">
        <div className="cartContainer">
          <div className="cart-item">
            <img src={imgSrc1} alt="404" />
            <div className="item-details">
              <h3>bars</h3>
              <p>22</p>
            </div>
            <div className="quantity">
              <button onClick={decrementQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={incrementQuantity}>+</button>
            </div>
          </div>
          <div className="cart-item">
            <img src={imgSrc1} alt="404" />
            <div className="item-details">
              <h3>bars</h3>
              <p>22</p>
            </div>
            <div className="quantity">
              <button onClick={decrementQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={incrementQuantity}>+</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
