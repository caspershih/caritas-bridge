import React from "react";
import "./User.css";
import UserNav from "./UserNav";
import UserLogout from "../../components/Logout/UserLogout";
import ComposeMessage from "../../components/ComposeMessage";

const MessageCenter = () => (
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

                <div className="messageCenterTop">
                <h2>Message Center</h2>
                <ComposeMessage />
                </div>
        <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-received" role="tab" aria-controls="nav-received" aria-selected="true">Received</a>
            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-sent" role="tab" aria-controls="nav-sent" aria-selected="false">Sent</a>
        </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-received" role="tabpanel" aria-labelledby="nav-received-tab">

                        <table className="table">
                                <thead>
                                <tr>
                                    <th className="messageCenter">DATE RECEIVED</th>
                                    <th className="messageCenter">SUBJECT</th>
                                    <th className="messageCenter">FROM</th>
                                    <th className="messageCenter centerTD">REPLY REQUESTED</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="TRhover">
                                    <td>09/15/2018</td>
                                    <td>Search Query Results</td>
                                    <td>Caritas Bridge Admin</td>
                                    <td className="centerTD">no</td>
                                </tr>
                                <tr className="TRhover">
                                    <td>09/12/2018</td>
                                    <td>Featured Charities Matching Your Query</td>
                                    <td>Caritas Bridge Admin</td>
                                    <td className="centerTD">no</td>
                                </tr>
                                <tr className="TRhover">
                                    <td>09/08/2018</td>
                                    <td>Profile Update</td>
                                    <td>Caritas Bridge Admin</td>
                                    <td className="centerTD">no</td>
                                </tr>
                                <tr className="TRhover">
                                    <td>09/06/2018</td>
                                    <td>Welcome to Caritas Bridge</td>
                                    <td>Caritas Bridge Admin</td>
                                    <td className="centerTD">no</td>
                                </tr>
                                </tbody>
                        </table>

                        </div>
        <div className="tab-pane fade" id="nav-sent" role="tabpanel" aria-labelledby="nav-sent-tab">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th className="messageCenter">DATE SENT</th>
                                    <th className="messageCenter">TO</th>
                                    <th className="messageCenter">SUBJECT</th>
                                    <th className="messageCenter centerTD">DELETE</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="TRhover">
                                    <td>09/26/2018</td>
                                    <td>World Wildlife Fund</td>
                                    <td>Information request</td>
                                    <td className="centerTD">| delete |</td>
                                </tr>
                                <tr className="TRhover">
                                    <td>09/22/2018</td>
                                    <td>Caritas Bridge Admin</td>
                                    <td>Account information request</td>
                                    <td className="centerTD">| delete |</td>
                                </tr>
                                <tr className="TRhover">
                                    <td>09/18/2018</td>
                                    <td>Caritas Bridge Admin</td>
                                    <td>Technical question</td>
                                    <td className="centerTD">| delete |</td>
                                </tr>
                                <tr className="TRhover">
                                    <td>09/15/2018</td>
                                    <td>Horizons for Homeless Children</td>
                                    <td>Donation information request</td>
                                    <td className="centerTD">| delete |</td>
                                </tr>
                                </tbody>
                        </table>
        
        </div>
        </div>
                   
                </div>
            </div>
        </div>
    </div>
);

export default MessageCenter;