import React from "react";
import IconButton from "../../components/Button/IconButton";
import Typing from "../../components/Typing/Typing";
import avatar from "../../images/avatar.svg";
import socials from "../../socials";
import "./home.css";

const Home = () => {
	return (
		<main className="home">
			<div className="card" data-aos="zoom-out">
				<div className="card-box">
					<div className="hero">
						<div className="hero-image">
							<img
								src={avatar}
								alt="Akshat Mittal"
								data-aos="zoom-in"
							/>
						</div>
						<div className="hero-text">
							<Typing>Hey there, I'm Akshat Mittal</Typing>
							<span>
								<img
									src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
									alt="Wave"
								/>
							</span>
						</div>
						<div className="hero-buttons">
							<ul className="hero-buttons-ul">
								{socials.map((social, index) => (
									<li key={index}>
										<IconButton
											icon={social.icon}
											href={social.link}
											title={social.username}
										></IconButton>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
