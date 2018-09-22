import React, { Component } from 'react';
import axios from 'axios';

class NonProfit extends Component {
constructor(props) {
    super(props)
    this.state = {
        name: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        category: '',
        webURL: '',
        email: '',
        ein: '',
        createdAt: '',
        updatedAt: ''

    }
}

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });

    };

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            name: this.state.name,
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            category: this.state.category,
            webURL: this.state.webURL,
            email: this.state.email,
            ein: this.state.ein
        }
        console.log("post: ", user);

        axios.post('/api/mylist/add', user)
        .then(res => {
            console.log(res);
            console.log(res.data);
            console.log(user);
        });
     
    };

    render() {
        const {name} = this.state.name;
        // const {description} = this.state.description;
        const {category} = this.state.category;
        return (
            <form onSubmit ={this.handleSubmit}>
            <label>
                Name: {name}
            </label>
            <input type="text" name="name" onChange={this.handleChange}></input>
            <label>
                Address1: 
            </label>
            <input type="text" name="address1" onChange={this.handleChange}></input>
            <label>
                Address2: 
            </label>
            <input type="text" name="address2" onChange={this.handleChange}></input>
            <label>
                City: 
            </label>
            <input type="text" name="city" onChange={this.handleChange}></input>
            <label>
                state: 
            </label>
            <input type="text" name="state" onChange={this.handleChange}></input>
            <label>
                Zip: 
            </label>
            <input type="text" name="zip" onChange={this.handleChange}></input>
            <label>
                Category: 
            </label>
            <input type="text" name="category" onChange={this.handleChange}></input>
            <label>
                WebURL:     
            </label>
            <input type="text" name="webURL" onChange={this.handleChange}></input>
            <label>
                Email: 
            </label>
            <input type="text" name="email" onChange={this.handleChange}></input>
            <label>
                EIN: 
            </label>
            <input type="text" name="ein" onChange={this.handleChange}></input>
            <button type="submit">Submit</button>
        </form>
        )
    }
    
}

export default NonProfit;