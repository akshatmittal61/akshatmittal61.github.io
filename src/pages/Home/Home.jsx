import React, { useEffect, useState } from "react";
import me from "../../images/akshat_oval.png";
import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiMail,
	FiPhone,
} from "react-icons/fi";
import homeBg from '../../images/home_bg.jpg'
import "./home.css";
const Home = () => {
	const [move, setMove] = useState(120);
	useEffect(() => {
		document.body.style.backgroundImage = `url(${homeBg})`;
		document.body.style.backgroundBlendMode = "darken";
		document.body.style.backgroundColor = "rgba(0,0,0,0.15)";
		setInterval(() => {
			if (move > 0) {
				setTimeout(() => {
					setMove((prev) => prev - 1);
				}, 1);
			}
		}, 10);
	}, []);

	const socials = [
		{
			icon: <FiGithub />,
			username: "@akshatmittal61",
			link: "https://github.com/akshatmittal61",
		},
		{
			icon: <FiTwitter />,
			username: "@akshatmittal61",
			link: "https://twitter.com/akshatmittal61",
		},
		{
			icon: <FiLinkedin />,
			username: "@akshatmittal61",
			link: "https://www.linkedin.com/in/akshatmittal61",
		},
		{
			icon: <FiMail />,
			username: "akshatmittal2506@gmail.com",
			link: "mailto:akshatmittal2506@gmail.com",
		},
		{
			icon: <FiPhone />,
			username: "+91 94568 49466",
			link: "tel:919456849466",
		},
	];
	return (
		<main className="home">
			<div className="home-left">
				<div
					style={{
						transition: "ease-in",
						transform: `translateX(-${move}%)`,
					}}
					className="home-left-name"
				>
					<span>Akshat Mittal</span>
				</div>
				<div
					style={{
						transition: "ease-in",
						transform: `translateX(-${move * 3}%)`,
					}}
					className="home-left-subtitle"
				>
					<span>MERN stack developer</span>
				</div>
				<div className="home-left-socials">
					<ul>
						{socials.map((social, index) => (
							<li key={index}>
								<a
									style={{
										fontSize: "2rem",
										transition: "ease-in",
										transform: `scale(${
											move > 0 ? (120 - move) / 120 : 1
										})`,
									}}
									href={social.link}
									target="_blank"
									rel="noreferrer"
									title={social.username}
									data-aos="zoom-in"
								>
									{social.icon}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="home-right">
				<div className="home-right-image">
					<img src={me} alt="Akshat Mittal" />
				</div>
			</div>
		</main>
	);
};

export default Home;
