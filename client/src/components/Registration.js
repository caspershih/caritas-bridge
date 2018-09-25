import React, { Component } from 'react';
// import Header from "./Header";
// import Container from "./Container";
import axios from 'axios';

class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            lname: '',
            address: '',
            city: '',
            state: '',
            zip: '',
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
        fname: this.state.fname,
        lname: this.state.lname,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        email: this.state.email,
        password: this.state.password
    }
    axios.post('/user/register', user)
    .then(res => {
        console.log(res);
        console.log(res.data);

    })
    .catch(error => console.log(error));

};


render() {
    return (
        <div>
            <h1>Create Profile</h1>
                <hr />
                
                <form id="user-form" onSubmit={this.handleSubmit}>
                        <p className="modalText">User Information</p>
                        <div className="profileForm">
                        <input className="formInput" 
                        placeholder="First Name" 
                        id="firstName" 
                        type="text" 
                        name="fname"
                        required="required" 
                        onChange={this.handleChange}/>
                        <input className="formInput" 
                        placeholder="Last Name" 
                        id="lastName" 
                        type="text" 
                        name="lname"
                        required="required" 
                        onChange={this.handleChange}/>
                        </div>
                        <p className="modalText">User Contact Information</p>
                        <div className="profileForm">
                        <input className="formInput" 
                        placeholder="Address" 
                        id="address" 
                        type="text" 
                        name="address"
                        required="required" 
                        onChange={this.handleChange}/>
						</div>
                        <div className="profileForm">
                        <input className="formInput" 
                        placeholder="City" 
                        id="city" 
                        type="text" 
                        name="city"
                        required="required"
                        onChange={this.handleChange}/>
                        <input className="formInput" 
                        placeholder="State" 
                        id="state" 
                        type="text" 
                        name="state"
                        required="required"
                        onChange={this.handleChange}/>
                        <input className="formInput" 
                        placeholder="Zip Code" 
                        id="zip" 
                        type="text" 
                        name="zip"
                        required="required" 
                        onChange={this.handleChange}/>
						</div>
                        <div className="profileForm">
                        <input className="formInput" 
                        placeholder="Phone Number" 
                        id="phone" 
                        type="text" 
                        name="phone" 
                        required="required" 
                        onChange={this.handleChange}/>
                        <input className="formInput" 
                        placeholder="Email" 
                        id="user-email" 
                        type="email" 
                        name="email" 
                        onChange={this.handleChange}/>
                        </div>
                        <p className="modalText">User Password</p>
                        <div className="profileForm">
                        <input className="formInput" 
                        placeholder="Password" 
                        id="user-password" 
                        type="password" 
                        name="password" 
                        onChange={this.handleChange}/> 
                        {/* <input className="formInput" placeholder="Confirm Password" id="user-password-confirm" type="password" name="password-confirm"/> */}
						
                        </div>
                        <button className="modalSubmit" id="s">Create Profile</button>
                    </form>
                

    </div>
    );
}


}



export default Registration;