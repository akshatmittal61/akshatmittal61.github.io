import React from "react";
import Button from "../Button/Button";
import "./community.scss";

const Community = ({ title, about, post, period, profile, image, color }) => {
	return (
		<div className="community-card">
			<div
				className="community-top"
				style={{ backgroundColor: `var(--${color})` }}
			>
				<span className="community-title">{title}</span>
				<img
					src={image}
					alt={title}
					className="community-image__icon"
				/>
			</div>
			<div className="community-content">
				<span className="community-content__post">{post}</span>
				<span className="community-content__period">{period}</span>
				<div className="community-content__about">{about}</div>
				<div className="community-content__actions">
					<Button
						text={title}
						icon="north_east"
						href={profile}
						color={color}
						size="small"
						className="community-actions-button"
					/>
				</div>
			</div>
		</div>
	);
};

export default Community;
