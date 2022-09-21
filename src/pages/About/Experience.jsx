import React from "react";
import Button from "../../components/Button/Button";

const Experience = ({
	company,
	title,
	about,
	from,
	to,
	website,
	image,
	color,
	certificate,
}) => {
	return (
		<div className="experience-card">
			<div
				className="experience-top"
				style={{ backgroundColor: `var(--${color})` }}
			>
				<span className="experience-title">{company}</span>
				<img
					src={image}
					alt={title}
					className="experience-image__icon"
					style={{
						backgroundColor: `var(--${color})`,
					}}
				/>
			</div>
			<div className="experience-content">
				{certificate ? (
					<a
						href={certificate}
						target="_blank"
						className="experience-content__post"
						rel="noreferrer"
					>
						{title}
					</a>
				) : (
					<span className="experience-content__post">{title}</span>
				)}
				<span className="experience-content__period">
					{from}-{to}
				</span>
				<div className="experience-content__about">{about}</div>
				<div className="experience-content__actions">
					<Button
						text={company}
						icon="north_east"
						href={website}
						color={color}
						size="small"
						className="experience-actions-button"
					/>
				</div>
			</div>
		</div>
	);
};

export default Experience;
