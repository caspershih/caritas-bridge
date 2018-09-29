import React, { Component } from "react";
import axios from 'axios';
import UserNav from "./UserNav";
import UserLogout from "../../components/Logout/UserLogout";

class newSearch extends Component {
	constructor(props){
        super(props);
        this.state = { 
            nonProfit: [{
                ein: '',
                charityName: '',
                mission: '',
                searchTerm: ''
            }]
            
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
        
        handleChange(e) {
            this.setState({ [e.target.name]: e.target.value });
          }

            // Need to hide the app_id and app_key
  handleSubmit(event) {
    console.log('A search query was submitted for ' + this.state.searchTerm);
    event.preventDefault();
    axios.get(`https://api.data.charitynavigator.org/v2/Organizations?app_id=23f5e47b&app_key=39fc201e9242112fad6b7a96de422bd6&pageSize=20&search=${this.state.searchTerm}`)
    // .then(json => console.log(json.data[0].charityName));
    .then(res => {
        this.setState({ nonProfit: res.data});
        this.setState({
            searchTerm: ''
        });
        // console.log(this.state.nonProfit);
    })
  }

	render() {
		return (
        <main>
        <div className="dashWrap">
        <UserLogout />
            <div className="dashRow">
                    <div className="dashTop">
                            <h3>User Dashboard</h3>
                    </div>
            </div>

            <div className="dashRow">
                    <div className="leftColumn">
                            <UserNav />
                    </div>

                    <div className="rightColumn">			

                        <div className="searchSection">
                            <div className="heavy">Search for a Charity</div>
                            <form onSubmit={this.handleSubmit}>
                            <div className="search-form">
                                <input 
                                type="text" 
                                className="formInput" 
                                id="search-term" 
                                name='searchTerm'
                                placeholder="Enter here to search for charities."
                                onChange={this.handleChange} 
                                value={this.state.searchTerm} />
                                </div>
                                <button type='submit' className="search" id="3"> Search</button>
                            
                            </form>
                        </div>

       <ul>
        {this.state.nonProfit.map(nonprofit => 
        
        <li key={nonprofit.id}>{nonprofit.ein} {nonprofit.charityName} {nonprofit.mission}</li>)}
            </ul>
                    </div>
            </div>
     
        </div>
        </main>
        );
    }
}

export default newSearch;
