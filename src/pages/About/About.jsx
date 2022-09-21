import React from "react";
import "./about.css";
import wave from "../../images/wave.gif";
import Community from "../../components/Community/Community";
import communitites from "../../utils/communities";
import me from "../../images/Akshat_Transparent.png";
import education from "../../utils/education";
import Education from "../../components/Education/Education";
import experience from "../../utils/experience";
import Experience from "../../components/Experience/Experience";
import Row, { Col } from "../../Layout/Responsive";

const About = () => {
	return (
		<main className="about">
			<div className="about-head">
				<div className="about-head-content">
					<h2 className="about-head__h2">About Me</h2>
					<p className="about-body__p">
						<span>
							Hey there!
							<img src={wave} alt="Waving hand" />
						</span>
					</p>
					<p className="about-body__p">
						<span>
							I'm Akshat Mittal a MERN stack developer, a
							freelancer and an Open Source Enthusiast.
						</span>
					</p>
					<p className="about-body__p">
						<span>
							I am crazy about finding and exploring new
							technologies arising in the world of web, android
							and ML and many more.
						</span>
					</p>
				</div>
				<div className="about-head-image">
					<img src={me} alt="Akshat Mittal" />
				</div>
			</div>
			<div className="about-body"></div>
			<div className="about-head">
				<h3 className="about-head__h3">Communities</h3>
			</div>
			<div className="about-body">
				<div className="about-body__p">
					<Row>
						{communitites.map((community, index) => (
							<Col key={index} lg={33} md={50} sm={100}>
								<Community {...community} />
							</Col>
						))}
					</Row>
				</div>
			</div>
			<div className="about-head">
				<h3 className="about-head__h3">Education</h3>
			</div>
			<div className="about-body">
				<div className="about-body__p">
					{education.map((edu, id) => (
						<Education key={id} {...edu} />
					))}
				</div>
			</div>
			<div className="about-head">
				<h3 className="about-head__h3">Experience</h3>
			</div>
			<div className="about-body">
				<div className="about-body__p">
					<Row>
						{experience.reverse().map((ex, id) => (
							<Col key={id} lg={33} md={50} sm={100}>
								<Experience {...ex} />
							</Col>
						))}
					</Row>
				</div>
			</div>
		</main>
	);
};

export default About;
