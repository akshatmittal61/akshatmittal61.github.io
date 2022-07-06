import React, { useEffect, memo } from "react";

const IncludePageTitle = ({ title, component }) => {
	const Memoized = memo(component);

	useEffect(() => {
		document.title = title;
	}, [title]);
	return <Memoized />;
};

export default IncludePageTitle;
