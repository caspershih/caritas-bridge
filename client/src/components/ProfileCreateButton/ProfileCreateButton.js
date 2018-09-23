import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "../Modal";
import "./ProfileCreateButton.css";

class ProfileCreateButton extends Component {
    state = { show: false };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <main>
                
                <Modal show={this.state.show} handleClose={this.hideModal}>
                <h1>Create Profile</h1>
                <p>Username</p>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <br></br>
                <p>Password</p>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <br></br>
                </ Modal>
                <button id="createBtn" type="button" onClick={this.showModal}>
                Create A Profile Today?
                </button>
            </main>
        );
    }
}

export default ProfileCreateButton;