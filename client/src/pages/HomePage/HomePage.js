import React, { Component } from 'react';
import "./Home.css";
import logo2 from "./images/caritasbridge2.svg";
import Slideshow from "./slideshow";
import charity from "./images/charity.svg";
import UserLogin from "../../components/Login/UserLogin";
import ProfileCreateButton from '../../components/ProfileCreateButton/ProfileCreateButton';

class HomePage extends Component {
    render() {
      return (
  <div className="mainContainer">   
<UserLogin />
    <div className="topWrap">
    <div className="headerRow">

            <div id="headerTitle">Find Your<img src={charity} id="charity" alt="charity"></img>Match!</div>
            <div id="subheadTitle">Uniting caring people with caring causes.</div>
            <div className="sectionRow">
                {/* <button type="button" className="btn" id="profileBtn">Create A Profile Today!</button> */}
                <ProfileCreateButton />
            </div>
    
    </div>
    </div>

    <div className="containerWrap">
      <div className="containerRow">
        <Slideshow /> 
      </div>
      <div className="containerRow">
        <div className="containerBottom">
          <div className="aboutUs">
          <h2>What is Caritas Bridge?</h2>
          <p>Caritas Bridge exists to help altruistic individuals connect with chartiable organizations whose mission 
              matches thier views and whose needs can be met by what they are able or willing offer. Each user
              will select options to set parameters for the charities they would like to see. Individual search results 
              will be limited to the parameters set in the users profile and profile parameters can be updated at any time.</p>
          </div>
          <div className="caritasLogo"><img src={logo2} alt="Caritas Logo" width="100%" /></div>
          </div>
        </div>
    </div>

</div>
    )
    }
}

export default HomePage;

