import React, { Component } from "react";
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
        );
    }
}

export default Search;