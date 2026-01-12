import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: 20, background: "#222", color: "#fff" }}>
      <Link to="/" style={{ marginRight: 15, color: "#fff" }}>Home</Link>
      <Link to="/cart" style={{ marginRight: 15, color: "#fff" }}>Cart</Link>
      <Link to="/admin" style={{ color: "#fff" }}>Admin</Link>
    </nav>
  );
}
