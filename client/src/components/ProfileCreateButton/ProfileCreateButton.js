import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Modal from "../Modal";
import axios from 'axios';

class ProfileCreateButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            lname: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            phone: '',
            email: '',
            password: ''
        }
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
        });
      };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/Account' />
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
            fname: this.state.fname,
            lname: this.state.lname,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('/user/register', user)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(error => console.log(error));
        this.setState({
            fname: '',
            lname: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            phone: '',
            email: '',
            password: ''
        });
        this.hideModal();
        this.setRedirect();
        

        console.log(this.state);
    };

    render() {
        return (
            <main>
                
                <Modal show={this.state.show} handleClose={this.hideModal}>
                <h1>Create Profile</h1>
                <hr />
                
                <form id="user-form2" onSubmit={this.handleSubmit}>
                        <p className="modalText">User Information</p>
                        <div className="profileForm">
                        <input className="formInput" 
                        placeholder="First Name" 
                        type="text" 
                        value = {this.state.fname}
                        name="fname"
                        required="required" 
                        onChange={this.handleChange}/>
                        <input className="formInput" 
                        placeholder="Last Name"  
                        type="text" 
                        value = {this.state.lname}
                        name="lname"
                        required="required" 
                        onChange={this.handleChange}/>
                        </div>
                        <p className="modalText">User Contact Information</p>
                        <div className="profileForm">
                        <input className="formInput" 
                        placeholder="Address" 
                        type="text" 
                        value = {this.state.address}
                        name="address"
                        required="required" 
                        onChange={this.handleChange}/>
						</div>
                        <div className="profileForm">
                        <input className="formInput" 
                        placeholder="City" 
                        type="text" 
                        value = {this.state.city}
                        name="city"
                        required="required"
                        onChange={this.handleChange}/>
                        <input className="formInput" 
                        placeholder="State" 
                        type="text" 
                        value = {this.state.state}
                        name="state"
                        required="required"
                        onChange={this.handleChange}/>
                        <input className="formInput" 
                        placeholder="Zip Code" 
                        type="text" 
                        value = {this.state.zip}
                        name="zip"
                        required="required" 
                        onChange={this.handleChange}/>
						</div>
                        <div className="profileForm">
                        <input className="formInput" 
                        placeholder="Phone Number" 
                        type="text" 
                        value = {this.state.phone}
                        name="phone"
                        required="required" 
                        onChange={this.handleChange}/>
                        <input className="formInput" 
                        placeholder="Email" 
                        type="email" 
                        value = {this.state.email}
                        name="email"
                        onChange={this.handleChange}/>
                        </div>
                        <p className="modalText">User Password</p>
                        <div className="profileForm">
                        <input className="formInput" 
                        placeholder="Password" 
                        type="password" 
                        value = {this.state.password}
                        name="password"
                        onChange={this.handleChange}/> 
						</div>  
                    {this.renderRedirect()}
                    <button className="modalSubmit" id="q" >Create Profile</button>
                    </form>
                
                </ Modal>
                <button id="createBtn" type="button" onClick={this.showModal}>
                Create A Profile Today!
                </button>
            </main>
        );
    }
}

export default ProfileCreateButton;