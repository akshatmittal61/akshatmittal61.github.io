import React from "react";
import MaterialIcons from "../MaterialIcons";
import "./input.scss";

const Input = ({
	name,
	placeholder,
	type,
	autoFocus,
	disabled,
	icon,
	...rest
}) => {
	return (
		<div className="form-group">
			<label>
				<MaterialIcons>{icon}</MaterialIcons>
			</label>
			<input
				name={name}
				placeholder={placeholder}
				type={type}
				autoFocus={autoFocus}
				disabled={disabled}
				{...rest}
			></input>
			<span class="form-group-border"></span>
		</div>
	);
};

const TextArea = ({
	name,
	placeholder,
	type,
	autoFocus,
	disabled,
	icon,
	...rest
}) => {
	return (
		<div className="form-group" style={{ height: "fit-content" }}>
			<label
				style={{
					top: 0,
					transform: "translate(50%, 25%)",
				}}
			>
				<MaterialIcons>{icon}</MaterialIcons>
			</label>
			<textarea
				name={name}
				placeholder={placeholder}
				type={type}
				autoFocus={autoFocus}
				disabled={disabled}
				{...rest}
			></textarea>
		</div>
	);
};

const Select = ({ icon, options, selected, ...rest }) => {
	return (
		<div className="form-group">
			<label>
				<MaterialIcons>{icon}</MaterialIcons>
			</label>
			<select {...rest}>
				{options.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export default Input;
export { TextArea, Select };
