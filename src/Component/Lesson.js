import React from 'react';

const Lesson = ({row, groupIndex}) => {
  const teacherName = ""
  const numberOfClass = ""
  const Subject = ""
  console.log(row[groupIndex])
  const lessonDescription = row[groupIndex].split(" ")

  if(lessonDescription.length){

  }

  return (
    <div className='lesson_value_block'>
      {row[groupIndex]}
    </div>
  );
}

export default Lesson;