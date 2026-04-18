"use client";
import { useCart } from "./CartContext";
import { useState, useEffect } from "react";
import "./css/Cart.css";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    updateQuantity(item.id, quantity);
  }, [quantity]);

  return (
    <div className="cart-item-row">
      <div className="cart-col cart-image-col">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="cart-col cart-title-col">{item.title}</div>
      <div className="cart-col cart-price-col">
        <span className="mobile-label">Price:</span>
        <b className="price">৳ {item.price}</b>
      </div>
      <div className="cart-col cart-quantity-col">
        <span className="mobile-label">Qty:</span>
        <div className="quantity-buttons">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
          />
          <button onClick={() => setQuantity(q => q + 1)}>+</button>
        </div>
      </div>
      <div className="cart-col cart-subtotal-col">
         <span className="mobile-label">Subtotal:</span>
         <b className="price">৳ {item.price * quantity}</b>
      </div>
      <div className="cart-col cart-action-col">
        <button className="btn-remove" onClick={() => removeFromCart(item.id)}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default CartItem;
