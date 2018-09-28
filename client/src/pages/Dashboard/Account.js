import React from "react";
import "./User.css";
import UserNav from "./UserNav";
import UserLogout from "../../components/Logout/UserLogout";

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
                <h1>Welcome To Your Dashboard</h1>
                <hr />

                <div className="flexRow">
                    <div className="dashProfile">
                        <div className="dashTitles">Your Profile</div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>New Messages:</td>
                                    <td><font color="#0eb8de">0</font></td>
                                </tr>
                                <tr>
                                    <td>Member Since:</td>
                                    <td><font color="#0eb8de">2018</font></td>
                                </tr>
                                <tr>
                                    <td>Saved Charities:</td>
                                    <td><font color="#0eb8de">10</font></td>
                                </tr>
                                <tr>
                                    <td>Donations this month:</td>
                                    <td><font color="#0eb8de">$20</font></td>
                                </tr>
                                <tr>
                                    <td>Donations Total::</td>
                                    <td><font color="#0eb8de">$120</font></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="dashDiv">
                    <div className="dashTitles">Your Saved Charities</div>
                        <h4>Charity Name</h4>
                        <p><font color="#064554">Category:</font> Animals</p>
                        <span>|</span>more info<span>|</span>
                    </div>
                </div>
                
                <div className="featuredDiv">
                <div className="dashTitles">Featured Charity</div>
                <h4>Charity Name</h4>
                    <img className="logo" src="https://via.placeholder.com/150x150" alt="Charity Logo"></img>
                    <p><font color="#064554">Mision Statement:</font> Lorem ipsum dolor sit amet, feugiat pellentesque vitae ut nulla dui
                        torquent, rutrum maecenas odio sagittis pellentesque sit pede, libero
                        placerat posuere quis id vehicula. Vulputate facilisis. Morbi lacus.
                        Sociosqu malesuada hac suscipit, non duis dui
                        ipsum integer praesent.</p>
                    <p><font color="#064554">Tagline:</font> Placerat posuere quis id vehicula</p>
                    <p><font color="#064554">Category:</font> Animals</p>
                    <p><font color="#064554">Cause:</font> Prevent Animal Cruelty</p>
                    <p><font color="#064554">Web Site:</font><a target="_blank" rel="noopener noreferrer" href="http://google.com"> www.thischaritywebsite.com</a></p>

                    <button name="organization._id" className="btn btn-primary" onClick="saveCharity"> Save This</button>
                </div>
            </div>
            </div>
        </div>
    </div>
);

export default Account;