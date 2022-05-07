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
							<p>Families in Peru’s Amazonas region are at risk of being displaced for a third time in six months as climate change intensifies the impact of disasters, leaving children without quality education or security about their future, Save the Children said.

								Since November 2021, parts of the Amazonas region have faced two devastating earthquakes and extreme rainfall, which triggered a series of landslides and severe flooding, affecting more than 10,000 people.

								Families initially displaced by a powerful 7.5 magnitude earthquake on 28 November, were made homeless for a second time when their temporary shelters were destroyed or washed away by floods and torrential rainfall earlier this year.

								Heavy rains in the region will continue throughout May, putting families at risk of displacement yet again.

								"I’ve noticed the climate changing over the years,” said Christina*, 26, who was displaced by the multiple disasters in the region, and is now acting as a protection agent with Save the Children to ensure children’s rights are upheld in her community. “Before, the rain wasn’t that hard but now it is intense and the winds are strong, and it is even hotter here than before." 

								Rainfall is common in this mountainous region; however, changing weather patterns have increased the severity of extreme weather events, such as strong winds and torrential downpours, fuelling greater disasters. 

								Gabriela*, 30, lives with her husband and two young children, aged two and nine months, in a small village that was destroyed late last year. She explained that the initial earthquake hit the region at night.

								“Many people were coming out of their homes asking for help and crying, begging. It was very difficult because it was so dark, and I had two babies. I was about 200 metres from where my dad lived and he is an elder, so I had to make sure he was okay,” Gabriela said.

								“I had to carry one of my children on my back and the other in my arms. I was crying and praying. I was desperate. Then I realized that I had to remain quiet and calm because my daughters were crying with me. We never imagined this situation would happen.”

								Gabriela and her family now call a temporary tent home, like 428 other families in the region. Their plastic shelter gets extremely hot during the day, making it unbearable to stay inside because of the heat. It also leaks whenever it rains.

								“It is a small place. We have our beds and our stuff, so there is no place for the children to play. The only thing we can do there is sleep,” said Gabriela.

								She explained that the hardest part of her experience was telling her two-year-old daughter about what happened to their home.

								 “She said to me: ‘mom why don’t we go home?’ and she cried because we were in the middle of nowhere. </p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default SingleArticle;