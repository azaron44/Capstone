import React, { Component } from 'react';
import pic01 from '../../images/pic01.jpg';
import pic02 from '../../images/pic02.jpg';
import pic03 from '../../images/pic03.jpg';
import bg from '../../images/bg.jpg';
import asia from '../../images/asia.jpg';
import mexico from '../../images/mexico.jpg';
import hawai3 from '../../images/hawai3.jpg';
//import carribbean from '../../images/caribbean.jpg';
import caribbean2 from '../../images/caribbean2.jpg';
import oceania1 from '../../images/oceania1.jpg';
import centralAmerica from '../../images/centralAmerica.jpg';
import europe1 from '../../images/europe1.jpg';
import virginIslands1 from '../../images/virginIslands1.jpg';
import washington from '../../images/washington.jpg';
import {Link} from 'react-router-dom';

const Home =(props) =>  {
   
        return (

          <React.Fragment>
            <div id="banner" className="container">
						<section>
							<p><h1>One Goal, One Passion... Help Create Travel Memories</h1></p>
              <p>Imagine being able to go on vacation without the stress of planning it. Aisela Travel, LLC provides personalized travel services while planning your vacation experience. Our passion is traveling and we believe in providing a personal touch beyond just making your reservations.
​
​Now imagine, being able to go anywhere you want to go. We have traveled extensively and have first hand knowledge of the destinations we book. We would love to plan your next vacation, cruise, family or group trip, weekend getaway, all-inclusive vacation, adventure or dream destination tour.	</p>
							<a href="#" className="button medium">Read More</a>
						</section>
					</div>

                <div className="container-fluid">

<div id="extra">
						<div className="container">
							<div className="row no-collapse-1">
									<section className="4u"> <Link to={"https://www.google.com/destination?q=Caribbean&safe=active&site=search&output=search&dest_mid=/m/0261m&sa=X&ved=0ahUKEwifjv_Px4bcAhVrk-AKHWtUBDsQri4IgAIwGA#dest_mid=/m/0261m&tcfs=EhoaGAoKMjAxOS0wNC0xNxIKMjAxOS0wNC0yMQ"} className="image featured"><img src={caribbean2} alt=""/></Link>
									<div className="box">
										<p>Carribbean</p>
										<Link to={"https://www.google.com/destination?q=Caribbean&safe=active&site=search&output=search&dest_mid=/m/0261m&sa=X&ved=0ahUKEwifjv_Px4bcAhVrk-AKHWtUBDsQri4IgAIwGA#dest_mid=/m/0261m&tcfs=EhoaGAoKMjAxOS0wNC0xNxIKMjAxOS0wNC0yMQ"} className="button">Read More</Link> </div>
								</section>
								<section className="4u"> <a href="https://www.google.com/destination?q=mexico&safe=active&rlz=1CAHPZQ_enUS803&site=search&output=search&dest_mid=/m/0b90_r&sa=X&ved=0ahUKEwjO9Y2Tq4bcAhUId98KHdvkAz4Qri4I1wEwIA#dest_mid=/m/0b90_r&tcfs=EhoaGAoKMjAxOC0wNy0yMBIKMjAxOC0wNy0yNA" className="image featured"><img src={mexico} alt=""/></a>
									<div className="box">
										<p>Mexico</p>
										<a href="https://www.google.com/destination?q=mexico&safe=active&rlz=1CAHPZQ_enUS803&site=search&output=search&dest_mid=/m/0b90_r&sa=X&ved=0ahUKEwjO9Y2Tq4bcAhUId98KHdvkAz4Qri4I1wEwIA#dest_mid=/m/0b90_r&tcfs=EhoaGAoKMjAxOC0wNy0yMBIKMjAxOC0wNy0yNA" className="button">Read More</a> </div>
								</section>
								<section className="4u"> <a href="https://www.google.com/destination?q=Hawaii&safe=active&site=search&output=search&dest_mid=/m/03gh4&sa=X&ved=0ahUKEwijjKqHrYbcAhXQTN8KHckOCTgQri4InAIwIQ#dest_mid=/m/03gh4&tcfs=EhoaGAoKMjAxOC0wNy0yMBIKMjAxOC0wNy0yNA" className="image featured"><img src={hawai3} alt=""/></a>
									<div className="box">
										<p>Hawaii.</p>
										<a href="https://www.google.com/destination?q=Hawaii&safe=active&site=search&output=search&dest_mid=/m/03gh4&sa=X&ved=0ahUKEwijjKqHrYbcAhXQTN8KHckOCTgQri4InAIwIQ#dest_mid=/m/03gh4&tcfs=EhoaGAoKMjAxOC0wNy0yMBIKMjAxOC0wNy0yNA" className="button">Read More</a> </div>
								</section>
							</div>
							<div className="row no-collapse-1">
								<section className="4u"> <a href="https://www.google.com/destination?q=Asia&safe=active&site=search&output=search&dest_mid=/m/0j0k&sa=X&ved=0ahUKEwjH3e6Yr4bcAhVnTt8KHewoCU0Qri4I_wEwFw#dest_mid=/m/0j0k&tcfs=EhwaGAoKMjAxOS0wNC0xNxIKMjAxOS0wNC0yMSAC" className="image featured"><img src={asia} alt=""/></a>
									<div className="box">
										<p>Asia</p>
										<a href="https://www.google.com/destination?q=Asia&safe=active&site=search&output=search&dest_mid=/m/0j0k&sa=X&ved=0ahUKEwjH3e6Yr4bcAhVnTt8KHewoCU0Qri4I_wEwFw#dest_mid=/m/0j0k&tcfs=EhwaGAoKMjAxOS0wNC0xNxIKMjAxOS0wNC0yMSAC" className="button">Read More</a> </div>
								</section>
								<section className="4u"> <a href="https://www.google.com/destination?q=oceania&safe=active&sa=X&site=search&output=search&dest_mid=%2Fm%2F05nrg&tcfs#dest_mid=/m/05nrg&tcfs=EhwaGAoKMjAxOS0wNC0xNxIKMjAxOS0wNC0yMSAC" className="image featured"><img src={oceania1} alt=""/></a>
									<div className="box">
										<p>Oceania</p>
										<a href="https://www.google.com/destination?q=oceania&safe=active&sa=X&site=search&output=search&dest_mid=%2Fm%2F05nrg&tcfs#dest_mid=/m/05nrg&tcfs=EhwaGAoKMjAxOS0wNC0xNxIKMjAxOS0wNC0yMSAC" className="button">Read More</a> </div>
								</section>
								<section className="4u"> <a href="https://www.google.com/destination?q=Central+America&safe=active&site=search&output=search&dest_mid=/m/01tzh&sa=X&ved=0ahUKEwiqisrpt4bcAhVPTt8KHcTjDzkQri4IhwIwGg#dest_mid=/m/01tzh&tcfs=EhoaGAoKMjAxOS0wNC0xNxIKMjAxOS0wNC0yMQ" className="image featured"><img src={centralAmerica} alt=""/></a>
									<div className="box">
										<p>Central America</p>
										<a href="https://www.google.com/destination?q=Central+America&safe=active&site=search&output=search&dest_mid=/m/01tzh&sa=X&ved=0ahUKEwiqisrpt4bcAhVPTt8KHcTjDzkQri4IhwIwGg#dest_mid=/m/01tzh&tcfs=EhoaGAoKMjAxOS0wNC0xNxIKMjAxOS0wNC0yMQ" className="button">Read More</a> </div>
								</section>
                <div className="row no-collapse-1">
								<section className="4u"> <a href="https://www.google.com/destination?q=Europe&safe=active&site=search&output=search&dest_mid=/m/02j9z&sa=X&ved=0ahUKEwjx66e5vIbcAhUFVN8KHaQpDlMQri4I9AEwGQ#dest_mid=/m/02j9z&tcfs=EhwaGAoKMjAxOS0wNC0xNxIKMjAxOS0wNC0yMSAB" className="image featured"><img src={europe1} alt=""/></a>
									<div className="box">
										<p>Europe</p>
										<a href="https://www.google.com/destination?q=Europe&safe=active&site=search&output=search&dest_mid=/m/02j9z&sa=X&ved=0ahUKEwjx66e5vIbcAhUFVN8KHaQpDlMQri4I9AEwGQ#dest_mid=/m/02j9z&tcfs=EhwaGAoKMjAxOS0wNC0xNxIKMjAxOS0wNC0yMSAB" className="button">Read More</a> </div>
								</section>
								<section className="4u"> <a href="https://www.google.com/destination?q=Europe&safe=active&site=search&output=search&dest_mid=/m/02j9z&sa=X&ved=0ahUKEwjx66e5vIbcAhUFVN8KHaQpDlMQri4I9AEwGQ#dest_mid=/m/02j9z&tcfs=EhwaGAoKMjAxOS0wNC0xNxIKMjAxOS0wNC0yMSAB" className="image featured"><img src={virginIslands1} alt=""/></a>
									<div className="box">
										<p>U.S. Virgin Islands</p>
										<a href="https://www.google.com/destination?q=Europe&safe=active&site=search&output=search&dest_mid=/m/02j9z&sa=X&ved=0ahUKEwjx66e5vIbcAhUFVN8KHaQpDlMQri4I9AEwGQ#dest_mid=/m/02j9z&tcfs=EhwaGAoKMjAxOS0wNC0xNxIKMjAxOS0wNC0yMSAB" className="button">Read More</a> </div>
								</section>
								<section className="4u"> <a href="https://www.google.com/destination/compare?q=United%20States%20of%20America&safe=active&sa=X&site=search&output=search&dest_mid=%2Fm%2F09c7w0&tcfs" className="image featured"><img src={washington} alt=""/></a>
									<div className="box">
										<p>U.S. Cities</p>
										<a href="https://www.google.com/destination/compare?q=United%20States%20of%20America&safe=active&sa=X&site=search&output=search&dest_mid=%2Fm%2F09c7w0&tcfs" className="button">Read More</a> </div>
								</section>
							</div>
							</div>
						</div>
					</div>
          

				
					<div id="main">
						<div className="container">
							<div className="row"> 
								
								
								<div className="6u">
									<section>
										<ul className="style">
											<li className="fa fa-wrench">
												<h3>Integer ultrices</h3>
												<span>In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula. Pellentesque viverra vulputate enim. Aliquam erat volutpat. Maecenas condimentum enim tincidunt risus accumsan.</span> </li>
											<li className="fa fa-leaf">
												<h3>Aliquam luctus</h3>
												<span>In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula. Pellentesque viverra vulputate enim. Aliquam erat volutpat. Maecenas condimentum enim tincidunt risus accumsan.</span> </li>
										</ul>
									</section>
								</div>
								<div className="6u">
									<section>
										<ul className="style">
											<li className="fa fa-cogs">
												<h3>Integer ultrices</h3>
												<span>In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula. Pellentesque viverra vulputate enim. Aliquam erat volutpat. Maecenas condimentum enim tincidunt risus accumsan.</span> </li>
											<li className="fa fa-road">
												<h3>Aliquam luctus</h3>
												<span>In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula. Pellentesque viverra vulputate enim. Aliquam erat volutpat. Maecenas condimentum enim tincidunt risus accumsan.</span> </li>
										</ul>
									</section>
								</div>
							</div>
						</div>
					</div>

	</div>


		<div id="footer" className="wrapper style2">
			<div className="container">
				<section>
					<header className="major">
						<h2>Mauris vulputate dolor</h2>
						<span className="byline">Integer sit amet pede vel arcu aliquet pretium</span>
					</header>
					<form method="post" action="#">
						<div className="row half">
							<div className="12u">
								<input className="text" type="text" name="name" id="name" placeholder="Name" />
							</div>
						</div>
						<div className="row half">
							<div className="12u">
								<input className="text" type="text" name="email" id="email" placeholder="Email" />
							</div>
						</div>
						<div className="row half">
							<div className="12u">
								<textarea name="message" id="message" placeholder="Message"></textarea>
							</div>
						</div>
						<div className="row half">
							<div className="12u">
								<ul className="actions">
									<li>
										<input type="submit" value="Send Message" className="button alt" />
									</li>
								</ul>
							</div>
						</div>
					</form>
				</section>
			</div>
		</div>

	
		<div id="copyright">
			<div className="container">
				<div className="copyright">
					<p>Design: <a href="http://templated.co">TEMPLATED</a> Images: <a href="http://unsplash.com">Unsplash</a> (<a href="http://unsplash.com/cc0">CC0</a>)</p>
					<ul className="icons">
						<li><a href="#" className="fa fa-facebook"><span>Facebook</span></a></li>
						<li><a href="#" className="fa fa-twitter"><span>Twitter</span></a></li>
						<li><a href="#" className="fa fa-google-plus"><span>Google+</span></a></li>
					</ul>
				</div>
			</div>
		</div>
    </React.Fragment>
        );
    
}

export default Home;