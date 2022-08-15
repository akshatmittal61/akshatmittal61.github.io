import React, { useEffect, useState } from "react";
import "./cursor.css";

const Cursor = () => {
	const [cursorStyle, setCursorStyle] = useState({
		left: 0,
		top: 0,
	});
	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			setCursorStyle((prev) => ({
				...prev,
				left: `${e.pageX}px`,
				top: `${e.pageY}px`,
			}));
		});
		return () => {
			window.removeEventListener("mousemove", (e) => {
				setCursorStyle((prev) => ({
					...prev,
					left: `${e.pageX}px`,
					top: `${e.pageY}px`,
				}));
			});
		};
	}, []);

	return (
		<span
			className="cursor"
			id="cursor"
			style={{
				left: cursorStyle.left,
				top: cursorStyle.top,
			}}
		>
			<span className="cursor-top"></span>
			<span className="cursor-right"></span>
			<span className="cursor-bottom"></span>
			<span className="cursor-left"></span>
		</span>
	);
};

export default Cursor;
