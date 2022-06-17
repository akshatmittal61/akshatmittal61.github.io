import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../../Context/GlobalContext";
import routes from "../../routes";
import MaterialIcons from "../MaterialIcons";
import "./navigation.css";

const Navigation = () => {
	const { setOpenNavBar } = useContext(GlobalContext);
	return (
		<section className="navigation">
			<main
				className="navigation-cover"
				onClick={() => setOpenNavBar(false)}
			></main>
			<aside className="navigation-aside aside" data-aos="fade-left">
				<nav className="aside-nav">
					<ul className="aside-nav-ul">
						{routes.map((route, index) => (
							<li className="aside-nav-li" key={index}>
								<Link to={route.route}>
									<MaterialIcons>{route.icon}</MaterialIcons>
									<span>{route.title}</span>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</aside>
		</section>
	);
};

export default Navigation;
