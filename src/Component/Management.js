import React from 'react';

import MapGroup from './MapGroup';

import restart from '../restart.svg'
import axios from 'axios';

const Management = ({ url, setIsLoading, setSchedule, groupNow, setGroupNow, setGroupIndex, group, setCurrentDate, wday, day, month, year}) => {

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

  const reWriteSchedule = async () => {
    try {
      const response = await axios.post(`${url}rewrite`, {"day":day, "month":month, "year":year});
      setSchedule(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  }

  return (
    <div>
      <div className='main_block_top_row'>
        <div className='main_block_top_row_button' onClick={decrementDay}>⬅</div>
        <a className='main_block_link' href={`https://nouoet.ru/Users/schedule/${day}-${month}-${year}.htm`}>{wday} - {day}.{month}.{year}</a>
        <div onClick={reWriteSchedule}>
          <img className='main_block_restart_button_img' src={restart} alt="restart" />
        </div>
        <div className='main_block_top_row_button' onClick={incrementDay}>⮕</div>
      </div>
      <div className='colum'>
        {group && <MapGroup groupNow={groupNow} setGroupNow={(v)=>setGroupNow(v)} setGroupIndex={(v)=> setGroupIndex(v)} group={group}/>}
      </div>
    </div>
  );
}

export default Management;