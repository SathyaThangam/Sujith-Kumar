import React, { Component } from 'react';
// import './loginform.css'
// import '../makestyle.css'
import './sigup.css'

class Signup extends Component {
    constructor(props)
    {
        super(props);
        this.state={username:'',password:'',cnfrmpassword:''}
    }
    makechange(e)
    {
       this.setState({[e.target.name]:e.target.value});
        }
    handlesubmit()
    {
            if(this.state.password===this.state.cnfrmpassword)
            {
                alert('Signed Up successfully')
            }
    }
    render() {
        return (
            <div className='signupform'>
               <label className='textuser'>Username </label><br/><input type='text' className='signup'required  name='username' onChange={this.makechange.bind(this)} ></input>
                <br/>
                <label>Password </label><br/><input type='password'className='signup' required name='password' onChange={this.makechange.bind(this)} ></input>
                <br/>
                <label className='label'> ConfirmPassword </label><br/><input type='password' required name='cnfrmpassword'className='signup' onChange={this.makechange.bind(this)}></input>
                <br/>
                <button className='signupbtn1' onClick={this.handlesubmit.bind(this)}>SignIn</button>
                <br/>
                <br/> 
            </div>
        );
    }
}

export default Signup;