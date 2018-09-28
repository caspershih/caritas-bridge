import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./Dashboard/User.css";
import Nav from "../components/Nav/Nav";
import HomePage from "./HomePage/HomePage";
import Contact from "./Contact/Contact";
import Search from "./Dashboard/Search";
import Saved from "./Dashboard/Saved";
import AcctHistory from "./Dashboard/History";
import Account from "./Dashboard/Account";
import MessageCenter from "./Dashboard/MessageCenter";
import Profile from "./Dashboard/Profile";
import EditProfile from "./Dashboard/EditProfile";
import NotFound from "./NotFound";

class Main extends Component {
  render() {
    return (
      <Router>
        <div>
        <Nav /> 
        <Switch>
          <Route name="Home" exact path="/" component={HomePage} />
          <Route name="Login" path="/User" component={Search} />
          <Route name="Contact" path="/Contact" component={Contact} />
          <Route name="Account" path="/Account" component={Account} />
          <Route name="Search" path="/Search" component={Search} />
          <Route name="Saved" path="/Saved" component={Saved} />
          <Route name="History" path="/History" component={AcctHistory} />
          <Route name="MessageCenter" path="/MessageCenter" component={MessageCenter} />
          <Route name="Profile" path="/Profile" component={Profile} />
          <Route name="EditProfile" path="/edit" component={EditProfile} />
          <Route component={NotFound} />
        </Switch>
        </div>
      </Router>
    )
  }
}
export default Main;
