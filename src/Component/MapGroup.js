import React, { useState } from 'react';

import GroupItem from './GroupItem';

const MapGroup = ({ isDarkTheme, currentGroup, groupIndex, setGroupIndex, setCurrentGroup, setLocalStorageValue, group }) => {
	const themeClass = isDarkTheme ? 'dark' : '';

	const [vive, setVive] = useState(false);

	const changeVive = () => {
		setVive(!vive);
	};

	if (!group) {
		return null;
	}

	const mapingGroup = group.map((element, index) => {
		if (element) {
			let color = "white"

			if (groupIndex === element.id) {
				color = "group_now_theme"
			}
			return (
				<div key={element.id}>
					<GroupItem groupNow={groupIndex} isDarkTheme={isDarkTheme} color={color} index={index} setGroupIndex={(v) => setGroupIndex(v)} setCurrentGroup={(val) => { setCurrentGroup(val) }} setLocalStorageValue={(val) => { setLocalStorageValue(val) }} changeVive={(v) => changeVive(v)} element={element} />
				</div>
			);
		}
		return null;
	})

	return (
		<div className='group_block'>
			<div className={`group_item ${themeClass}`} onClick={changeVive}>
				<div>{currentGroup?.title ? currentGroup.title : 'Выбрать группу'}</div>
			</div>
			{vive && (
				<div className='group_colum'>
					{mapingGroup}
				</div>
			)}
		</div>
	);
};

export default MapGroup;
