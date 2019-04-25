import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AiselaLogo from '../../images/AiselaLogo.jpg';
import Home from '../Home/Home';
import Axios from 'axios';
//import {Link} from 'react-router-dom';

class Header extends Component {

  state = {
    email: '',
    password: ''
  }

  signInSubmitHandler = (event) => {
    event.preventDefault();
    const customerLogin = {
      email: this.state.email,
      password: this.state.password
    }
    Axios.post('http://localhost:8080/loginUser', customerLogin)
      .then((response) => {
        //Getting the user cred from spring backend application
        const loggedInUser = response.data;
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        //navagating to homepage
        this.props.history.push('/');

      })
  }

  signInChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: event.target.value

    })


  }

  signOut = (event) => {
    localStorage.removeItem('loggedInUser');
    this.props.history.push('/');
  }

  render() {

    let links = (
      <React.Fragment>
        {/* <li className="active"><Link to={"/Home"}>Homepage</Link></li> */}
        <li><Link to={"/services"}>Services</Link></li>
        <li><Link to={"/vacation-packages"}>Vacation Packages</Link></li>
        {/* <li><Link to={"/resources"}>Resources</Link></li> */}
        <li><Link to={"/about-us"}>About</Link></li>
        <li><Link to={"/contact-us"}>Contact Us</Link></li>
        {/* <li><Link to={"/blog"}>Blog</Link></li> */}
        <li><Link to={"/login"}>Login</Link></li>
        <li><Link to={"/sign-up"}>Sign Up</Link></li>
      </React.Fragment>
    );

    if (localStorage.getItem('loggedInUser')) {
      const user = JSON.parse(localStorage.getItem('loggedInUser'));
      
      if(user.role == 'admin'){
        links = (
          <React.Fragment>
          <li className="active"><Link to={"/my-trips"}>Trip Planning</Link></li>
          <li><Link to={"/services"}>Services</Link></li>
          <li><Link to={"/vacation-packages"}>Vacation Packages</Link></li>
          {/* <li><Link to={"/resources"}>Resources</Link></li> */}
          <li><Link to={"/about-us"}>About</Link></li>
          {/* <li><Link to={"/contact-us"}>Contact Us</Link></li> */}
          {/* <li><Link to={"/blog"}>Blog</Link></li> */}
          {/* <li><Link to={"/form"}>Form</Link></li> */}
          <li>< button onClick={this.signOut} className="" >Logout</button></li>
          </React.Fragment>

        )
      }else{
        links = (
          <React.Fragment>
            
            {/* <li className="active"><Link to={"/my-trips"}>My Trips</Link></li> */}
            {/* <li><Link to={"/form"}>Form</Link></li> */}
          <li><Link to={"/services"}>Services</Link></li>
          <li><Link to={"/vacation-packages"}>Vacation Packages</Link></li>
          {/* <li><Link to={"/resources"}>Resources</Link></li> */}
          <li><Link to={"/about-us"}>About Us</Link></li>
          {/* <li><Link to={"/contact-us"}>Contact Us</Link></li> */}
          {/* <li><Link to={"/blog"}>Blog</Link></li> */}
          <li>< button onClick={this.signOut} className="" >Logout</button></li>
          </React.Fragment>
  
        )
      }
      
    }



    return (
      
      <div id="header" class="skel-panels-fixed">
        <div id="logo">
          <h1><Link to={"/"}>Aisela Travels</Link></h1>
          
        </div>
        <nav id="nav">
          <ul>
            {links}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;