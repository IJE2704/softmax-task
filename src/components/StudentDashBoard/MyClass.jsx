"use client"
import { Context } from '@/provider/ContextProvider';
import { getEnrolledCourse } from '@/utilities/getEnrolledCourse';
import React, { useContext, useEffect, useState } from 'react';
import MyClassCard from './MyClassCard';

const MyClass = () => {
  const [enrolledCourse,setEnrolledCourse] = useState([])
  const {student,token} = useContext(Context);
  useEffect(()=>{
    console.log(student)
    const fetchData = async()=>{
      const enrolled = await getEnrolledCourse(student.id,token);
      console.log(enrolled)
      setEnrolledCourse(enrolled.student_courses);
    }
    fetchData();
  },[student])
  return (
    <div>
      {enrolledCourse.length > 0 ? (
      <h1>You have enrolled Courses : {enrolledCourse.length}</h1>
      ) : (
        <h1>No enrolled courses found</h1>
      )}

    </div>
  );
};

export default MyClass;