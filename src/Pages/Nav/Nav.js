import React, { Component } from "react";
import "./makestyle.css";
import Form from './Modalbox/Form'
import Logo from '../../Images/logo.png'

class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = { display:'none'};
  }
  openmodal() {
    if(this.state.display=='none')
    {
this.setState({display:'block'})
    }
    else{
        this.setState({display:'none'})
    }
  }
  render() {
    return (
      <div className="navbar">
        <img src={Logo} alt="logo" id="logo" />

        <ul className="mainlist">
          <li className="navstyle">BusTickets</li>
          <li className="navstyle">Hotels</li>
          <li className="navstyle">Bus Hire</li>
          <li className="navstyle">Pilgrimages</li>

          <button id="btn" onClick={this.openmodal.bind(this)}>
            Create account Or SignIn
          </button>
        </ul>
        <div id="myModal" className="modal" style={{display:this.state.display}}>
        <div className="modal-content">
          <span className="close" onClick={this.openmodal.bind(this)}>&times;</span>
          
        <Form />
        </div>
      </div>
      </div>
    );
  }
}

export default Loginform;
