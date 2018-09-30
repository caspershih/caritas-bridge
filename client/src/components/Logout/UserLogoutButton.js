import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from 'axios';

class UserLogoutButton extends Component {
        state = {
        redirect: false
    }
    
    handleSubmit = event => {
        console.log('goodbye');
        event.preventDefault();
        
        axios.post('/user/logout')
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
          return <Redirect to='/' />
        }
      }

    render() {
        return (
            <main>
                {this.renderRedirect()}
                <button id="logoutBtn" onClick={this.setRedirect} type="submit">
                Logout
                </button>
            </main>
        );
    }
}

export default UserLogoutButton;
