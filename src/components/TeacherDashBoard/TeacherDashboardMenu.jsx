"use client";

import logo from "@/assets/softmaxLogo.png";
import Image from "next/image";
import { useContext, useState } from "react";
import { RiDashboardFill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { PiExam } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Context } from "@/provider/ContextProvider";
import Link from "next/link";

const TeacherDashboardMenu = () => {
  const { selectedTeacherMenu, setSelectedTeacherMenu, user } = useContext(Context);
  return (
    <div className="w-full h-screen bg-[#4FB3B1] shadow-2xl flex flex-col">
      <Link href='/'>
      <div className="flex justify-center items-center pt-5">
        <Image src={logo} width={50} height={50} alt="logo"></Image>
        <h1 className="font-bold text-white text-xl 2xl:text-2xl">SOFTMAX</h1>
      </div></Link>
      <div className="mt-10 2xl:mt-16 space-y-3 flex flex-col flex-1 pr-4">
        <Link href={`/dashboard_teacher`}>
          <div
            onClick={() => setSelectedTeacherMenu("Dashboard")}
            className={`flex justify-start pl-20 2xl:pl-[150px] items-center  gap-4 text-base md:text-xl2xlg:text-2xl w-full  hover:bg-[#13674c] border py-4 rounded-br-lg rounded-tr-lg ${
              selectedTeacherMenu === "Dashboard" ? "bg-[#20B486] text-white" : ""
            }`}
          >
            <RiDashboardFill /> <h1>Dashboard</h1>
          </div>
        </Link>
        <Link href='/create_course'>
        <div
          onClick={() => setSelectedTeacherMenu("Create Course")}
          className={`flex justify-start pl-20 2xl:pl-[150px] items-center gap-4 text-base md:text-xl 2xl:text-2xl w-full  hover:bg-[#13674c] border py-4 rounded-br-lg rounded-tr-lg ${
            selectedTeacherMenu === "Create Course" ? "bg-[#20B486] text-white" : ""
          }`}
        >
          <FaBookOpen /> <h1>Create Courses</h1>
        </div></Link>
        <Link href='/courses_teacher'>
        <div
          onClick={() => setSelectedTeacherMenu("Course")}
          className={`flex justify-start pl-20 2xl:pl-[150px] items-center gap-4 text-base md:text-xl 2xl:text-2xl w-full  hover:bg-[#13674c] border py-4 rounded-br-lg rounded-tr-lg ${
            selectedTeacherMenu === "Course" ? "bg-[#20B486] text-white" : ""
          }`}
        >
          <SiGoogleclassroom /> <h1>Courses</h1>
        </div></Link>
        <Link href='/exams_teacher'><div
          onClick={() => setSelectedTeacherMenu("Exams")}
          className={`flex justify-start pl-20 2xl:pl-[150px] items-center gap-4 text-base md:text-xl 2xl:text-2xl w-full  hover:bg-[#13674c] border py-4 rounded-br-lg rounded-tr-lg ${
            selectedTeacherMenu === "Exams" ? "bg-[#20B486] text-white" : ""
          }`}
        >
          <PiExam /> <h1>Exams</h1>
        </div></Link>
        <Link href='/student_teacher'><div
          onClick={() => setSelectedTeacherMenu("Teachers")}
          className={`flex justify-start pl-20 2xl:pl-[150px] items-center gap-4 text-base md:text-xl 2xl:text-2xl w-full  hover:bg-[#13674c] border py-4 rounded-br-lg rounded-tr-lg ${
            selectedTeacherMenu === "Teachers" ? "bg-[#20B486] text-white" : ""
          }`}
        >
          <FaChalkboardTeacher /> <h1>Students</h1>
        </div></Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link href='/'><button className='px-[24px] py-[10px] bg-[#E84C1F] hover:bg-[#16674d] rounded text-white mb-4'>Logout</button></Link>
      </div>
    </div>
  );
};

export default TeacherDashboardMenu;
