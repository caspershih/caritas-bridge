import React from "react";
import "./NotFound.css";
import brokenHeart from "../images/brokenheart404.svg";

const NotFound = () => (
    
    <div class="NotFound"><img src={brokenHeart} class="brokenHeart" alt="404 error"></img>
    <p>404... That page does not exist!</p>
    </div>
    )

export default NotFound;