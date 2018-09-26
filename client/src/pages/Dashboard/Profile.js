import React from "react";
import "./User.css";
import UserNav from "./UserNav";
import UserLogin from "../../components/Login/UserLogin";

const Profile = () => (
<div className="dashWrap">
<UserLogin />
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
                <hr />
                {/*Add code below to link to edit profile page that will update this data*/}
                <div className="profileEdit"><a href="/edit"><span>[edit profile]</span></a></div>
                <p className="modalText">User Information</p>
                    <table>
                        <tbody>
                        <tr>
                            <td><b>First Name: </b></td>
                            <td>{/*user.firstname*/}</td>
                            <td><b>Last Name: </b></td>
                            <td>{/*user.lastname*/}</td>
                        </tr>
                        </tbody>
                    </table>

                <p className="modalText">Contact Information</p>
                    <table>  
                    <tbody>  
                        <tr>
                            <td><b>Address: </b></td>
                            <td>{/*user.address*/}</td>
                        </tr>

                        <tr>
                            <td><b>City: </b></td>
                            <td>{/*user.city*/}</td>
                            <td><b>State: </b></td>
                            <td>{/*user.state*/}</td>
                            <td><b>Zip: </b></td>
                            <td>{/*user.zip*/}</td>
                        </tr>

                        <tr>
                            <td><b>Phone: </b></td>
                            <td>{/*user.phone*/}</td>
                            <td><b>Email: </b></td>
                            <td colSpan="3">{/*user.email*/}</td>
                        </tr>
                    </tbody>
                    </table>
                   
                </div>
            </div>
            </div>
        </div>
    </div>
);

export default Profile;