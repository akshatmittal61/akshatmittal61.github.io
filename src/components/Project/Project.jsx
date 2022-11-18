import React, { useContext } from "react";
import _ from "lodash";
import { FiGithub, FiLink } from "react-icons/fi";
import { skillsMap } from "../../utils/skills";
import Chip from "../Chip/Chip";
import GlobalContext from "../../Context/GlobalContext";
import "./project.scss";

const Project = ({
	title,
	about,
	repo_name,
	githubLink,
	deployment,
	tags,
	icon,
	tools,
	color,
}) => {
	const { theme } = useContext(GlobalContext);
	return (
		<div className="projects-project project">
			<div
				className="project-front"
				style={{
					backgroundColor: `var(--${color}-${
						theme === "light" ? 100 : 700
					})`,
				}}
			>
				<div className="project-front-box">
					<div
						className="project-front__icon"
						style={{
							backgroundImage: `url(${icon})`,
						}}
					></div>
					<span className="project-front__title">
						{_.startCase(title)}
					</span>
				</div>
			</div>
			<div
				className="project-back"
				style={{
					backgroundColor: `var(--${color}-${
						theme === "light" ? 100 : 700
					})`,
				}}
			>
				<div className="project-back-box">
					<div className="project-icon">
						<img src={icon} alt={title} />
					</div>
					<span className="project-title">{_.startCase(title)}</span>
					<a
						href={deployment}
						className="project-link"
						target="_blank"
						rel="noreferrer"
					>
						<FiLink />
						{deployment.slice(8, deployment.length)}
					</a>
					<a
						href={githubLink}
						className="project-github"
						target="_blank"
						rel="noreferrer"
					>
						<FiGithub />
						{repo_name}
					</a>
					<span className="project-about">{about}</span>
					<div className="project-tools">
						{tools.map((tool, index) => (
							<span key={index} data-title={tool}>
								<img src={skillsMap.get(tool)} alt={tool} />
							</span>
						))}
					</div>
					<div className="project-tags">
						{tags.map((tag, index) => (
							<Chip key={index}>{tag}</Chip>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
