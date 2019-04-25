import React, { Component } from 'react';
import Axios from 'axios';

class Login extends Component {


    state ={
        email:'',
        password:''
    }

    signInSubmitHandler = (event) =>{
      event.preventDefault();
      const customerLogin = {
        email:this.state.email,
        password:this.state.password
      }
      Axios.post('http://localhost:8080/loginUser',customerLogin)
      .then((response)=>{
        //Getting the user cred from spring backend application
        const loggedInUser = response.data;
        localStorage.setItem("loggedInUser",JSON.stringify(loggedInUser) );
        this.props.history.push('/Home');

      })
    }

    signInChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value

        })


    }
    render() {

        

        return (
            <div>
                <div className="bg-img">
  <form onSubmit={this.signInSubmitHandler} className="container">
    

    <label for="email"><b>Email</b></label>
    <input onChange={this.signInChangeHandler} type="text" placeholder="Enter Email" name="email" required/>

    <label for="psw"><b>Password</b></label>
    <input onChange={this.signInChangeHandler} type="password" placeholder="Enter Password" name="password" required/>

    <button type="submit" class="btn">Login</button>
  </form>
</div>
            </div>
        );
    }
}

export default Login;