import React, { Component } from 'react';
import Alesia from '../../images/Alesia.jpg';

class About extends Component {
    render() {
        return (
            <div>
                {/*Section 1*/}

                <div id="banner" className="container">
						<section>
						<h1><p>Meet Your Travel Advisor</p></h1>
                        <ul>
                            <img src={Alesia}></img>
                            <h4><p>Aleasia M. Travel Advisor</p></h4><br></br>
                            <li>I've loved traveling since the beginning of my family's yearly vacation trips. Over time I've realized that there's so much more world to see and I haven't stopped. I have personally traveled throughout the U.S., Jamaica, the Bahamas and the Caribbean which inspires me to help other people make their travel dreams a reality too!</li><br></br><br></br>
                            <li>​​My greatest satisfaction is serving you while planning your next vacation. ​​With my service, no detail of your trip is overlooked. ​Unlike online booking websites, I'll go above and beyond to make sure all of your needs are met. I'm here to give you personalized service.</li><br></br><br></br>
                            <li>Contact us today at 314-690-1520 to start planning your next vacation or travel adventure!</li>
                        </ul>
						</section>
					</div>
					<br></br><br></br>

                    {/*Section 2 */}

                    <div id="banner" className="container">
						<section>
						<h1><p>Certifications</p></h1>
                        <ul>
                          <li><p>Bahamas Specialist</p></li>
                          <li><p>Jamacia Travel Specialist</p></li>
                            </ul>
						</section>
					</div>
					<br></br><br></br>

                    {/*Come back to finish page. multiple links and other pages need to be implemented*/}
            </div>
        );
    }
}

export default About;