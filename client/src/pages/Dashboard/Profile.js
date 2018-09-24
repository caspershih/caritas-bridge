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
                    <span>First Name: Audrey</span><span>Last Name: Fernandez</span>
                    <p className="modalText">Contact Information</p>
                    
                    <span>Address: 9602 Port Clyde Drive</span><br />
                    <span>City: Huntington Beach</span>
                    <span>State: CA</span><span>Zip: 92646</span><br />
                    <span>Phone: (714) 336-3652</span><span>Email: me@audreyfernandez.com</span>
                    <hr />
                </div>
            </div>
        </div>
    </div>
);

export default Profile;