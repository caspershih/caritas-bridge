import React, { Component } from "react";
import axios from 'axios';
import UserNav from "./UserNav";
import UserLogout from "../../components/Logout/UserLogout";

class newSearch extends Component {
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

//Need to rewrite axios calls below to work properly
	saveCharity = (index) => {
		this.preventDefault();
	    axios.saveCharity(this.state.searchResults[index]).then((response) => {
	      this.getCharities();
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

                        <div className="searchSection">
                            <div className="heavy">Search for a Charity</div>
                            <form>
                                <div className="search-form">
                                    <input type="text" className="formInput" id="search-term" 
                                    placeholder="Enter here to search for charities." 
                                    value={props.searchTerm} onChange={props.handleSearchTerm} />
                                </div>
                                    <button onClick={props.handleFormSubmit} className="search" id="3"> Search</button>
                            
                            </form>
                        </div>

                        <div className="resultsDiv">
                            <h2>Search Results</h2>
                            <hr />
                            
                                {props.passedResults.map((data, i) => (
                                    <div key={i} id={"result_"+(i+1)} className="well">
                                    
                                    <h4>Charity Name: {data.charityName}</h4>
                                    <span><p>Address: {data.address1}</p>
                                    <p>{data.address2}</p></span>
                                    <span><p>{data.city}</p>
                                    <p>{data.state}</p>
                                    <p>{data.zip}</p></span>
                                    <p>Category: {data.category}</p>
                                    <p>Website: <a href={data.webURL} target="_blank" >{data.webURL}</a></p>
                                    <p>Mission: {data.mission}</p>
                                    <p>EIN: {data.ein}</p>
                                    
                                    <button name={i} className="btn btn-primary" onClick={saveCharity}> Save Charity</button>
                                    
                                    </div>
                                ))
                                }
                                
                        </div>

                    </div>
            </div>
        </div>
        </main>
        );
    }
}

export default newSearch;
