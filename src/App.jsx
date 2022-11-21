import React, { useContext, useEffect, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import GlobalContext from "./Context/GlobalContext";
import Cursor from "./Layout/Cursor/Cursor";
import { mappedRoutes } from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.scss";

const App = () => {
	AOS.init();
	const { setOpenNavBar, breakpoint } = useContext(GlobalContext);
	const location = useLocation();
	useEffect(() => {
		setOpenNavBar(false);
	}, [location.pathname, setOpenNavBar]);
	useLayoutEffect(() => {
		const loader = document.getElementById("loader");
		setTimeout(() => {
			loader.classList.add("loaded");
			setTimeout(() => {
				document.body.removeChild(loader);
			}, 500);
		}, 3000);
	}, []);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);
	return (
		<>
			{!breakpoint("mobile") && location.pathname !== "/resume" && (
				<Cursor />
			)}
			<Routes>
				{mappedRoutes.map((route, index) => (
					<Route
						path={route.route}
						element={route.component}
						key={index}
					/>
				))}
			</Routes>
		</>
	);
};

export default App;
