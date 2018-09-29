import React from "react";
import logo from "./caritasbridge.svg";
import { Link } from "react-router-dom";


const Nav = () => (
<div className="navWrap">
    <div className="navRow">
    <Link to=""><img src={logo} className="logoImg" alt="logo" /></Link>
        <nav>
            <div className="navButton"><Link to="">Home</Link></div><span>|</span>
            <div className="navButton"><Link to="Account">Account</Link></div><span>|</span>
            <div className="navButton"><Link to="Contact">Contact Us</Link></div>
        </nav>    
    </div> 
</div>
);

export default Nav;