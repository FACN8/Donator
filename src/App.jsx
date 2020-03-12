import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {LandingPage, OrgInfo, Profile, SignUp, DonationPage} from './screens'
import {DialogLogIn}  from "./components/Dialog"

function App () {
    return (
      <React.Fragment>
      <Router>
          <Switch>  
          <Route path="/" exact component={LandingPage}/>
          <Route path="/SignUp" component={SignUp}/>
          <Route path="/OrgInfo" component={OrgInfo}/>
          <Route path="/Profile" component={Profile}/>
          <Route path="/DonationPage" component={DonationPage}/>
          <Route path="/LogIn" component={DialogLogIn}/>

        </Switch>
      </Router>
      </React.Fragment>
    )
}

export default App

