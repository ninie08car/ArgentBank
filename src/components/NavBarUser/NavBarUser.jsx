import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCircleUser,
  faGear,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import "./NavbarUser.css";

const NavbarUser = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <FontAwesomeIcon icon={faStar} className="navbar__icon logo-icon" />
        <span className="logo-text ">Argent Bank</span>
      </div>

      <div className="navbar__actions">
        <div className="user">
          <span>Ben_hg</span>
          <FontAwesomeIcon
            icon={faCircleUser}
            className="user__icon logo-text"
          />
        </div>
        <button type="button" className="icon-button logo-text">
          <FontAwesomeIcon icon={faGear} />
        </button>
        <button type="button" className="icon-button logo-text">
          <FontAwesomeIcon icon={faPowerOff} />
        </button>
      </div>
    </div>
  );
};

export default NavbarUser;
