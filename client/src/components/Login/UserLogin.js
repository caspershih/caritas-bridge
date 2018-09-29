import React from "react";
import "../../pages/Dashboard/User.css";
import UserLoginButton from '../../components/Login/UserLoginButton';


class UserLogin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
    }
   
    render() {
      return (
        <div className="searchRow">
          <div className="searchform">
             <label className="loginlabel">Already Registered? </label>
            <UserLoginButton />
          </div>
        </div>
      );
    }
  }

export default UserLogin;