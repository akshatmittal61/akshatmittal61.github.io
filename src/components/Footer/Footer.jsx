import React, { useState } from "react";
import emailjs from "emailjs-com";
import Input, { TextArea } from "../Input/Input";
import Button from "../Button/Button";
import "./footer.scss";
import { people } from "../../vectors";

const Footer = () => {
	const [userMessage, setUserMessage] = useState({
		name: "",
		email: "",
		message: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserMessage((p) => ({ ...p, [name]: value }));
	};
	const handleSubmit = (e) => {
		e?.preventDefault();
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
	const handleReset = (e) => {
		e.preventDefault();
		setUserMessage({
			name: "",
			email: "",
			message: "",
		});
	};
	return (
		<footer
			className="footer"
			style={{
				backgroundImage: `url(${people})`,
			}}
		>
			<div className="footer-connect">
				<div className="footer-connect-head">
					<span>Hey</span>
					<span>Let's</span>
					<span>Connect</span>
				</div>
				<form
					className="footer-connect-form"
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
						rows={5}
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
				<div className="footer-connect-resume">
					<Button
						text="Download My Resume"
						color="green"
						variant="outline"
						icon="file_download"
						size="large"
						link="/resume"
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
