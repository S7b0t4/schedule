import React from 'react';

import ScheduleBlock from './ScheduleBlock';

const Schedule = ({ isDarkTheme, groupIndex, schedule }) => {
  
  return (
    <div className='center'>
      <ScheduleBlock isDarkTheme={isDarkTheme}  groupIndex={groupIndex} schedule={schedule}/>
    </div>
  );
};

export default Schedule;