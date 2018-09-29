import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from 'axios';

class UserLogoutButton extends Component {
    
    handleSubmit = event => {
        event.preventDefault();
        const user = {};

        axios.get('/user/logout', user)
        .then(res => {
            console.log('goodbye');
    
        })
        .catch(error => console.log(error));

        this.setRedirect();
    };

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

    renderRedirect = () => {
        if (this.state.redirect) {
        return <Redirect to='/user/login' />
        }
      }

    render() {
        return (
            <main>
                <button id="logoutBtn" type="submit" onClick={this.handleSubmit}>
                Logout
                </button>
            </main>
        );
    }
}

export default UserLogoutButton;
