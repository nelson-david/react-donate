// import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as CgIcons from "react-icons/cg";
import { useEffect, useState } from "react";

const Donate = () => {

	const [cryptoDivState, setCryptoDivState] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const toggleCryptoDiv = (e) => {
		e.preventDefault();
		setCryptoDivState(!cryptoDivState);
	}

	return (
		<>
			<div className="container-fluid donate__container">
				<section className="donate__section">
					<div className="row justify-content-center">
						<div className="col-xl-12 custom__col" data-aos="fade-in">
							<div className="donateintro__card">
								<div className="row justify-content-center">
									<div className="col-xl-4 col-lg-5 col-md-8 col-12 custom__col">
										<div className="card payment__card">
											<legend>CHILDREN NEED YOUR HELP TODAY</legend>
											<p>$144 could give two displaced families enough 
											food to last them for a month.</p>

											<div id="payment__method">
												<a
													href="https://donate.com"
													target="__blank">
													<CgIcons.CgPaypal />Paypal
												</a>
												<a
													href="https://donate.com"
													onClick={toggleCryptoDiv}
													>
													Cryptocurrency
												</a>
											</div>

											{
												cryptoDivState?
												<div id="cryptocurrency__div">
													<ul>
														<li>Crypto Network: <b>BTC</b></li>
														<li>BTC Address: <b>fgngrr9t595nf</b></li>
													</ul>
												</div>:''
											}

											<span><BsIcons.BsShieldLock />
												Your donation is processed securely</span>
										</div>
									</div>
									<div className="col-xl-6 col-lg-7 col-md-8 col-12 custom__col">
										<h1><span>HELP CHILDREN</span> IN CRISIS</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default Donate;