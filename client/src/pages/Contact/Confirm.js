import React from 'react';
import "./Contact.css";
import logo from "./caritasbridge2.svg";
import UserLogin from "../../components/Login/UserLogin";

const Confirm = () => (
<div className="mainContainer"> 
      <UserLogin />
      <div className="contactRow">  

        <div className="contactform">

          <h2>Contact Us</h2>

          <div className="contactConfirm">Thank you for contacting us! <br />Your message has been sent.</div>

            <hr />
            <div className="contactInfo">
              <div className="leftInfo">
                <p className="text1">Address:</p>
                <p className="text">1234 Main Street</p>
                <p className="text">Anytown, California 90211</p>
                <p className="text1">Phone:</p>
                <p className="text">Toll-Free (800) 222-1234</p>
              </div>
            <img src={logo} className="contactImg" alt="logo" />
            </div>
             
        </div>  
     </div>
     </div>
);

export default Confirm;