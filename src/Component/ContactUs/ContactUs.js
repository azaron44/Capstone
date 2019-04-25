import React, { Component } from 'react';

class ContactUs extends Component {
    render() {
        return (
            <div>
               	<div id="footer" className="wrapper style2">
			<div className="container">
				<section>
					<header className="major">
						<h2>Dont have an account? No worries.</h2>
						<span className="byline">You can leave your information and we'll reach out to you!</span>
					</header>
					<form method="post" action="#">
						<div className="row half">
                        <label>Your Name:</label>
							<div className="12u">
								<input className="text" type="text" name="name" id="name" placeholder="Name" />
							</div>
						</div>
                        <div className="row half">
							<div className="12u">
								<input className="text" type="text" name="name" id="name" placeholder="Phone Number" />
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
            </div>
        );
    }
}

export default ContactUs;