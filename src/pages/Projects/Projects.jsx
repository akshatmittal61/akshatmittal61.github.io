import axios from "axios";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import "./projects.css";
import plannerIcon from "../../images/projects/planner.svg";
import expensesTrackerIcon from "../../images/projects/expenses-tracker.svg";
import whackAMoleIcon from "../../images/projects/whack-a-mole.png";
import messManagementIcon from "../../images/projects/mess-management.png";
import techtatvaIcon from "../../images/projects/techtatva.png";
import screenRecorderIcon from "../../images/projects/screen-recorder.png";

const Projects = () => {
	const [projects, setProjects] = useState([]);
	const projectNames = [
		{
			title: "planner",
			icon: plannerIcon,
		},
		{
			title: "expenses-tracker",
			icon: expensesTrackerIcon,
		},
		{
			title: "Whack-A-Mole",
			icon: whackAMoleIcon,
		},
		{
			title: "mess-management",
			icon: messManagementIcon,
		},
		{
			title: "techtatva",
			icon: techtatvaIcon,
		},
		{
			title: "screen-recorder",
			icon: screenRecorderIcon,
		},
	];
	const fetchDataForRepo = async (repo) => {
		let response = await axios(
			`https://api.github.com/repos/akshatmittal61/${repo.title}`
		);
		const { name, description, html_url, homepage, topics } = response.data;
		const projectData = {
			title: name,
			about: description,
			githubLink: html_url,
			deployment: homepage,
			tags: [...topics],
			icon: repo.icon,
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
					<span>Hey! Have a look at some of my projects</span>
				</p>
				<div className="projects-body__p">
				<div className="row">
					{projects.map(project=>(
						<div className="col-lg-33 col-md-50 col-sm-100">
							
						</div>
					))}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Projects;
