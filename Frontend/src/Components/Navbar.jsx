import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navmain">
      <h1 className="h1nav">Tech♻️Recycle</h1>
      <div className="divoptions">
        <Link to="/">Home</Link>
        <Link to="/user">User Dashboard</Link>
        <Link to="/admin">Admin Dashboard</Link>
        <Link to="/analytics">Analytics</Link>
      </div>
    </nav>
  );
}

export default Navbar;
