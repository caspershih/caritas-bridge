import React from "react";
import "./User.css";
import axios from 'axios';
import UserNav from "./UserNav";
import UserLogout from "../../components/Logout/UserLogout";

class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Selections: [{
                ein: '',
                charityName: '',
                mission: '',
                websiteURL: '',
                cause: ''
                
            }],
            showResults: false
            
        };
}

componentDidMount = () => {
    this.getSavedCharities();
    this.showDiv();
}

getSavedCharities = () => {
    axios.get("/api/mylist/saved", Selections)
  .then(res => {
      console.log(res);
  });
}

removeCharity = (id) => {
    axios.delete("/api/mylist/saved", {params: {id: id}})
  .then(res => {
      console.log(res);
  });
}

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
                                {this.state.Selections.map((Selections, index) =>
                                    <div className="charityResults" name='id' key={index}>
                                        <div className="flexDiv">
                                            <h4 name='charityName'>{Selections.charityName}</h4>
                                            <p name='ein'><font color="#832019">EIN#: </font>{Selections.ein}</p>
                                        </div>
                                        <p name='cause'><font color="#832019">Cause: </font>{Selections.cause.causeName}</p>
                                        <p name='mission'><font color="#832019">Mission Statement: </font>{Selections.mission}</p>
                                        <p name='url'><font color="#832019">Website: </font> <a href="Selections.websiteURL">{Selections.websiteURL}</a></p>
                                        <div className="buttonRow">
                                            <button name="organization._id" data-index={index} className="btn btn-primary" onClick={this.removeCharity}> Unsave Charity</button>
                                        </div>
                                        <div className="spacer"><hr /></div>
                                    </div>)}
                                                               
                </div>
                :<div className="noResults">No saved charities to display. Please try a new search.</div>
            }
            </div>
        </div>
    </div>
);

}
}

export default Saved;
