import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Cookie from "js-cookie";
import { getRequest } from "../../utils/axios.js";
import Message from "../Message";

function OrgCard() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const token = Cookie.get("token") ? Cookie.get("token") : null;
  const [orgInfo, setOrgInfo] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  React.useEffect(() => {
    fetchOrgInfo();
  }, [token]);

  let bgColors = [
    "rgba(105, 196, 105, 1)",
    "rgba(247, 211, 68, 1)",
    "rgba(122, 189, 244, 1)"
  ];

  const randomNumber = range => Math.floor(Math.random() * range);

  const cardClick = index =>
    setSelectedIndex(index === selectedIndex ? null : index);

  const fetchOrgInfo = () => {
    getRequest("/orgInfo", token)
      .then(res => {
        res.data.error ? (window.location = "/") : setOrgInfo(res.data.orgInfo);
      })
      .catch(err => setErrorMsg(err));
  };
  return (
    <div>
      <div className="scrollableDiv">
        {errorMsg ? (
        <Message message={errorMsg} severity={'error'}/>
        ) : (
          orgInfo.map((org, i) => (
            <div
              key={i}
              className={`org_card ${i === selectedIndex ? "expanded" : ""}`}
              style={{
                backgroundColor:
                  i === selectedIndex && bgColors[randomNumber(3)]
              }}
              onClick={event => cardClick(i)}
            >
              <img alt={org.name} src={org.img_url}></img>
              {i === selectedIndex ? (
                <div className="org_card_content">
                  <h2>{org.name}</h2>
                  <ul className="content">
                    <li>
                      <b>Phone number: </b>
                      {org.phone_number}
                    </li>
                    <li>
                      <b>Address: </b>
                      <address>{org.address}</address>
                    </li>
                    <li>
                      <b>Description: </b>
                      {org.info}
                    </li>
                  </ul>
                  <button>
                    <a href={org.fb_url}>More info..</a>
                  </button>
                </div>
              ) : (
                <div className="org_card_content" />
              )}
            </div>
          ))
        )}
      </div>
      <button className="DonateButton">
        <Link to="/DonationPage">Donate Now</Link>
      </button>
    </div>
  );
}

export default OrgCard;
