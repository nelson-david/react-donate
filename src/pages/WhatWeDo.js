import { Link } from "react-router-dom";
import ChildImg from "../assets/img/smilingchild.jpg";

const WhatWeDo = () => {
	return (
		<div data-aos="fade-in">
			<div className="jumbotron page__header whatwedo__page">
				<div className="centertext__div">
					<h1 className="call-to-action">WHAT WE DO</h1>	
				</div>
			</div>
			<div className="container-fluid page__container">
				<section className="rights__section text-center">
					<div className="row justify-content-center">
						<div className="col-xl-5 col-lg-6 col-md-8 col-sm-9">
							<h3 className="section-title">
								THROUGH OUR PROGRAMMING, EMERGENCY RESPONSES AND 
								ADVOCACY, WE PUT THE MOST VULNERABLE CHILDREN FIRST
							</h3>
							<p className="section-subtitle">
								Save the Children's work saves and improves children's lives 
								around the world. We work to ensure children have healthcare, 
								food and shelter, as well as learning and child protection 
								services when children need it most. We are committed to 
								helping all children achieve their full potential by 
								ensuring they grow up healthy, receive a good education, 
								and stay safe.
								<br /><br />
								Securing children's rights is the foundation of our work. 
								Millions of children around the world are denied their 
								rights, simply because of who they are or where they are 
								from. We know that to ensure every child has the chance for 
								a future their rights must be upheld.
								<br /><br />
								Through our programming, emergency responses and advocacy, 
								we put the most vulnerable children first, tackling the 
								barriers to survival, learning and protection.
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
							<div className="card inspiration__card whatwedo__inspiration">
								<div className="centertext__div" data-aos="fade-in">
									<h3>A CHILD-RIGHTS APPROACH.</h3>
									<p>Since Save the Children was founded 100 years ago, 
									we have been committed to ensuring all children's 
									rights are recognised. We promote change from the 
									ground up by engaging children, their families and 
									their communities. Together with children, we work 
									with governments and international organisations to 
									ensure children's rights are on the political agenda. 
									We hold leaders to account for the commitments they 
									have made, ensuring systems are in place to protect 
									and provide for all children.</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="talktous__section">
					<div className="row justify-content-center">
						<div className="col-12 custom__col">
							<div className="card talktous__card">
								<div className="row justify-content-center">
									<div className="col-xl-4 col-lg-3 col-md-4 col-sm-4"
										data-aos="fade-in">
										<img
											src={ChildImg}
											alt="childImg"
										/>
									</div>
									<div className="col-xl-8 col-md-7 col-sm-8">
										<h1>WANT TO HEAR MORE FROM US?</h1>
										<p>Find out how we're changing the lives of 
											children – and how you can help.</p>
										<span>You can unsubscribe at any time. Our email newsletter 
										is administered by Save the Children US, whose privacy 
										policy tells you more about how we use your information. 
										Over 18s only.</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			</div>
		</div>
	)
}

export default WhatWeDo;