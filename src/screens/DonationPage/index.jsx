import React from "react";
import DropDown from "../../components/DonationDropDown";
import DefaultHeader from "../../components/DefaultHeader";
import DeliveryTime from "../../components/DeliveryTime";
import DonationOther from "../../components/DonationOther"

function DonationPage() {
  return (
    <React.Fragment>
    <DefaultHeader />
    <div>
      <DropDown />
      <DeliveryTime />
      <DonationOther />
    </div>
    </React.Fragment>
  );
}

export default DonationPage;
