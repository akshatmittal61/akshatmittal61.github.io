import React, { useContext } from "react";
import GlobalContext from "../../Context/GlobalContext";
import MaterialIcons from "../MaterialIcons";

const NavButton = () => {
	const { openNavBar, setOpenNavBar } = useContext(GlobalContext);
	return (
		<button
			className="navigation-button icon"
			onClick={() => setOpenNavBar((prev) => !prev)}
		>
			<MaterialIcons>{openNavBar ? "close" : "menu"}</MaterialIcons>
		</button>
	);
};

export default NavButton;
