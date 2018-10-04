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
            <div id="subheadTitle">Uniting people who care with the causes they care about.</div>
            <div className="sectionRow">
                {/*<button type="button" className="btn" id="profileBtn">Create A Profile Today!</button>*/}
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
          <p>Caritas Bridge exists to help caring individuals connect with chartiable organizations whose mission 
              matches thier views and whose needs can be met by what they are able or willing offer. Each user
              can search by keyword and view a list of only the charities related to thier search. The charities listed 
              in thier search results can then be saved to the users profile.</p>
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

