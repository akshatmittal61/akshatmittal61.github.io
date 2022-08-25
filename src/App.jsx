import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes, useLocation } from "react-router-dom";
import GlobalContext from "./Context/GlobalContext";
import NavButton from "./components/Navigation/NavButton";
import Cursor from "./Layout/Cursor/Cursor";
import Theme from "./Layout/Theme/Theme";
import { mappedRoutes } from "./routes";
import Footer from "./components/Footer/Footer";

const App = () => {
	AOS.init();
	const { openNavBar, setOpenNavBar, breakpoint } = useContext(GlobalContext);
	const location = useLocation();
	useEffect(() => {
		setOpenNavBar(false);
	}, [location.pathname, setOpenNavBar]);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);
	return (
		<>
			{!breakpoint("mobile") && location.pathname !== "/resume" && (
				<Cursor />
			)}
			{location.pathname !== "/resume" && (
				<>
					<Theme />
					<NavButton />
				</>
			)}
			{openNavBar && <Navigation />}
			<Routes>
				{mappedRoutes.map((route, index) => (
					<Route
						path={route.route}
						element={route.component}
						key={index}
					/>
				))}
			</Routes>
			{location.pathname !== "/resume" &&
				location.pathname !== "/contact" && <Footer />}
		</>
	);
};

export default App;
