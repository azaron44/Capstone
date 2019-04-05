import React, { Component } from 'react';
import cruise1 from '../../images/cruise1.jpg';
import family1 from '../../images/family1.jpg';
import people1 from '../../images/people1.jpg';
import couple1 from '../../images/couple1.jpg';
import drink1 from '../../images/drink1.jpg';

class VacationPackages extends Component {
    render() {
        return (
            <div>
                {/*section 1*/}
               
                <div id="banner" className="container">
						<section>
						<h1><p>Plan Your Next Vacation with Aisela Travel, LLC</p></h1>
              <p>Are you ready to experience moments that will last a lifetime? Are you dreaming of a getaway? Are you ready to make your bucket list destinations a reality? <br></br><br></br>

​We are here to help make sure your travel experience is hassle free, fun and relaxing! ​Let's start planning your next vacation today! Contact us today at 314-690-1520 for a free travel consultation or to request a travel quote.
</p>
							<a href="#" className="button medium">Read More</a>
						</section>
					</div>
                    <br></br><br></br>

                    {/*section 2*/}

                    <div id="banner" className="container">
						<section>
						<h1><p>Cruise Vacations & Excursions</p></h1>
                    <ul>
                    <img src={cruise1}></img>
                        <li>​​​Let's find the perfect cruise to your dream destination! Popular destinations such as the Caribbean, the Bahamas, and Mexico are among the many itineraries you can choose from.</li><br></br><br></br>
                        <li>Although cruises are not all-inclusive, your lodging, meals, entertainment, and activities are included in the price of your cruise.</li><br></br><br></br>
                        <li>​Which port of call is on your bucket list?</li>


                    </ul>
							{/*<a href="#" className="button medium">Learn More</a>*/} {/*Add this feature later... learn more page link */}
						</section>
					</div>
                    <br></br><br></br>

                    {/*section 3*/}

                    <div id="banner" className="container">
						<section>
						<h1><p>Memorable Family Vacations</p></h1>
                    <ul>
                    <img src={family1}></img>
                        <li>​​​Let's find the perfect cruise to your dream destination! Popular destinations such as the Caribbean, the Bahamas, and Mexico are among the many itineraries you can choose from.​​We'll plan your getaway to the best family friendly destination, resort, or cruise for your family. ​</li><br></br><br></br>
                        <li>According to U.S. News some of the best family friendly destinations are:​ Walt Disney World, Disneyland, Branson, San Diego, the Grand Canyon, Yellowstone, Ocean City, Washington, D.C., Maui, Honolulu - Oahu, Outer Banks, Hilton Head, Yosemite, Gettysburg, and Chicago.</li><br></br><br></br>
                        <li>It's never to early to start planning spring break, summer vacations, or holiday trips.</li>
                    </ul>
						</section>
					</div>
                    <br></br><br></br>

                    {/*section 4*/}

                    <div id="banner" className="container">
						<section>
						<h1><p>Group Trips & Activities</p></h1>
                    <ul>
                    <img src={people1}></img>
                        <li>​​​Group trips are good for anniversaries, birthdays, class reunions, family reunions, girl trips, graduations, as well as  holiday travel. ​</li><br></br><br></br>
                        <li>We can book group accommodations, activities and other requests needed to make your vacation a success. </li><br></br><br></br>
                        <li>Let's start planning your group trip with your family or friends!</li>
                    </ul>
						</section>
					</div>
                    <br></br><br></br>

                    {/*Section 5*/}

                    <div id="banner" className="container">
						<section>
						<h1><p>All-Inclusive Vacations & Activities</p></h1>
                    <ul>
                    <img src={drink1}></img>
                        <li>Most all-inclusive resorts are in the Caribbean, the Dominican Republic, Jamaica, and Mexico. What destination is on your bucket list?​</li><br></br><br></br>
                        <li>Vacationing at an all-inclusive resort is a bonus! Your rate includes accommodations, meals, beverages, and activities.​</li><br></br><br></br>
                        <li>We'll determine which all-inclusive vacation is right for you based on your desired amenities and atmosphere.</li>
                    </ul>
						</section>
					</div>
                    <br></br><br></br>

                    {/*section 6*/}

                    <div id="banner" className="container">
						<section>
						<h1><p>Romantic Getaways</p></h1>
                    <ul>
                    <img src={couple1}></img>
                        <li>Thinking of taking your sweetheart on a romantic trip to remember? You won't go wrong with choosing a romantic destination.​</li><br></br><br></br>
                        <li>Whether you’re looking to celebrate your anniversary, plan a weekend getaway, or celebrate your honeymoon on an island, I can help you plan the perfect romantic getaway.</li><br></br><br></br>
                        <li>There’s really no better way to say 'I Love You' than by enjoying a memorable vacation with the one you love the most.</li>
                    </ul>
                    {/*<a href="#" className="button medium">Request Quote</a>*/} {/*Add this feature later... Request Quote page link */}
						</section>
					</div>
                    <br></br><br></br>


                
            </div>
        );
    }
}

export default VacationPackages;