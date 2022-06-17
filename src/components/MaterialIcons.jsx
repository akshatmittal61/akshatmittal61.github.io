import React from "react";

const MaterialIcons = ({ icon = "", children }) => (
	<span className="material-symbols-outlined">{children || icon}</span>
);

export default MaterialIcons;
