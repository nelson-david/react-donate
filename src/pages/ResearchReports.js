import { Link } from "react-router-dom";
import ArticleCard from "../components/card/ArticleCard";
import * as FaIcons from "react-icons/fa";

const ResearchReports = ({articles}) => {
	return (
		<div data-aos="fade-in">
			<div className="jumbotron page__header research__page">
				<div className="centertext__div">
					<h1 className="call-to-action">RESEARCH & REPORTS</h1>	
				</div>
			</div>
			<div className="container-fluid page__container">

				<section className="latestnews__section">
					<div className="row justify-content-center">
						<div className="col-xl-12">
							<h3 className="section-title">RECOMMENDED PUBLICATIONS</h3>
							<p className="section-subtitle">
								<Link to="/">
									View All Publications <FaIcons.FaChevronRight />
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

				<section className="search__section">
					<div className="row justify-content-center">
						<div className="col-xl-12">
							<h3 className="section-title">POPULAR SEARCHES</h3>

							<div className="popularsearch__section">
								<div className="row justify-content-center">
									<div className="col-sm-4">
										<h4>THEMES</h4>
										<ul>
											<li><Link to="/">EMERGENCIES <FaIcons.FaChevronRight />
											</Link></li>
											<li><Link to="/">LEARNING <FaIcons.FaChevronRight />
											</Link></li>
											<li><Link to="/">PROTECTION <FaIcons.FaChevronRight />
											</Link></li>
											<li><Link to="/" className="last-child">
												SURVIVAL <FaIcons.FaChevronRight />
												</Link></li>
										</ul>
									</div>
									<div className="col-sm-4">
										<h4>REGIONS</h4>
										<ul>
											<li><Link to="/">AFRICA <FaIcons.FaChevronRight />
											</Link></li>
											<li><Link to="/">AMERICAS <FaIcons.FaChevronRight />
											</Link></li>
											<li><Link to="/">ASIA AND OCEANIA <FaIcons.FaChevronRight />
											</Link></li>
											<li><Link to="/" className="last-child">
												EUROPE AND THE MIDDLE EAST <FaIcons.FaChevronRight />
												</Link></li>
										</ul>
									</div>
									<div className="col-sm-4">
										<h4>KEYWORDS</h4>
										<ul>
											<li><Link to="/">CHILD RIGHTS <FaIcons.FaChevronRight />
											</Link></li>
											<li><Link to="/">EDUCATION <FaIcons.FaChevronRight />
											</Link></li>
											<li><Link to="/">GENDER EQUALITY <FaIcons.FaChevronRight />
											</Link></li>
											<li><Link to="/" className="last-child">
												HEALTH <FaIcons.FaChevronRight />
												</Link></li>
										</ul>
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

export default ResearchReports;