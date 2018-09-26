import React from "react";
import "../SearchField/SearchField.css";
import UserLogoutButton from '../../components/Logout/UserLogoutButton';


class UserLogout extends React.Component {
    constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }
   
    render() {
      return (
        <div className="searchRow">
          <div className="searchform">
             <label className="loginlabel">Welcome user.fname! </label>
            <UserLogoutButton />
          </div>
        </div>
      );
    }
  }

export default UserLogout;