import React from 'react';

const MapGroup = ({group}) => {
  if(group){
    return(
    <div className='group_row'>{
      group.map((element) => (
        <div>{element}</div>
      ))
    }</div>);
  }
}

export default MapGroup;