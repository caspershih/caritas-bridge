import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import "./User.css";
import UserNav from "./UserNav";
import UserLogin from "../../components/Login/UserLogin";

class EditProfile extends Component {
    state = { 
        redirect: false 
    };

    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/user/Profile' />
          //return <Redirect to='/Profile' />
        }
      }

    render() {
        return (
    <div className="dashWrap">
    <UserLogin />
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

                <h2>Edit Profile</h2>
                <hr />

                <form id="edit-form" method="PUT" action="/user/update">
                        <p className="modalText">User Information</p>
                        <div className="profileForm">
                        <input className="formInput" placeholder="First Name" id="firstName" type="text" name="fname" required="required"/>
						<input className="formInput" placeholder="Last Name" id="lastName" type="text" name="lname" required="required"/>
                        </div>
                        <p className="modalText">User Contact Information</p>
                        <div className="profileForm">
						<input className="formInput" placeholder="Address" id="address" type="text" name="address" required="required"/>
						</div>
                        <div className="profileForm">
						<input className="formInput" placeholder="City" id="city" type="text" name="city" required="required"/>
						<input className="formInput" placeholder="State" id="state" type="text" name="state" required="required"/>
						<input className="formInput" placeholder="Zip Code" id="zip" type="text" name="zip" required="required"/>
						</div>
                        <div className="profileForm">
						<input className="formInput" placeholder="Phone Number" id="phone" type="text" name="phone" required="required"/>
						<input className="formInput" placeholder="Email" id="user-email" type="email" name="email" />
                        </div>
                        <p className="modalText">User Password</p>
                        <div className="profileForm">
						<input className="formInput" placeholder="Password" id="user-password" type="password" name="password"/> 
                        <input className="formInput" placeholder="Confirm Password" id="user-password-confirm" type="password" name="password-confirm"/>
						</div>
                    </form>
                <hr />   
                {this.renderRedirect()}
                <button className="modalSubmit" id="submitbtn" onClick={this.setRedirect}>Update Profile</button>

            </div>
        </div>
    </div>
);
}
}

export default EditProfile;