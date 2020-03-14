import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function HandleClick() {
  document.getElementById("circularMenu").classList.toggle("active");
}

function NavCircle() {
  return (
    <div>
      <div id="circularMenu" className="circular-menu">
        <a className="floating-btn" onClick={HandleClick}>
          <FontAwesomeIcon id="i" className="icon" icon={faPlus} />
        </a>
        <menu className="items-wrapper">
          <Link to="/OrgInfo" className="menu-item fa fa-facebook">
            <FontAwesomeIcon className="icon" icon={faHome} />
          </Link>
          <Link to="/Profile" className="menu-item fa fa-twitter">
            <FontAwesomeIcon className="icon" icon={faUser} />
            </Link>
            <Link to="/" className="menu-item fa fa-google-plus">
            <FontAwesomeIcon className="icon" icon={faSignOutAlt} />
          </Link>
        </menu>
      </div>
    </div>
  );
}

export default NavCircle;
