import React, { useState, useEffect } from "react";
import "./style.css";
import { getRequest } from "../../utils/axios.js";
import Message from "../Message";

function OrgBubble() {
  const [orgInfo, setOrgInfo] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  React.useEffect(() => {
    fetchOrgImg();
  }, []);

  const fetchOrgImg = () => {
    getRequest("/orgImages")
      .then(res => {
        res.data.error
          ? setErrorMsg(res.data.error)
          : setOrgInfo(res.data.orgInfo);
      })
      .catch(err => setErrorMsg(err));
  };
  return (
    <div className="scrollableDiv_bubble">
      {errorMsg ? (
        <Message message={errorMsg} severity={'error'}/>
      ) : (
        orgInfo.map((org, i) => (
          <div key={i} className="org_bubble">
            <a href={org.fb_url}>
              <img src={org.img_url}></img>
            </a>
          </div>
        ))
      )}
    </div>
  );
}
export default OrgBubble;
