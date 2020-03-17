import React from "react";
import DropDown from "../../components/DonationDropDown";
import DefaultHeader from "../../components/DefaultHeader";
import DeliveryTime from "../../components/DeliveryTime";
import DonationOther from "../../components/DonationOther"
import './style.css'

function DonationPage() {
  return (
    <div className="donationPage">
    <React.Fragment>
      <DefaultHeader />
      <div>
        <center>
          <DropDown />
          <DeliveryTime />
          <DonationOther />
        </center>
      </div>
    </React.Fragment>
</div >
  );
}

export default DonationPage;
