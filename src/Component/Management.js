import React from 'react';

import MapGroup from './MapGroup';

const Management = ({ title, setGroupIndex, group, setCurrentDate}) => {

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
      <div className='colum'>
        <div>{title}</div>
        {group && <MapGroup setGroupIndex={(v)=> setGroupIndex(v)} group={group}/>}
      </div>
      <div className='main_block_top_row'>
        <div className='main_block_top_row_button' onClick={decrementDay}>⬅</div>
        <div className='main_block_top_row_button' onClick={incrementDay}>⮕</div>
      </div>
    </div>
  );
}

export default Management;