"use client";
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

  // const setTokenInLocalStorage = (t) => {
  //   localStorage.setItem("token", t);
  // };

  // const getTokenFromLocalStorage = () => {
  //   return localStorage.getItem("token");
  // };

  useEffect(()=>{

    console.log(user);
  },[user])
  useEffect(() => {
    const getRequestData = async () => {
      const data = await getTeacherRequest();
      setRequest(data);
    };
    getRequestData();
  }, []);
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
    setTeacherCreatedCourses
  };
  return <Context.Provider value={info}>{children}</Context.Provider>;
};

export default ContextProvider;
