import React, { useState, useEffect } from "react";
import "./style.css";
import { getRequest } from "../../utils/axios.js";

function OrgBubble() {
  const [orgInfo, setOrgInfo] = useState([]);

  React.useEffect(() => {
    fetchOrgImg();
  }, []);

  const fetchOrgImg = () => {
    getRequest("/orgImages")
      .then(res => {
        res.data.error
          ? (() => {})()
          : (() => {
              setOrgInfo(res.data.orgInfo);
            })();
      })
      .catch(err => console.log("error: ", err));
  };
  return (
    <div className="scrollableDiv_bubble">
      {orgInfo.map((org, i) => {
        return (
          <div key={i} className="org_bubble">
            <a href={org.fb_url}>
              <img src={org.img_url}></img>
            </a>
          </div>
        );
      })}
    </div>
  );
}
export default OrgBubble;
