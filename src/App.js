import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "./App.css"

import Management from './Component/Management';
import Schedule from './Component/Schedule';

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [groupIndex, setGroupIndex] = useState(1)

  const [schedule, setSchedule] = useState()

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

  let url = `https://ca7541dbbd4adbd78f4d56f7abbf11d0.serveo.net/`

  function postData() {
    console.log("getData")
    axios.post(url+`post`, {"day":day, "month":month, "year":year})
    .then((response) => {
      setSchedule(response.data);
      setIsLoading(false);
    })
  }

  useEffect(() => {
    postData()
  }, [currentDate])

  console.log(schedule)

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if(schedule && schedule.length > 3){
    return (
      <div className='main_block'>
        <div>
            <Management groupNow={groupNow} setGroupNow={(v)=>setGroupNow(v)} setGroupIndex={(v)=>{setGroupIndex(v)}} group={schedule[1]} setCurrentDate={(v) => setCurrentDate(v)} wday={wday} day={day} month={month} year={year}/>
            <Schedule isLoading={isLoading} groupIndex={groupIndex} schedule={schedule}/>
          </div>
      </div>
    )
  }
  if(schedule && schedule.length <= 3){
    return (
      <div className='main_block'>
        <div>
            <Management groupNow={groupNow} setGroupNow={(v)=>setGroupNow(v)} setCurrentDate={(v) => setCurrentDate(v)} wday={wday} day={day} month={month} year={year}/>
            <div>{schedule[0]}</div>
          </div>
      </div>
    );
  }
}

export default App;
