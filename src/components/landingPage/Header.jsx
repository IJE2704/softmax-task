"use client";
import Image from "next/image";
import { HiOutlineSearch } from "react-icons/hi";

// images
import img1 from "@/assets/header1.png";
import img2 from "@/assets/header2.png";

const Header = () => {
  return (
    <div className="lg:w-[1100px] lg:h-[70vh] mx-4 lg:mx-auto flex flex-col-reverse md:flex-row justify-center items-center space-y-4 gap-6 lg:space-y-0 lg:gap-0 mb-4">
      <div className="flex flex-col text-center lg:text-start space-y-4 md:space-y-5 lg:w-1/2">
        <p className="text-[#20B486] text-sm md:text-lg lg:text-2xl font-semibold">
          START TO SUCCESS
        </p>
        <h2 className="text-[#06241B] text-semibold text-2xl md:text-4xl lg:text-[56px] text-wrap lg:leading-[72px]">
          Access To{" "}
          <span className="text-[#20B486] border-[#FFC27A] border-b-4">
            500+
          </span>{" "}
          Courses from{" "}
          <span className="text-[#20B486] border-[#FFC27A] border-b-4">
            100
          </span>{" "}
          Instructors & Institutions
        </h2>
        <p className="text-sm lg:text-base text-[#6D737A]">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="What do want to learn?"
            className="p-2 w-full bg-white shadow-md rounded-md border border-gray-300 focus:outline-none focus:border-[#20B486] text-sm lg:text-base"
          />
          <div className="absolute right-4 bottom-[30%] ">
            <HiOutlineSearch height={24} />
          </div>
        </div>
      </div>
      <div className="flex lg:w-1/2">
        <div>
          <Image
            src={img2}
            width={400}
            height={400}
            alt="headerimg"
            layout="responsive"
          ></Image>
        </div>
        <div>
          <Image
            src={img1}
            width={400}
            height={400}
            alt="headerimg"
            layout="responsive"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Header;
