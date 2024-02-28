import React, { useState } from 'react';

const MapGroup = ({ groupNow, setGroupNow, setGroupIndex, group }) => {
  const [vive, setVive] = useState(false);

  const changeVive = () => {
    setVive(!vive);
  };

  if (!group) {
    return null;
  }

  return (
    <div className='group_block'>
      <div className='group_item' onClick={changeVive}>
        {Array.isArray(groupNow) && <div>{groupNow[0]}/{groupNow[1]}</div>}
        {!Array.isArray(groupNow) && <div>{groupNow}</div>}
      </div>
      {vive && (
        <div className='group_colum'>
          {group.map((element, index) => {
            if (element !== "ВРЕМЯ") {
              let color = index % 2 === 1 ? "gray" : "white";
              return (
                <div
                  key={index}
                  className={"group_item " + color}
                  onClick={() => {
                    setGroupIndex(index);
                    setGroupNow(element);
                    changeVive();
                  }}
                >
                  {Array.isArray(element) && <div>{element[0]}/{element[1]}</div>}
                  {!Array.isArray(element) && <div>{element}</div>}
                </div>
              );
            }
            return null; // Add this line to handle the case when element is "ВРЕМЯ"
          })}
        </div>
      )}
    </div>
  );
};

export default MapGroup;
