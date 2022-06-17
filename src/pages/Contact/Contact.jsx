import React from "react";
import Card from "../../components/Card/Card";
import "./contact.css";

const Contact = () => {
	return (
		<main className="contact">
			<Card>
                <div className="contact-head">
                    <h2>Contact Me</h2>
                </div>
                <div className="contact-body">
                    <form className="contact-form"></form>
                </div>
            </Card>
		</main>
	);
};

export default Contact;
