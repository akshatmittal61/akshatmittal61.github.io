import React from "react";
import Card from "../../components/Card/Card";
import dev_activity from "../../images/developer_activity.svg";
import skills from "../../utils/skills";
import bulb from '../../images/bulb_on.svg'
import './skills.css'

const Skills = () => {
	return (
		<main className="skills">
			<Card>
				<div className="skills-container">
					<div className="skills-head">
						<h1 className="skills-head__h1">
							Stuff that I work on
						</h1>
					</div>
					<div className="skills-body">
						<div className="skills-body-image">
							<img src={dev_activity} alt="Developer Activiy" />
						</div>
						<div className="skills-body-content">
							<div className="skills-body-head">
								<h3 className="skills-body-head__h3">
									MERN stack development
								</h3>
							</div>
							<div className="skills-body-icons">
								{skills.map((skill, index) => (
									<span
										className="skills-body-icon"
										data-title={skill.title}
                                        key={index}
									>
										<img
											src={skill.icon}
											alt={skill.title}
										/>
									</span>
								))}
							</div>
							<div className="skills-body-text">
								<ul className="skill-body-ul" style={{listStyle: `url(${bulb})`}}>
									<li>
										Develop highly interactive frontend /
										user interfaces for web applications
									</li>
									<li>
										Building responsive websites for
										desktop, tablet and mobile screens
									</li>
									<li>
										Creating backend in Express framework
									</li>
									<li>
										Managing database in SQL and MongoDB
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Card>
		</main>
	);
};

export default Skills;
