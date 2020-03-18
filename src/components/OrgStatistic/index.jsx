import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Cookie from "js-cookie";
import { getRequest } from "../../utils/axios.js";

const useStyles = makeStyles(theme => ({
  root: {
    width: "40%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function OrgStatistic() {
  const classes = useStyles();
  const token = Cookie.get("token") ? Cookie.get("token") : null;
  const [orgStatistic, setOrgStatistic] = useState({
    totalDonations: 0,
    orgDonations: []
  });

  React.useEffect(() => {
    fetchOrgStatistic();
  }, [token]);

  const fetchOrgStatistic = () => {
    getRequest("/UserStatistics", token)
      .then(res => {
        res.data.error
          ? (() => {
              window.location = "/";
            })()
          : (() => {
              setOrgStatistic(res.data.donations);
            })();
      })
      .catch(err => console.log("error: ", err));
  };

  return (
    <div className={classes.root}>
      {" "}
      <ExpansionPanel expanded="true" key='total'>
        <ExpansionPanelSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            {" "}
            Total Current Donations: {orgStatistic.totalDonations}
          </Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
      {orgStatistic["orgDonations"].map((objStats, i) => (
        <ExpansionPanel expanded="true" key={i}>
          <ExpansionPanelSummary
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              {objStats.org_name}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Total Current Donations: {objStats.donationCount}
              <br />
              Last Time Donated: 1 Day Ago
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}
