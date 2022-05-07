import { Link } from "react-router-dom";
import CrisisImg1 from "../assets/img/crisis1.webp";
import CrisisImg2 from "../assets/img/crisis2.webp";
import CrisisImg3 from "../assets/img/crisis3.webp";
import ChildImg from "../assets/img/smilingchild.jpg";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import ArticleCard from "../components/card/ArticleCard";
import { useEffect } from "react";

const recent_work = [
	{
		img: CrisisImg1,
		text: "USA Crisis"
	},
	{
		img: CrisisImg2,
		text: "USA: 5 WAYS TO TALK TO CHILDREN ABOUT CONFLICT"
	},
	{
		img: CrisisImg3,
		text: "TAKE ACTION: STOP THE WAR ON CHILDREN"
	},
]

const LandingPage = ({articles}) => {

	const scrollToDown = (e) => {
		e.preventDefault();
		window.scrollTo(0, 800);
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<div className="container-fluid landingpage__container">
				<section className="header__section">
					<div className="row justify-content-center">
						<div className="col-12 custom__col" data-aos="fade-in">
							<div className="headerintro__card">
								<div className="centertext__div">
									<h1 className="call-to-action">MILLIONS OF CHILDREN IN 
										DANGER IN UNITED STATES.</h1>		
									<Link
										to="/donate"
										className="donate__link">
										Donate now
									</Link>
									<br />
									<div className="header__paragraph">
										<p>Every war is a war against children.</p>
										<p id="second">
											Over 5 million people have fled the violence to 
											neighbouring countries. Two-thirds of all children 
											have had to leave their home. They are in urgent 
											need of support.
										</p>
										<a href="#recent" onClick={scrollToDown}>
											<BsIcons.BsChevronDoubleDown />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="savethechildren__section">
					<div className="row justify-content-center">
						<div className="col-xl-5 col-lg-6 col-md-8 col-sm-9">
							<h1 className="section-title">SAVE THE CHILDREN</h1>
							<p className="section-subtitle">
								Worldwide a perfect storm of COVID-19, conflict and the climate 
								crisis has left children vulnerable to critical levels of 
								hunger and poverty.
								<br /><br />
								We are gravely concerned for children in USA, Afghanistan 
								and around the world who might be caught in the middle of armed conflict.
								<br /><br />
								Their right to survival, protection and education is under 
								immediate threat.
								<br /><br />
								But, we can do something about it. Help us to protect children 
								to ensure they not only survive but thrive.
							</p>
						</div>
					</div>
				</section>

				<section className="ourwork__section">
					<div className="row justify-content-center">
						<div className="col-12">
							<h1 className="section-title">OUR WORK</h1>
							
							<div className="worklist__div">
								<div className="row justify-content-left">
								{
									recent_work.map((work, index) => {
										return (
											<div className="col-md-4 col-sm-6 col-12">
												<Link
													data-aos="fade-in"
													to="/app"
													className="work__card">
													<img
														alt="USA crisis"
														loading="lazy"
														src={work.img}
													/>
													<div className="workcard__caption">
						              					<h3 className="recent-work">
						              						<span>{work.text}</span>
						              					</h3>
													</div>
												</Link>
											</div>
										)
									})
								}
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="calltoaction__section">
					<div className="row justify-content-center">
						<div className="col-xl-12 custom__col">
							<div className="card calltoaction__card">
								<div className="centertext__div" data-aos="fade-in">
									<h3>VISIT A NATIONAL ORGANISATION.</h3>
									<p>We are a global membership organisation, made up of 
									Save the Children International and 30 national members. 
									We share one name, one strategy and one ambition for children.</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="latestnews__section">
					<div className="row justify-content-center">
						<div className="col-xl-12">
							<h1 className="section-title">LATEST NEWS</h1>
							<p className="section-subtitle">
								<Link to="/articles">
									View All Articles <FaIcons.FaChevronRight />
								</Link>
							</p>
							
							<div className="latestnews__div">
								<div className="row justify-content-left">
								{
									articles.map((article, index) => {
										return (
											<div className="col-md-4 col-sm-6" key={index}>
												<ArticleCard
													article={article}
												/>
											</div>
										)
									})
								}
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
									<div className="col-xl-4 col-lg-3 col-md-4 col-sm-4" data-aos="fade-in">
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
		</>
	)
}

export default LandingPage;