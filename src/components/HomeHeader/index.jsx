import React from "react";
import "./style.css";
import Language from "../Languages";
import {DialogLogIn}  from "../Dialog"
import Logo from '../../assets/logo.png'

function HomeHeader() {
  return (
    <div className="bgImg">
        <header>
        <img alt='donatorLogo' src={Logo}/>
      <div>
        <Language />
      </div>
       <DialogLogIn />
       </header>
    </div>
  );
}

export default HomeHeader;
