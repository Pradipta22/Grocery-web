import React, { useState } from 'react';
import './cart.css';
import imgSrc1 from '../leftbarcontent/images/bakery4.jpg'
import { Link } from 'react-router-dom';

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
      <Link to='/'><button>back to shop</button></Link>
      <div className="cart-box">
        <div className="cartContainer">
          <div className="cart-item">
            <img src={imgSrc1} alt="404" />
            <div className="item-details">
              <h3>bars</h3>
              <h4>&#x20B9;22</h4>
            </div>
          </div>
          <div className="quantity">
              <button onClick={decrementQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={incrementQuantity}>+</button>
            </div>
          <button>Remove</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
