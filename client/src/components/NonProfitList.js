import React, { Component } from 'react';
import axios from 'axios';

class NonProfitList extends Component {

    state = {
        nonProfit: [{
            id: '',
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
        }]
    }

    componentDidMount() {
        axios.get('/api/mylist')
        .then(res => {
            this.setState({ nonProfit: res.data});
            console.log(res.data);
        });
    }

    render() {
        return (
            <ul>
        {/* {this.state.nonProfit.map(nonprofit => <li key={nonprofit.id}>{nonprofit.name})</li>)} */}
            </ul>
        )
    }
    
}

export default NonProfitList;