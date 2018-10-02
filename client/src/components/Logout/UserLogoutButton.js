import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from 'axios';

class UserLogoutButton extends Component {
    
    handleSubmit = event => {
        console.log('goodbye');
        event.preventDefault();
        const user = {};
        
        axios.post('/user/logout', user)
        .then(res => {

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
                {/* {this.renderRedirect()} */}
                <button id="logoutBtn" onClick={this.handleSubmit} type="submit">
                Logout
                </button>
            </main>
        );
    }
}

export default UserLogoutButton;
