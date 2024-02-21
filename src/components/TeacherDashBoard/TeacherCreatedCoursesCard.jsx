import React from 'react';

const TeacherCreatedCoursesCard = ({teacherCourse}) => {
  return (
    <div className="bg-[#B2CAF7] flex justify-center items-center py-10 px-5 rounded-md gap-4">
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-xl">{teacherCourse.title}</h1>

      </div>
    </div>
  );
};

export default TeacherCreatedCoursesCard;