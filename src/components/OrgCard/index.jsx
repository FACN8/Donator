import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Cookie from "js-cookie";
import { getRequest } from "../../utils/axios.js";

function OrgCard() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const token = Cookie.get("token") ? Cookie.get("token") : null;

  React.useEffect(() => {
    fetchOrgInfo()
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
       res.data.error
          ? (() => {
            window.location ='/';
            })()
          : (() => {
             console.log(res.data.orgInfo)
            })()
      })
      .catch(err => console.log("error: ", err));
  };

  return (
    <div>
      <div className="scrollableDiv">
        {[...Array(10)].map((_, i) => {
          return (
            <div
              className={`org_card ${i === selectedIndex ? "expanded" : ""}`}
              style={{
                backgroundColor:
                  i === selectedIndex && bgColors[randomNumber(3)]
              }}
              onClick={event => cardClick(i)}
            >
              <img alt="elBasma" src="./images/elBasma.jpg"></img>
              {i === selectedIndex ? (
                <div className="org_card_content">
                  <h2>جمعيه البسمه</h2>
                  <ul className="content">
                    <li>
                      <b>Phone number: </b>0546215421
                    </li>
                    <li>
                      <b>Address: </b>
                      <address>nazareth,shekon hpoalem 54st</address>
                    </li>
                    <li>
                      <b>Description: </b>al basma orginazation that help the
                      poor people and collect donation to provide for them
                    </li>
                  </ul>
                  <button>
                    <a href="https://www.facebook.com/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D8%A8%D8%B3%D9%85%D8%A9-%D8%A7%D9%84%D9%86%D8%A7%D8%B5%D8%B1%D8%A9-411911428821578">
                      More info..
                    </a>
                  </button>
                </div>
              ) : (
                <div className="org_card_content" />
              )}
            </div>
          );
        })}
      </div>
      <button className="DonateButton">
        <Link to="/DonationPage">Donate Now</Link>
      </button>
    </div>
  );
}

export default OrgCard;
