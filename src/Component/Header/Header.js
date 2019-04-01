import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import AiselaLogo from '../../images/AiselaLogo.jpg';
import Home from '../Home/Home';
//import {Link} from 'react-router-dom';

class Header extends Component {

	state ={
        email:'',
        password:''
    }

    signInSubmitHandler = (event) =>{
      event.preventDefault();
      const studentLogin = {
        email:this.state.email,
        password:this.state.password
      }
      //Axios.post('http://localhost:8080/loginStudentByEmail',studentLogin)
      .then((response)=>{
        //Getting the user cred from spring backend application
        const loggedInUser = response.data;
        localStorage.setItem("loggedInUser",JSON.stringify(loggedInUser) );
        this.props.history.push('/home');

      })
    }

    signInChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value

        })


    }

    signOut = (event) =>{
      localStorage.removeItem('loggedInUser');
      this.props.history.push('/');
    }

    render() {
      let links = (
        <React.Fragment>

        <li className="logo">
        {/*<Link to="https://www.aiselatravel.com"><img src={AiselaLogo}></img> </Link>*/}
        </li>


        
        

        </React.Fragment>



      );

     






        return (

          
          <div>
			<div class="wrapper style1">

			<div id="header" className="skel-panels-fixed">
				<div id="logo">
        {links}
					{/*<h1><Link to="https://www.aiselatravel.com"><img className="logoo" src={AiselaLogo}></img>Aisela Travels</Link></h1>*/}
					
				</div>
				<nav id="nav">
					<ul>
						<li className="active"><Link to={"/Home"}>Homepage</Link></li>
						<li>
							<a href="/services">Services</a>
							</li>
						<li><a href="right-sidebar.html">Vacation Packages</a></li>
						<li><Link to={"/resources"}>Resources</Link></li>
						<li><Link to={"/about-us"}>About</Link></li>
						<li><Link to={"/contact-us"}>Contact Us</Link></li>
						<li><Link to={"/blog"}>Blog</Link></li>
						<li><Link to={"/login"}>Login</Link></li>
            <li><Link to={"/sign-up"}>Sign Up</Link></li>
					</ul>
				</nav>
			</div>
				</div>
        
        </div>
        );
    }
}

export default Header;