import { Link } from "react-router-dom";

const About = () => {
	return (
		<div data-aos="fade-in">
			<div className="jumbotron page__header article__page">
				<div className="centertext__div">
					<h1 className="call-to-action">ABOUT US</h1>	
				</div>
			</div>
			<div className="container-fluid page__container">
				<section className="rights__section text-center">
					<div className="row justify-content-center">
						<div className="col-xl-5 col-lg-6 col-md-8 col-sm-9">
							<h3 className="section-title">WE BELIEVE EVERY CHILD 
								HAS THE SAME RIGHTS</h3>
							<p className="section-subtitle">
								For <b>more than 100 years</b>, we have helped to ensure that 
								the world's most vulnerable children survive, learn and 
								are protected.
								<br /><br />
								Every year, we reach tens of millions of children in 118 
								countries through our work.
								<br /><br />
								Learn more about the work we do for and with children.
							</p>
							<Link to="/donate" className="section-link">
								Donate Now To Support Our Work
							</Link>
						</div>
					</div>
				</section>

				<section className="inspiration__section">
					<div className="row justify-content-center">
						<div className="col-xl-12 custom__col">
							<div className="card inspiration__card">
								<div className="centertext__div" data-aos="fade-in">
									<h3>A CLOSER LOOK AT THE CHILDREN WHO INSPIRE US.</h3>
									<p>In 2021, we directly reached 43 million children 
									in 118 countries around the world. We responded to 
									103 humanitarian emergencies across 63 countries and 
									contributed to 33 policy or legislation changes for 
									children's rights. This is the bigger picture of our work.

									Behind these numbers are the inspiring stories of the 
									wonderful children we help. Our Annual Review puts our 
									work around the world into context and gives a clearer 
									sense of what we do for and with children. Take a look at 
									our 2020 Annual Review.</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="help__section">
					<div className="row justify-content-center">
						<div className="col-12 custom__col">
							<div className="card help__card">
								<h3 className="section-title">CHILDREN NEED YOUR HELP</h3>

								<Link to="/donate">
									DONATE MONTHLY TO ENSURE EVERY CHILD 
									SURVIVES, LEARNS AND IS PROTECTED.
								</Link>
							</div>
						</div>
					</div>
				</section>

			</div>
		</div>
	)
}

export default About;