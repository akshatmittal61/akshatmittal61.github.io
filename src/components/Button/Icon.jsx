import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import IconMask from "../../images/IconMask";
import "./button.css";

const IconButton = ({
	color = "blue",
	href = "#",
	target = "_blank",
	link,
	variant,
	className = "",
	size = "",
	icon = "",
	onClick,
	fill = "#C7DBFA",
	...rest
}) => {
	const location = useLocation();
	const navigate = useNavigate();
	let classes = "icon ";
	classes += className;
	classes += ` icon-${color}`;
	if (size === "small") classes += " icon-sm";
	else if (size === "large") classes += " icon-lg";
	if (variant === "fill" || variant === "outline")
		classes += ` icon-${variant}`;
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
			<span className="material-symbols-outlined">{icon}</span>
			<IconMask fill={fill} />
		</button>
	);
};

export default IconButton;
