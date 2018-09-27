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
                    <form method="POST">
                        <div>
                            <label className="msgLabel">Your name: </label>
                            <input className="msgInput" type="name" name="fullname" placeholder="John Smith" />
                        </div>

                        <div>
                            <label className="msgLabel">Your email: </label>
                            <input className="msgInput" type="email" name="email" placeholder="example@gmail.com" />
                        </div>
                        
                        <div>
                            <label className="msgLabel" for="comments">Message: </label>
                            <textarea className="msgTextarea" type="textarea" name="comments" placeholder="Please leave your message here"></textarea>
                        </div>

                        <div><button className="msgButton" type="submit" value="Submit">Submit</button>
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