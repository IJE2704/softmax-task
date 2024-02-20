"use client";

import Image from "next/image";
import React, { useState } from "react";

import logo from "@/assets/softmaxLogo.png";
import teacher from "@/assets/teacher.png";
import Link from "next/link";
import { CiHome } from "react-icons/ci";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const TeacherRegistrationForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch('https://softmaxshop.com/user/teachers/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // console.log(response.status)
      if (response.ok) {
        Swal.fire({
          title: "Congratulation!",
          text: "Successfully request done",
          icon: "success",
        });
        // Redirect to the dashboard or handle authentication token
        router.push(`/`);
        setFormData({
          fullName: "",
          email: "",
          phone_number: "",
        });
      } else {
        console.error("Login failed:", data);
        // Handle login failure, show error message, etc.
      }
    
  };

  return (
    <div className="lg:w-[1100px] lg:h-screen mx-4 lg:mx-auto flex justify-center items-center bg-[#b7dfc9] px-5">
      <div className="w-full flex flex-col lg:flex-row justify-between  bg-white rounded">
        <div className="lg:w-1/2 h-full bg-white rounded">
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
          <div className="lg:w-[80%] mx-auto">
            <Image src={teacher} layout="responsive" alt="sign up"></Image>
          </div>
        </div>
        <div className="lg:w-1/2 px-8 py-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl lg:text-6xl text-center font-semibold mb-10">
            Fill the form
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#20B486] text-white py-2 px-4 rounded-md hover:bg-[#147154] transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherRegistrationForm;
