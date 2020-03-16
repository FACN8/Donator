import React from "react";
import "./style.css";
import Language from "../Languages";
import {DialogLogIn}  from "../Dialog"
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";

function HomeHeader() {
  return (
    <div className="bgImg">
        <header>
          <Link to="/">
        <img alt='donatorLogo' src={Logo}/>
        </Link>
      <div>
        <Language />
      </div>
       <DialogLogIn />
       </header>
    </div>
  );
}

export default HomeHeader;
