"use client";
import { useCart } from "@/app/component/CartContext";
import CartItem from "@/app/component/CartItem";
import { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    setLoading(true);
    try {
      const cartData = cart.map(item => ({ _id: item.id, quantity: item.quantity }));

      const res = await fetch("/api/user/stripe/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems: cartData }),
      });

      const data = await res.json();

      if (res.ok) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Something went wrong!");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <p className="empty-cart">No items in your cart 😢</p>
        ) : (
          <>
            <div className="cart-grid">
              <div className="cart-grid-header">
                <div>Image</div>
                <div>Product Name</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
                <div>Action</div>
              </div>
              <div className="cart-grid-body">
                {cart.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div className="cart-total-section">
                <div className="total-price">
                <span>Total: </span>
                <span className="amount">৳ {totalPrice.toFixed(2)}</span>
              </div>

              <div className="cart-actions">
                <button
                  className="btn-clear"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
                <button
                  className="btn-checkout"
                  onClick={handleCheckout}
                  disabled={loading}
                >
                  {loading ? "Redirecting..." : "Checkout"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
