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
                <div className="userName">Welcome User Name!</div>
            </div>
        </div>

        <div className="dashRow">
            <div className="leftColumn">
                <UserNav />
            </div>
            <div className="rightColumn">

                <div className="Profile">
                <h2>Profile Settings</h2>
                <hr />
                <div className="profileEdit"><span>[edit profile]</span></div>
                <p className="modalText">User Information</p>
                    <table>
                        <tbody>
                        <tr>
                            <td><b>First Name: </b></td>
                            <td>Audrey</td>
                            <td><b>Last Name: </b></td>
                            <td>Fernandez</td>
                        </tr>
                        </tbody>
                    </table>

                <p className="modalText">Contact Information</p>
                    <table>  
                    <tbody>  
                        <tr>
                            <td><b>Address: </b></td>
                            <td>9602 Port Clyde Drive</td>
                        </tr>

                        <tr>
                            <td><b>City: </b></td>
                            <td>Huntington Beach</td>
                            <td><b>State: </b></td>
                            <td>CA</td>
                            <td><b>Zip: </b></td>
                            <td>92646</td>
                        </tr>

                        <tr>
                            <td><b>Phone: </b></td>
                            <td>(714) 336-3652</td>
                            <td><b>Email: </b></td>
                            <td colSpan="3">me@audreyfernandez.com</td>
                        </tr>
                    </tbody>
                    </table>
                   
                </div>
            </div>
        </div>
    </div>
);

export default Profile;