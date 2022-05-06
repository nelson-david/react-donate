// import { useState } from "react";
// import * as TiIcons from "react-icons/ti";
// import * as ImIcons from "react-icons/im";
// import { Link } from "react-router-dom";
// import axios from "axios";

const Footer = () => {
	return (
		<footer className="custom__footer">
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-md-7 col-12" id="first__col">
						<h3 className="list__title">OUR MEMBER WEBSITES</h3>

						<div className="row">
							<div className="col-sm-4 col-6">
								<ul>
									<li>Australia</li>
									<li>Canada</li>
									<li>Denmark</li>
									<li>Dominican Republic</li>
									<li>Eswatini</li>
									<li>Fiji</li>
									<li>Finland</li>
									<li>Germany</li>
								</ul>
							</div>
							<div className="col-sm-4 col-6">
								<ul>
									<li>Honduras</li>
									<li>Hong Kong SAR</li>
									<li>Iceland</li>
									<li>India</li>
									<li>Indonesia</li>
									<li>Italy</li>
									<li>Japan</li>
									<li>Jordan</li>
								</ul>
							</div>
							<div className="col-sm-4 col-6">
								<ul>
									<li>Korea</li>
									<li>Lithuania</li>
									<li>Mexico</li>
									<li>Netherlands</li>
									<li>New Zealand</li>
									<li>Norway</li>
									<li>Philippines</li>
									<li>Romania</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-2 col-6" id="second__col">
						<h3 className="list__title">WHAT WE DO</h3>
						<ul>
							<li>Survival</li>
							<li>Learning</li>
							<li>Protection</li>
							<li>Emergencies</li>
							<li>Campaigns</li>
						</ul>
					</div>
					<div className="col-md-3 col-6" id="third__col">
						<h3 className="list__title">ABOUT US</h3>
						<ul>
							<li>Who We Are</li>
							<li>Contact Us</li>
							<li>Accountability</li>
							<li>Safeguarding</li>
							<li>Work For Us</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer__copyrightcard">
				<p>Save the Children International is a company limited by 
				guarantee, registered in England and Wales with company number 
				3732267 and a charity registered in England and Wales with 
				charity number 1076822. Its registered office is St Vincent 
				House, 30 Orange Street, London, WC2H 7HH © 2022 Save the 
				Children International | Legal | Privacy | Recruitment Privacy Policy</p>
			</div>
		</footer>
	)
}

export default Footer;