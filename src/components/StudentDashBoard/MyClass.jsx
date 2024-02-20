"use client"
import { Context } from '@/provider/ContextProvider';
import { getEnrolledCourse } from '@/utilities/getEnrolledCourse';
import React, { useContext, useEffect, useState } from 'react';

const MyClass = () => {
  const [enrolledCourse,setEnrolledCourse] = useState([])
  const {student,token} = useContext(Context);
  useEffect(()=>{
    console.log(student)
    const fetchData = async()=>{
      const enrolled = await getEnrolledCourse(student.user,token);
      console.log(enrolled)
      setEnrolledCourse(enrolled);
    }
    fetchData();
  },[student])
  return (
    <div>
      {
        enrolledCourse.map(course=><h1 key={course.id}>{course.id}</h1>)
      }
      <h1>enrolled</h1>
    </div>
  );
};

export default MyClass;