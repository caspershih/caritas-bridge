import React from "react";
import "./User.css";
import { Link } from "react-router-dom";
import UserNav from "./UserNav";
import UserLogout from "../../components/Logout/UserLogout";
import WWFlogo from "../../../src/images/WWFlogo.png"
import logo from "../Contact/caritasbridge2.svg";

const Account = () => (
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
                <div className="H1dashboard">Welcome To Your Dashboard <img src={logo} width="200px" alt="Caritas Bridge Logo"></img></div>
                <hr />

                <div className="flexRow">
                    <div className="dashProfile">
                        <div className="dashTitles">Your Account Summary</div>
                        <table className="dashTable">
                            <tbody>
                                <tr>
                                    <td className="leftTD">New Messages:</td>
                                    <td className="rightTD">0</td>
                                </tr>
                                <tr>
                                    <td className="leftTD">Member Since:</td>
                                    <td className="rightTD">2018</td>
                                </tr>
                                <tr>
                                    <td className="leftTD">Saved Charities:</td>
                                    <td className="rightTD">10</td>
                                </tr>
                                <tr>
                                    <td className="leftTD">Donations this month:</td>
                                    <td className="rightTD">$20</td>
                                </tr>
                                <tr>
                                    <td className="leftTD">Donations Total::</td>
                                    <td className="rightTD">$120</td>
                                </tr>
                            </tbody>
                        </table>
                        <hr />
                        <Link to="History"><div className="moreText">view account history</div></Link>
                    </div>

                    <div className="dashDiv">
                    <div className="dashTitles">Your Saved Charities</div>
                    <br />
                        <h4>Children Incorporated</h4>
                        <p><font color="#064554">Category:</font> International : Development and Relief Services</p>
                        <hr />
                        <h4>Horizons for Homeless Children</h4>
                        <p><font color="#064554">Category:</font> Human Services : Children's and Family Services</p>
                        <hr />
                        <Link to="Saved"><div className="moreText">see more saved charities</div></Link>
                    </div>
                </div>
                
                <div className="featuredDiv">
                <div className="dashTitles">Featured Charity</div>
                <h4>World Wildlife Fund</h4>
                    <img className="logo" src={WWFlogo} alt="Charity Logo"></img>
                    <p><font color="#064554">Mision Statement:</font> Founded in 1961, World Wildlife Fund's (WWF) 
                    mission is the conservation of nature. Using the best available scientific knowledge and 
                    advancing that knowledge where we can, we work to preserve the diversity and abundance of 
                    life on Earth and the health of ecological systems by: protecting natural areas and wild 
                    populations of plants and animals, including endangered species; promoting sustainable 
                    approaches to the use of renewable natural resources; and promoting more efficient use 
                    of resources and energy and the maximum reduction of pollution. We are committed to 
                    reversing the degradation of our planet's natural environment and to building a future 
                    in which human needs are met in harmony with nature. We recognize the critical relevance 
                    of human numbers, poverty and consumption patterns to meeting these goals.</p>

                    <p><font color="#064554">Category:</font> Animals : Wildlife Conservation</p>
                    <p><font color="#064554">Web Site:</font><a target="_blank" rel="noopener noreferrer" href="https://www.worldwildlife.org/"> www.worldwildlife.org</a></p>
                        <div className="buttonRow">
                        <button name="organization._id" className="btn btn-primary"> Save Charity</button>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    </div>
);

export default Account;