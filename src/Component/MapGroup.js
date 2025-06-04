import React, { useState } from 'react';

import GroupItem from './GroupItem';

<<<<<<< HEAD
const MapGroup = ({ isDarkTheme, groupIndex, setGroupIndex, group }) => {
  const themeClass = isDarkTheme ? 'dark' : '';

  const [vive, setVive] = useState(false);

  const changeVive = () => {
    setVive(!vive);
  };

  if (!group) {
    return null;
  }

  const mapingGroup = group.map((element, index) => {
    if (element !== "ВРЕМЯ") {
      let color = "white"

      if(group[groupIndex] === element){
        color = "group_now_theme"
      }
      return (
        <div key={index}>
          <GroupItem groupNow={group[groupIndex]} isDarkTheme={isDarkTheme} color={color} index={index} setGroupIndex={(v) => setGroupIndex(v)} changeVive={(v) => changeVive(v)} element={element}/>
        </div>
      );
    }
    return null;
  })

  console.log(groupIndex)

  return (
    <div className='group_block'>
      <div className={`group_item ${themeClass}`} onClick={changeVive}>
        <div>{group[groupIndex]}</div>
      </div>
      {vive && (
        <div className='group_colum'>
          {mapingGroup}
        </div>
      )}
    </div>
  );
=======
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
>>>>>>> master
};

export default MapGroup;
