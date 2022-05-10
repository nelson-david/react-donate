import { useEffect, lazy, Suspense } from 'react';
import Navbar from "./components/nav/Navbar";
import Footer from "./components/nav/Footer";
import { Route, Switch } from "react-router-dom";
import LoadingCard from "./components/card/LoadingCard";
import ArticleImg2 from "./assets/img/article1.webp";
import ArticleImg3 from "./assets/img/article3.webp";
import { ToastContainer, toast } from "react-toastify";
import Aos from "aos";

const config = require("./config")["development"];

const LandingPage = lazy(() => import('./pages/LandingPage'));
const Articles = lazy(() => import('./pages/Articles'));
const SingleArticle = lazy(() => import('./pages/SingleArticle'));
const Donate = lazy(() => import('./pages/Donate'));
const Work = lazy(() => import('./pages/Work'));
const About = lazy(() => import('./pages/About'));
const WhatWeDo = lazy(() => import('./pages/WhatWeDo'));
const ResearchReports = lazy(() => import('./pages/ResearchReports'));
const AddContributor = lazy(() => import("./pages/AddContributor"));
const NotFound = lazy(() => import('./pages/NotFound'));

const articles = [
	{
		img: "https://media.gettyimages.com/photos/mother-and-daughter-huddle-at-roadside-with-belongings-picture-id675071890?k=20&m=675071890&s=612x612&w=0&h=FUL17ixHX3Ar8Ywugh6vjuob_AgkPQxN03ZO0wrazAc=",
		text: "SINGLE MOM DEAD, AND LEAVES BEHIND HER THREE CHILDREN (NOW ORPHANS)",
		link: "single-mom-dead-and-leaves-behind-her-children"
	},
	{
		img: ArticleImg2,
		text: "“I WOULD NEVER WISH THIS RAMADAN ON ANYONE”: AFGHAN FAMILIES SURVIVING ON BREAD AND WATER THROUGH HOLY MONTH AS ECONOMIC CRISIS WORSENS",
		link: "single-mom-dead-and-leaves-behind-her-children"
	},
	{
		img: ArticleImg3,
		text: "REPORTS OF 3-MONTH OLD BABY AMONG FATALITIES OF ODESA MISSILE ATTACK",
		link: "single-mom-dead-and-leaves-behind-her-children"
	},
]

const App = () => {

	const successToast = (success) => toast.success(`${success}`, tsStyle);
	const errorToast = (error) => toast.error(`${error}`, tsStyle);

	useEffect(() => {
		Aos.init({
			duration: config.aosDuration
		});
	}, []);

    const tsStyle = {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    }

	return (
		<Suspense fallback={<LoadingCard />}>
			<Navbar />
			<ToastContainer />
			<Switch>
				<Route path="/" exact>
					<LandingPage articles={articles} />
				</Route>
				<Route path="/articles/" exact>
					<Articles articles={articles} />
				</Route>
				<Route
					path="/article/single-mom-dead-and-leaves-behind-her-children/"
					exact>
					<SingleArticle />
				</Route>
				<Route path="/donate/" exact>
					<Donate />
				</Route>
				<Route path="/research-reports/" exact>
					<ResearchReports articles={articles} />
				</Route>
				<Route path="/where-we-work/" exact>
					<Work />
				</Route>
				<Route path="/what-we-do/" exact>
					<WhatWeDo />
				</Route>
				<Route path="/about-us/" exact>
					<About />
				</Route>
				<Route path="/admin/secure/add/contributor/" exact>
					<AddContributor
						successToast={successToast}
						errorToast={errorToast}
					/>
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
			<Footer />
		</Suspense>
	)
}

export default App;