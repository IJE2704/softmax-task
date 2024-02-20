"use client"
import { Context } from '@/provider/ContextProvider';
import { getTeacherCourses } from '@/utilities/getTeacherCourse';
import React, { useContext, useEffect, useState } from 'react';

const TeacherCreatedCourse = () => {
  const [teacherCreatedCourses, setTeacherCreatedCourses] = useState({});
  const {user,token} = useContext(Context);
  useEffect(()=>{
    const teacherCourseData = async()=>{
      const data = await getTeacherCourses(user.id,token);
      console.log(data)
      setTeacherCreatedCourses(data);
    }
    teacherCourseData();
  },[])
  return (
    <div>
      <h1>{TeacherCreatedCourse.length}</h1>
    </div>
  );
};

export default TeacherCreatedCourse;