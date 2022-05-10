import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import { useEffect, useState } from "react";
import ContributorsModal from "../components/card/ContributorsModal"

const Donate = () => {

	const [cryptoDivState, setCryptoDivState] = useState(false);
	const [contributorsModal, setContributorsModal] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [])

	const toggleCryptoDiv = (e) => {
		e.preventDefault();
		setCryptoDivState(!cryptoDivState);
	}

	const toggleContributorModal = (e) => {
		e.preventDefault();
		setContributorsModal(!contributorsModal);
	}

	return (
		<>
			{contributorsModal?<ContributorsModal
					closeModal={toggleContributorModal}
			/>:''}
			<div className="container-fluid donate__container">
				<section className="donate__section">
					<div className="row justify-content-center">
						<div className="col-xl-12 custom__col" data-aos="fade-in">
							<div className="donateintro__card">
								<div className="row justify-content-center">
									<div className="col-xl-5 col-lg-6 col-md-8 col-12 custom__col">
										<div className="card payment__card">
											<legend>CHILDREN NEED YOUR HELP TODAY</legend>
											<p>Your little donation Matters 💓💓</p>

											<div id="payment__method">
												<a
													href="https://www.paypal.com/pools/c/8JzkG9KShy"
													target="__blank"
													rel="noreferrer">
													<CgIcons.CgPaypal />Paypal
												</a>
												<a
													href="https://paypal.com/pools/c/8JzkG9KShy"
													target="__blank"
													rel="noreferrer"
													onClick={toggleCryptoDiv}>
													<FaIcons.FaBitcoin />Cryptocurrency
												</a>
											</div>

											{
												cryptoDivState?
												<div id="cryptocurrency__div">
													<ul>
														<li>Crypto Network: <b>Bitcoin (BTC)</b></li>
														<li>BTC Address: <b>1EQdMmjUqpmPenxHNPNy­X5iepDQUMc3zu2</b></li>
													</ul>
												</div>:''
											}

											<span><BsIcons.BsShieldLock />
												Your donation is processed securely</span>
											<Link
												to="/contributors"
												id="contributor__link"
												onClick={toggleContributorModal}
											>
												View All Contributors
											</Link>
										</div>
									</div>
									<div className="col-xl-6 col-lg-6 col-md-10 col-12 custom__col">
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