import React from 'react';


const GroupItem = ({ isDarkTheme, color, index, setGroupIndex, setCurrentGroup, setLocalStorageValue, changeVive, element }) => {
	const themeClass = isDarkTheme ? 'dark' : '';
	return (
		<div
			key={index}
			className={`group_item ${themeClass} ${color}`}
			onClick={() => {
				setGroupIndex(element.id);
				setCurrentGroup(element);
				setLocalStorageValue(element.id);
				changeVive();
			}}
		>
			<div>{element.title}</div>
		</div>
	);
}

export default GroupItem;
