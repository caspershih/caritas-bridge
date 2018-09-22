import React from "react";
import "../SearchField/SearchField.css";


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
      //const {value } = this.state;
      //axios.post('http://localhost:8080/search', value).then(response => {
        //console.log(response);
     // })
    }
  
    render() {
      return (
        <div className="searchRow">
         <form onSubmit={this.handleSubmit}>
          <div className="searchform">
             <label className="loginlabel">Already Registered? </label>
            <input type="submit" className="btn searchBtn" value="Login Here" />
          </div>
          </form>
        </div>
      );
    }
  }

export default UserLogin;