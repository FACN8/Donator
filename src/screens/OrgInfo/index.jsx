import React from "react";
import "./style.css";
import OrgCard from "../../components/OrgCard";
import DefaultHeader from "../../components/DefaultHeader";

function OrgInfo() {
  return (
    <React.Fragment>
      <DefaultHeader />
      <div className="orgMainDiv">
        <h1>click to see organization info</h1>
        <OrgCard />
      </div>
    </React.Fragment>
  );
}

export default OrgInfo;
