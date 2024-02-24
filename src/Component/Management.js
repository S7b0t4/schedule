import React from 'react';

import MapGroup from './MapGroup';

const Management = ({ groupNow, setGroupNow, setGroupIndex, group, setCurrentDate, wday, day, month, year}) => {

  const incrementDay = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  };

  const decrementDay = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  };

  return (
    <div>
      <div className='main_block_top_row'>
        <div className='main_block_top_row_button' onClick={decrementDay}>⬅</div>
        <a className='main_block_link' href={`https://nouoet.ru/Users/schedule/${day}-${month}-${year}.htm`}>{wday} - {day}.{month}.{year}</a>
        <div className='main_block_top_row_button' onClick={incrementDay}>⮕</div>
      </div>
      <div className='colum'>
        {group && <MapGroup groupNow={groupNow} setGroupNow={(v)=>setGroupNow(v)} setGroupIndex={(v)=> setGroupIndex(v)} group={group}/>}
      </div>
    </div>
  );
}

export default Management;