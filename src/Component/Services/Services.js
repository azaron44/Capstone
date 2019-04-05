import React, { Component } from 'react';
import sign1 from '../../images/sign1.jpg';
import boat1 from '../../images/boat1.jpg';
import hotel1 from '../../images/hotel1.jpg';
import plane1 from '../../images/plane1.jpg';
import passport1 from '../../images/passport1.jpg';
import {Link} from 'react-router-dom';
import sign2 from '../../images/sign2.jpg';

class Services extends Component {
    render() {
        return (
            <div>
                <p>Destination & cruise Vacation planning</p>
                <div id="banner" className="container">
						<section>
						<h1>	<p>Destiantion & Cruise Vacation Planning</p></h1>
              <p>Aisela Travel, LLC believes that making travel plans should be easy and exciting. We specialize in providing each client with a wide array of travel packages and services. Whether you’re looking for a cruise, beach break or theme park excursion, we can help you put together a vacation you’ll never forget.<br></br><br></br>

​We value your business and will work diligently to find the right travel package to meet your needs by providing you with excellent customer service and expertise about the most popular destinations, resorts and cruise lines. We're committed to service and excellence, and we'll take care of all the details so you can start relaxing long before your next trip starts.</p>
               <ul>
                <img src={sign1}></img>
							
                <li>Planning a vacation can be complicated, overwhelming and time consuming – we will save you time as we plan and organize your travel arrangements. ​​​​</li><br></br><br></br>
                <li>We provide personalized travel services, focusing on your needs and desires – you will be provides with various travel options to your desired  destination.​​</li><br></br><br></br>
                <li>You can be assured that we will do our best to make sure that your travel experience is as memorable as possible. ​​</li><br></br><br></br>
                <li>We're just a phone call or email away – Contact us at 314-690-1520 with travel questions, to request a travel quote, or to book your travel arrangements.</li>
                            </ul>
						</section>
					</div>
                    <br></br><br></br>

                    
                <div id="banner" className="container">
						<section>
						<h1>	<p>Cruise Vacations and Excursions</p></h1>
              
               <ul>
                <img src={boat1}></img>
				<li>​Cruises allow you to visit several destinations, while including your accommodations, dining and entertainment.​ ​​As expected, every destination gives you the opportunity to explore, shop, dine or just relax.</li><br></br><br></br>
                <li>Cruises are a great experience for first-timers and children. They are especially suitable for family vacations, girls trips, graduations, group trips, honeymoons, family and class reunions.</li><br></br><br></br>
                <li>Let's plan your cruise, shore excursions, and transportation for your next vacation!</li>
                            </ul>
						</section>
					</div>
                    <br></br><br></br>

                    <div id="banner" className="container">
						<section>
						<h1>	<p>Accommodations - Hotels & Resorts </p></h1>
              <p>Aisela Travel, LLC believes that making travel plans should be easy and exciting. We specialize in providing each client with a wide array of travel packages and services. Whether you’re looking for a cruise, beach break or theme park excursion, we can help you put together a vacation you’ll never forget.<br></br><br></br>

​We value your business and will work diligently to find the right travel package to meet your needs by providing you with excellent customer service and expertise about the most popular destinations, resorts and cruise lines. We're committed to service and excellence, and we'll take care of all the details so you can start relaxing long before your next trip starts.</p>
               <ul>
                <img src={hotel1}></img>
				<li>Stay at the best hotels and resorts in destinations near or far, domestic or internationally.</li><br></br><br></br>
                <li>For every destination there's many accommodation options to choose from depending on the amenities, activities, or type of experience you are looking for.</li><br></br><br></br>
                <li>We will provide you with customized options to find the perfect accommodations for your vacation needs.</li>
                </ul>
						</section>
					</div>
                    <br></br><br></br>

                    <div id="banner" className="container">
						<section>
						<h1>	<p>Accommodations - Hotels & Resorts </p></h1>
              <p>Aisela Travel, LLC believes that making travel plans should be easy and exciting. We specialize in providing each client with a wide array of travel packages and services. Whether you’re looking for a cruise, beach break or theme park excursion, we can help you put together a vacation you’ll never forget.<br></br><br></br>

​We value your business and will work diligently to find the right travel package to meet your needs by providing you with excellent customer service and expertise about the most popular destinations, resorts and cruise lines. We're committed to service and excellence, and we'll take care of all the details so you can start relaxing long before your next trip starts.</p>
               <ul>
                <img src={plane1}></img>
                <li>Domestic or international airfare, ground transportation including car rentals and railway, and tour packages can be arranged for your vacation.</li><br></br><br></br>
                <li>​Airport and hotel/resort transfers can be arranged so your vacation can begin as soon as you arrive to your destination.​​​</li><br></br><br></br>
                <li>In-destination travel experiences are the key to having memorable vacations. Booking your activities or city tours in advance gives you ​the opportunity to experience all your destination has to offer.</li>
				</ul>
						</section>
					</div>
                    <br></br><br></br>

                    <div id="banner" className="container">
						<section>
						<h1>	<p>Protect Your Investment with Travel Protection</p></h1>
                        <ul>
                <img src={passport1}></img>
                <li>The benefits of having travel protection can help minimize unexpected financial loss in case of an emergency or trip interruption, before and during your trip. </li><br></br><br></br>
                <li>Travel protection coverage can include prepaid nonrefundable trip costs, trip cancellation, loss luggage, medical expenses, sickness, travel delays and other losses.</li><br></br><br></br>
                <li>​​​Knowing that you are protecting your vacation investment can give you and your family peace of mind with reassurance that unforeseen circumstances are covered.​</li>
				</ul>
							<a href="#" className="button medium">Plan Now</a>
						</section>
					</div>

                    
            </div>
        );
    }
}

export default Services;