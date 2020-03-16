import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {LandingPage, OrgInfo, Profile, SignUp, DonationPage, Login} from './screens'

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
          <Route path="/LogIn" component={Login}/>
        </Switch>
      </Router>
      </React.Fragment>
    )
}

export default App

