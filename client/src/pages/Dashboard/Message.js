import React from "react";
import "./User.css";
import UserNav from "./UserNav";

const Message = () => (
<div className="dashWrap">
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
                    <form>
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
                            <textarea type="textarea" name="comments" placeholder="Please leave your message here" maxLength="5000" rows="10"></textarea>
                        </div>

                        <div><input type="submit" value="Submit" /></div>
                    </form>
                <hr />

                <div className="messageContainer">
                   
                </div>
            </div>
        </div>
    </div>
);

export default Message;