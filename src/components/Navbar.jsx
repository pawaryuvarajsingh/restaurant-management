import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/about"> About</Link> |
      <Link to="/menu"> Menu</Link> |
      <Link to="/contact"> Contact</Link> |
      <Link to="/admin"> Admin</Link>
      <Link to="/reducer"> Reducer</Link> |
      <Link to="/useref"> useRef</Link> |
    </nav>
  );
}

export default Navbar;