"use client"
import { CiPen } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineHtml } from "react-icons/md";
import { PiMicrophoneStageLight } from "react-icons/pi";
import { FaBusinessTime } from "react-icons/fa";
import { CgStyle } from "react-icons/cg";
import { CiCamera } from "react-icons/ci";
import { CiMusicNote1 } from "react-icons/ci";
import { CiDatabase } from "react-icons/ci";

const Categories = () => {
  return (
    <div className='lg:w-[1100px] mx-4 lg:mx-auto py-4 lg:py-20'>
      <h1 className='text-center md:text-start text-2xl lg:text-4xl font-semibol mb-4'><span className='text-black'>Most</span> <span className='text-[#20B486] border-[#FFC27A] border-b-4'>Popula</span> <span className='text-[#20B486]'>Categories</span></h1>
      <p className='text-base text-[#6D737A] text-center md:text-start'>Various versions have evolved over the years, sometimes by accident,</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 lg:mt-8'>
        <div className="col-span-1 flex justify-between items-center gap-2 shadow-md rounded p-2 hover:border-[#20B486] border-[1px]">
          <CiPen></CiPen>
          <p className="flex-1">Design</p>
          <button className="p-2 hover:bg-[#20B486] hover:text-[#fff] rounded"><MdArrowOutward></MdArrowOutward></button>
        </div>
        <div className="col-span-1 flex justify-between items-center gap-2 shadow-md rounded p-2 hover:border-[#20B486] border-[1px]">
          <MdOutlineHtml></MdOutlineHtml>
          <p className="flex-1">Development</p>
          <button className="p-2 hover:bg-[#20B486] hover:text-[#fff] rounded"><MdArrowOutward></MdArrowOutward></button>
        </div>
        <div className="col-span-1 flex justify-between items-center gap-2 shadow-md rounded p-2 hover:border-[#20B486] border-[1px]">
          <PiMicrophoneStageLight></PiMicrophoneStageLight>
          <p className="flex-1">Marketing</p>
          <button className="p-2 hover:bg-[#20B486] hover:text-[#fff] rounded"><MdArrowOutward></MdArrowOutward></button>
        </div>
        <div className="col-span-1 flex justify-between items-center gap-2 shadow-md rounded p-2 hover:border-[#20B486] border-[1px]">
          <FaBusinessTime></FaBusinessTime>
          <p className="flex-1">Business</p>
          <button className="p-2 hover:bg-[#20B486] hover:text-[#fff] rounded"><MdArrowOutward></MdArrowOutward></button>
        </div>
        <div className="col-span-1 flex justify-between items-center gap-2 shadow-md rounded p-2 hover:border-[#20B486] border-[1px]">
          <CgStyle></CgStyle>
          <p className="flex-1">Lifestyle</p>
          <button className="p-2 hover:bg-[#20B486] hover:text-[#fff] rounded"><MdArrowOutward></MdArrowOutward></button>
        </div>
        <div className="col-span-1 flex justify-between items-center gap-2 shadow-md rounded p-2 hover:border-[#20B486] border-[1px]">
          <CiCamera></CiCamera>
          <p className="flex-1">Photography</p>
          <button className="p-2 hover:bg-[#20B486] hover:text-[#fff] rounded"><MdArrowOutward></MdArrowOutward></button>
        </div>
        <div className="col-span-1 flex justify-between items-center gap-2 shadow-md rounded p-2 hover:border-[#20B486] border-[1px]">
          <CiMusicNote1></CiMusicNote1>
          <p className="flex-1">Music</p>
          <button className="p-2 hover:bg-[#20B486] hover:text-[#fff] rounded"><MdArrowOutward></MdArrowOutward></button>
        </div>
        <div className="col-span-1 flex justify-between items-center gap-2 shadow-md rounded p-2 hover:border-[#20B486] border-[1px]">
          <CiDatabase></CiDatabase>
          <p className="flex-1">Data science</p>
          <button className="p-2 hover:bg-[#20B486] hover:text-[#fff] rounded"><MdArrowOutward></MdArrowOutward></button>
        </div>
        <div className="col-span-1 flex justify-between items-center gap-2 shadow-md rounded p-2 hover:border-[#20B486] border-[1px]">
          <CiPen></CiPen>
          <p className="flex-1">Personal Develop</p>
          <button className="p-2 hover:bg-[#20B486] hover:text-[#fff] rounded"><MdArrowOutward></MdArrowOutward></button>
        </div>
        <div className="col-span-1 flex justify-between items-center gap-2 shadow-md rounded p-2 hover:border-[#20B486] border-[1px]">
          <MdOutlineHtml></MdOutlineHtml>
          <p className="flex-1">Health & Fitness</p>
          <button className="p-2 hover:bg-[#20B486] hover:text-[#fff] rounded"><MdArrowOutward></MdArrowOutward></button>
        </div>
        <div className="col-span-1 flex justify-between items-center gap-2 shadow-md rounded p-2 hover:border-[#20B486] border-[1px]">
          <PiMicrophoneStageLight></PiMicrophoneStageLight>
          <p className="flex-1">Finance</p>
          <button className="p-2 hover:bg-[#20B486] hover:text-[#fff] rounded"><MdArrowOutward></MdArrowOutward></button>
        </div>
        <div className="col-span-1 flex justify-between items-center gap-2 shadow-md rounded p-2 hover:border-[#20B486] border-[1px]">
          <FaBusinessTime></FaBusinessTime>
          <p className="flex-1">Teaching</p>
          <button className="p-2 hover:bg-[#20B486] hover:text-[#fff] rounded"><MdArrowOutward></MdArrowOutward></button>
        </div>
      </div>
      
      
    </div>
  );
};

export default Categories;