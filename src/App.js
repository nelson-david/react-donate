import { useEffect, lazy, Suspense } from 'react';
import Navbar from "./components/nav/Navbar";
import Footer from "./components/nav/Footer";
import { Route, Switch } from "react-router-dom";
import LoadingCard from "./components/card/LoadingCard";
import Aos from "aos";

const config = require("./config")["development"];

const LandingPage = lazy(() => import('./pages/LandingPage'));
const Articles = lazy(() => import('./pages/Articles'));
const Donate = lazy(() => import('./pages/Donate'));

const App = () => {

	useEffect(() => {
		Aos.init({
			duration: config.aosDuration
		});
	}, []);

	return (
		<Suspense fallback={<LoadingCard />}>
			<Navbar />
			<Switch>
				<Route path="/" exact>
					<LandingPage />
				</Route>
				<Route path="/articles" exact>
					<Articles />
				</Route>
				<Route path="/donate" exact>
					<Donate />
				</Route>
			</Switch>
			<Footer />
		</Suspense>
	)
}

export default App;