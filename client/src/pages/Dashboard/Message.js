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
                <hr />
            </div>
        </div>
    </div>
);

export default Message;