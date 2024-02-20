import Image from "next/image";
import React from "react";
import img1 from '@/assets/join.png'
import Link from "next/link";

const Join = () => {
  return (
    <div className="lg:w-[1100px] mx-4 lg:mx-auto py-4 lg:py-20 flex flex-col lg:flex-row justify-center items-center lg:gap-10">
      <div className="lg:w-1/2">
        <Image src={img1} alt="img1" layout="responsive"></Image>
      </div>
      <div className="lg:w-1/2 space-y-6 flex flex-col justify-center lg:justify-normal items-center ">
        <h1 className="text-[40px] font-semibold text-center md:text-start">
          Join <span className="text-[#20B486]"> Worlds largest</span> learning
          platform today
        </h1>
        <p>Start learning by registering for free</p>
        <Link href='/registration'>
        <button className="px-[24px] py-[10px] bg-[#20B486] hover:bg-[#16674d] rounded text-white">
          Sign up for Free
        </button></Link>
      </div>
    </div>
  );
};

export default Join;
