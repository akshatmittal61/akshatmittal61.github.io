import React from "react";
import "./about.css";
import wave from "../../images/wave.gif";
import Community from "./Community";
import forceIcon from "../../images/communities/force.jpeg";
import aaveshIcon from "../../images/communities/aavesh.jpeg";
import epmocIcon from "../../images/communities/epmoc.jpg";
import eunoiaIcon from "../../images/communities/eunoia.jpeg";

const About = () => {
	const communitites = [
		{
			title: "Force - IIITU",
			about: "Forum for Computer Engineers, IIIT Una",
			profile: "https://www.linkedin.com/company/force-iiitu/",
			color: "orange",
			post: "Executive Member",
			period: "Feb 2021 - Present",
			image: forceIcon,
		},
		{
			title: "Aavesh - IIITU",
			about: "Electronics society of IIIT Una",
			profile: "https://www.linkedin.com/company/aavesh-iiitu/",
			color: "blue",
			post: "Senior Web Developer",
			period: "Feb 2021 - Present",
			image: aaveshIcon,
		},
		{
			title: "Epmoc - IIITU",
			about: "Event Planning Management and Organising Council",
			profile: "https://www.linkedin.com/company/epmoc-iiitu/",
			color: "black",
			post: "Senior Web Developer",
			period: "May 2022 - Present",
			image: epmocIcon,
		},
		{
			title: "Eunoia - IIITU",
			about: "Unified Literary and Cultural club of IIIT Una",
			profile: "https://www.linkedin.com/company/eunoia-iiitu/",
			color: "brown",
			post: "Member",
			period: "June 2021 - Present",
			image: eunoiaIcon,
		},
	];
	return (
		<main className="about">
			<div className="about-head">
				<h2 className="about-head__h2">About Me</h2>
			</div>
			<div className="about-body">
				<p className="about-body__p">
					<span>
						Hey there!
						<img src={wave} alt="Waving hand" />
					</span>
				</p>
				<p className="about-body__p">
					<span>
						I'm Akshat Mittal an aspiring MERN stack developer and
						an Open Source Enthusiast.
					</span>
				</p>
				<p className="about-body__p">
					<span>
						I am crazy about finding and exploring new technologies
						arising in the world of web, android and ML and many
						more.
					</span>
				</p>
			</div>
			<div className="about-head">
				<h3 className="about-head__h3">Communities</h3>
			</div>
			<div className="about-body">
				<div className="about-body__p">
					<div className="row">
						{communitites.map((community, index) => (
							<div
								key={index}
								className="col-lg-33 col-md-50 col-sm-100"
							>
								<Community
									title={community.title}
									about={community.about}
									post={community.post}
									period={community.period}
									profile={community.profile}
									color={community.color}
									image={community.image}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
};

export default About;
