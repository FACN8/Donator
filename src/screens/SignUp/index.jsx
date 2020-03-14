import React from "react";
import "./style.css";
import SignUpInputs from "../../components/SignUpInputs";
import HomeHeader from "../../components/HomeHeader";

const SignUp = () => {
  return (
    <div>
      <HomeHeader />
      <div className="SignUpPage">
        <SignUpInputs />
        <img
          className="displayed"
          src={require("./signUpImage.jpeg")}
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default SignUp;
