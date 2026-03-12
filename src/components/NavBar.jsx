import { Link } from "react-router-dom";
import '../css/NavBar.css';

function NavBar() {
  return (
    <header>
      <Link to="/" className="logo">
        <p>&lt;/&gt;</p>
      </Link>
      <div className="link-container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/test" className="nav-link">Test</Link>
      </div>
    </header>
  );
}

export default NavBar;
