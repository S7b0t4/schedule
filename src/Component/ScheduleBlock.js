import React from 'react';

import Lesson from './Lesson';
import Break from './Break';

const ScheduleBlock = ({ isDarkTheme, groupIndex, schedule }) => {
  return (
    <div className='column gap_10'>
      {schedule.slice(2).map((row, rowIndex) => {
        if (Array.isArray(row)) {
          if (row.length <= 5 && Array.isArray(row[0])) {
            return (
              <div key={rowIndex}>
                <Break row={row} groupIndex={groupIndex} isDarkTheme={isDarkTheme} />
              </div>
            );
          }
          return (
            <div key={rowIndex}>
              <Lesson row={row} groupIndex={groupIndex} isDarkTheme={isDarkTheme} rowIndex={rowIndex} />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default ScheduleBlock;