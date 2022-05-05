import { Link } from "react-router-dom";

const ArticleCard = ({article}) => {
	return (
		<div className="card article__card" data-aos="flip-left">
			<Link to="/article/gfgnfgk">
				<img
					alt="ArticleImg"
					src={article.img}
				/>
			</Link>
			<div className="dateandlocation">
				28 APRIL 2022 - <span>UKRAINE</span>
			</div>
			<Link to="/article/gfgnfgk">
				<p className="article__text">
					{article.text}
				</p>
			</Link>
		</div>
	)
}

export default ArticleCard;