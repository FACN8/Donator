import React from "react";
import DropDown from "../../components/DonationDropDown";
import NavCircle from "../../components/NavCircle";
import DeliveryTime from "../../components/DeliveryTime";
import DonationOther from "../../components/DonationOther"

function DonationPage() {
  return (
    <div>
      <NavCircle />
      <DropDown />
      <DeliveryTime />
      <DonationOther />
    </div>
  );
}

export default DonationPage;
