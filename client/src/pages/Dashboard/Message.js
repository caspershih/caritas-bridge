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
                            <textarea type="textarea" name="name" placeholder="Your Name"></textarea>
                        </div>

                        <div>
                            <label>Your email: </label>
                            <textarea type="textarea" name="email" placeholder="Your Email"></textarea>
                        </div>
                        
                        <div>
                            <label for="comments">Comment: </label>
                            <textarea type="textarea" name="comments" placeholder="Please leave your message here" maxLength="5000" rows="10"></textarea>
                        </div>
                        <div><input type="submit" value="Submit" /></div>
                    </form>
                <hr />
            </div>
        </div>
    </div>
);

export default Message;