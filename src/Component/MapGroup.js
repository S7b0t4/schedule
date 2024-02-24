import React from 'react';

const MapGroup = ({setGroupIndex, group}) => {
  if(group){
    return(
    <div className='group_row'>{
      group.map((element, index) => (
        <div key={index} className='group_item' onClick={()=>{setGroupIndex(index)}}>{element}</div>
      ))
    }</div>);
  }
}

export default MapGroup;