import React from "react";
import Home from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
	AOS.init();
	return (
		<>
			<Navigation />
			<Home />
		</>
	);
};

export default App;
