import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import Modal from "../Modal";
import "./ProfileCreateButton.css";

class ProfileCreateButton extends Component {
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
          return <Redirect to='/Profile' />
        }
      }

    render() {
        return (
            <main>
                
                <Modal show={this.state.show} handleClose={this.hideModal}>
                <h1>Create Profile</h1>
                <hr />
                <p class="modalText">Email</p>
                <input type="email" class="form-control" id="profileEmail" aria-describedby="email" placeholder="Enter a valid email address"></input>
                <br></br>
                <p class="modalText">Username</p>
                <input type="text" class="form-control" id="profileUsername" aria-describedby="username" placeholder="Select a user name for your Caritas Bridge profile"></input>
                <br></br>
                <p class="modalText">Select Password</p>
                <input type="password" class="form-control" id="profilePassword" aria-describedby="password" placeholder="Select a password for your profile"></input>
                <br></br>
                <p class="modalText">Confirm Password</p>
                <input type="password" class="form-control" id="passwordConfirm" aria-describedby="password" placeholder="Confirm Password"></input>
                <br></br>
                {this.renderRedirect()}
                <button class="modalSubmit" id="submitbtn" onClick={this.setRedirect}>Create Profile</button>
                </ Modal>
                <button id="createBtn" type="button" onClick={this.showModal}>
                Create A Profile Today!
                </button>
            </main>
        );
    }
}

export default ProfileCreateButton;