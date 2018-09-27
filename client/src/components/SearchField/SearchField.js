import React, { Component } from 'react';
import "./SearchField.css";
import axios from 'axios';


class SearchField extends React.Component {
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
    axios.get('/api/mylist/search')
    .then(res => {
        this.setState({ nonProfit: res.data});
        console.log(res);
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

export default SearchField;