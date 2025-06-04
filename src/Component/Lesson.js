import React from 'react';

const Lesson = ({ rowIndex, row, groupIndex, isDarkTheme }) => {
	const themeClass = isDarkTheme ? 'dark' : '';
	function formatTime(date) {
		const hours = date.getHours().toString().padStart(2, '0');
		const minutes = date.getMinutes().toString().padStart(2, '0');
		return `${hours}:${minutes}`;
	}

	console.log(row)

	return (
		<div className={`lesson ${themeClass}`} key={rowIndex}>
			<div className={`lesson_value_block`}>
				<p>{row.subject.title}</p>
				<p>{row.teacher.surname} {row.teacher.name[0]}. {row.teacher.patronymic[0]}.</p>
				<p>каб. {row.auditorium.number}</p>
				<p>{row.regard}</p>
			</div>
			<div className='lesson_time_block'>
				<div>{formatTime(new Date(row.startDate))} </div>
				<div>-</div>
				<div> {formatTime(new Date(row.endDate))}</div>
			</div>
		</div>
	);
};

export default Lesson;
