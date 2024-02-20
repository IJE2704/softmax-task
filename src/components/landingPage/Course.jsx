"use client";
import img1 from "@/assets/course1.png";
import img2 from "@/assets/course2.png";
import img3 from "@/assets/course3.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Course = () => {
  return (
    <div className="lg:w-[1100px] mx-auto py-5 lg:py-20 flex flex-col lg:flex-row justify-between items-center gap-0 lg:gap-10">
      <div>
        <h1 className="text-center md:text-start text-2xl lg:text-6xl font-semibol text-black">
          Most
        </h1>
        <h1 className="text-center md:text-start text-2xl lg:text-6xl font-semibol text-[#20B486] ">
          <span className="border-[#FFC27A] border-b-4">Popular</span>
        </h1>
        <h1 className="text-center md:text-start text-2xl lg:text-6xl font-semibol text-[#20B486]">
          Course
        </h1>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row justify-between mx-auto space-y-5 lg:space-y-0">
        <div className="card card-compact w-52 bg-base-100 shadow-xl">
          <div className="p-2">
            <Image src={img1} alt='img' layout="responsive"></Image>
          </div>
          <p className="px-2 text-base">HTML</p>
          <div className="p-2 flex justify-start items-center">
            <FaStar color="#FFC27A" />
            <FaStar color="#FFC27A" />
            <FaStar color="#FFC27A" />
            <FaStar color="#FFC27A" />
            <FaRegStar></FaRegStar>
            <p>(20)</p>
          </div>
          <div className="border-b-[1px] border-[#E7E9EB]"></div>
          <div className="p-2 flex justify-between items-center">
            <p className="font-bold">$500</p>
            <MdArrowOutward></MdArrowOutward>
          </div>
        </div>
        <div className="card card-compact w-52 bg-base-100 shadow-xl">
          <div className="p-2">
            <Image src={img2} alt='img' layout="responsive"></Image>
          </div>
          <p className="px-2 text-base">HTML</p>
          <div className="p-2 flex justify-start items-center">
            <FaStar color="#FFC27A" />
            <FaStar color="#FFC27A" />
            <FaStar color="#FFC27A" />
            <FaStar color="#FFC27A" />
            <FaRegStar></FaRegStar>
            <p>(20)</p>
          </div>
          <div className="border-b-[1px] border-[#E7E9EB]"></div>
          <div className="p-2 flex justify-between items-center">
            <p className="font-bold">$500</p>
            <MdArrowOutward></MdArrowOutward>
          </div>
        </div>
        <div className="card card-compact w-52 bg-base-100 shadow-xl">
          <div className="p-2">
            <Image src={img3} alt='img'
              layout="responsive"></Image>
          </div>
          <p className="px-2 text-base">HTML</p>
          <div className="p-2 flex justify-start items-center">
            <FaStar color="#FFC27A" />
            <FaStar color="#FFC27A" />
            <FaStar color="#FFC27A" />
            <FaStar color="#FFC27A" />
            <FaRegStar></FaRegStar>
            <p>(20)</p>
          </div>
          <div className="border-b-[1px] border-[#E7E9EB]"></div>
          <div className="p-2 flex justify-between items-center">
            <p className="font-bold">$500</p>
            <MdArrowOutward></MdArrowOutward>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
