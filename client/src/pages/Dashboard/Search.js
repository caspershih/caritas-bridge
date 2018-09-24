import React from "react";
import "./User.css";
import UserNav from "./UserNav";
import UserLogin from "../../components/Login/UserLogin";

const Search = () => (
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

                <h2>Search Results</h2>
                <hr />
                <div className="resultsDiv">

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
                    <div className="spacer"><hr /></div>


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
                    <div className="spacer"><hr /></div>
                </div>
            </div>
        </div>
    </div>
);

export default Search;