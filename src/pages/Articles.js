import ArticleImg1 from "../assets/img/article2.webp";
import ArticleImg2 from "../assets/img/article1.webp";
import ArticleImg3 from "../assets/img/article3.webp";
import ArticleCard from "../components/card/ArticleCard";

const articles = [
	{
		img: ArticleImg1,
		text: "BOMBS AND DEAD BODIES: CHILDREN’S DRAWINGS HAUNTED BY WAR IN UKRAINE"
	},
	{
		img: ArticleImg2,
		text: "“I WOULD NEVER WISH THIS RAMADAN ON ANYONE”: AFGHAN FAMILIES SURVIVING ON BREAD AND WATER THROUGH HOLY MONTH AS ECONOMIC CRISIS WORSENS"
	},
	{
		img: ArticleImg3,
		text: "REPORTS OF 3-MONTH OLD BABY AMONG FATALITIES OF ODESA MISSILE ATTACK"
	},
]

const Articles = () => {
	return (
		<div data-aos="fade-in">
			<div className="jumbotron articlepage__header">
				<div className="centertext__div">
					<h1 className="call-to-action">NEWS</h1>	
				</div>
			</div>
			<div className="container-fluid">
				<div className="articlepage__div">
					<div className="row justify-content-center">
					{
						articles.map((article, index) => {
							return (
								<div className="col-md-4 col-sm-6" key={index}>
									<ArticleCard article={article} />
								</div>
							)
						})
					}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Articles;