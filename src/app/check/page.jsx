"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/softmaxLogo.png";
import { CiHome } from "react-icons/ci";
const CheckPage = () => {
  return (
    <div className="lg:w-[1100px] h-screen mx-4 lg:mx-auto flex justify-center items-center bg-[#b7dfc9] px-5">
      <div className="w-full h-1/2   bg-white rounded">
        <div className=" flex justify-between items-start mx-4 mt-4">
          <Link href="/">
            <Image src={logo} width={50} height={50} alt="logo"></Image>
          </Link>
          <Link href="/">
            <p className="hover:text-[#20B486]">
              <CiHome size={40}></CiHome>
            </p>
          </Link>
        </div>
        <h2 className="text-2xl lg:text-6xl text-center font-semibold mb-4 mt-10">
          Log in as 
        </h2>
        <div className="flex justify-center items-center gap-2 mx-4 mt-20 lg:mt-28 mb-10">
          <Link href='login'><button
            type="submit"
            className="w-full text-black hover:text-white hover:bg-[#20B486] py-2 px-4 rounded-md  transition duration-300 border-[1px]"
          >
            A Student
          </button></Link>
          <Link href='/teacherlogin'><button
            type="submit"
            className="w-full text-black hover:text-white py-2 px-4 rounded-md  hover:bg-[#20B486] border-[1px] transition duration-300"
          >
            A Teacher
          </button></Link>
          <Link href='admin_login'><button
            type="submit"
            className="w-full text-black hover:text-white py-2 px-4 rounded-md  hover:bg-[#20B486] border-[1px] transition duration-300"
          >
            An admin
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default CheckPage;
