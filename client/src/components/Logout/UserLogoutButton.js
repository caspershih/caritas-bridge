import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
<<<<<<< HEAD
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
=======
import axios from 'axios';

class UserLogoutButton extends Component {
        state = {
        redirect: false
    }
>>>>>>> 776cc6b572f32b44978fccdaee7e51b9a9b4316b
    
    handleSubmit = event => {
        console.log('goodbye');
        event.preventDefault();
        
<<<<<<< HEAD
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
=======
        axios.post('/user/logout')
        .catch(error => console.log(error));
        this.setRedirect();
>>>>>>> 776cc6b572f32b44978fccdaee7e51b9a9b4316b
    };

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

    renderRedirect = () => {
        if (this.state.redirect) {
<<<<<<< HEAD
<<<<<<< HEAD
        return <Redirect to='/logout' />
=======
          return <Redirect to='/' />
>>>>>>> 5c300b33862c451ce40ac1b93f17326fa265a750
=======
          return <Redirect to='/' />
>>>>>>> 776cc6b572f32b44978fccdaee7e51b9a9b4316b
        }
      }

    render() {
        return (
            <main>
<<<<<<< HEAD
<<<<<<< HEAD
                <button id="logoutBtn" type="submit">
=======
                {this.renderRedirect()}
                <button id="logoutBtn" onClick={this.setRedirect} type="submit">
>>>>>>> 5c300b33862c451ce40ac1b93f17326fa265a750
=======
                {this.renderRedirect()}
                <button id="logoutBtn" onClick={this.setRedirect} type="submit">
>>>>>>> 776cc6b572f32b44978fccdaee7e51b9a9b4316b
                Logout
                </button>
            </main>
        );
    }
}

export default UserLogoutButton;
