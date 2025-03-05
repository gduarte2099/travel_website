import { useState, useEffect } from "react";
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [blur, setBlur] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const blurHeader = () => {
      setBlur(window.scrollY >= 50);
    };

    window.addEventListener("scroll", blurHeader);
    return () => {
      window.removeEventListener("scroll", blurHeader);
    };
  }, []);

  return (
    <header className={`header ${blur ? "blur-header" : ""}`} id="header">
      <nav className="nav container">
        <a href="" className="nav__logo">
          Beyond Borders
        </a>

        <div className={`nav__menu ${menuOpen ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link " onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={closeMenu}>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#popular" className="nav__link" onClick={closeMenu}>
                Popular
              </a>
            </li>
            <li className="nav__item">
              <a href="#explore" className="nav__link" onClick={closeMenu}>
                Explore
              </a>
            </li>
          </ul>
          {/** Close button **/}
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <i className="ri-close-line"></i>
          </div>
        </div>
        {/** Toggle button **/}
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className="ri-menu-fill"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
