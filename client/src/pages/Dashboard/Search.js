import React, { Component } from "react";
import "./User.css";
import axios from 'axios';
import UserNav from "./UserNav";
import UserLogout from "../../components/Logout/UserLogout";
import Modal from "../../components/Modal";
import { Link } from "react-router-dom";

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
                
            }],
            searchTerm: '',
            showResults: false

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveCharity = this.saveCharity.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    //Full api call for testing
    //https://api.data.charitynavigator.org/v2/Organizations?app_id=ae95316c&app_key=b8f6fcfe02204a2429177b5ba581bfa2&pageSize=10&search=Animal&rated=true&sort=RELEVANCE%3ADESC


    // Need to hide the app_id and app_key
    handleSubmit(event) {
        // console.log('A search query was submitted for ' + this.state.searchTerm);
        event.preventDefault();
        axios.get(`https://api.data.charitynavigator.org/v2/Organizations?app_id=23f5e47b&app_key=39fc201e9242112fad6b7a96de422bd6&pageSize=20&search=${this.state.searchTerm}&rated=true&sort=RELEVANCE%3ADESC`)
            // .then(json => console.log(json.data[0].charityName));
            .then(res => {
                this.setState({ nonProfit: res.data, searchTerm: '' });

            })
    }

    showDiv()
    {
        this.setState({
            showResults: true
        })
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    saveCharity(event) {
        event.preventDefault();
        const list = event.target.getAttribute('data-index');
        const nonProfit = {
            ein: this.state.nonProfit[list].ein,
            charityName: this.state.nonProfit[list].charityName,
            mission: this.state.nonProfit[list].mission,
            url: this.state.nonProfit[list].websiteURL,
            cause: this.state.nonProfit[list].cause.causeName
        }
  
  axios.post("/api/mylist/saved", nonProfit)
  .then(res => {
      console.log(res);
  });

  this.setState({ show: true });

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
                            <Modal show={this.state.show} handleClose={this.hideModal}>
                            <div className="spacer"></div>
                            <h1>Charity Saved!</h1>
                            <hr />
                            <div className="flexBox">
                            <p><Link to="Saved"><span>|</span>View Saved Charities<span>|</span></Link></p>
                            <p className="closeText" onClick={this.hideModal}><span>|</span>Stay on Search Page<span>|</span></p>
                            </div>
                            </Modal>
                                <h2>Search Results</h2>
                                <hr />
                                {this.state.nonProfit.map((nonprofit, index) =>
                                    <div className="charityResults" name='id' key={index}>
                                        <div className="flexDiv">
                                            <h4 name='charityName'>{nonprofit.charityName}</h4>
                                            <p name='ein'><font color="#832019">EIN#: </font> {nonprofit.ein}</p>
                                        </div>
                                        <p name='cause'><font color="#832019">Cause: </font> {nonprofit.cause.causeName}</p>
                                        <p name='mission'><font color="#832019">Mission Statement: </font> {nonprofit.mission}</p>
                                        <p name='url'><font color="#832019">Website: </font> <a href={nonprofit.websiteURL}>{nonprofit.websiteURL}</a></p>
                                        <div className="buttonRow">
                                            <button name="organization._id" data-index={index} className="btn btn-primary" onClick={this.saveCharity}> Save Charity</button>
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
        );
    }
}

export default Search;