import React from 'react';

const Lesson = ({ rowIndex, row, groupIndex, isDarkTheme }) => {
  const themeClass = isDarkTheme ? 'dark' : '';

  return (
    <div className={`lesson ${themeClass}`} key={rowIndex}>
      {row[groupIndex] && <div className={`lesson_value_block`}>{row[groupIndex]} </div>}
      <div className='lesson_time_block'>
        <div>{row[0][0]} </div>
        <div>-</div>
        <div> {row[0][1]}</div>
      </div>
    </div>
  );
};

export default Lesson;
