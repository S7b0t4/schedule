import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "./App.css"

import Management from './Component/Management';
import ScheduleMainBlock from './Component/ScheduleMainBlock';

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [schedule, setSchedule] = useState([[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],])
  
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  let url = `http://localhost:5000/`

  function postData() {
    console.log("getData")
    axios.post(url+`post`, {"day":day, "month":month, "year":year})
    .then((response) => {
      setSchedule(response.data);
    })
  }

  useEffect(() => {
    postData()
  }, [currentDate])

  console.log(schedule)

  return (
    <div className='main_block'>
      <Management group={schedule[1]} setCurrentDate={(v) => setCurrentDate(v)} day={day} month={month} year={year}/>
      {
        Array.isArray(schedule) && <ScheduleMainBlock schedule={schedule}/>
      }
      {
        typeof schedule === 'object' && <div>{schedule.description}</div>
      }
    </div>
  );
}

export default App;
