import React from 'react';

const GroupItem = ({ isDarkTheme, color, index, setGroupIndex, changeVive, element}) => {
  const themeClass = isDarkTheme ? 'dark' : '';
  return (
    <div
      key={index}
      className={`group_item ${themeClass} ${color}`}
      onClick={() => {
        setGroupIndex(index);
        changeVive();
      }}
    >
      <div>{element}</div>
    </div>
  );
}

export default GroupItem;