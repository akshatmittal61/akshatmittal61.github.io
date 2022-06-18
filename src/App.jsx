import React, { useContext, useEffect } from "react";
import Home from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes, useLocation } from "react-router-dom";
import GlobalContext from "./Context/GlobalContext";
import NavButton from "./components/Navigation/NavButton";
import Contact from "./pages/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
	AOS.init();
	const { openNavBar, setOpenNavBar } = useContext(GlobalContext);
	const location = useLocation();
	useEffect(() => {
		setOpenNavBar(false);
	}, [location.pathname]);
	return (
		<>
			<Cursor />
			<NavButton />
			{openNavBar && <Navigation />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};

export default App;
