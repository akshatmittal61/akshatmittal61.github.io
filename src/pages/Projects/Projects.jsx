import axios from "axios";
import React, { useEffect, useState } from "react";
import "./projects.css";
import Project from "./Project";
import { default as projectNames } from "../../utils/projects.js";

const Projects = () => {
	const [projects, setProjects] = useState([]);
	const fetchDataForRepo = async (repo) => {
		let response = await axios(
			`https://api.github.com/repos/akshatmittal61/${repo.title}`
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
	const loadData = async () => {
		projectNames.forEach((project) => {
			fetchDataForRepo(project).then((res) => {
				setProjects((prev) => [...prev, res]);
			});
		});
	};
	useEffect(() => {
		loadData();
	}, []);

	return (
		<main className="projects">
			<div className="projects-head">
				<h2 className="projects-head__h2">My Projects</h2>
			</div>
			<div className="projects-body">
				<p className="projects-body__p">
					<span>
						Here are some projects that I have made and worked upon
					</span>
				</p>
				<div className="projects-body__div">
					<div className="row">
						{projects.map((project, index) => (
							<div
								className="col-lg-33 col-md-50 col-sm-100"
								key={index}
							>
								<Project
									title={project.title}
									about={project.about}
									repo_name={project.repo_name}
									githubLink={project.githubLink}
									deployment={project.deployment}
									tags={project.tags}
									icon={project.icon}
									tools={project.tools}
									color={project.color}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Projects;
