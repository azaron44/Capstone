import React, { Component } from 'react';
//import axios from 'axios';
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
    const student = {
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email,
      phone:this.phone,
      password:this.password
    }
    //axios.post("http://localhost:8080/submitStudentDetails",student)
    .then( (response) =>{
      //Route to a thank you page
      //this.props.history.push('/thank-you');

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
            <h3>Sign Up!</h3>
  <div className="form-row">
    <div className="col">
      <input onChange={this.signUpChangeHandler} value={this.state.firstName} name="firstName" type="text" className="form-control" placeholder="First Name"/>
    </div>
    <div className="col">
      <input onChange={this.signUpChangeHandler} value={this.state.lastName} name="lastName" type="text" className="form-control" placeholder="Last name"/>
    </div>
  </div>
  <div className="form-row">
    <div className="col">
      <input onChange={this.signUpChangeHandler} value={this.state.age} name="age" type="text" className="form-control" placeholder="Age"/>
    </div>
    <div className="col">
      <input onChange={this.signUpChangeHandler} value={this.state.phone} name="phone" type="text" className="form-control" placeholder="Phone"/>
    </div>
  </div>
  <div className="form-row">
    <div className="col">
      <input onChange={this.signUpChangeHandler} value={this.state.email} name="email" type="text" className="form-control" placeholder="Email"/>
    </div>
    <div className="col">
      <input onChange={this.signUpChangeHandler} value={this.state.password} name="password" type="password" className="form-control" placeholder="Password"/>
    </div>
    
    <button type="submit">Sign Up</button>
  </div>
</form>
           
        );
    }
}

export default Signup;  