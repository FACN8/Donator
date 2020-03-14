import React from "react";
import { Link } from "react-router-dom";
import UserDetail from "../../components/UserDetail";
import UserStats from "../../components/UserStats";
import DefaultHeader from "../../components/DefaultHeader";
import "./style.css";
function Profile() {
  return (
    <React.Fragment>
      <DefaultHeader />
      <div className="profile">
        <UserDetail />
        <UserStats />
      </div>
    </React.Fragment>
  );
}

export default Profile;
