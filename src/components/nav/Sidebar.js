import { Link } from "react-router-dom";

const Sidebar = ({toggleSidebar}) => {
	return (
		<div className="sidebar__frame">
			<div className="sidebar__card">
				<ul>
					<li className="nav-item">
						<Link to="what-we-do" className="" onClick={toggleSidebar}>
							What We Do
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/where-we-work" className="" onClick={toggleSidebar}>
							Where We Work
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/articles" className="" onClick={toggleSidebar}>
							News & Stories
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/research-reports" className="" onClick={toggleSidebar}>
							Research & Reports
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/about-us" className="" onClick={toggleSidebar}>
							About Us
						</Link>
					</li>
					<br />
					<li className="nav-item">
						<Link to="/donate" id="donate__link" onClick={toggleSidebar}>
							Donate
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Sidebar;