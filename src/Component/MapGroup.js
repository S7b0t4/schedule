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
      let color = index % 2 === 1 ? "gray" : "white";
      return (
        <div key={index}>
          <GroupItem isDarkTheme={isDarkTheme} color={color} index={index} setGroupIndex={(v) => setGroupIndex(v)} changeVive={(v) => changeVive(v)} element={element}/>
        </div>
      );
    }
    return null;
  })

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
