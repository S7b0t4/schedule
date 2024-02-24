import React, { useState } from 'react';

const MapGroup = ({groupNow, setGroupNow, setGroupIndex, group}) => {
  const [vive, setVive] = useState(false)

  const changeVive = () => {
    setVive(!vive)
  }

  if(group){
    return(
      <div className='group_block'>
        <div className='group_item' onClick={()=>{changeVive()}}>
          {groupNow}
        </div>
        {vive && 
          <div className='group_colum'>{
            group.map((element, index) => {
              let color = (index % 2 === 1) ? "gray" : "white";
              if(element !== "ВРЕМЯ"){
                return(
                  <div key={index} className={"group_item " + color } onClick={()=>{setGroupIndex(index); setGroupNow(element); changeVive()}}>{element}</div>
                )
              }
            })
          }</div>
        }
      </div>
    )
  }
}

export default MapGroup;