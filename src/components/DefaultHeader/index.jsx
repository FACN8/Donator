import React from "react";
import "./style.css";
import DialogInput from "../Dialog";
import Video from "../Video";
import Language from "../Languages";
import { DialogLogIn } from "../Dialog"
import Logo from '../../assets/logo.png'

function DefaultHeader() {
  return (
    <div>
        <header>
        <img alt='donatorLogo' src={Logo}/>
      <div>
        <Language />
      </div>
       <DialogLogIn />
       </header>
      <div className="title">
        <h1>Smart Donator</h1>
        <br></br>
        <h2>About</h2>
        <br></br>
        <h3>
          Anything you need to donate? We’ll take it from you and appropriate it
          to the relevant organization.
        </h3>
        <br></br>
        <div>
          <Video />
        </div>
        <br></br>
        <h2>Organizations We Work With</h2>
      </div>
      <div>
        <DialogInput />
      </div>
    </div>
  );
}

export default DefaultHeader;
