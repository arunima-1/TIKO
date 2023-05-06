import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faUser,

  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__logo">
        <img src="logo.webp" alt="Train Ticket Reservation" />
      </div>

      <div className={`navbar__toggle ${showMenu ? "active" : ""}`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <ul className={`navbar__menu ${showMenu ? "active" : ""}`}>
        <li className="navbar__menu-item">
          <a href="#">Book Train Tickets</a>
        </li>
        <li className="navbar__menu-item">
          <a href="#">Cancel Train Tickets</a>
        </li>
        <li className="navbar__menu-item">
          <a href="#">PNR Status</a>
        </li>
        <li className="navbar__menu-item">
          <a href="#">Train Timetable</a>
        </li>
      </ul>

      <div className="navbar__actions">
        <a href="#" className="navbar__user-link">
          <FontAwesomeIcon
            icon={faUser}
            className="navbar__user-icon"
          />
          <span className="navbar__user-name">My Account</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
