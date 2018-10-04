import React, { Component } from "react";
import "./User.css";
import axios from 'axios';
import UserNav from "./UserNav";
import UserLogout from "../../components/Logout/UserLogout";

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            User: [{
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            email: ''
        }],
    };
    // this.editUser = this.editUser.bind(this);
}

componentDidMount() {
    axios.get('/user/profile')
    .then(res => {
        this.setState({ User: res.data});
        // console.log(User[0].firstName);
    });
}

// editUser = (id) => {
//     axios.update("/user")
//   .then(res => {
//         this.setState({ Users: res.data});
//   });
// }

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

            {this.state.User.map((User, index) =>
            <div className="resultsDiv" name='id' data-index={index}>
                <div className="Profile">
                <h2>Profile Settings</h2>
                <div className="profileEdit"><a href="/edit">[edit profile]</a></div>
                <hr />
                
                <h4>User Information</h4>
                <div className="borderBox">
                    <table className="profileTable">
                    
                        <tbody>
                        <tr>
                            <td className="headText">Name: </td>
                            <td className="userText">{User.firstName} {User.lastName}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Contact Information</h4>
                <div className="borderBox">
                    <table className="profileTable">  
                    <tbody>  
                        <tr>
                            <td className="headText">Address: </td>
                            <td className="userText">{User.address}</td>
                        </tr>

                        <tr>
                        <td className="headText">City: </td>
                        <td className="userText">{User.city}</td>
                            <td className="headText">State: </td>
                            <td className="userText">{User.state}</td>
                            <td className="headText">Zip: </td>
                            <td className="userText">{User.zip}</td>
                        </tr>

                        <tr>
                            <td className="headText">Phone: </td>
                            <td className="userText">{User.phone}</td>
                            <td className="headText">Email: </td>
                            <td className="userText" colSpan="3">{User.email}</td>
                        </tr>
                    </tbody>
                    </table>
                    </div>
                    
                    <h4>Preferences</h4>
                    <div className="borderBox">
                    <p className="pHeading">Selected Charity Causes:</p>
                    <p className="pText">Animal Cruelty, Homelessness, Children's Charities</p>

                    <p className="pHeading">Donation Type Preferred:</p>
                    <p className="pText">Volunteer, Monetary, Goods</p>
 
                    <p className="pHeading">Charity Results Per Search:</p>
                    <p className="pText">20</p>
 
                    <p className="pHeading">Geographic Area of Interest:</p>
                    <p className="pText">International</p>
                    </div>
                </div>
            </div>
            )};
        </div>
        </div>
    </div>
);

}
}

export default Profile;