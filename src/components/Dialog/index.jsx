import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./style.css";
import { postRequest } from "../../utils/axios.js";
import Cookie from "js-cookie";
import ErrorMessage from "../../components/ErrorMessage";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    left: 50
  },
  btnPrimary: {
    marginBottom: 100,
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  btnBottom: {
    display: "flex",
    justifyContent: "space-around"
  },
  margin: {
    marginLeft: 60
  },
  link: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginLeft: 200
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  close: {
    cursor: "pointer",
    marginLeft: 15
  }
}));

function Login(props) {
  const classes = useStyles();
  const { onClose, open } = props;
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
    username: ""
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handelReset = () => {
    setValues({
      password: "",
      showPassword: values.showPassword,
      username: ""
    });
  };

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleListItemClick = value => {
    onClose(value);
  };
  const handelSubmit = event => {
    event.preventDefault();
    postRequest("/authenticate", {
      username: values.username,
      password: values.password
    })
      .then(res =>
        res.data.error
          ? (() => {
            setErrorMsg(res.data.error);
            handelReset();
          })()
          : (() => {
            window.location = res.data.redirect;
            Cookie.set("token", res.data.token, { expires: 1 });
          })()
      )
      .catch(err => console.log("error: ", err));
  };

  return (
    <Dialog aria-labelledby="dialog-title" open={open}>
      <DialogTitle className={classes.header} id="dialog-title">
        Welcome Back We've Missed You!
        <CloseIcon className={classes.close} onClick={() => handleListItemClick()}></CloseIcon>
      </DialogTitle>
      <List>
        <form onSubmit={handelSubmit}>
          <ListItem>
            <FormControl>
              <InputLabel
                className={classes.margin}
                htmlFor="standard-adornment-password"
              >
                Username
              </InputLabel>
              <Input
                name="username"
                className={classes.textField}
                id="margin-none"
                label="Username"
                value={values.username}
                onChange={handleChange("username")}
              />
            </FormControl>
          </ListItem>
          <ListItem>
            <FormControl>
              <InputLabel
                className={classes.margin}
                htmlFor="standard-adornment-password"
              >
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                label="Password"
                name="password"
                className={classes.textField}
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </ListItem>
          <ListItem>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.textField}
            >
              LOG IN
            </Button>
          </ListItem>
          {errorMsg ? <ErrorMessage message={errorMsg} /> : ""}
        </form>
        <ListItem>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
        </ListItem>
        <Grid container>
          <Grid item>
            <Link to="/SignUp" variant="body3" className={classes.link}>
              {"Don't have an account?"}
              <br />
              {"Sign up"}
            </Link>
          </Grid>
        </Grid>
      </List>
    </Dialog>
  );
}

Login.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

function DialogInput() {
  const classes = useStyles();
  const [showContact, setShowContact] = React.useState(false);
  const [whoAreWe, setWhoAreWE] = React.useState(false);
  const [ourGoal, setOurGoal] = React.useState(false);



  return (
    <div>
      <form className={classes.btnPrimary}>
        <div>
          <Button variant="contained" color="primary">
            <Link to="/SignUp">SIGN UP</Link>
          </Button>
        </div>
      </form>
      <form className={`footer ${classes.btnBottom}`}>
        <div className="footer-buttons">

          <Button
            variant="outlined"
            color="primary"
            onClick={() => setShowContact(oldShowContact => !oldShowContact)}
          >
            Contact Us
          </Button>
          {showContact && <div>Contact us by Email:  Donations_Organization_haifa@gmail.com</div>}
        </div>
        <div className="footer-buttons">
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setWhoAreWE(oldWhoAreWe => !oldWhoAreWe)}
          >
            Who Are We
          </Button>
          {whoAreWe && <div>We are a a nonprofit organization that works with several faithful charitable organizations.  </div>}
        </div>
        <div className="footer-buttons">
          <Button
            variant="outlined"
            color="primary"
            onClick={()=>setOurGoal(oldOurGoal => !oldOurGoal)}
            >
            Our Goal
          </Button>
          {ourGoal && <div>Our goal is to make it easy for you to donate with things you don't need anymore in an easy way so that we all make the world better, share donations, share love :)</div>}
        </div>
      </form>
    </div>
  );
}

function DialogLogIn() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
  };

  return (
    <div>
      <form noValidate autoComplete="off">
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          LOG IN
        </Button>
        <Login open={open} onClose={handleClose} />
      </form>
    </div>
  );
}

export { DialogLogIn, DialogInput };
