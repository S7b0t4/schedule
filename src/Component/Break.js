import React from 'react';

const Break = ({row, rowIndex, isDarkTheme}) => {
  const themeClass = isDarkTheme ? 'dark' : '';

  return (
    <div className={`break ${themeClass}`} key={rowIndex}>
      <div className='break_time_block'>
        <div>{row[0][0]} </div>
        <div>-</div>
        <div> {row[0][1]}</div>
      </div>
      <div className='break_value_block'>{row[1]}</div>
    </div>
  );
}

export default Break;