import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">

      <Link to="/" className="navbar-logo">
        <span className="logo-icon">☕</span>

        <span>
          BREW<span className="logo-accent">ORA</span>
        </span>
      </Link>

      <nav className="navbar-menu">
        <Link to="/">Home</Link>
        <a href="/#about">About</a>
        <Link to="/menu">Menu</Link>
        <a href="/#location">Location</a>
      </nav>

      <div className="navbar-actions">

        <button className="cart-button">
          🛒
        </button>

        <Link to="/menu" className="order-button">
          Order Now
        </Link>

      </div>

    </header>
  )
}

export default Navbar