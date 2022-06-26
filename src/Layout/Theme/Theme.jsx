import React, { useContext, useEffect } from "react";
import Icon from "../../components/Button/Icon";
import MaterialIcons from "../../components/MaterialIcons";
import GlobalContext from "../../Context/GlobalContext";
import "./theme.css";

const Theme = () => {
	const { theme, setTheme } = useContext(GlobalContext);
	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.body.setAttribute("class", theme);
	}, [theme]);
	return (
		<div className="theme">
			<Icon
				icon={<MaterialIcons>{`${theme}_mode`}</MaterialIcons>}
				onClick={() =>
					setTheme((prev) => (prev === "light" ? "dark" : "light"))
				}
			/>
		</div>
	);
};

export default Theme;
