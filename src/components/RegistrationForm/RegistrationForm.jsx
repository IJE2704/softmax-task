"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";

import logo from "@/assets/softmaxLogo.png";
import signup from "@/assets/signup2.png";
import Link from "next/link";
import { CiHome } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Content } from "next/font/google";
import { Context } from "@/provider/ContextProvider";
import { fetchData } from "@/utilities/getuser";

const RegistrationForm = () => {
  const {setUser,setToken,setStudent} = useContext(Context);
  const router = useRouter();
  const [formData, setFormData] = useState({
    mobile_number: "",
    name: "",
    password: "",
    password2: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://softmaxshop.com/user/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        Swal.fire({
          title: "Congratulation!",
          text: "Successfully Registration",
          icon: "success"
        });
        const users = await fetchData();
        const user = users.filter(
          (d) => d.mobile_number === formData.mobile_number
        );
        const userInfo = {
          id:user[0].id,
          name:user[0].name,
          mobile_number:user[0].mobile_number
        }
        setStudent(userInfo);
        setToken(data.token.access);
        router.push(`/dashboard_student/${user[0].id}`);
        setFormData({
          name: "",
          mobile_number: "",
          password: "",
          password2: "",
        });
      } 
      else if(response.status === 400){
        Swal.fire({
          title: "Try Again",
          text: "Account already exist with this number.",
          icon: "error"
        });
      }else {
        // Handle error response
        const errorData = await response.json();
        console.error('Error creating user:', errorData);
      }
    } catch (error) {
      console.error('Error creating user:', error);
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
            <Image src={signup} layout="responsive" alt="sign up"></Image>
          </div>
        </div>
        <div className="lg:w-1/2 px-8 py-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl lg:text-6xl text-center font-semibold mb-4">
            Get Started
          </h2>
          <p className="text-center mb-4">
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-[#20B486]">Sign in</span>
            </Link>
          </p>
          <div className="flex justify-between items-center gap-2 mb-6">
            <button
              type="submit"
              className="w-full text-black hover:text-white hover:bg-[#20B486] py-2 px-4 rounded-md  transition duration-300 border-[1px]"
            >
              Signup with Google
            </button>
            <button
              type="submit"
              className="w-full text-black hover:text-white py-2 px-4 rounded-md  hover:bg-[#20B486] border-[1px] transition duration-300"
            >
              Signup with Facebook
            </button>
          </div>
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
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
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
                id="mobile_number"
                name="mobile_number"
                value={formData.mobile_number}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your phone number"
                
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password2"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="password2"
                name="password2"
                value={formData.password2}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Confirm your password"
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

export default RegistrationForm;
