// import { useState } from "react";
import * as TiIcons from "react-icons/ti";
// import * as ImIcons from "react-icons/im";
import { Link } from "react-router-dom";
// import axios from "axios";

const Footer = () => {
	return (
		<footer className="container-fluid custom__footer">
			<section className="footercontent__section">
				<div className="row justify-content-center">
					<div className="col-xl-4 col-md-6 col-sm-12" id="first__col">
						<span>Pockit</span>
						<span>
							All your bookmarks in one place. Poqet saves you the stress
							of having to check your bookmarks for every single social media.
						</span>
						<ul>
							<li>
								<a href="https://facebook.com/tenthgenstudios"
									target="__blank"
									rel="noreferrer">
									<TiIcons.TiSocialFacebookCircular />
								</a>
							</li>
							<li>
								<a href="https://instagram.com/tenthgenstudios"
									target="__blank"
									rel="noreferrer">
									<TiIcons.TiSocialInstagramCircular />
								</a>
							</li>
							<li>
								<a href="https://twitter.com/tenthgenstudios"
									target="__blank"
									rel="noreferrer">
									<TiIcons.TiSocialTwitterCircular />
								</a>
							</li>
							<li>
								<a href="https://github.com/tenthgenstudios"
									target="__blank"
									rel="noreferrer">
									<TiIcons.TiSocialGithubCircular />
								</a>
							</li>
						</ul>
						<span>
							Copyright&nbsp;©&nbsp;2022&nbsp;SAAM. All 
							rights reserved.
						</span>
					</div>
					<div className="col-xl-2 col-md-6 col-sm-12" id="second__col">
						<span>Links</span>
						<ul>
							<li>
								<Link to="/">
									Home
								</Link>
							</li>
							<li>
								<Link to="/blog">
									Blog
								</Link>
							</li>
							<li>
								<Link to="/about">
									About
								</Link>
							</li>
							<li>
								<Link to="/auth">
									Sign Up
								</Link>
							</li>
						</ul>
					</div>

					<div className="col-xl-2 col-md-6 col-sm-12" id="second__col">
						<span>Social</span>
						<ul>
							<li>
								<a href="https://facebook.com/tenthgenstudios"
									target="__blank" rel="noreferrer">
									Facebook
								</a>
							</li>
							<li>
								<a href="https://twitter.com/tenthgenstudios"
									target="__blank" rel="noreferrer">
									Twitter
								</a>
							</li>
							<li>
								<a href="https://instagram.com/tenthgenstudios"
									target="__blank" rel="noreferrer">
									Instagram
								</a>
							</li>
							<li>
								<a href="https://github.com/tenthgenstudios"
									target="__blank" rel="noreferrer">
									Github
								</a>
							</li>
						</ul>
					</div>

					<div className="col-xl-2 col-md-6 col-sm-12" id="second__col">
						<span>Terms</span>
						<ul>
							<li>
								<Link to="/privacypolicy">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link to="/termsandconditions">
									Terms & Conditions
								</Link>
							</li>
							<li>
								<Link to="/helpcenter">
									Help Center
								</Link>
							</li>
							<li>
								<Link to="/merch">
									Merch
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</footer>
	)
}

export default Footer;