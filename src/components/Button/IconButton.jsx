import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./button.scss";

const IconButton = ({
	text = "",
	color = "",
	href = "#",
	target = "_blank",
	link,
	className = "",
	size = "",
	icon = "",
	onClick,
	...rest
}) => {
	const location = useLocation();
	const navigate = useNavigate();
	let classes = "icon-btn";
	classes += className;
	classes += ` icon-btn-${color}`;
	if (size === "small") classes += " icon-btn-sm";
	else if (size === "large") classes += " icon-btn-lg";
	return (
		<button
			className={classes}
			{...rest}
			onClick={
				href !== "" && href !== "#"
					? () => {
							window.open(href, target);
					  }
					: link !== location.pathname && link !== undefined
					? () => {
							navigate(link);
					  }
					: onClick
			}
		>
			{icon !== "" && icon}
			{text !== "" && text}
		</button>
	);
};

export default IconButton;
