import React from 'react';

const ScheduleMainBlock = ({schedule}) => {
  return (
    <div className='center'>
      <div className='title'>
          {schedule[0][1]}
      </div>
      <div className='colum gap_10'>
        {schedule.slice(1).map((row, rowIndex) => {
          if (row.length <= 4){
            return(
              <div className='row jcsb' key={rowIndex}>
                <div className='time_block'>{row[0]}</div>
                <div className='value_block'>{row[1]}</div>
              </div>
            )
          }
          if (row[0] === "" || row[0] === "   ") return null;
          return (
            <div className='row jcsb' key={rowIndex}>
              <div className='time_block'>{row[0]}</div>
              <div className='time_block'>{row[1]}</div>
            </div>
        )})}
      </div>
    </div>
  );
}

export default ScheduleMainBlock;