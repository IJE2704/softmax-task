import React from 'react';

const MyClassCard = ({course}) => {
  console.log(course)
  return (
    <div className="bg-[#B2CAF7] flex justify-center items-center py-10 px-5 rounded-md gap-4">
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-xl">{course.name}</h1>
      </div>
    </div>
  );
};

export default MyClassCard;