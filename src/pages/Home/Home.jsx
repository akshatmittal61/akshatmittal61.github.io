import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input, { TextArea } from "../../components/Input/Input";
import Link from "../../components/Link/Link";
import { bulb } from "../../vectors";
import emailjs from "emailjs-com";
import "./home.scss";

const Home = () => {
	const [userMessage, setUserMessage] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserMessage({ ...userMessage, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('12');
		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE,
				process.env.REACT_APP_TEMPLATE,
				e.target,
				process.env.REACT_APP_USER
			)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
		setUserMessage({
			name: "",
			email: "",
			message: "",
		});
	};

	return (
		<main className="home">
			<section className="home-hero">
				<span className="home-hero-hi">Hey There! I am</span>
				<h1 className="home-hero-name">Akshat Mittal</h1>
				<h2 className="home-hero-headline">
					I design and build for the web.
				</h2>
				<p className="home-hero-about">
					I am a full stack developer with a passion for building
					beautiful and intuitive web applications. I am currently
					pursuing my Bachelors in Computer Science from{" "}
					<abbr
						data-title="Indian Institute of Information Technology"
						title=""
					>
						IIIT
					</abbr>{" "}
					Una and working as a SDE Intern at{" "}
					<Link
						href="https://athenasquare.org/"
						target="_blank"
						rel="noreferrer"
					>
						Athenasquare
					</Link>
					.
				</p>
				<Button text="Download my Resume" link="/resume" />
			</section>
			<section className="home-about">
				<h2 className="home-about-heading">About Me</h2>
				<p className="home-about-text">
					Hello! I am Akshat Mittal, and I love to design and build
					for the web. I have worked on various web applications and
					have a good understanding of the{" "}
					<abbr
						title=""
						data-title="MongoDB, ExpressJS, ReactJS, NodeJS"
					>
						MERN
					</abbr>{" "}
					stack. I am also learning new technologies and frameworks to
					learn new things.
				</p>
				<p className="home-about-text">
					Feel free to <Link href="#contact">reach out to me</Link> if
					you have any questions or just want to say hi! Always open
					for a good talk and a cup of coffee.✨
				</p>
				<h2 className="home-about-subheading">
					Stuff I am currently working on:
				</h2>
				<ul
					className="home-about-list"
					style={{ listStyle: `url(${bulb})` }}
				>
					<li className="home-about-list-item">
						Refined Code writing, Smoother operations
					</li>
					<li>
						Develop highly interactive and user engaging interfaces
						for web applications.
					</li>
					<li>
						Desinging dynamic, cross-browser compatible and
						responsive layouts for desktop, tablet and mobile
						screens
					</li>
					<li>Backend Development in Express framework.</li>
					<li>Database managment in SQL and MongoDB</li>
				</ul>
			</section>
			<section className="home-contact">
				<h1 className="home-contact-heading">Contact Me</h1>
				<form className="home-contact-form" onSubmit={handleSubmit}>
					<Input
						type="text"
						name="name"
						required
						placeholder="Enter Your Name"
						icon="person"
						value={userMessage.name}
						onChange={handleChange}
					/>
					<Input
						type="email"
						name="email"
						required
						placeholder="Enter Your Email"
						icon="mail"
						value={userMessage.email}
						onChange={handleChange}
					/>
					<TextArea
						type="text"
						name="message"
						required
						placeholder="Your Message Here"
						icon="chat"
						value={userMessage.message}
						onChange={handleChange}
						rows={4}
					/>
					<Button text="Send Message" type="submit" />
				</form>
			</section>
		</main>
	);
};

export default Home;
