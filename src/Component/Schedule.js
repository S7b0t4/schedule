import React from 'react';

import ScheduleBlock from './ScheduleBlock';

const Schedule = ({ groupIndex, schedule }) => {
  
  return (
    <div className='center'>
      <ScheduleBlock groupIndex={groupIndex} schedule={schedule}/>
    </div>
  );
};

export default Schedule;