import React from "react";
import { Link } from "react-router-dom";
import "./User.css";


const UserNav = () => (
<div>

        <Link to="Saved"><div className="leftNav">Saved Charities</div></Link>
        <Link to="Account"><div className="leftNav">Account History</div></Link>
        <Link to="Message"><div className="leftNav">Message Center</div></Link>
        <Link to="Profile"><div className="leftNav">User Profile</div></Link>
          
    </div>

);

export default UserNav;