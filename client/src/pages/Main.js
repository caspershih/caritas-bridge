import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./Dashboard/User.css";
import Nav from "../components/Nav/Nav";
import HomePage from "./HomePage/HomePage";
import Contact from "./Contact/Contact";
import Confirm from "./Contact/Confirm";
import Search from "./Dashboard/Search";
import Saved from "./Dashboard/Saved";
import Account from "./Dashboard/Account";
import MessageCenter from "./Dashboard/MessageCenter";
import Profile from "./Dashboard/Profile";
import EditProfile from "./Dashboard/EditProfile";
import NotFound from "./NotFound";
import Footer from "../components/Footer/Footer";
import AccountHistory from "./Dashboard/AccountHistory";

class Main extends Component {
  render() {
    return (
      <Router>
        <div>
        <Nav /> 
        <Switch>
          <Route name="Home" exact path="/" component={HomePage} />
          <Route name="Login" path="/User" component={Account} />
          <Route name="Contact" path="/Contact" component={Contact} />
          <Route name="Confirm" path="/Confirm" component={Confirm} />
          <Route name="Account" path="/Account" component={Account} />
          <Route name="Search" path="/Search" component={Search} />
          <Route name="Saved" path="/Saved" component={Saved} />
          <Route name="History" path="/History" component={AccountHistory} />
          <Route name="MessageCenter" path="/MessageCenter" component={MessageCenter} />
          <Route name="Profile" path="/Profile" component={Profile} />
          <Route name="EditProfile" path="/edit" component={EditProfile} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
        </div>
      </Router>
    )
  }
}
export default Main;
