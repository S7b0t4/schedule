import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css"
import Management from './Component/Management';
import Schedule from './Component/Schedule';
import { useSwipeable } from 'react-swipeable';
import 'animate.css';

const App = () => {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [groupIndex, setGroupIndex] = useState(null);
	const [currentGroup, setCurrentGroup] = useState('Выбрать группу');
	const [schedule, setSchedule] = useState(null);
	const [group, setGroup] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isDarkTheme, setIsDarkTheme] = useState()

	const setLocalStorageValue = (value) => {
		localStorage.setItem("groupIndex", value);
	};

	const themeClass = isDarkTheme ? 'dark' : '';


	const getLocalStorageValue = () => {
		const value = localStorage.getItem("groupIndex");
		if (value) {
			setGroupIndex(value)
			setCurrentGroup(group.find((ele) => ele.id == value))
		}
	};

	const getDayOfWeek = () => {
		const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
		const dayIndex = currentDate.getDay();
		return daysOfWeek[dayIndex];
	}

	const day = currentDate.getDate();
	const wday = getDayOfWeek();
	const month = currentDate.getMonth() + 1;
	const year = currentDate.getFullYear();

	const morning = new Date(currentDate);
	morning.setHours(6, 0, 0, 0);

	const evening = new Date(currentDate);
	evening.setHours(20, 0, 0, 0);
	const url = process.env.REACT_APP_API_URL;

	useEffect(() => {
		setIsDarkTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)

		setSchedule(null)
		const fetchSchedule = async () => {
			try {
				if (currentGroup.id) {
					const response = await axios.post(`${url}/schedule/group_by_group`, {
						"start": morning,
						"end": evening,
						"groupId": currentGroup.id
					});
					setSchedule(response.data);
					setIsLoading(false);
				}
			} catch (error) {
				console.error('Error fetching data:', error);
				setIsLoading(false);
			}
		};

		const fetchGroup = async () => {
			try {
				const response = await axios.get(`${url}/group/get`);
				setGroup(response.data);
				setIsLoading(false);
			} catch (error) {
				console.error('Error fetching data:', error);
				setIsLoading(false);
			}
		};
		fetchGroup();
		fetchSchedule();
	}, [currentDate, day, month, year, groupIndex, url]);

	useEffect(() => {
		if (group) {
			getLocalStorageValue()
		}
	}, [group])

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
					currentGroup={currentGroup}
					setCurrentGroup={(val) => { setCurrentGroup(val) }}
					setLocalStorageValue={(val) => { setLocalStorageValue(val) }}
					group={group}
					setGroupIndex={setGroupIndex}
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
								<Schedule isDarkTheme={isDarkTheme} isLoading={isLoading} groupIndex={groupIndex} schedule={schedule} />
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
