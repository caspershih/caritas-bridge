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
                <hr />
                {/*Add code below to link to edit profile page that will update this data*/}
                <div className="profileEdit"><a href="/edit"><span>[edit profile]</span></a></div>
               
                <h4>User Information</h4>
                    <table className="profileTable">
                        <tbody>
                        <tr>
                            <td className="headText">First Name: </td>
                            <td className="userText">user.firstname</td>
                            <td className="headText">Last Name: </td>
                            <td className="userText">user.lastname</td>
                        </tr>
                        </tbody>
                    </table>

                <h4>Contact Information</h4>
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
            </div>
        </div>
        </div>
    </div>
);

export default Profile;