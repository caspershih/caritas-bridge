import React from "react";
import "./User.css";
import UserNav from "./UserNav";

const ModifySearch = () => (
    <div className="dashWrap">
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

                <h2>Modify Search</h2>
                <hr />
            </div>
        </div>
    </div>
);

export default ModifySearch;