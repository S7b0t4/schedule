import React, { useState } from 'react';

import GroupItem from './GroupItem';

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
};

export default MapGroup;
