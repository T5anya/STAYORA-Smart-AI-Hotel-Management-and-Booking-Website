import React, { useState,useEffect  } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  // Controls mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Detects whether user has scrolled
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">

        {/* LOGO */}
        <a href="/" className="logo">
          <span className="logo-icon">S</span>
          <span className="logo-text">Stay<span className="ora">ora</span></span>
        </a>

        {/* NAVIGATION LINKS */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/hotels" onClick={() => setMenuOpen(false)}>
            Hotels
          </Link>
          <Link to="/search" onClick={() => setMenuOpen(false)}>
            Search Hotels
          </Link>
          <Link to="/features" onClick={() => setMenuOpen(false)}>
            Features
          </Link>
         
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="nav-actions">

          <Link to="/login" id="login-btn" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="get-started-btn">
            <span>Register</span>
            <span className="arrow">→</span>
          </Link>

        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className={`menu-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  );
};

export default Nav;