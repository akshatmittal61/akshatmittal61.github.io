import React, { useState, createContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
	const breakpoint = (device) => {
		if (device === "mobile") return window.innerWidth < 672;
		else if (device === "tab") return window.innerWidth <= 880;
		else return window.innerWidth > 880;
	};
	const [isLoading, setIsLoading] = useState(false);
	const [openMenu, setOpenMenu] = useState(true);
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
	return (
		<GlobalContext.Provider
			value={{
				isLoading,
				setIsLoading,
				breakpoint,
				openMenu,
				setOpenMenu,
				theme,
				setTheme,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContext;
