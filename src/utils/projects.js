import plannerIcon from "../images/projects/planner.svg";
import expensesTrackerIcon from "../images/projects/expenses-tracker.svg";
import whackAMoleIcon from "../images/projects/whack-a-mole.png";
import messManagementIcon from "../images/projects/mess-management.png";
import techtatvaIcon from "../images/projects/techtatva.png";
import screenRecorderIcon from "../images/projects/screen-recorder.png";

const projects = [
	{
		title: "planner",
		icon: plannerIcon,
		color: "indigo",
		tools: ["React.js", "Node.js", "Express.js", "Mongo DB", "CSS"],
	},
	{
		title: "expenses-tracker",
		icon: expensesTrackerIcon,
		color: "green",
		tools: ["React.js", "Node.js", "Express.js", "Mongo DB", "CSS"],
	},
	{
		title: "Whack-A-Mole",
		icon: whackAMoleIcon,
		color: "brown",
		tools: ["HTML", "CSS", "JavaScript"],
	},
	{
		title: "mess-management",
		icon: messManagementIcon,
		color: "brown",
		tools: ["React.js", "Node.js", "Express.js", "MySQL", "MUI"],
	},
	{
		title: "techtatva",
		icon: techtatvaIcon,
		color: "blue",
		tools: ["React.js", "SASS", "Express.js", "Mongo DB"],
	},
	{
		title: "screen-recorder",
		icon: screenRecorderIcon,
		color: "orange",
		tools: ["HTML", "CSS", "JavaScript"],
	},
];

export default projects;
