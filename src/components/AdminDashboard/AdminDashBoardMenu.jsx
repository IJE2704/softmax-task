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

const AdminDashBoardMenu = () => {
  const { selectedAdminMenu, setSelectedAdminMenu, user } = useContext(Context);
  return (
    <div className="w-full h-screen bg-[#ECC091] shadow-2xl flex flex-col">
      <Link href='/'>
      <div className="flex justify-center items-center pt-5">
        <Image src={logo} width={50} height={50} alt="logo"></Image>
        <h1 className="font-bold text-[#F5F5F4]">SOFTMAX</h1>
      </div></Link>
      <div className="mt-10 2xl:mt-16 flex flex-col flex-1 space-y-3 pr-4">
        <Link href={`/dashboard_admin`}>
          <div
            onClick={() => setSelectedAdminMenu("Dashboard")}
            className={`flex justify-start pl-20 2xl:pl-[150px] items-center  gap-4 text-base md:text-xl 2xl:text-2xl w-full  hover:bg-[#F5F5F4] border py-4 rounded-br-lg rounded-tr-lg ${
              selectedAdminMenu === "Dashboard" ? "bg-[#F5F5F4] " : ""
            }`}
          >
            <RiDashboardFill /> <h1>Dashboard</h1>
          </div>
        </Link>
        <Link href='/category_admin'>
        <div
          onClick={() => setSelectedAdminMenu("Category")}
          className={`flex justify-start pl-20 2xl:pl-[150px] items-center gap-4 text-base md:text-xl l2xltext-2xl w-full  hover:bg-[#F5F5F4] border py-4 rounded-br-lg rounded-tr-lg ${
            selectedAdminMenu === "Category" ? "bg-[#F5F5F4] " : ""
          }`}
        >
          <FaBookOpen /> <h1>Category</h1>
        </div></Link>
        <Link href='/courses_admin'>
        <div
          onClick={() => setSelectedAdminMenu("Courses")}
          className={`flex justify-start pl-20 2xl:pl-[150px] items-center gap-4 text-base md:text-xl l2xltext-2xl w-full  hover:bg-[#F5F5F4] border py-4 rounded-br-lg rounded-tr-lg ${
            selectedAdminMenu === "Courses" ? "bg-[#F5F5F4] " : ""
          }`}
        >
          <SiGoogleclassroom /> <h1>Courses</h1>
        </div></Link>
        <Link href='/exams_admin'><div
          onClick={() => setSelectedAdminMenu("Exams")}
          className={`flex justify-start pl-20 2xl:pl-[150px] items-center gap-4 text-base md:text-xl l2xltext-2xl w-full  hover:bg-[#F5F5F4] border py-4 rounded-br-lg rounded-tr-lg ${
            selectedAdminMenu === "Exams" ? "bg-[#F5F5F4] " : ""
          }`}
        >
          <PiExam /> <h1>Exams</h1>
        </div></Link>
        <Link href='/teacher_admin'><div
          onClick={() => setSelectedAdminMenu("Teachers")}
          className={`flex justify-start pl-20 2xl:pl-[150px] items-center gap-4 text-base md:text-xl l2xltext-2xl w-full  hover:bg-[#F5F5F4] border py-4 rounded-br-lg rounded-tr-lg ${
            selectedAdminMenu === "Teachers" ? "bg-[#F5F5F4] " : ""
          }`}
        >
          <FaChalkboardTeacher /> <h1>Teachers</h1>
        </div></Link>
      </div>
      <div className="flex flex-col justify-center items-center mb-4">
        <Link href='/'><button className='px-[100px] py-[10px] bg-[#E84C1F] hover:bg-[#16674d] rounded text-white'>Logout</button></Link>
      </div>
    </div>
  );
};

export default AdminDashBoardMenu;
