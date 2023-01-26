import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../../Context/GlobalContext";
import { fullLogo } from "../../vectors";
import Button from "../Button/Button";
import "./header.scss";

const Header = () => {
	const { openMenu, setOpenMenu } = useContext(GlobalContext);
	const navLinks = [
		{
			name: "Work",
			href: "#experience",
		},
		{
			name: "Projects",
			href: "#projects",
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
				<Button
					className="header-button"
					size="small"
					text={
						<>
							<span
								className={
									openMenu
										? "header-button-line header-button-close"
										: "header-button-line"
								}
							></span>
							<span className="header-button-text">
								{openMenu ? "Close" : "Menu"}
							</span>
						</>
					}
					onClick={() => setOpenMenu((p) => !p)}
				/>
			</div>
		</header>
	);
};

export default Header;
