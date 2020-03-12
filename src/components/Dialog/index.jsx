import React from "react";
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
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import './style.css'

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
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
    marginLeft: 8
  }
}));

function Login(props) {
  const classes = useStyles();
  const { onClose, open } = props;
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    username: '',
  });

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

  return (
    <Dialog aria-labelledby="dialog-title" open={open}>
      <DialogTitle id="dialog-title" className="dialog">
        Welcome Back We've Missed You!
      </DialogTitle>
      <List>
        <ListItem>
          <FormControl> 
          <InputLabel className={classes.margin} htmlFor="standard-adornment-password">Email/Username</InputLabel>
          <Input
            className={classes.textField}
            id="margin-none"
            label="Email/Username"
          />
          </FormControl>
        </ListItem>
        <ListItem>
        <FormControl>
          <InputLabel className={classes.margin} htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            label="password"
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
            variant="outlined"
            onClick={() => handleListItemClick()}
            color="primary"
          > <Link to="/OrgInfo">LOG IN</Link>
          </Button>
        </ListItem>
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
        <div className='footer-buttons'>
          <Button variant="outlined" color="primary">
            Contact Us
          </Button>
        </div>
        <div className='footer-buttons'>
          <Button variant="outlined" color="primary">
            Who Are We
          </Button>
        </div>
        <div className='footer-buttons'>
          <Button variant="outlined" color="primary">
            Our Goal
          </Button>
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

export { DialogLogIn, DialogInput};
