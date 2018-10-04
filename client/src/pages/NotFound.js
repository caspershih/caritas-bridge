import React from "react";
import "./NotFound.css";
import brokenHeart from "../images/brokenheart404.svg";

const NotFound = () => (
<div className="notFoundWrapper"> 
<div className="blueBlock"></div>
    <div className="NotFound">
    <img src={brokenHeart} className="brokenHeart" alt="404 error"></img>
    <p>404... That page does not exist!</p>
    </div>
</div>    
    )

export default NotFound;