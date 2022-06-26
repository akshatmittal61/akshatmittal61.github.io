import React, { useState } from "react";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import Card from "../../components/Card/Card";
import Input, { TextArea } from "../../components/Input/Input";
import socials from "../../socials";
import "./contact.css";

const Contact = () => {
	const [userMessage, setUserMessage] = useState({
		name: "",
		email: "",
		message: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserMessage((prev) => ({ ...prev, [name]: value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(userMessage);
		setUserMessage({
			name: "",
			email: "",
			message: "",
		});
	};
	const handleReset = (e) => {
		e.preventDefault();
		setUserMessage({
			name: "",
			email: "",
			message: "",
		});
	};
	return (
		<main className="contact">
			<Card>
				<div className="contact-head">
					<span>Hey</span>
					<span>Let's</span>
					<span>Connect!</span>
				</div>
				<div className="contact-body">
					<form
						className="contact-form"
						onSubmit={handleSubmit}
						onReset={handleReset}
					>
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
						<div className="form-group">
							<Button
								text="Cancel"
								type="reset"
								variant="outline"
								color="indigo"
							/>
							<Button
								text="Submit"
								type="submit"
								variant="fill"
								color="indigo"
							/>
						</div>
					</form>
					<section className="contact-socials">
						<ul className="contact-ul">
							{socials.map((social, index) => (
								<li
									className="contact-li"
									data-title={social.username}
									key={index}
								>
									<IconButton
										icon={social.icon}
										href={social.icon}
										style={{
											color: social.color,
										}}
										onMouseOver={() => {
											document
												.querySelector("body")
												.style.setProperty(
													"--social-color",
													social.color
												);
										}}
									/>
								</li>
							))}
						</ul>
						<div className="contact-resume">
							<Button
								text="View my Resume"
								icon="north_east"
								href="https://drive.google.com/file/d/1yKByRH6La0rOupNX3l29kcC-xue93m62/view?usp=sharing"
								color="green"
							/>
						</div>
					</section>
				</div>
			</Card>
		</main>
	);
};

export default Contact;
