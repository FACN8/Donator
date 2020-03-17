import React from "react";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import Box from "@material-ui/core/Box";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import NavCircle from "../NavCircle";
import UserDetail from "../UserDetail";
import OrgStatistic from "../OrgStatistic";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  cardStats: {
    paddingTop: 0
  },
  container: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <NavCircle />
      <Paper square>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<PersonIcon />} {...a11yProps(0)} label="Profile" />
          <Tab icon={<EqualizerIcon />} {...a11yProps(1)} label="Stastics" />
        </Tabs>
        <TabPanel value={value} index={0}>
            <UserDetail />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <div className={classes.cardStats}>
              <OrgStatistic />
              </div>
          </main>
        </TabPanel>
      </Paper>
    </div>
  );
}
