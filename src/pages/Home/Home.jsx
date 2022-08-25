import React, { useContext, useEffect, useState } from "react";
import dotsTriangle from "../../images/dots-triangle.svg";
import socials from "../../utils/socials";
import wave from "../../images/wave.gif";
import people from "../../images/people.svg";
import akshat from "../../images/Akshat_Transparent.png";
import "./home.css";
import Button from "../../components/Button/Button";
import GlobalContext from "../../Context/GlobalContext";
import skills, { skillsMap } from "../../utils/skills";
import bulb from "../../images/bulb_on.svg";
import axios from "axios";
import { default as projectNames } from "../../utils/projects.js";
import Row, { Col } from "../../Layout/Responsive";
import { FiGithub, FiLink } from "react-icons/fi";
import Chip from "../../components/Chip/Chip";
import _ from "lodash";

const Home = () => {
	const { theme, breakpoint } = useContext(GlobalContext);
	const [projects, setProjects] = useState([]);
	const fetchDataForRepo = async (repo) => {
		let response = await axios(
			`https://api.github.com/repos/${repo.owner}/${repo.title}`
		);
		const { name, description, full_name, html_url, homepage, topics } =
			response.data;
		const projectData = {
			title: name,
			about: description,
			repo_name: full_name,
			githubLink: html_url,
			deployment: homepage,
			tags: [...topics],
			icon: repo.icon,
			tools: repo.tools,
			color: repo.color,
		};
		return projectData;
	};
	useEffect(() => {
		const loadData = async () => {
			projectNames.forEach((project) => {
				if (project.title === "planner" || project.title === "srm")
					fetchDataForRepo(project).then((res) => {
						setProjects((prev) => [...prev, res]);
					});
			});
		};
		loadData();
	}, []);
	const skillsPoints = [
		"Refined Code writing, Smoother operations",
		"Develop highly interactive and user engaging interfaces for web applications",
		"Desinging dynamic, cross-browser compatible and responsive layouts for desktop, tablet and mobile screens",
		"Backend Development in Express framework",
		"Database Managment in SQL and MongoDB",
	];
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
					<h1 data-aos="fade-right">
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
						<Button
							text="Read More"
							color="green"
							icon="north_east"
							size="large"
							link="/about"
						/>
					</div>
					<div className="home-about-body-image">
						<img
							loading="lazy"
							data-aos="zoom-in"
							src={akshat}
							alt="Akshat Mittal"
						/>
					</div>
				</div>
				<div className="home-hero-dots">
					<img src={dotsTriangle} alt="Home Dots" />
				</div>
			</section>
			<section className="home-skills">
				<div className="home-skills-head">
					<h1 className="home-skills-head__h1">
						{breakpoint("mobile")
							? "My Skills"
							: "Stuff that I work on"}
					</h1>
				</div>
				<div className="home-skills-body">
					<div
						className="home-skills-container"
						style={{ backgroundImage: `url(${people})` }}
					>
						<div className="home-skills-points">
							<ul
								className="home-skills-points-ul"
								style={{ listStyle: `url(${bulb})` }}
							>
								{skillsPoints.map((point, index) => (
									<li key={index}>{point}</li>
								))}
							</ul>
						</div>
						<div className="home-skills-icons">
							{skills.map((skill, index) => (
								<span
									className="home-skills-skill"
									key={index}
									data-title={skill.title}
									data-aos="fade-right"
								>
									<img src={skill.icon} alt={skill.title} />
								</span>
							))}
						</div>
					</div>
				</div>
			</section>
			<section className="home-projects">
				<div className="home-projects-head">
					<h1 className="home-projects-head__h1">My Projects</h1>
				</div>
				<div className="home-projects-body">
					<Row>
						{projects.map((project, id) => (
							<Col lg={50} md={50} sm={100} key={id}>
								<div className="home-projects-project home-project">
									<div
										className="home-project-front"
										style={{
											backgroundColor: `var(--${
												project.color
											}-${
												theme === "light" ? 100 : 700
											})`,
										}}
									>
										<div className="home-project-front-box">
											<div
												className="home-project-front__icon"
												style={{
													backgroundImage: `url(${project.icon})`,
												}}
											></div>
											<span className="home-project-front__title">
												{_.startCase(project.title)}
											</span>
										</div>
									</div>
									<div
										className="home-project-back"
										style={{
											backgroundColor: `var(--${
												project.color
											}-${
												theme === "light" ? 100 : 700
											})`,
										}}
									>
										<div className="home-project-back-box">
											<div className="home-project-icon">
												<img
													src={project.icon}
													alt={project.title}
												/>
											</div>
											<span className="home-project-title">
												{_.startCase(project.title)}
											</span>
											<a
												href={project.deployment}
												className="home-project-link"
												target="_blank"
												rel="noreferrer"
											>
												<FiLink />
												{project.deployment.slice(
													8,
													project.deployment.length
												)}
											</a>
											<a
												href={project.githubLink}
												className="home-project-github"
												target="_blank"
												rel="noreferrer"
											>
												<FiGithub />
												{project.repo_name}
											</a>
											<span className="home-project-about">
												{project.about}
											</span>
											<div className="home-project-tools">
												{project.tools.map(
													(tool, index) => (
														<span
															key={index}
															data-title={tool}
														>
															<img
																src={skillsMap.get(
																	tool
																)}
																alt={tool}
															/>
														</span>
													)
												)}
											</div>
											<div className="home-project-tags">
												{project.tags.map(
													(tag, index) => (
														<Chip key={index}>
															{tag}
														</Chip>
													)
												)}
											</div>
										</div>
									</div>
								</div>
							</Col>
						))}
					</Row>
				</div>
			</section>
		</main>
	);
};

export default Home;
