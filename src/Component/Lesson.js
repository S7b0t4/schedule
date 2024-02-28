import React from 'react';

const Lesson = ({row, groupIndex}) => {
  
  return (
    <div className='lesson_value_block'>
      {row[groupIndex]}
    </div>
  );
}

export default Lesson;