import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
//import axios from 'axios';

class UserLogoutButton extends Component {
    
    handleSubmit = event => {
        console.log('goodbye');
        event.preventDefault();
        
        /*axios.get('/user/logout', user)
        .then(res => {
            console.log(user);
    
        });*/
        
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
                <button id="logoutBtn" type="submit">
                Logout
                </button>
            </main>
        );
    }
}

export default UserLogoutButton;
