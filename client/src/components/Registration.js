import React, { Component } from 'react';
import axios from 'axios';


class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            lname: '',
            mname: '',
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
        mname: this.state.mname,
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
    console.log(this.state);
};

    // componentDidMount() {
    //     axios.post('/user/register')
    //     .then(res => {
    //         this.setState(res.data);
    //         console.log(res);
    //     })
    // }


    // handleInputChange = (event) => {
    //     event.preventDefault()
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })

    // }

render() {
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
        <label>First Name</label>
        <input 
        // value={this.state.fname} 
        type="text" 
        name="fname" 
        onChange={this.handleChange} 
        /><br />
        <label>Last Name</label>
        <input 
        // value={this.state.lname} 
        type="text" 
        name="lname" 
        onChange={this.handleChange}
        /><br />
        <label>Middle Initial</label>
        <input
        // value={this.state.mname} 
        type="text" 
        name="mname" 
        onChange={this.handleChange}
        /><br />
        <label>Address</label>
        <input
        // value={this.state.address} 
        type="text" 
        name="address" 
        onChange={this.handleChange}
        /><br />
        <label>City</label>
        <input
        // value={this.state.city} 
        type="text" 
        name="city" 
        onChange={this.handleChange}
        /><br />
        <label>State</label>
        <input
        // value={this.state.state} 
        type="text" 
        name="state" 
        onChange={this.handleChange}
        /><br />
        <label>Zip</label>
        <input
        // value={this.state.zip} 
        type="text" 
        name="zip" 
        onChange={this.handleChange}
        /><br />
        <label>Phone</label>
        <input
        // value={this.state.phone} 
        type="text" 
        name="phone" 
        onChange={this.handleChange}
        /><br />
        <label>Email</label>
        <input
        // value={this.state.email} 
        type="text" 
        name="email" 
        onChange={this.handleChange}
        /><br />
        <label>Password</label>
        <input
        // value={this.state.password} 
        type="password" 
        name="password" 
        onChange={this.handleChange}
        /><br />
        <button type="submit">Submit</button>
        {/* <button type="submit">Submit</button> */}
        </form>
    </div>
    );
}


}



export default Registration;