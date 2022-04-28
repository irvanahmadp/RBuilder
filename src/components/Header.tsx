import { FC, useState } from "react";
import { Link } from "react-router-dom";

type HeaderProps = {
  pageActive: string
}

const Header :FC<HeaderProps> = ({ pageActive }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [menuActiveClass, setMenuActiveClass] = useState("navbar-menu");

  const toggleMenu = () => {
    if (menuActive) {
      /* Jika menu aktif, maka menu akan dinonaktifkan dan disembunyikan */
      setMenuActive(false);
      setMenuActiveClass("navbar-menu");
    } else {
      setMenuActive(true);
      setMenuActiveClass("navbar-menu is-active");
    }
  };

  const getClassMenu = (page: string) => {
    if (page === pageActive) {
      return "navbar-item is-active";
    }
    return "navbar-item";
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item  subtitle is-4" to="/">
            RBUILDER
          </Link>
          <div
            className="navbar-burger burger"
            data-target="navMenu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" className={menuActiveClass}>
          <div className="navbar-end">
            <Link className={getClassMenu("homePage")} to="/">
              Home
            </Link>
            <Link className={getClassMenu("newsPage")} to="/news">
              News
            </Link>
            <Link className={getClassMenu("aboutPage")} to="/about-us">
              About
            </Link>
            <Link className={getClassMenu("contactPage")} to="/contact-us">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
