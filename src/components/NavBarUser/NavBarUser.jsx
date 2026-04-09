import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleStar,
  faCircleUser,
  faGear,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import "./NavbarUser.css";

const NavbarUser = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <FontAwesomeIcon icon={faCircleStar} className="navbar__icon" />
        <span className="logo-text">Argent Bank</span>
      </div>

      <div className="navbar__actions">
        <div className="user">
          <span>Ben_hg</span>
          <FontAwesomeIcon icon={faCircleUser} className="user__icon" />
        </div>
        <button type="button" className="icon-button">
          <FontAwesomeIcon icon={faGear} />
        </button>
        <button type="button" className="icon-button">
          <FontAwesomeIcon icon={faPowerOff} />
        </button>
      </div>
    </div>
  );
};

export default NavbarUser;
