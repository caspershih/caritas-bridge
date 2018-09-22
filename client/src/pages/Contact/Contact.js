import React from 'react';
import "./Contact.css";
import logo from "./caritasbridge2.svg";

class Contact extends React.Component {   
  constructor(props) {     
    super(props);     
    this.state = {
      fullName: '',
      message:'',
      email: ''      
    };
  
    this.handleSubmit = this.handleSubmit.bind(this);   
  }   
  
  handleSubmit(event) {   
    event.preventDefault();
    const inputs = event.target.getElementsByTagName("input");
    this.setState({
      fullName: inputs.fullName.value,// should match the name attribute on the input element
      message: inputs.message.value,
      email: inputs.email.value     
    });
    alert('Thank you ' + inputs.fullName.value + '!\nThe following messsage was submitted: \n' + inputs.message.value);
  }
    
  render() {     
    return (  
      <div className="mainContainer"> 
      <div className="blueBlock"></div>
      <div className="contactRow">  

        <div className="contactform">

          <h2>Contact Us</h2>   
            <form onSubmit={this.handleSubmit}> 
              <label className="contactlabel">Name</label>              
              <input className="contactinput" type="text" name="fullName"/>

              <label className="contactlabel">Message</label>  
              <input className="contactinput" type="textarea" placeholder="Please enter a brief message" name="message"/>

              <label className="contactlabel">Email</label>  
              <input className="contactinput" type="text" name="email"/> 

              <input className="submitbtn" type="submit" value="Submit" />     

            </form> 
            <br />   
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
 } 
}
    
    export default Contact;