import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../../Context/GlobalContext";
import socials from "../../utils/socials";
import "./menu.scss";

const Menu = () => {
	const { setOpenMenu } = useContext(GlobalContext);
	const navLinks = [
		{
			name: "Projects",
			link: "/projects",
		},
		{
			name: "Blog",
			link: "/blog",
		},
		{
			name: "Resume",
			link: "/resume",
		},
	];
	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") setOpenMenu(() => false);
		});
		return () =>
			document.removeEventListener("keydown", (e) => {
				if (e.key === "Escape") setOpenMenu(() => false);
			});
	}, [setOpenMenu]);

	return (
		<section className="menu" data-aos="fade-in">
			<nav className="menu-nav">
				<ul className="menu-nav-ul">
					{navLinks.map((obj, id) => (
						<li
							key={id}
							data-index={`0` + (id + 1)}
							data-aos="fade-right"
						>
							<Link to={obj.link}>{obj.name}</Link>
							<span className="menu-nav-arrow"></span>
						</li>
					))}
				</ul>
			</nav>
			<ul className="menu-socials">
				{socials.map((social, id) => (
					<li
						key={id}
						data-index={`0` + (id + 1)}
					>
						<a
							href={social.link}
							target="_blank"
							rel="noreferrer"
						>
							{social.icon}
						</a>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Menu;
