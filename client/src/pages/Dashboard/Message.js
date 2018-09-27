import React from "react";
import "./User.css";
import UserNav from "./UserNav";
import UserLogin from "../../components/Login/UserLogin";

const Message = () => (
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

            <div className="resultsDiv">
                <h2>Message Center</h2>
                <hr />
                    <form>
                        <div>
                            <label className="msglabel">Your name: </label>
                            <input type="name" className="msginput" name="fullname" placeholder="John Smith" />
                        </div>

                        <div>
                            <label className="msglabel">Your email: </label>
                            <input type="email" className="msginput" name="email" placeholder="example@gmail.com" />
                        </div>
                        
                        <div>
                            <label className="msglabel" for="comments">Message: </label>
                            <textarea type="textarea" className="msgtextarea" name="comments" placeholder="Please leave your message here"></textarea>
                        </div>

                        <div><button type="submit" className="searchBtn" value="Submit">Submit</button>
                        </div>
                    </form>

                <div className="messageContainer">

                </div>
                   
                </div>
            </div>
        </div>
    </div>
);

export default Message;