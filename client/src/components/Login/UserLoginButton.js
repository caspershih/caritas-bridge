import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import Modal from "../Modal";
import axios from 'axios';

class UserLoginButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post('/user/login', user)
        .then(res => {
            console.log(user);
    
        })
        .catch(error => console.log(error));
        this.setState({
            email: '',
            password: ''
        });
        this.hideModal();
        this.setRedirect();

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
        // return <Redirect to='/user/login' />
          return <Redirect to='/Account' />
        }
      }

    render() {
        return (
            <main>
                
                <Modal show={this.state.show} handleClose={this.hideModal}>
                <div className="modalCenter">
                <h1>Login to your Profile</h1>
                <hr />
                <form id="login-form" onSubmit={this.handleSubmit}>
                {/* <form id="login-form"> */}
                    <p className="modalText">Username</p>
                        <div className="profileForm">
                            <input type="text" 
                            className="formInput" 
                            onChange={this.handleChange} 
                            placeholder="Enter your email" 
                            aria-describedby="email" 
                            value = {this.state.email}
                            name="email"></input>
                        </div>            
                    <p className="modalText">Password</p>
                        <div className="profileForm">
                            <input type="password" 
                            className="formInput" 
                            onChange={this.handleChange} 
                            placeholder="Enter your password" 
                            aria-describedby="password" 
                            value = {this.state.password}
                            name="password"></input>
                        </div>
                        {this.renderRedirect()}
                <button className="modalSubmit" id="2">Login</button>
                </form>
                </div>
                </ Modal>
                <button id="loginBtn" type="submit" onClick={this.showModal}>
                Login Here!
                </button>
            </main>
        );
    }
}

export default UserLoginButton;