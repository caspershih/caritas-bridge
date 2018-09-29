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
	
		//init states
		this.state = {
		  searchTerm: "",
	      searchResults: [],
	      savedCharities: []
		};

		this.clearSearch = this.clearSearch.bind(this);
		this.searchCharities = this.searchCharities.bind(this);
	}

	// componentDidMount = () => {
	// 	this.getSavedCharities();
	// }
//Need to rewrite axios calls below to work properly
	saveCharity = (index) => {
		this.preventDefault();
	    axios.saveCharity(this.state.searchResults[index]).then((response) => {
	      this.getCharities();
	    });
	}

	getSavedCharities = () => {
        axios.getSavedCharities().then((response) => {
            if (response.data !== this.state.savedCharities) {
                this.setState({ savedCharities: response.data });
            }
        });
    }

    getCharities = () => {
	    axios.getSavedCharities().then((response) => {
	      this.setState({ savedCharities: response.data });
	    });
		}

   	removeCharity = (id) => {
	    axios.removeCharity(id).then((response) => {
	      this.getSavedCharities();
	    });
		}

	  handleSearchTerm = (event) => {
	    this.setState({ searchTerm: event.target.value });
	  }

	  clearSearch() {
	    var newState = {
	      searchTerm: "",
	      searchResults: []
	    };
	    this.setState(newState);
	  }

	  searchCharities(searchTerm) {

	    axios.getCharities(searchTerm).then((response) => {

                var returns = [];
                for (var i = 0; i < response.data.response.docs.length; ++i)
                    returns.push(response.data.response.docs[i]);

                this.setState({searchResults : returns});
            });
	  }

	  handleFormSubmit = event => {
	  	event.preventDefault();
	  	this.searchCharities(this.state.searchTerm);
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
