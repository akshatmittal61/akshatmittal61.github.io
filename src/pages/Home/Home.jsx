import React, { useContext } from "react";
import IconButton from "../../components/Button/IconButton";
import Card from "../../components/Card/Card";
import Typing from "../../components/Typing/Typing";
import avatar from "../../images/avatar.svg";
import socials from "../../utils/socials";
import wave from "../../images/wave.gif";
import "./home.css";
import GlobalContext from "../../Context/GlobalContext";

const Home = () => {
	const { breakpoint } = useContext(GlobalContext);
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
						{breakpoint("mobile") ? (
							<>
								<Typing>Hey there,</Typing>
								<Typing>I'm Akshat Mittal</Typing>
							</>
						) : (
							<>
								<Typing>Hey there, I'm Akshat Mittal</Typing>
								<span>
									<img src={wave} alt="Wave" />
								</span>
							</>
						)}
					</div>
					<div className="hero-buttons">
						<ul className="hero-buttons-ul">
							{socials.map((social, index) => {
								return (
									<li
										key={index}
										data-title={social.username}
									>
										<IconButton
											icon={social.icon}
											href={social.link}
											style={{
												color: social.color,
											}}
											onMouseOver={() => {
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
