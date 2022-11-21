import Resume from "./pages/Resume";
import IncludePageTitle from "./utils/includePageTitle";

const routes = [];

const allRoutes = [
	...routes,
	{
		icon: "picture_as_pdf",
		title: "Resume",
		route: "/resume",
		component: Resume,
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
