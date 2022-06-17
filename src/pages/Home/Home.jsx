import React from "react";
import IconButton from "../../components/Button/IconButton";
import Card from "../../components/Card/Card";
import Typing from "../../components/Typing/Typing";
import avatar from "../../images/avatar.svg";
import socials from "../../socials";
import "./home.css";

const Home = () => {
	return (
		<main className="home">
			<Card>
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
							{socials.map((social, index) => {
								return (
									<li key={index}>
										<IconButton
											icon={social.icon}
											href={social.link}
											data-title={social.username}
											style={{
												color: social.color,
											}}
											onMouseOver={() => {
												console.log(social.color);
												document
													.querySelector("body")
													.style.setProperty(
														"--social-color",
														social.color
													);
											}}
										></IconButton>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</Card>
		</main>
	);
};

export default Home;
