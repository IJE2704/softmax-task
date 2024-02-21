"use client";
import { getAllCategory } from "@/utilities/getAllCategory";
import { fetchCourse } from "@/utilities/getCourse";
import { getUserStudent } from "@/utilities/getStudent";
import { getTeacherRequest } from "@/utilities/getTeacherRequest";
import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [selectedAdminMenu, setSelectedAdminMenu] = useState("Dashboard");
  const [selectedTeacherMenu, setSelectedTeacherMenu] = useState("Dashboard");
  const [student, setStudent] = useState({});
  const [courses, setCourses] = useState([]);
  const [admin, setAdmin] = useState({});
  const [request, setRequest] = useState([]);
  const [singleTeacher,setSingleTeacher] = useState({});
  const [teacherCreatedCourses, setTeacherCreatedCourses] = useState([]);
  const [allCategory,setAllCategory] = useState([]);

  useEffect(()=>{
    const getData = async ()=>{
      const data = await getAllCategory(token);
      console.log(data)
      setAllCategory(data);
    }
    getData();
  },[token])

  useEffect(()=>{

    console.log(user);
  },[user])

  // useEffect(() => {
  //   const t = getTokenFromLocalStorage();
  //   // console.log(t);
  //   setToken(t);
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserStudent(user);
      setStudent(userData.student);
    };
    fetchData();
  }, [user]);



  const info = {
    user,
    setUser,
    token,
    setToken,
    selectedMenu,
    setSelectedMenu,
    selectedAdminMenu,
    setSelectedAdminMenu,
    selectedTeacherMenu,
    setSelectedTeacherMenu,
    setStudent,
    student,
    courses,
    setCourses,
    admin,
    setAdmin,
    request,
    setRequest,
    singleTeacher,
    setSingleTeacher,
    teacherCreatedCourses,
    setTeacherCreatedCourses,
    allCategory
  };
  return <Context.Provider value={info}>{children}</Context.Provider>;
};

export default ContextProvider;
