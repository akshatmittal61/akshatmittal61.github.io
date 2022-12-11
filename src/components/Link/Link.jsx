import React from "react";
import "./link.scss";

const Link = ({ href, target = "_self", children,...rest }) => {
	return (
		<a href={href} target={target} className="link" {...rest}>
			{children}
		</a>
	);
};

export default Link;
