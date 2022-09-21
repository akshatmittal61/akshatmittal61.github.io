import React from "react";
import "./education.css";

const Education = ({ image, title, institution, about }) => {
	return (
		<div className="education">
			<div
				className="education-left"
				style={{
					backgroundImage: `url(${image})`,
				}}
			></div>
			<div className="education-right">
				<h2 className="education-right__h2">{title}</h2>
				<h4 className="education-right__h4">{institution}</h4>
				<p>{about}</p>
			</div>
		</div>
	);
};

export default Education;
