import React from "react";
import Home from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";

const App = () => {
	AOS.init();
	return (
		<>
			<Home />
		</>
	);
};

export default App;
