import React from "react";
import dotsTriangle from "../../images/dots-triangle.svg";
import socials from "../../utils/socials";
import wave from "../../images/wave.gif";
import "./home.css";

const Home = () => {
	return (
		<main className="home">
			<section className="home-hero">
				<div className="home-hero-text">
					<h1>
						Hey There ! <img src={wave} alt="Wave" />
					</h1>
					<h1>
						I am <span className="outline">Akshat Mittal</span>
					</h1>
				</div>
				<div className="home-hero-dots">
					<img src={dotsTriangle} alt="Home Dots" />
				</div>
				<div className="home-hero-socials">
					{socials.map((social) => (
						<a href={social.link} title={social.username}>
							{social.icon}
						</a>
					))}
				</div>
			</section>
		</main>
	);
};

export default Home;
