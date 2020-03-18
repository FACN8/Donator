import React from "react";
import DefaultHeader from "../../components/DefaultHeader";
import StepperDonation from "../../components/StepperDonation"
import './style.css'

function DonationPage() {
  return (
    <div className="donationPage">
    <React.Fragment>
      <DefaultHeader />
      <div>
        <center>
        <StepperDonation/>
        </center>
      </div>
    </React.Fragment>
</div >
  );
}

export default DonationPage;
