"use client";
import Show from "@/components/Show/Show";
import CourseCard from "@/components/StudentDashBoard/CourseCard";
import { Context } from "@/provider/ContextProvider";
import { fetchCourse } from "@/utilities/getCourse";
import { findStudentById } from "@/utilities/getStudent";
import React, { useContext, useEffect } from "react";

import { PiStudent } from "react-icons/pi";

const Page = ({ params }) => {
  const { setUser, setStudent,user,token,setCourses,courses} = useContext(Context);
  setUser(params.studentid);
  return (
    <div className="mt-10">
      <div className="flex justify-around items-center">
        <div className="flex flex-col justify-center items-center px-10 py-10 rounded bg-[#E7E6FB] shadow-lg">
          <PiStudent size={50}></PiStudent>
          <h1 className="text-2xl">Total Student</h1>
          <h1 className="text-2xl font-bold">1200</h1>
        </div>
        <div className="flex flex-col justify-center items-center px-10 py-10 rounded bg-[#F9E5EA] shadow-lg">
          <PiStudent size={50}></PiStudent>
          <h1 className="text-2xl">Total Course</h1>
          <h1 className="text-2xl font-bold">500</h1>
        </div>
        <div className="flex flex-col justify-center items-center px-10 py-10 rounded bg-[#DFEDF7] shadow-lg">
          <PiStudent size={50}></PiStudent>
          <h1 className="text-2xl">Total Teacher</h1>
          <h1 className="text-2xl font-bold">200</h1>
        </div>
        <div className="flex flex-col justify-center items-center px-10 py-10 rounded bg-[#FBEDD9] shadow-lg">
          <PiStudent size={50}></PiStudent>
          <h1 className="text-2xl">Total Fuculty</h1>
          <h1 className="text-2xl font-bold">120</h1>
        </div>
      </div>
      <div className="mt-16">
        <h1 className="text-center font-bold text-4xl text-[#20B486]">Course List</h1>
        <div>
        <div className="overflow-y-auto h-[400px] grid grid-cols-3 space-y-4 gap-20 mx-4">
          {
            courses?.map(course=> <CourseCard 
            key={course.id}
            course={course}
            ></CourseCard>)
          }
        </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
