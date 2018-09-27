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
                <h2>Message Center</h2>
                    <form method="POST" action="send">
                        <div>
                            <label>Your name: </label>
                            <input type="name" name="fullname" placeholder="John Smith" />
                        </div>

                        <div>
                            <label>Your email: </label>
                            <input type="email" name="email" placeholder="example@gmail.com" />
                        </div>
                        
                        <div>
                            <label for="comments">Message: </label>
                            <textarea type="textarea" name="comments" placeholder="Please leave your message here"></textarea>
                        </div>

                        <div><button type="submit" value="Submit">Submit</button>
                        </div>
                    </form>
                <hr />

                <div className="messageContainer">
                   
                </div>
            </div>
        </div>
    </div>
);

export default Message;