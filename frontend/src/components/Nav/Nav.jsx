import React, { useState,useEffect  } from "react";
import "./Nav.css";

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
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#hotels" onClick={() => setMenuOpen(false)}>
            Hotels
          </a>
          <a href="#Search" onClick={() => setMenuOpen(false)}>
            Search Hotels
          </a>
          <a href="#feature" onClick={() => setMenuOpen(false)}>
            Features
          </a>

         

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About Us
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="nav-actions">

          <a href="/login" className="login-btn">
            Login
          </a>

          <button className="get-started-btn">
            <span>Get Started</span>
            <span className="arrow">→</span>
          </button>

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