import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./cursor.scss";

const Cursor = () => {
	const [cursorStyle, setCursorStyle] = useState({
		x: 0,
		y: 0,
	});
	const [cursorBallStyle, setCursorBallStyle] = useState({
		x: 0,
		y: 0,
	});
	useEffect(() => {
		const cursorControl = (e) => {
			setCursorStyle((prev) => ({
				...prev,
				x: e.pageX,
				y: e.pageY,
			}));
			setCursorBallStyle((prev) => ({
				...prev,
				x: e.pageX,
				y: e.pageY,
			}));
		};
		window.addEventListener("mousemove", cursorControl);
		return () => {
			window.removeEventListener("mousemove", cursorControl);
		};
	}, []);

	return (
		<>
			<div
				className="cursor"
				style={{
					left: cursorStyle.x,
					top: cursorStyle.y,
				}}
			></div>
			<div
				className="cursor-ball"
				style={{
					left: cursorBallStyle.x,
					top: cursorBallStyle.y,
				}}
			></div>
		</>
	);
};

export default Cursor;
