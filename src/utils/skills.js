import {
	c,
	cpp,
	css,
	express,
	git,
	html,
	js,
	mongodb,
	mui,
	mySql,
	node,
	python,
	react,
	sass,
} from "../vectors";

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
