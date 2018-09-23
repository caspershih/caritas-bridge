import React from "react";
import "../SearchField/SearchField.css";
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
      alert('Please login to view your account');
      event.preventDefault();
    }
   
    render() {
      return (
        <div className="searchRow">
         <form onSubmit={this.handleSubmit}>
          <div className="searchform">
             <label className="loginlabel">Already Registered? </label>
            {/*<input type="submit" className="btn searchBtn" value="Login Here" />*/}
            <UserLoginButton />
          </div>
          </form>
        </div>
      );
    }
  }

export default UserLogin;