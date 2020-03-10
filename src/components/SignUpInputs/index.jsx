// import React, { useState } from 'react'
// import './style.css'

// const SignUpInputs = (props) => {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const [fullName, setFullName] = useState('')
//     const [address, setAddress] = useState('')
//     const [city, setCity] = useState('')
//     const [phoneNumber, setPhoneNumber] = useState('')
//     return (
//         <div className="SignUp">
//             <div className="form-control">
//                 <label className="input-key" htmlFor="username">Username</label>

//                 <input
//                     className="input-form"
//                     type="text"
//                     id="username"
//                     label="Username"
//                     value={username}
//                     onChange={event => {
//                         setUsername(event.target.value)
//                     }}
//                 />

//             </div>
//             <div className="form-control">
//                 <label htmlFor="password">Password</label>

//                 <input
//                     className="input-form"
//                     type="text"
//                     id="password"
//                     label="Password"
//                     value={password}
//                     onChange={event => {
//                         setPassword(event.target.value)
//                     }}
//                 />

//             </div>
//             <div className="form-control">
//                 <label htmlFor="fullName">Full name</label>

//                 <input
//                     className="input-form"
//                     type="text"
//                     id="fullName"
//                     label="Full name"
//                     value={fullName}
//                     onChange={event => {
//                         setFullName(event.target.value)
//                     }}
//                 />

//             </div>
//             <div className="form-control">
//                 <label htmlFor="address">Address</label>
//                 <input
//                     className="input-form"
//                     type="text"
//                     id="address"
//                     label="Adress"
//                     value={address}
//                     onChange={event => {
//                         setAddress(event.target.value)
//                     }}
//                 />

//             </div>

//             <div className="form-control">
//                 <label htmlFor="city">City</label>
//                 <input
//                     className="input-form"
//                     type="text"
//                     id="City"
//                     label="City"
//                     value={city}
//                     onChange={event => {
//                         setCity(event.target.value)
//                     }}
//                 />
//             </div>
//             <div className="form-control">
//                 <label htmlFor="phoneNumber">Phone number</label>
//                 <input
//                     className="input-form"
//                     type="number"
//                     id="phoneNumber"
//                     label="Phone number"
//                     value={phoneNumber}
//                     onChange={event => {
//                         setPhoneNumber(event.target.value)
//                     }}
//                 />
//             </div>
//             <div>
//                 <button type="submit" className="ingredient-form_actions" id="submit">Submit</button>
//             </div>
//         </div>
//     )
// }

// export default SignUpInputs















import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUpInputs() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                autoComplete="city"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phoneNumber"
                label="Username"
                name="username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Phone Number"
                name="phoneNumber"
                autoComplete="phoneNumber"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
// © 2020 GitHub, Inc.

