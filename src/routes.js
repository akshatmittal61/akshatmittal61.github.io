import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills/Skills";
import IncludePageTitle from "./utils/includePageTitle";

const routes = [
	{
		icon: "home",
		title: "Home",
		route: "/",
		component: Home,
	},
	{
		icon: "info",
		title: "About Me",
		route: "/about",
		component: About,
	},
	{
		icon: "engineering",
		title: "Skills",
		route: "/skills",
		component: Skills,
	},
	{
		icon: "insights",
		title: "Projects",
		route: "/projects",
		component: Projects,
	},
	{
		icon: "call",
		title: "Get in Touch",
		route: "/contact",
		component: Contact,
	},
];

const allRoutes = [
	...routes,
	{
		icon: "picture_as_pdf",
		title: "Resume",
		route: "/resume",
		component: Resume,
	},
	{
		icon: "error",
		title: "Not Found",
		route: "*",
		component: NotFound,
	},
];

const mappedRoutes = allRoutes.map((route) => {
	let title = `Akshat Mittal - ${route.title}`;
	if (route.route === "*") title = `Page ${route.title}`;
	const wrappedComponent = (
		<IncludePageTitle title={title} component={route.component} />
	);
	return {
		...route,
		component: wrappedComponent,
	};
});

export default routes;
export { mappedRoutes };
