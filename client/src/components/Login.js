import React, { Component } from 'react';
// import Header from "./Header";
// import Container from "./Container";
import axios from 'axios';


class Login extends Component {
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
    }
    axios.post('/user/login', user)
    .then(res => {
        console.log(res);
        console.log(res.data);
        console.log("Authenticated");
    }).catch(function(error) {
        console.log("Error during authentication");
    })

};

render() {
    return (
        <div>
            <h1>Create Profile</h1>
                <hr />
                
                <form id="userform" onSubmit={this.handleSubmit}>
                        <p className="modalText">login</p>
                        <div className="profileForm">
                        <input className="formInput" 
                        placeholder="Email" 
                        id="useremail" 
                        type="email" 
                        name="email" 
                        onChange={this.handleChange}/>
                        </div>
                        <p className="modalText">User Password</p>
                        <div className="profileForm">
                        <input className="formInput" 
                        placeholder="Password" 
                        id="userpassword" 
                        type="password" 
                        name="password" 
                        onChange={this.handleChange}/> 
						
                        </div>
                        <button className="modalSubmit" id="1">Login</button>
                    </form>
                

    </div>
    );
}


}



export default Login;