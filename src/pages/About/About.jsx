import React from "react";
import "./about.css";
import wave from "../../images/wave.gif";
import Community from "./Community";
import communitites from "../../utils/communities";
import me from "../../images/Akshat_Transparent.png";

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
							I'm Akshat Mittal an aspiring MERN stack developer
							and an Open Source Enthusiast.
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
