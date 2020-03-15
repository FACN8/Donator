import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "./style.css";

export default function DonationsCards() {
  const cards = [
    {
      title: "Total Donations",
      value: "45"
    },
    {
      title: "Donations to El Basma",
      value: "30"
    },
    {
      title: "Donations to hekma",
      value: "15"
    },
    {
      title: "Donations to salam",
      value: "25"
    },
    {
      title: "Donations to salam",
      value: "25"
    },
    {
      title: "Donations to salam",
      value: "25"
    },
    {
      title: "Donations to salam",
      value: "25"
    },
    {
      title: "Donations to salam",
      value: "25"
    }
  ];
  return (
    <React.Fragment>
      <div className="cardsDiv">
        {cards.map(card => (
          <div className="card">
            <label className="donationTitle">{card.title}</label>
            <span className="donationValue">{card.value}</span>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
