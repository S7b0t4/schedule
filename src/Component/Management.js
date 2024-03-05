import React from 'react';

import MapGroup from './MapGroup';

import axios from 'axios';

const Management = ({ url, setIsLoading, setSchedule, groupIndex, setGroupIndex, group, wday, day, month, year, isDarkTheme }) => {
  const themeClass = isDarkTheme ? 'dark' : '';

  const reWriteSchedule = async () => {
    try {
      const response = await axios.post(`${url}rewrite`, { "day": day, "month": month, "year": year });
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
        <a className={`main_block_link ${themeClass}`} onClick={reWriteSchedule} href={`https://nouoet.ru/Users/schedule/${day}-${month}-${year}.htm`}>{wday} - {day}.{month}.{year}</a>
        <div className={`rewrite_link ${themeClass}`} onClick={reWriteSchedule}>
          ◷
        </div>
      </div>
      <div className='colum'>
        {group && <MapGroup isDarkTheme={isDarkTheme} groupIndex={groupIndex} setGroupIndex={(v) => setGroupIndex(v)} group={group} />}
      </div>
    </div>
  );
}

export default Management;