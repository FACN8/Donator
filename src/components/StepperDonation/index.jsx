import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DonationOther from "../DonationOther";
import DropDown from "../DonationDropDown";
import DeliveryTime from "../DeliveryTime";
import { Link } from "react-router-dom";
import {postRequest } from "../../utils/axios.js";
import Cookie from "js-cookie";
import Message from "../Message";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: 50
  },
  button: {
    marginRight: theme.spacing(1),
    marginTop: 100,
    marginBottom: 50
  },
  instructions: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ["Choose Category", "Delivery Time", "Other"];
}

function getStepContent(step, { setDonateInfo, donateInfo }) {
  switch (step) {
    case 0:
      return <DropDown setDonateInfo={setDonateInfo} donateInfo={donateInfo} />;
    case 1:
      return (
        <DeliveryTime setDonateInfo={setDonateInfo} donateInfo={donateInfo} />
      );
    case 2:
      return (
        <DonationOther setDonateInfo={setDonateInfo} donateInfo={donateInfo} />
      );
    default:
      return "No Step Found!";
  }
}

export default function StepperDonation() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const token = Cookie.get("token") ? Cookie.get("token") : null;
  const [message, setMessage] = React.useState({ message: "", severity: "" });

  const [donateInfo, setDonateInfo] = React.useState({
    org_id: "",
    donation_type: "",
    donation_info: "",
    delivery_time: ""
  });

  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      sendDonation();
    }

    let newSkipped = skipped;

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const sendDonation = () => {
    postRequest(
      "/donate",
      {
        ...donateInfo
      },
      token
    )
      .then(res =>
        res.data.error
          ? setMessage({message: res.data.error, severity: 'error'})
          : setMessage({message: res.data.message, severity: 'success'})
      )
      .catch(err => setMessage({message: err, severity: 'error'}));
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setMessage()
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              <h1>
                <center>Thank You we'll be in contact with you shortly!</center>
              </h1>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleReset}
              className={classes.button}
            >
              Reset
            </Button>
            <Link style={{ textDecoration: "none" }} to="/">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Go Home
              </Button>
            </Link>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep, { setDonateInfo, donateInfo })}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Donate" : "Next"}
              </Button>
            </div>
          </div>
        )}
        {message ? <Message message={message.message} severity={message.severity} /> : ""}
      </div>
    </div>
  );
}
