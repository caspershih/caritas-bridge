import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Modal from "./Modal";
import axios from 'axios';

class AddDonation extends Component {
    constructor(props){
        super(props);
        this.state = {
            mailto: '',
            subject: '',
            message: ''
        }
    };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    setRedirect = () => {
        this.setState({
          redirect: true
        });
      };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/MessageCenter' />
        }
      };
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        const message = {
            mailto: this.state.mailto,
            subject: this.state.subject,
            message: this.state.message
        }
        axios.post('/user/register', message)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(error => console.log(error));
        this.setState({
            mailto: '',
            subject: '',
            message: ''
        });
        this.hideModal();
        this.setRedirect();
        

        console.log(this.state);
    };

    render() {
        return (
            <main>
                
                <Modal show={this.state.show} handleClose={this.hideModal}>
                <h1>Add New Donations</h1>
                <hr />
                
                <form id="user-form2" onSubmit={this.handleSubmit}>
                        <p className="modalText">Donation Amount</p>
                        <button className="donationAmt" id="dollarBtn50">$50</button>
                        <button className="donationAmt" id="dollarBtn100">$100</button>
                        <button className="donationAmt" id="dollarBtn250">$250</button>
                        <button className="donationAmt" id="dollarBtn500">$500</button>
                        <button className="donationAmt" id="dollarBtn1000">$1000</button>
                        <div className="profileForm">
                            <input className="formInput" 
                            placeholder="Other Dollar Amount" 
                            type="text" 
                            value = {this.state.mailto}
                            name="mailto"
                            required="required" 
                            onChange={this.handleChange}/>
                        </div>
                        <p className="modalText">Charity</p>
                        <div className="profileForm">
                            <input className="formInput" 
                            placeholder="Oragization Name"  
                            type="text" 
                            value = {this.state.subject}
                            name="subject"
                            required="required" 
                            onChange={this.handleChange}/>
                        </div>
                        
                        <p className="modalText">Charity EIN</p>
                        <div className="profileForm">
                        <input className="formInput" 
                            placeholder="EIN Number"  
                            type="text" 
                            value = {this.state.subject}
                            name="subject"
                            required="required" 
                            onChange={this.handleChange}/>
						</div>
                        
                    {this.renderRedirect()}
                    <button className="modalSubmit" id="q" >Add Donation</button>
                    </form>
                
                </ Modal>
                <div className="messageCenterText" onClick={this.showModal}>add new donations</div>
            </main>
        );
    }
}

export default AddDonation;