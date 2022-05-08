import { Link } from "react-router-dom";

const Sidebar = ({toggleSidebar}) => {
	return (
		<div className="sidebar__frame">
			<div className="sidebar__card">
				<ul>
					<li className="nav-item">
						<Link to="/" className="" onClick={toggleSidebar}>
							What We Do
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/blog" className="" onClick={toggleSidebar}>
							Where We Work
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/articles" className="" onClick={toggleSidebar}>
							News & Stories
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/about" className="" onClick={toggleSidebar}>
							Research & Reports
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/about" className="" onClick={toggleSidebar}>
							About Us
						</Link>
					</li>
				</ul>
				<Link to="/donate" id="donate__link">Donate</Link>
			</div>
		</div>
	)
}

export default Sidebar;