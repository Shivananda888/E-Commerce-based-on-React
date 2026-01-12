import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const { products, deleteProduct } = useContext(ProductContext);

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>
      <Link to="/add-product">Add Product</Link>

      {products.map(p => (
        <div key={p.id}>
          {p.name}
          <button onClick={() => deleteProduct(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
