import React, { Component } from "react";
import "./User.css";
import axios from 'axios';
import UserNav from "./UserNav";
import UserLogout from "../../components/Logout/UserLogout";

class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nonProfit: [{
                id: '',
                ein: '',
                charityName: '',
                mission: '',
                websiteURL: '',
                cause: ''
                
            }],
            showResults: true            
        };

        // this.removeCharity = this.removeCharity.bind(this);
}

componentDidMount() {
    axios.get('/api/mylist')
    .then(res => {
        this.setState({ nonProfit: res.data});
        // console.log(res.data);
    });
}


// removeCharity(event) {
//     event.preventDefault();
//     console.log('remove');
//     const list = event.target.getAttribute('data-index');
//     const nonProfit = {
//         id: this.state.nonProfit[list].id
//     }
    
//   axios.post("/api/mylist", nonProfit)
//   .then(res => {
//       console.log(res);
//       console.log(nonProfit);
//   });

// }


// removeCharity = (id) => {
//     axios.delete("/api/mylist", {params: {id: id}})
//   .then(res => {
//         this.setState({ nonProfit: res.data});
//   });
// }

showDiv()
    {
        this.setState({
            showResults: true
        })
    }


render() {
    return (
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

            {this.state.showResults?
                <div className="resultsDiv">
                <h2>Saved Charities</h2>
                                <hr />
                                {this.state.nonProfit.map((nonProfit, index) =>
                                    <div className="charityResults" name='id' key={index}>
                                        <div className="flexDiv">
                                            <h4 name='charityName'>{nonProfit.charityName}</h4>
                                            <p name='ein'><font color="#832019">EIN#: </font>{nonProfit.ein}</p>
                                        </div>
                                        <p name='cause'><font color="#832019">Cause: </font>{nonProfit.cause}</p>
                                        <p name='mission'><font color="#832019">Mission Statement: </font>{nonProfit.mission}</p>
                                        <p name='url'><font color="#832019">Website: </font> <a href={nonProfit.url}>{nonProfit.url}</a></p>
                                        <div className="buttonRow">
                                            <button name="organization._id" data-index={index} className="btn btn-primary" onClick={this.removeCharity}> Remove Charity</button>
                                        </div>
                                        <div className="spacer"><hr /></div>
                                    </div>)}
                                                               
                </div>
                :<div className="resultsDiv">
                <h2>Saved Charities</h2>
                <hr />
                <div className="noResults">No saved charities to display.<br />Please try a new search.</div>
                </div>
            }
            </div>
        </div>
    </div>
);

}
}

export default Saved;
