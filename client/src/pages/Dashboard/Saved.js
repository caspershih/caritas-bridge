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
                                                               
                </div>
            </div>
        </div>
    </div>
);

export default Saved;
