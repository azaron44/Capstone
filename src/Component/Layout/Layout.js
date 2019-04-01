import React, { Component } from 'react';
import Header from '../Header/Header';
import SignUp from '../SignUp/SignUp';
import {Route} from 'react-router-dom';

//import AboutUs from '../AboutUs/AboutUs';

import Home from '../Home/Home';
import Services from '../Services/Services';
import VacationPackages from '../VacationPackages/VacationPackages';
import Resources from '../Resources/Resources';
import Blog from '../Blog/Blog';
import ContactUs from '../ContactUs/ContactUs';
class Layout extends Component {
    render() {
        let routes =(
            <React.Fragment>
                <Route exact path ="/Home" component={Home}/>
                <Route exact path ="/sign-up" component={SignUp} />
                <Route exact path ="/services" component={Services}/>
                <Route exact path ="/vacation-packages" component={VacationPackages}/>
                <Route exact path ="/resources" component={Resources}/>
                <Route exact path ="/blog" component={Blog}/>
                <Route exact path ="/contact-us" component={ContactUs}/>
                <Route exact path ="/Home" component={Home}/>
            
            </React.Fragment >
        );
        // add if statement to check if user is logged in
        if(localStorage.getItem('loggedInUser')){
            routes =(
                <React.Fragment>
                    <Route exact path ="/" component={Home} />
                    <Route exact path ="/Home" component={Home} />
 
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                <Header />
                
               
                
            {routes}
            
            {/*<Route exact path ="/about-us" component={AboutUs} />*/}
           
            </React.Fragment>
        );
    }
}

export default Layout;