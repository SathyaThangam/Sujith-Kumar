import React, { Component } from 'react';
import './loginform.css'
import Signup from './Signup';

class Form extends Component {
    constructor(props)
    {
        super(props);
        this.state={username:'',password:'',display:'none',disp:'block'}
    }
    opensignupmodal()
    {
        if(this.state.display=='none')
        {
    this.setState({display:'block'})
    this.setState({disp:'none'});
    
        }
        else{
            this.setState({display:'none'})
    
            
            

        }
      
    }
    render() {
        return (
            
            <div className='form'>
                <div style={{display:this.state.disp}}>
                <label>Username </label><input type='text' className='text-box'required  name='username' ></input>
                <br/>
                <label>Password </label><input type='password'className='text-box' required name='password' ></input>
                <br/>
                <button className='login-btn' >Login</button>
                <br/>
                <br/>
                <label id='ortxt'>(Or)</label>
                <br/>
                <button className='signupbtn' onClick={this.opensignupmodal.bind(this)}>Signup</button>
                </div>
               <div style={{display:this.state.display,paddingTop:"30px"}}>
                   <Signup/>
               </div>
                </div>
                
            
        );
    }
}

export default Form;