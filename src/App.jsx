import React, { useContext, useEffect } from "react";
import Home from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import Navigation from "./components/Navigation/Navigation";
import { useLocation } from "react-router-dom";
import GlobalContext from "./Context/GlobalContext";
import NavButton from "./components/Navigation/NavButton";

const App = () => {
	AOS.init();
	const { openNavBar, setOpenNavBar } = useContext(GlobalContext);
	const location = useLocation();
	useEffect(() => {
		setOpenNavBar(false);
	}, [location.pathname]);
	return (
		<>
			<NavButton />
			{openNavBar && <Navigation />}
			<Home />
		</>
	);
};

export default App;
