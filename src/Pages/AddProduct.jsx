import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { v4 as uuid } from "uuid";

export default function AddProduct() {
  const { addProduct } = useContext(ProductContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    addProduct({
      id: uuid(),
      name,
      price,
      image: "https://via.placeholder.com/200"
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Price" onChange={e => setPrice(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
