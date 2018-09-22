import React, { Component } from "react";
import axios from "axios";

class CreateProfile extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    }
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value })
  submit = e => {
    e.preventDefault();
    axios.post("/api/user", {username: this.state.username})
    .then(resp => {
        window.location.assign("/user/" + resp.data.id);
    })
    .catch(e => {
      console.error(e)
    })
  }
  render() {
    return (
      <div>
          <form>
            <label>User Name</label>
            <input type = "text" 
            name = "username" 
            placeholder = "Select a user name" 
            value = {this.state.username}
            onChange = {this.onChange}
            />
            <button className = "btn btn-primary" onClick={this.submit}>submit</button>
          </form>
      </div>
    );
  }
}

export default CreateProfile;
