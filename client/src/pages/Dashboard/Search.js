import React, { Component } from "react";
<<<<<<< HEAD
import "./User.css";
import UserNav from "./UserNav";
import UserLogout from "../../components/Logout/UserLogout";
import axios from 'axios';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
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
        const user = {
            search: this.state.search,
        };
        axios.post('/user/search', user)
        .then(res => {
            console.log(user);
    
        })
        .catch(error => console.log(error));
        this.setState({
            search: ''
        });
        
    }; 
    
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
            <form id="search-form" onSubmit={this.handleSubmit}>
                        <div className="profileForm">
                            <input type="text" 
                            className="formInput" 
                            onChange={this.handleChange}  
                            aria-describedby="Charity Search" 
                            value = {this.state.search}
                            name="search"></input>
                        </div>   
                        <button className="search" id="3">Search</button>
            </form>
            </div>

                <div className="resultsDiv">
                <h2>Search Results</h2>
                <hr />

                <h4>No results to display. Please start a new search.</h4>

                    {/*<h4>Charity Name</h4>
                    <img className="logo" src="https://via.placeholder.com/150x150" alt="Charity Logo"></img>
                    <p><font color="#064554">Mision Statement:</font> Lorem ipsum dolor sit amet, feugiat pellentesque vitae ut nulla dui
                        torquent, rutrum maecenas odio sagittis pellentesque sit pede, libero
                        placerat posuere quis id vehicula. Vulputate facilisis. Morbi lacus.
                        Sociosqu malesuada hac suscipit, non duis dui
                        ipsum integer praesent.</p>
                    <p><font color="#064554">Tagline:</font> Placerat posuere quis id vehicula</p>
                    <p><font color="#064554">Category:</font> Animals</p>
                    <p><font color="#064554">Cause:</font> Prevent Animal Cruelty</p>
                    <p><font color="#064554">Web Site:</font><a target="_blank" rel="noopener noreferrer" href="http://google.com"> www.thischaritywebsite.com</a></p>

                    <button name="organization._id" className="btn btn-primary" onClick="saveCharity"> Save This</button>
                    <div className="spacer"><hr /></div>*/}

                </div>
            </div>
        </div>
    </div>
    </main>
=======
import axios from 'axios';
import UserNav from "./UserNav";
import UserLogout from "../../components/Logout/UserLogout";
//import Results from "../../components/Search/Results";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nonProfit: [{
                ein: '',
                charityName: '',
                mission: '',
                websiteURL: '',
                cause: '',
                searchTerm: '',
                showResults: false
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
        axios.get(`https://api.data.charitynavigator.org/v2/Organizations?app_id=23f5e47b&app_key=39fc201e9242112fad6b7a96de422bd6&pageSize=20&search=${this.state.searchTerm}&rated=true&sort=RELEVANCE%3ADESC`)
            // .then(json => console.log(json.data[0].charityName));
            .then(res => {
                this.setState({ nonProfit: res.data });
                this.setState({
                    searchTerm: ''
                });
                // console.log(this.state.nonProfit);
            })
    }

    showDiv()
    {
        this.setState({
            showResults: true
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
                                <form id="search-form" onSubmit={this.handleSubmit}>
                                    <div className="profileForm">
                                        <input
                                            type="text"
                                            className="formInput"
                                            id="search-term"
                                            name='searchTerm'
                                            placeholder="Enter keyword here to search for charities"
                                            onChange={this.handleChange}
                                            value={this.state.searchTerm} />
                                    </div>
                                    <button onClick={()=>this.showDiv()} type='submit' className="btn btn-primary search" id="3"> Search</button>

                                </form>
                            </div>
                            
                            {this.state.showResults?
                            <div className="resultsDiv">
                                <h2>Search Results</h2>
                                <hr />
                                {this.state.nonProfit.map(nonprofit =>
                                    <div className="charityResults" key={nonprofit.id}>
                                        <div className="flexDiv">
                                            <h4>{nonprofit.charityName}</h4>
                                            <p><font color="#832019">EIN#: </font> {nonprofit.ein}</p>
                                        </div>
                                        <p><font color="#832019">Cause: </font> {nonprofit.cause.causeName}</p>
                                        <p><font color="#832019">Mission Statement: </font> {nonprofit.mission}</p>
                                        <p><font color="#832019">Website: </font> <a href={nonprofit.websiteURL}>{nonprofit.websiteURL}</a></p>
                                        <div className="buttonRow">
                                            <button name="organization._id" className="btn btn-primary" onClick="saveCharity"> Save Charity</button>
                                        </div>
                                        <div className="spacer"><hr /></div>

                                    </div>)}
                            </div>
                            :<div className="noResults">Please enter a keyword to start a new search.</div>
                            }

                        </div>
                    </div>
                </div>
            </main>
>>>>>>> 5c300b33862c451ce40ac1b93f17326fa265a750
        );
    }
}

export default Search;
