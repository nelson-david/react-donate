import { useState } from "react";
import { Link } from "react-router-dom";
import * as VscIcons from "react-icons/vsc";
import * as FaIcons from "react-icons/fa";
import Sidebar from "./Sidebar";

const Navbar = () => {

	const [sidebarState, setSidebarState] = useState(false);

	const toggleSidebar = () => {
		setSidebarState(!sidebarState);
	}

	return (
		<>
			{sidebarState?<Sidebar toggleSidebar={toggleSidebar} />:''}
			<nav className={`navbar navbar-expand sticky-top custom__nav`}>
				<Link
					className="navbar-brand"
					to="/"
					title="home"
					onClick={() => setSidebarState(false)}
				>
					<img
						src="https://i.stci.uk/sites/www.savethechildren.net/themes/stcui/img/stc_logo.svg"
						alt="Save the Children International"
						height="42"
					/>
				</Link>

				<nav className="ml-auto">
					<ul className="navbar-nav" id="first_ul">
						<li className="nav-item">
							<Link to="/" className="">
								What We Do
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/blog" className="">
								Where We Work
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/articles" className="">
								News & Stories
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="">
								Research & Reports
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="">
								About Us
							</Link>
						</li>
					</ul>
				</nav>

				<nav className="ml-auto">
					<ul className="navbar-nav" id="second_ul">
						<li className="nav-item">
							<Link to="donate" className="">
								Donate
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav" id="third_ul">
						<li className="nav-item">
							<span onClick={toggleSidebar}>
								{sidebarState?<FaIcons.FaTimes />:<VscIcons.VscThreeBars />}
							</span>
						</li>
					</ul>
				</nav>
			</nav>
		</>
	)
}

export default Navbar;