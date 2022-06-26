import React from "react";
import _ from "lodash";
import { FiGithub, FiLink } from "react-icons/fi";
import { skillsMap } from "../../utils/skills";
import Chip from "../../components/Chip/Chip";

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
	return (
		<div className="project">
			<div
				className="project-front"
				style={{ backgroundImage: `url(${icon})` }}
			></div>
			<div
				className="project-back"
				style={{ backgroundColor: `var(--${color}-100)` }}
			>
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
	);
};

export default Project;
