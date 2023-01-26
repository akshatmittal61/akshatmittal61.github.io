import React from "react";
import socials from "../../utils/socials";
import "./index.scss";

const Left = () => {
	return (
		<aside className="aside-left">
			<div className="aside-left-socials">
				{socials.map((social, index) => (
					<a
						href={social.link}
						target="_blank"
						rel="noreferrer"
						key={index}
						className="aside-left-socials-item"
					>
						<span className="aside-left-socials-item-icon">
							{social.icon}
						</span>
					</a>
				))}
			</div>
			<span className="aside-left-line"></span>
		</aside>
	);
};

export default Left;
