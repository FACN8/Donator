import React from "react";
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
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

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
   display: 'flex',
   flexDirection: "row",
   justifyContent: "space-around"
  },
}));

function Login(props) {
  const classes = useStyles();
  const { onClose, open } = props;
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    username: ""
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
      <DialogTitle id="dialog-title">
        Welcome Back We've Missed You!
      </DialogTitle>
      <List>
        <ListItem>
          <FormControl>
            <InputLabel
              className={classes.margin}
              htmlFor="standard-adornment-password"
            >
              Email/Username
            </InputLabel>
            <Input
              className={classes.textField}
              id="margin-none"
              label="Email/Username"
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
            className={classes.textField}
          >
            LOG IN
          </Button>
        </ListItem>
        <ListItem>
          <FormControlLabel 
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
        </ListItem>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body3" className={classes.link}>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body3" className={classes.link}>
              {"Don't have an account?"}
              <br/>
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

  return (
    <div>
      <form className={classes.btnPrimary}>
        <div>
          <Button variant="contained" color="primary">
            SIGN UP
          </Button>
        </div>
      </form>
      <form className={classes.btnBottom}>
        <div>
          <Button variant="outlined" color="primary">
            Contact Us
          </Button>
        </div>
        <div>
          <Button variant="outlined" color="primary">
            Who Are We
          </Button>
        </div>
        <div>
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

export { DialogLogIn, DialogInput };
