import html from "../images/icons/html.svg";
import css from "../images/icons/css.svg";
import js from "../images/icons/js.svg";
import sass from "../images/icons/sass.svg";
import mongodb from "../images/icons/mongodb.svg";
import mySql from "../images/icons/mysql.svg";
import express from "../images/icons/express.svg";
import react from "../images/icons/react.svg";
import mui from "../images/icons/mui.svg";
import node from "../images/icons/node.svg";
import c from "../images/icons/C.svg";
import cpp from "../images/icons/cpp.svg";
import python from "../images/icons/python.svg";
import git from "../images/icons/git.svg";

const skills = [
	{
		title: "HTML",
		icon: html,
	},
	{
		title: "CSS",
		icon: css,
	},
	{
		title: "JavaScript",
		icon: js,
	},
	{
		title: "SASS",
		icon: sass,
	},
	{
		title: "React.js",
		icon: react,
	},
	{
		title: "MUI",
		icon: mui,
	},
	{
		title: "Node.js",
		icon: node,
	},
	{
		title: "Express.js",
		icon: express,
	},
	{
		title: "Mongo DB",
		icon: mongodb,
	},
	{
		title: "MySQL",
		icon: mySql,
	},
	{
		title: "Git",
		icon: git,
	},
	{
		title: "C",
		icon: c,
	},
	{
		title: "C++",
		icon: cpp,
	},
	{
		title: "Python",
		icon: python,
	},
];

const skillsMap = new Map();

skills.forEach((skill) => {
	skillsMap.set(skill.title, skill.icon);
});

export default skills;

export { skillsMap };
