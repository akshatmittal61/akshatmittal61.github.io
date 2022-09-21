import React, { useEffect, useState } from "react";
import { sleep } from "../../utils";
import "./typing.css";

const Typing = ({ text = "", children }) => {
	const Text = children || text;
	const [width, setWidth] = useState(0);
	useEffect(() => {
		const incWidth = async () => {
			await sleep(3 / Text.length);
			setWidth(width + 1);
		};
		if (width < Text.length) {
			incWidth();
		}
	}, [Text.length, width]);

	return <span className="typing">{Text.slice(0, width)}</span>;
};

export default Typing;
