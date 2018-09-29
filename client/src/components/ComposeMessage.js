import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Modal from "./Modal";
import axios from 'axios';

class ComposeMessage extends Component {
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
                <h1>Compose Message</h1>
                <hr />
                
                <form id="user-form2" onSubmit={this.handleSubmit}>
                        <p className="modalText">To</p>
                        <div className="profileForm">
                            <input className="formInput" 
                            placeholder="Enter recipients email address" 
                            type="text" 
                            id="mailto"
                            value = {this.state.mailto}
                            name="mailto"
                            required="required" 
                            onChange={this.handleChange}/>
                        </div>
                        <p className="modalText">Subject</p>
                        <div className="profileForm">
                            <input className="formInput" 
                            placeholder="Subject"  
                            type="text"
                            id="subject"
                            value = {this.state.subject}
                            name="subject"
                            required="required" 
                            onChange={this.handleChange}/>
                        </div>
                        
                        <p className="modalText">Message</p>
                        <div className="profileForm">
                        <textarea className="messageInput" 
                        placeholder="Enter Message Here" 
                        id="message"
                        value = {this.state.message}
                        name="message"
                        required="required" 
                        onChange={this.handleChange}></textarea>
						</div>
                        
                    {this.renderRedirect()}
                    <button className="modalSubmit" id="q" >Send Message</button>
                    </form>
                
                </ Modal>
                <div className="messageCenterText" onClick={this.showModal}>compose new message</div>
            </main>
        );
    }
}

export default ComposeMessage;