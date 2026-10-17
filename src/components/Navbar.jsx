import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">⚛️</span>
        <h1>React Router</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            <span className="nav-icon">🏠</span> Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
            <span className="nav-icon">ℹ️</span> About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
            <span className="nav-icon">📧</span> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
