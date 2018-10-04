import React from "react";
import { Link } from "react-router-dom";
import "./User.css";


const UserNav = () => (
<div>
            
        <Link to="Account"><div className="leftNav">Account Dashboard</div></Link>
        <Link to="Search"><div className="leftNav">Search Charities</div></Link>
        <Link to="Saved"><div className="leftNav">Saved Charities</div></Link>
        <Link to="MessageCenter"><div className="leftNav">Message Center</div></Link>
        <Link to="History"><div className="leftNav">Account History</div></Link>
        <Link to="Profile"><div className="leftNav">User Profile</div></Link>
          
    </div>

);

export default UserNav;