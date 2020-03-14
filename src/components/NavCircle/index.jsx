import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

function HandleClick (){
document.getElementById('circularMenu').classList.toggle('active')
}

function NavCircle() {
  return (
    <div>
      <div id="circularMenu" className="circular-menu">
        <a
          className="floating-btn"
          onClick={HandleClick}
        >
          <FontAwesomeIcon id="i" className='icon' icon={faPlus} />
        </a>
        <menu className="items-wrapper">
          <a href="#" className="menu-item fa fa-facebook">
			  <FontAwesomeIcon className='icon' icon={faHome} />
		  </a>
          <a href="#" className="menu-item fa fa-twitter">
		  <FontAwesomeIcon className='icon' icon={faUser} />
		  </a>
          <a href="#" className="menu-item fa fa-google-plus">
		  <FontAwesomeIcon className='icon' icon={faSignOutAlt} />
		  </a>
        </menu>
      </div>
    </div>
  );
}



export default NavCircle;
