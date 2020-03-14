import React from "react";
import HomeHeader from "../../components/HomeHeader";
import Video from "../../components/Video";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import './style.css'

function LandingPage() {
  return (
    <div>
      <HomeHeader />
      <div>
        <Content />
      </div>
      <div>
        <Video />
      </div>
      <br></br>
      <h2 className='organizations'>Organizations We Work With</h2>
      <Footer />
    </div>
  );
}

export default LandingPage;
