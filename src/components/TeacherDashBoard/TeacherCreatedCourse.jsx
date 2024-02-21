"use client"
import { Context } from '@/provider/ContextProvider';
import { getSingleTeacher } from '@/utilities/getSingleTeacher';
import { getTeacherCourses } from '@/utilities/getTeacherCourse';
import React, { useContext, useEffect, useState } from 'react';
import TeacherCreatedCoursesCard from './TeacherCreatedCoursesCard';

const TeacherCreatedCourse = () => {
  
  const {user,token,setSingleTeacher,singleTeacher,teacherCreatedCourses,setTeacherCreatedCourses} = useContext(Context);
  console.log(user)
  useEffect(()=>{
    const getData = async()=>{
      const data = await getSingleTeacher(user.id,token);
      console.log(data)
      setSingleTeacher(data.teacher);
    }
    getData();
  },[user])
  useEffect(()=>{
    console.log(singleTeacher)
    const teacherCourseData = async()=>{
      const data = await getTeacherCourses(singleTeacher.id,token);
      console.log(data)
      setTeacherCreatedCourses(data.courses);
    }
    teacherCourseData();
  },[singleTeacher])
  return (
    <div>
      <h1 className={`${teacherCreatedCourses.length>0 ? 'block':'hidden'}`}>Created Courses : {teacherCreatedCourses.length}</h1>
      <div className='grid grid-cols-4 gap-5'>
        {teacherCreatedCourses.length>0?
          teacherCreatedCourses.map(teacherCourse =>(
            <TeacherCreatedCoursesCard key={teacherCourse.id}
            teacherCourse={teacherCourse}
            ></TeacherCreatedCoursesCard>
          )):(<h1>Don't have any created courses</h1>)
        }
      </div>
    </div>
  );
};

export default TeacherCreatedCourse;