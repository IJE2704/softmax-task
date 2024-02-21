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

const StudentDashboardMenu = () => {
  const { selectedMenu, setSelectedMenu, user } = useContext(Context);
  return (
    <div className="w-full h-screen bg-slate-100 shadow-2xl">
      <Link href='/'>
      <div className="flex justify-center items-center pt-5">
        <Image src={logo} width={50} height={50} alt="logo"></Image>
        <h1 className="font-bold text-[#E84C1F] text-lg lg:text-2xl">SOFTMAX</h1>
      </div></Link>
      <div className="mt-16 space-y-3 pr-4">
        <Link href={`/dashboard_student`}>
          <div
            onClick={() => setSelectedMenu("Dashboard")}
            className={`flex justify-start pl-[150px] items-center  gap-4 text-base md:text-xl lg:text-2xl w-full  hover:bg-[#fc805ede] border py-4 rounded-br-lg rounded-tr-lg ${
              selectedMenu === "Dashboard" ? "bg-[#E84C1F] text-white" : ""
            }`}
          >
            <RiDashboardFill /> <h1>Dashboard</h1>
          </div>
        </Link>
        <Link href='my_class'>
        <div
          onClick={() => setSelectedMenu("My Class")}
          className={`flex justify-start pl-[150px] items-center gap-4 text-base md:text-xl lg:text-2xl w-full  hover:bg-[#fc805ede] border py-4 rounded-br-lg rounded-tr-lg ${
            selectedMenu === "My Class" ? "bg-[#E84C1F] text-white" : ""
          }`}
        >
          <SiGoogleclassroom /> <h1>My Class</h1>
        </div></Link>
        <Link href='/courses'>
        <div
          onClick={() => setSelectedMenu("Courses")}
          className={`flex justify-start pl-[150px] items-center gap-4 text-base md:text-xl lg:text-2xl w-full  hover:bg-[#fc805ede] border py-4 rounded-br-lg rounded-tr-lg ${
            selectedMenu === "Courses" ? "bg-[#E84C1F] text-white" : ""
          }`}
        >
          <FaBookOpen /> <h1>Courses</h1>
        </div></Link>
        
        <Link href='exams'><div
          onClick={() => setSelectedMenu("Exams")}
          className={`flex justify-start pl-[150px] items-center gap-4 text-base md:text-xl lg:text-2xl w-full  hover:bg-[#fc805ede] border py-4 rounded-br-lg rounded-tr-lg ${
            selectedMenu === "Exams" ? "bg-[#E84C1F] text-white" : ""
          }`}
        >
          <PiExam /> <h1>Exams</h1>
        </div></Link>
        <Link href='teachers'><div
          onClick={() => setSelectedMenu("Teachers")}
          className={`flex justify-start pl-[150px] items-center gap-4 text-base md:text-xl lg:text-2xl w-full  hover:bg-[#fc805ede] border py-4 rounded-br-lg rounded-tr-lg ${
            selectedMenu === "Teachers" ? "bg-[#E84C1F] text-white" : ""
          }`}
        >
          <FaChalkboardTeacher /> <h1>Teachers</h1>
        </div></Link>
      </div>
      <div className="flex flex-col justify-center items-center mt-[80%]">
        <Link href='/'><button className='px-[24px] py-[10px] bg-[#E84C1F] hover:bg-[#16674d] rounded text-white'>Logout</button></Link>
      </div>
    </div>
  );
};

export default StudentDashboardMenu;
