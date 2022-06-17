import React from "react";
import "./card.css";

const Card = ({ children }) => {
	return (
		<div className="card" data-aos="zoom-out">
			<div className="card-box">{children}</div>
		</div>
	);
};

export default Card;
