import React from "react";
import "./card.scss";

const Card = ({ children, ...rest }) => {
	return (
		<div className="card" data-aos="zoom-out" {...rest}>
			<div className="card-box">{children}</div>
		</div>
	);
};

export default Card;
