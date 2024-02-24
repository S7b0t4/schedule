import React from 'react';

const ScheduleBlock = ({groupIndex, schedule}) => {
  return (
    <div className='column gap_10'>
      {schedule.slice(2).map((row, rowIndex) => {
          if (Array.isArray(row)) {
            if (row.length <= 5 && Array.isArray(row[0])) {
              return (
                <div className='break' key={rowIndex}>
                  <div className='break_time_block'>
                    <div>{row[0][0]} </div>
                    <div>-</div>
                    <div> {row[0][1]}</div>
                  </div>
                  <div className='break_value_block'>{row[1]}</div>
                </div>
              );
            }
            return (
              <div className='lesson' key={rowIndex}>
                {row[groupIndex] && <div className='lesson_value_block'>{row[groupIndex]}</div>}
                {!row[groupIndex] && <div className='lesson_value_block'>НЕТ ПАРЫ</div>}
                <div className='lesson_time_block'>
                  <div>{row[0][0]} </div>
                  <div>-</div>
                  <div> {row[0][1]}</div>
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}

export default ScheduleBlock;