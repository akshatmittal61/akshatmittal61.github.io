import React from "react";
import { Link } from "react-router-dom";
import { fullLogo } from "../../vectors";
import "./header.scss";

const Header = () => {
	const navLinks = [
		{
			name: "About",
			href: "#about",
		},
		{
			name: "Work",
			href: "#experience",
		},
		{
			name: "Contact",
			href: "#contact",
		},
		{
			name: "Resume",
			route: "/resume",
		},
	];
	return (
		<header className="header">
			<div className="header-logo">
				<img src={fullLogo} alt="full" />
			</div>
			<div className="header-right">
				<nav className="header-nav">
					<ul className="header-nav-list">
						{navLinks.map((link, index) => (
							<li className="header-nav-list-item" key={index}>
								{link.route ? (
									<Link to={link.route}>{link.name}</Link>
								) : (
									<a href={link.href}>{link.name}</a>
								)}
							</li>
						))}
					</ul>
				</nav>
				<button className="header-button">
					<span className="header-button-line"></span>
					<span className="header-button-text">Menu</span>
				</button>
			</div>
		</header>
	);
};

export default Header;
