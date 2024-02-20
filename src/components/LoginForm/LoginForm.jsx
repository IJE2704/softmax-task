"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import logo from "@/assets/softmaxLogo.png";
import login from "@/assets/login.png";
import { CiHome } from "react-icons/ci";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { fetchData } from "@/utilities/getuser";
import { Context } from "@/provider/ContextProvider";

const LoginForm = () => {
  const {setUser,setToken,setStudent,setTokenInLocalStorage} = useContext(Context);
  const router = useRouter();
  const [formData, setFormData] = useState({
    mobile_number: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://softmaxshop.com/user/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        Swal.fire({
          title: "Congratulation!",
          text: "Successfully Login",
          icon: "success",
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
        // console.log(data.token.access)
        setTokenInLocalStorage(data.token.access);
        // Redirect to the dashboard or handle authentication token
        router.push(`/dashboard_student/${user[0].id}`);
      } else {
        console.error("Login failed:", data);
        // Handle login failure, show error message, etc.
      }
    } catch (error) {
      console.error("Error logging in:", error);
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
            <Image src={login} layout="responsive" alt="sign up"></Image>
          </div>
        </div>
        <div className="lg:w-1/2 px-8 py-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl lg:text-6xl text-center font-semibold mb-4">
            Login
          </h2>
          <p className="text-center mb-4">
            Don't have an account?{" "}
            <Link href="/registration">
              <span className="text-[#20B486]">Sign up</span>
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
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
                required
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
            <button
              type="submit"
              className="w-full bg-[#20B486] text-white py-2 px-4 rounded-md hover:bg-[#147154] transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
