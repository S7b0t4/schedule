import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css"
import Management from './Component/Management';
import Schedule from './Component/Schedule';

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [groupIndex, setGroupIndex] = useState(1);
  const [schedule, setSchedule] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [groupNow, setGroupNow] = useState("select");

  const getDayOfWeek = () => {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const dayIndex = currentDate.getDay();
    return daysOfWeek[dayIndex];
  }

  const day = currentDate.getDate();
  const wday = getDayOfWeek();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const url = `https://eb2164c6a145b66fe99c26a10b4ae135.serveo.net/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${url}post`, { "day": day, "month": month, "year": year });
        setSchedule(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentDate, day, month, year, url]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!schedule) {
    return <div>No data available</div>;
  }

  const isFullSchedule = schedule.length > 3;

  return (
    <div className='main_block'>
      <div>
        <Management
          url={url}
          setIsLoading={(v) => { setIsLoading(v) }}
          setSchedule={(v) => { setSchedule(v) }}
          groupNow={groupNow}
          setGroupNow={setGroupNow}
          setGroupIndex={setGroupIndex}
          group={isFullSchedule ? schedule[1] : null}
          setCurrentDate={setCurrentDate}
          wday={wday}
          day={day}
          month={month}
          year={year}
        />
        {isFullSchedule ? (
          <Schedule isLoading={isLoading} groupIndex={groupIndex} schedule={schedule} />
        ) : (
          <div>{schedule[0]}</div>
        )}
      </div>
    </div>
  );
}

export default App;
