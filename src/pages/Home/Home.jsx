import React from "react";
import Link from "../../components/Link/Link";
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
					pursuing my Bachelors in Computer Science from{" "}
					<abbr
						data-title="Indian Institute of Information Technology"
						title=""
					>
						IIIT
					</abbr>{" "}
					Una and working as a SDE Intern at{" "}
					<Link
						href="https://athenasquare.org/"
						target="_blank"
						rel="noreferrer"
					>
						Athenasquare
					</Link>
					.
				</p>
				<button>Download my Resume</button>
			</section>
		</main>
	);
};

export default Home;
