import React, { useContext } from "react";
import GlobalContext from "../../Context/GlobalContext";

const NavButton = () => {
	const { openNavBar, setOpenNavBar } = useContext(GlobalContext);
	return (
		<button
			className="navigation-button"
			onClick={() => setOpenNavBar((prev) => !prev)}
		>
			{/* <MaterialIcons>{openNavBar ? "close" : "menu"}</MaterialIcons> */}
			<span className={`navigation-button-bar ${openNavBar}`}></span>
		</button>
	);
};

export default NavButton;
