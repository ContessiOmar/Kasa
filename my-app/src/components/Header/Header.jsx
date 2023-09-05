import logoHeader from "../../assets/header_logo.png";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import { useState } from "react";

function Header() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={style.blockBarre}>
      <nav className={style.barre}>
        <NavLink to="/">
          <img
            src={logoHeader}
            alt="logo"
            className={style.LogoHeader}
            onClick={() => handleLinkClick("accueil")}
          />
        </NavLink>
        <div className={style.navBarre}>
          <NavLink
            to="/"
            className={`${style.accueil} ${
              activeLink === "accueil" ? style.active : ""
            }`}
            onClick={() => handleLinkClick("accueil")}>
            Accueil
          </NavLink>
          <NavLink
            to="/About"
            className={`${style.about} ${
              activeLink === "about" ? style.active : ""
            }`}
            onClick={() => handleLinkClick("about")}>
            A propos
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;
