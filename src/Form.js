import React, { Component } from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
class Form extends Component {
    state = {
            textField:'',
            email:'',
            phone:'',
            rating:'Excellent',
            name:''
        };
    onRadioChange = (e) => {
        this.setState({
          rating: e.target.value
        });
      }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
          });
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const {forms}=this.props;
        forms.push((this.state));
        reactLocalStorage.setObject('forms',forms);
        let notification=document.getElementById('notification');
        notification.style.display='block';
        let inputs=document.querySelectorAll('input');
        inputs.forEach(input=>input.value='');
        setTimeout(()=>{
            notification.style.display='none';
        },500);
        
    }
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="textField" type="text" onChange={this.handleChange} required/>
                                <label className='red-text'>Text Field</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="email" type="email" onChange={this.handleChange} required/>
                                <label className='red-text'>Email Field</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="phone" type="tel" onChange={this.handleChange} required pattern="[0-9]{10}"/>
                                <label className='red-text'>Phone Field</label>
                            </div>
                            <br/>
                            <div className=" col s6" >
                            <span className='red-text'>Rating</span>
                            <br/>
                                <label>
                                    <input type="radio" value="Excellent" checked={this.state.rating === "Excellent"} onChange={this.onRadioChange} required/>
                                    <span className='red-text'>Excellent</span>
                                </label>
                                <label>
                                    <input type="radio" value="Good" checked={this.state.rating === "Good"} onChange={this.onRadioChange} required/>
                                    <span className='red-text'>Good</span>
                                </label>
                                <label>
                                    <input type="radio" value="Fair" checked={this.state.rating === "Fair"} onChange={this.onRadioChange} required/>
                                    <span className='red-text'>Fair</span>
                                </label>
                                <label>
                                    <input type="radio" value="Bad" checked={this.state.rating === "Bad"} onChange={this.onRadioChange} required/>
                                    <span className='red-text'>Bad</span>
                                </label>
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 l6 m6">
                                <input id="name" type="text" onChange={this.handleChange} required/>
                                <label className='red-text'>Name</label>
                            </div>
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Submit</button>
                        </div>
                    </form>
                </div>
                <div id='notification' className='center-align'>
                    User added successfully
                </div>
            </div>
        )
        
    }
}

export default Form
