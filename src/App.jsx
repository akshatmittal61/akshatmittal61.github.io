import React, { useContext, useEffect, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import GlobalContext from "./Context/GlobalContext";
import Cursor from "./Layout/Cursor/Cursor";
import "./style.scss";
import { mappedRoutes } from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";
import Left from "./Layout/Sidebars/Left";
import Right from "./Layout/Sidebars/Right";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

const App = () => {
	AOS.init();
	const { openMenu, setOpenMenu, breakpoint } = useContext(GlobalContext);
	const location = useLocation();
	useEffect(() => {
		setOpenMenu(false);
	}, [location.pathname, setOpenMenu]);
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
				<>
					<Cursor />
					<Header />
					<Left />
					<Right />
				</>
			)}
			{
				openMenu&&<Menu />
			}
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
