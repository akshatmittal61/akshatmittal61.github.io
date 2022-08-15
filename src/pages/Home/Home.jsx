import React from "react";
import dotsTriangle from "../../images/dots-triangle.svg";
import socials from "../../utils/socials";
import wave from "../../images/wave.gif";
import akshat from "../../images/Akshat_Transparent.png";
import "./home.css";

const Home = () => {
	return (
		<main className="home">
			<section className="home-hero">
				<div className="home-hero-text" data-aos="fade-right">
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
			</section>
			<div className="home-hero-socials">
				{socials.map((social, index) => (
					<a
						href={social.link}
						title={social.username}
						target="_blank"
						rel="noreferrer"
						key={index}
					>
						{social.icon}
					</a>
				))}
			</div>
			<section className="home-about">
				<div className="home-about-head">
					<h1>
						<span>About </span>
						<span className="outline">Me</span>
					</h1>
				</div>
				<div className="home-about-body">
					<div className="home-about-body-text">
						<span>
							Hey There! <img src={wave} alt="Wave" />
						</span>
						<span>
							My name is Akshat Mittal. I love designing and
							developing new things on internet.
						</span>
						<span>
							Presently I am a MERN Stack Developer and over the
							time, I've developed some applications that are live
							on the internet and being used by over 100+ users.
						</span>
						<span>
							I am crazy about finding and exploring new
							technologies arising in the world of web, android
							and ML and many more.
						</span>
					</div>
					<div className="home-about-body-image">
						<img src={akshat} alt="Akshat Mittal" />
					</div>
				</div>
				<div className="home-hero-dots">
					<img src={dotsTriangle} alt="Home Dots" />
				</div>
			</section>
		</main>
	);
};

export default Home;
