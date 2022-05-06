import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="sidebar__frame">
			<div className="sidebar__card">
				<ul>
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
			</div>
		</div>
	)
}

export default Sidebar;