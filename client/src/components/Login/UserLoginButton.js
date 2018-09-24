import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import Modal from "../Modal";

class UserLoginButton extends Component {
    state = { 
        show: false,
        redirect: false 
    };

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    handleSubmit(event) {
        event.preventDefault();
      }

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
        return <Redirect to='/user/login' />
          //return <Redirect to='/Search' />
        }
      }

    render() {
        return (
            <main>
                
                <Modal show={this.state.show} handleClose={this.hideModal}>
                <div className="modalCenter">
                <h1>Login to your Profile</h1>
                <hr />
                <form id="login-form" method="POST" action="/user/login" onSubmit={this.handleSubmit}>
                    <p className="modalText">Username</p>
                        <div className="profileForm">
                            <input type="text" className="formInput" id="login-email" placeholder="Enter your email" aria-describedby="email" name="email"></input>
                        </div>            
                    <p className="modalText">Password</p>
                        <div className="profileForm">
                            <input type="password" className="formInput" id="login-password" placeholder="Enter your password" aria-describedby="password" name="password"></input>
                        </div>
                </form>
                {this.renderRedirect()}
                <button className="modalSubmit" id="submitbtn" onClick={this.setRedirect}>Login</button>
                </div>
                </ Modal>
                <button id="loginBtn" type="button" onClick={this.showModal}>
                Login Here!
                </button>
            </main>
        );
    }
}

export default UserLoginButton;