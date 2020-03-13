import React, { useState, useEffect } from "react";
import "./style.css";

function OrgBubble() {
  return(
      <div className="scrollableDiv_bubble">
        {[...Array(20)].map((_, i) => {
          return (
            <div
              className='org_bubble'
            >
              <img src="./images/elBasma.jpg"></img>
              </div>
             )})}     
  </div>)
  }
export default OrgBubble;
