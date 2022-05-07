import { useEffect } from "react";

const SingleArticle = () => {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className="container-fluid singlearticle__container">
			<section className="singlearticle__section">
				<div className="row justify-content-left">
					<div className="col-lg-8 col-md-10 col-12 custom__col" data-aos="fade-in">
						<div className="singlearticle__header">
							<div className="dateandlocation">
								28 APRIL 2022 - <span>UKRAINE</span>
							</div>
							<h1>SINGLE MOM DEAD, AND LEAVES BEHIND HER THREE CHILDREN (NOW ORPHANS)</h1>
							<img
								src={`https://media.gettyimages.com/photos/
									mother-and-daughter-huddle-at-roadside-with-belongings-picture-
									id675071890?k=20&m=675071890&s=612x612&w=0&h=
									FUL17ixHX3Ar8Ywugh6vjuob_AgkPQxN03ZO0wrazAc=`}
								alt="SingleMomAndChildren"
							/>
						</div>
						<div className="singlearticle__body">
							<p>
								Living in poverty often means going without basic needs such as food, clothing and adequate shelter.
								A child shouldn’t have to worry about the roof over their head or food on their plate. We support programs that are on the ground across the globe that are working tirelessly to save the lives of severely malnourished and homeless children so they can grow, learn, play and develop to become thriving, active members of their community.

								Mary who died 1 month ago and she lost
								her husband two years ago, she had
								three children two girls and a boy, and Mary had no family.
								she had no parents and relative she
								was the only one taking care of her
								children over two years until she was involved in a car accident which took her precious life
								painful that she died and left three
								children behind, a friend of her’s Vanessa
								took them in and have been taking care of them that’s why we’ve decided to help create a platform which is an
								opportunity to reach out to
								Those with a giving heart to help this poor three
								children get them a home and
								also funds to help fund their education
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default SingleArticle;