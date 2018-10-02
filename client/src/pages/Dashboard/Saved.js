import React from "react";
import "./User.css";
import UserNav from "./UserNav";
import UserLogout from "../../components/Logout/UserLogout";

const Saved = () => (
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
<<<<<<< HEAD
                <h2>Saved Charities</h2>
                <hr />

                    <h4>Charity Name</h4>
                    <img className="logo" src="https://via.placeholder.com/150x150" alt="Charity Logo"></img>
                    <p><font color="#064554">Mission Statement:</font> Lorem ipsum dolor sit amet, feugiat pellentesque vitae ut nulla dui
                        torquent, rutrum maecenas odio sagittis pellentesque sit pede, libero
                        placerat posuere quis id vehicula. Vulputate facilisis. Morbi lacus.
                        Sociosqu malesuada hac suscipit, non duis dui
                        ipsum integer praesent.</p>
                    <p><font color="#064554">Tagline:</font> Placerat posuere quis id vehicula</p>
                    <p><font color="#064554">Category:</font> Animals</p>
                    <p><font color="#064554">Cause:</font> Prevent Animal Cruelty</p>
                    <button name="organization._id" className="btn btn-primary rightAlign" onClick="saveCharity"> Unsave</button>
                    <p><font color="#064554">Web Site:</font><a target="_blank" rel="noopener noreferrer" href="http://google.com"> www.thischaritywebsite.com</a></p>
                    <div className="spacer"><hr /></div>


                    <h4>Charity Name</h4>
                    <img className="logo" src="https://via.placeholder.com/150x150" alt="Charity Logo"></img>
                    <p><font color="#064554">Mission Statement:</font> Lorem ipsum dolor sit amet, feugiat pellentesque vitae ut nulla dui
                        torquent, rutrum maecenas odio sagittis pellentesque sit pede, libero
                        placerat posuere quis id vehicula. Vulputate facilisis. Morbi lacus.
                        Sociosqu malesuada hac suscipit, non duis dui
                        ipsum integer praesent.</p>
                    <p><font color="#064554">Tagline:</font> Placerat posuere quis id vehicula</p>
                    <p><font color="#064554">Category:</font> Animals</p>
                    <p><font color="#064554">Cause:</font> Prevent Animal Cruelty</p>
                    <button name="organization._id" className="btn btn-primary rightAlign" onClick="saveCharity"> Unsave</button>
                    <p><font color="#064554">Web Site:</font><a target="_blank" rel="noopener noreferrer" href="http://google.com"> www.thischaritywebsite.com</a></p>

                    <div className="spacer"><hr /></div>
=======
                
                <h2>Saved Charities</h2>
                                <hr />
                                    <div className="charityResults">
                                        <div className="flexDiv">
                                            <h4>nonprofit.charityName</h4>
                                            <p><font color="#832019">EIN#: </font> nonprofit.ein</p>
                                        </div>
                                        <p><font color="#832019">Cause: </font> nonprofit.cause.causeName</p>
                                        <p><font color="#832019">Mission Statement: </font> nonprofit.mission</p>
                                        <p><font color="#832019">Website: </font> <a href="nonprofit.websiteURL">nonprofit.websiteURL</a></p>
                                        <div className="buttonRow">
                                            <button name="organization._id" className="btn btn-primary"> Unsave Charity</button>
                                        </div>
                                        <div className="spacer"><hr /></div>
                                    </div>
                                                               
>>>>>>> 5c300b33862c451ce40ac1b93f17326fa265a750
                </div>
            </div>
        </div>
    </div>
);

export default Saved;
