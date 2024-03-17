import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css"
import Management from './Component/Management';
import Schedule from './Component/Schedule';
import { useSwipeable } from 'react-swipeable';
import 'animate.css';

const App = () => {

  const [currentDate, setCurrentDate] = useState(new Date());
  const [groupIndex, setGroupIndex] = useState(1);
  const [schedule, setSchedule] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullSchedule, setIsFullSchedule] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState()

  const setLocalStorageValue = (value) => {
    localStorage.setItem("groupIndex", value);
  };

  const themeClass = isDarkTheme ? 'dark' : '';


  const getLocalStorageValue = () => {
    const value = localStorage.getItem("groupIndex");
    if (!value) {
      localStorage.setItem("groupIndex", 1);
    }
    else {
      setGroupIndex(value)
    }
  };

  useState(() => {
    getLocalStorageValue()
  }, [])


  useEffect(() => {
    setLocalStorageValue(groupIndex)
  }, [groupIndex])

  const getDayOfWeek = () => {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const dayIndex = currentDate.getDay();
    return daysOfWeek[dayIndex];
  }

  const day = currentDate.getDate();
  const wday = getDayOfWeek();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const url = `http://localhost:5000/`;

  useEffect(() => {
    setIsDarkTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)

    setSchedule(null)
    const fetchData = async () => {
      console.log("try to connect")
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

  useEffect(() => {
    if (schedule) {
      setIsFullSchedule(schedule.length > 3);
    }
  }, [schedule]);

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

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      incrementDay();
    },
    onSwipedRight: () => {
      decrementDay();
    },
  });

  return (
    <div className={`wrapper ${themeClass}`}>
      <div className={`main_block animate__animated`} {...handlers}>
        <div className="main_block_row">
          <div className={`main_block_top_row_button ${themeClass}`} onClick={decrementDay}>⬅</div>
          <div className={`main_block_top_row_button ${themeClass}`} onClick={incrementDay}>⮕</div>
        </div>
        <Management
          url={url}
          setIsLoading={(v) => { setIsLoading(v) }}
          setSchedule={(v) => { setSchedule(v) }}
          groupIndex={groupIndex}
          setGroupIndex={setGroupIndex}
          group={schedule ? isFullSchedule ? schedule[1] : null : null}
          setCurrentDate={setCurrentDate}
          wday={wday}
          day={day}
          month={month}
          year={year}
          isDarkTheme={isDarkTheme}
        />
        {!isLoading ?
          <div>
            {schedule ? (
              <div>
                {isFullSchedule ? (
                  <Schedule isDarkTheme={isDarkTheme} isLoading={isLoading} groupIndex={groupIndex} schedule={schedule} />
                ) : (
                  <div>{schedule[0]}</div>
                )}
              </div>
            ) : (
              <div>
                No data available
              </div>
            )}
          </div> :
          <div>
            Loading...
          </div>}
      </div>
    </div>
  );
}

export default App;
