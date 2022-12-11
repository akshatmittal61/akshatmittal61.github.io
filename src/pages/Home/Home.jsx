import React from "react";
import "./home.scss";

const Home = () => {
	return (
		<main className="home">
			<section className="home-hero">
				<span className="home-hero-hi">Hey There! I am</span>
				<h1 className="home-hero-name">Akshat Mittal</h1>
				<h2 className="home-hero-headline">
					I design and build for the web.
				</h2>
				<p className="home-hero-about">
					I am a full stack developer with a passion for building
					beautiful and intuitive web applications. I am currently
					pursuing my Bachelors in Computer Science from the Indian
					Institute of Information Technology -&gt; IIIT Una. I am
					currently working as a SDE Intern at{" "}
					<a
						href="https://athenasquare.org/"
						target="_blank"
						rel="noreferrer"
					>
						Athenasquare
					</a>
					.
				</p>
				<button>Download my Resume</button>
			</section>
		</main>
	);
};

export default Home;
