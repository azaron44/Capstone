import React, { Component } from 'react';
import './SignUp.css';
import axios from 'axios';
class Signup extends Component {
  state = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    password:''
  }

  signUpSubmitHandler = (event)=>{
    event.preventDefault();
    const customer = {
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email,
      phone:this.state.phone,
      password:this.state.password
    }
    axios.post("http://localhost:8080/registerUser",customer)
    .then( (response) =>{
      //Route to a thank you page
      this.props.history.push('/login');

    } )
  }

  signUpChangeHandler = (event) =>{
    const name =  event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    })
  }
    render() {
        return (
            
            <form onSubmit={this.signUpSubmitHandler} className="container">
            
  <div className="form-row">
    <div className="col">
    <label for="firstName">First Name</label>
      <input onChange={this.signUpChangeHandler} value={this.state.firstName} name="firstName" type="text" className="form-control" placeholder="First Name"/>
    </div>
    <div className="col">
    <label>Last Name</label>
      <input onChange={this.signUpChangeHandler} value={this.state.lastName} name="lastName" type="text" className="form-control" placeholder="Last Name"/>
    </div>
  </div>
  <div className="form-row">
    <div className="col">
    <label>Phone Number</label>
      <input onChange={this.signUpChangeHandler} value={this.state.phone} name="phone" type="text" className="form-control" placeholder="Phone"/>
    </div>
  </div>
  <div className="form-row">
    <div className="col">
    <label for="email">Email</label>
      <input onChange={this.signUpChangeHandler} value={this.state.email} name="email" type="text" className="form-control" placeholder="Email"/>
    </div>
    <div className="col">
    <label id="eader">Password</label>
      <input onChange={this.signUpChangeHandler} value={this.state.password} name="password" type="password" className="form-control" placeholder="Password"/>
    </div>
    
    <button type="submit">Sign Up</button>
  </div>
</form>


           
        );
    }
}

export default Signup;  