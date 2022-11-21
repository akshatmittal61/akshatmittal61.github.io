import React from "react";
import Button from "../../components/Button/Button";
import { illustration } from "../../vectors";
import "./not-found.scss";

const NotFound = () => {
	return (
		<main className="not-found">
			<div className="not-found-container">
				<div className="not-found-image">
					<img src={illustration} alt="404 Page not found" />
				</div>
				<div className="not-found-content">
					<h1 className="not-found-content__h1">Oops!</h1>
					<p className="not-found-content__p">
						Couldn't find the page you were looking for...
					</p>
				</div>
				<div className="not-found-buttons">
					<Button
						text="Back to Home"
						color="indigo"
						link="/"
						variant="fill"
						icon="home"
					/>
					<Button
						text="Send me a Message"
						color="indigo"
						link="/contact"
						variant="outline"
						icon="chat"
					/>
				</div>
			</div>
		</main>
	);
};

export default NotFound;
