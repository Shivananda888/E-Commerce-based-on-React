import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ padding: 20 }}>
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          {item.name} - ₹{item.price}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
