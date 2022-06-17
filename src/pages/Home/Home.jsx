import React from "react";
import avatar from "../../images/avatar.svg";
import "./home.css";

const Home = () => {
	return (
		<main className="home">
			<div className="hero">
				<div className="hero-image">
					<img src={avatar} alt="Akshat Mittal" />
				</div>
				<div className="hero-text">
					<span>Hey there, </span>
					<span>I'm Akshat Mittal</span>
					<span>
						<img
							src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
							alt="Wave"
						/>
					</span>
				</div>
			</div>
		</main>
	);
};

export default Home;
