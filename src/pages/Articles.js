import ArticleCard from "../components/card/ArticleCard";
import { useEffect } from "react";

const Articles = ({articles}) => {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	
	return (
		<div data-aos="fade-in">
			<div className="jumbotron page__header article__page">
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