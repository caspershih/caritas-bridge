import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import Modal from "../Modal";
import "./UserLoginButton.css";

class UserLoginButton extends Component {
    state = { 
        show: false,
        redirect: false 
    };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/Search' />
        }
      }

    render() {
        return (
            <main>
                
                <Modal show={this.state.show} handleClose={this.hideModal}>
                <h1>Login to your Profile</h1>
                <hr />
                <p class="modalText">Username</p>
                <input type="text" class="form-control" id="userEmail" aria-describedby="email"></input>
                <br></br>
                <p class="modalText">Password</p>
                <input type="password" class="form-control" id="userPassword" aria-describedby="password"></input>
                <br></br>
                {this.renderRedirect()}
                <button class="modalSubmit" id="submitbtn" onClick={this.setRedirect}>Login</button>
                </ Modal>
                <button id="loginBtn" type="button" onClick={this.showModal}>
                Login Here!
                </button>
            </main>
        );
    }
}

export default UserLoginButton;