import React from "react";
import DefaultHeader from "../../components/DefaultHeader";
import Video from "../../components/Video";
import Content from "../../components/Content";
import Footer from "../../components/Footer";

function LandingPage() {
  return (
    <div>
      <DefaultHeader />
      <div>
        <Content />
      </div>
      <div>
        <Video />
      </div>
      <br></br>
      <h2>Organizations We Work With</h2>
      <Footer />
    </div>
  );
}

export default LandingPage;
