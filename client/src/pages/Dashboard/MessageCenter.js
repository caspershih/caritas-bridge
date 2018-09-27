import React from "react";
import "./User.css";
import UserNav from "./UserNav";
import UserLogout from "../../components/Logout/UserLogout";

const MessageCenter = () => (
<div className="dashWrap">
<UserLogout />
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

            <div className="resultsDiv">

                <div className="messageCenterTop">
                <h2>Message Center</h2>
                <div className="messageTop">
                <div className="navButton">RECEIVED</div><span>|</span>
                <div className="navButton">SENT</div>
                </div>
                </div>

                <table className="table">
                        <thead>
                        <tr>
                            <th className="messageCenter">DATE RECEIVED</th>
                            <th className="messageCenter">SUBJECT</th>
                            <th className="messageCenter">FROM</th>
                            <th className="messageCenter">ACTION REQUIRED</th>
                            <th className="messageCenter">REPLY REQUESTED</th>
                        </tr>
                        </thead>
                        <tr>
                            <td>09/15/2018</td>
                            <td>Search Query Results</td>
                            <td>Caritas Bridge Admin</td>
                            <td>none</td>
                            <td>no</td>
                        </tr>
                        <tr>
                            <td>09/12/2018</td>
                            <td>Featured Charities Matching Your Query</td>
                            <td>Caritas Bridge Admin</td>
                            <td>none</td>
                            <td>no</td>
                        </tr>
                        <tr>
                            <td>09/08/2018</td>
                            <td>Profile Update</td>
                            <td>Caritas Bridge Admin</td>
                            <td>none</td>
                            <td>no</td>
                        </tr>
                        <tr>
                            <td>09/06/2018</td>
                            <td>Welcome to Caritas Bridge</td>
                            <td>Caritas Bridge Admin</td>
                            <td>none</td>
                            <td>no</td>
                        </tr>
                </table>
                   
                </div>
            </div>
        </div>
    </div>
);

export default MessageCenter;