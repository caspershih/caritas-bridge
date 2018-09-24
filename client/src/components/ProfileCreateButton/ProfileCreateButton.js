import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import Modal from "../Modal";

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
            return <Redirect to='/user/register' />
          //return <Redirect to='/Profile' />
        }
      }

    render() {
        return (
            <main>
                
                <Modal show={this.state.show} handleClose={this.hideModal}>
                <h1>Create Profile</h1>
                <hr />
                
                <form id="user-form" method="POST" action="/user/register">
                        <p className="modalText">User Information</p>
                        <div className="profileForm">
                        <input className="formInput" placeholder="First Name" id="firstName" type="text" name="fname" required="required"/>
						<input className="formInput" placeholder="Last Name" id="lastName" type="text" name="lname" required="required"/>
                        </div>
                        <p className="modalText">User Contact Information</p>
                        <div className="profileForm">
						<input className="formInput" placeholder="Address" id="address" type="text" name="address" required="required"/>
						</div>
                        <div className="profileForm">
						<input className="formInput" placeholder="City" id="city" type="text" name="city" required="required"/>
						<input className="formInput" placeholder="State" id="state" type="text" name="state" required="required"/>
						<input className="formInput" placeholder="Zip Code" id="zip" type="text" name="zip" required="required"/>
						</div>
                        <div className="profileForm">
						<input className="formInput" placeholder="Phone Number" id="phone" type="text" name="phone" required="required"/>
						<input className="formInput" placeholder="Email" id="user-email" type="email" name="email" />
                        </div>
                        <p className="modalText">User Password</p>
                        <div className="profileForm">
						<input className="formInput" placeholder="Password" id="user-password" type="password" name="password"/> 
                        <input className="formInput" placeholder="Confirm Password" id="user-password-confirm" type="password" name="password-confirm"/>
						</div>
                    </form>
                <hr />   
                {this.renderRedirect()}
                <button className="modalSubmit" id="submitbtn" onClick={this.setRedirect}>Create Profile</button>
                </ Modal>
                <button id="createBtn" type="button" onClick={this.showModal}>
                Create A Profile Today!
                </button>
            </main>
        );
    }
}

export default ProfileCreateButton;