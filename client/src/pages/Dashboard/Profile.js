import React from "react";
import "./User.css";
import UserNav from "./UserNav";
import UserLogout from "../../components/Logout/UserLogout";

const Profile = () => (
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
            <div className="resultsDiv">
                <div className="Profile">
                <h2>Profile Settings</h2>
                
                {/*Add code below to link to edit profile page that will update this data*/}
                <div className="profileEdit"><a href="/edit">[edit profile]</a></div>
                <hr />
                
                <h4>User Information</h4>
                <div className="borderBox">
                    <table className="profileTable">
                        <tbody>
                        <tr>
                            <td className="headText">Name: </td>
                            <td className="userText">user.firstname user.lastname</td>
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
                            <td className="userText">user.address</td>
                        </tr>

                        <tr>
                        <td className="headText">City: </td>
                        <td className="userText">user.city</td>
                            <td className="headText">State: </td>
                            <td className="userText">user.state</td>
                            <td className="headText">Zip: </td>
                            <td className="userText">user.zip</td>
                        </tr>

                        <tr>
                            <td className="headText">Phone: </td>
                            <td className="userText">user.phone</td>
                            <td className="headText">Email: </td>
                            <td className="userText" colSpan="3">user.email</td>
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
        </div>
        </div>
    </div>
);

export default Profile;