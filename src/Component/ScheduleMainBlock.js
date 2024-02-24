import React from 'react';

const ScheduleMainBlock = ({groupIndex, schedule}) => {
  console.log(schedule)
  return (
    <div className='center'>
      <div className='title'>
          {schedule[0][1]}
      </div>
      <div className='colum gap_10'>
        {schedule.slice(1).map((row, rowIndex) => {
            if(Array.isArray(row)){
              if (row.length <= 5 && Array.isArray(row[0])){
                return(
                  <div className='break' key={rowIndex}>
                    <div className='break_time_block'>
                      <div>{row[0][0]} </div>
                      <div>-</div>
                      <div> {row[0][1]}</div>
                    </div>
                    <div className='break_value_block'>{row[1]}</div>
                  </div>
                )
              }
              if (row[0] === "ВРЕМЯ") return(
                <h3 className='group_title'>{row[groupIndex]}</h3>
              )
              if (row[0] === "" || row[0] === "   ") return null;
              return (
                <div className='lesson' key={rowIndex}>
                  <div className='lesson_time_block'>
                      <div>{row[0][0]} </div>
                      <div>-</div>
                      <div> {row[0][1]}</div>
                  </div>
                  <div className='lesson_value_block'>{row[groupIndex]}</div>
                </div>
              )
            }
          })}
      </div>
    </div>
  );
}

export default ScheduleMainBlock;