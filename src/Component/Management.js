import React from 'react';

import MapGroup from './MapGroup';

import axios from 'axios';

const Management = ({ groupIndex, currentGroup, setCurrentGroup, setLocalStorageValue, setGroupIndex, group, wday, day, month, year, isDarkTheme }) => {
	const themeClass = isDarkTheme ? 'dark' : '';

	return (
		<div>
			<div className='main_block_top_row'>
				<a className={`main_block_link ${themeClass}`} href={`https://nouoet.ru/Users/schedule/${day}-${month}-${year}.htm`}>{wday} - {day}.{month}.{year}</a>
			</div>
			<div className='colum'>
				{group && <MapGroup isDarkTheme={isDarkTheme} currentGroup={currentGroup} setLocalStorageValue={(val) => { setLocalStorageValue(val) }} setCurrentGroup={(val) => { setCurrentGroup(val) }} groupIndex={groupIndex} setGroupIndex={(v) => setGroupIndex(v)} group={group} />}
			</div>
		</div>
	);
}

export default Management;
