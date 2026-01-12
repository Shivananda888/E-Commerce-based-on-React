import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

export default function Home() {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ display: "flex", gap: 20, padding: 20 }}>
      {products.map(product => (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: 10 }}>
          <img src={product.image} alt="" />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
