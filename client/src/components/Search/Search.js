import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
        searchTerm: ''
    }
};

handleChange = e => {
  this.setState({
      [e.target.name]: e.target.value
  });
};

handleSubmit = event => {
  console.log('hello');
  event.preventDefault();
  const search = this.state.searchTerm
  axios.get('/api/mylist/search', search)
  .then(res => {
      // this.setState( {search: res.data});
      // console.log(search);
      console.log(res);
  })
  .catch(error => console.log(error));
  this.setState({
      searchTerm: '',
  });
  // this.setRedirect();

};

// componentDidMount() {
//   axios.get('/api/mylist')
//   .then(res => {
//       this.setState({ nonProfit: res.data});
//       console.log(res);
//   });
// }



render() {

  return(
<div className="searchSection">
<div className="heavy">Search for a Charity</div>
<form onSubmit={this.handleSubmit}>
  <div className="search-form">
    <input 
    type="text" 
    className="formInput" 
    id="search-term" 
    placeholder="Enter here to search for charities." 
    name='searchTerm'
    onChange={this.handleChange}
    value={this.state.searchTerm} />
  </div>
    <button type='submit' className="search" id="3"> Search</button>
  
</form>
</div>
  )

};


};

export default Search;
