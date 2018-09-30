import React, { Component } from "react";
import Search from "../../components/Search/Search";
import Results from "../../components/Search/Results";
import axios from 'axios';
import UserNav from "./UserNav";
import UserLogout from "../../components/Logout/UserLogout";

import { Route } from "react-router-dom";

class MainSearch extends Component {
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

			    <Search 
				    searchTerm = {this.state.searchTerm}
		      		handleSearchTerm = {this.handleSearchTerm}
				    handleFormSubmit={this.handleFormSubmit}
				    clearSearch={this.clearSearch} />
			    <Route render={()=><Results 
			    	passedResults={this.state.searchResults}
			    	saveCharity={this.saveCharity} />} />

				</div>
        </div>
    </div>
    </main>
        );
    }
}

export default MainSearch;
