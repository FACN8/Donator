import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import OrgCard from "../../components/OrgCard";
function OrgInfo() {
  return (
    <div className="orgMainDiv">
        <ul className="nav_row">
          <li>
            <Link to="/OrgInfo">Home</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/">LogOut</Link>
          </li>
        </ul>
      <h1>click to see organization info</h1>
      <OrgCard />
    </div>
  );
}

export default OrgInfo;
