import React from "react";
import HomeHeader from "../../components/HomeHeader";
import Video from "../../components/Video";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import OrgBubble from "../../components/OrgBubble";
import './style.css'
import Cookie from "js-cookie";

function LandingPage() {
  Cookie.set("token", 'no access', { expires: 1 });
  return (
    <div className="landingPageStyle">
     <center>
        <HomeHeader />
      <div>
        <Content />
      </div>
      <div>
        <Video />
      </div>
      <br></br>
      <h2 className='organizations'>Organizations We Work With</h2>
      <OrgBubble/>
      <Footer />
      </center>
    </div>
  );
}

export default LandingPage;
