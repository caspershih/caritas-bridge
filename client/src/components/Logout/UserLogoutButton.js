import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
<<<<<<< HEAD
//import axios from 'axios';

class UserLogoutButton extends Component {
=======
import axios from 'axios';

class UserLogoutButton extends Component {
        state = {
        redirect: false
    }
>>>>>>> 5c300b33862c451ce40ac1b93f17326fa265a750
    
    handleSubmit = event => {
        console.log('goodbye');
        event.preventDefault();
        
<<<<<<< HEAD
        /*axios.get('/user/logout', user)
        .then(res => {
            console.log(user);
    
        });*/
        
=======
        axios.post('/user/logout')
        .catch(error => console.log(error));
        this.setRedirect();
>>>>>>> 5c300b33862c451ce40ac1b93f17326fa265a750
    };

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

    renderRedirect = () => {
        if (this.state.redirect) {
<<<<<<< HEAD
        return <Redirect to='/logout' />
=======
          return <Redirect to='/' />
>>>>>>> 5c300b33862c451ce40ac1b93f17326fa265a750
        }
      }

    render() {
        return (
            <main>
<<<<<<< HEAD
                <button id="logoutBtn" type="submit">
=======
                {this.renderRedirect()}
                <button id="logoutBtn" onClick={this.setRedirect} type="submit">
>>>>>>> 5c300b33862c451ce40ac1b93f17326fa265a750
                Logout
                </button>
            </main>
        );
    }
}

export default UserLogoutButton;
