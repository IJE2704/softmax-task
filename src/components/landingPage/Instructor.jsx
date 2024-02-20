import Image from "next/image";
import React from "react";
import img1 from "@/assets/instructor1.png";
import img2 from "@/assets/instructor2.png";
import img3 from "@/assets/instructor3.png";
import img4 from "@/assets/instructor4.png";

const Instructor = () => {
  return (
    <div className="lg:w-[1100px] mx-4 lg:mx-auto py-4 lg:py-20">
      <h1 className="text-center md:text-start text-2xl lg:text-4xl font-semibol mb-4">
        Our Best{" "}
        <span className="text-[#20B486] border-[#FFC27A] border-b-4">
          Instructor
        </span>
      </h1>
      <p className="text-base text-[#6D737A] text-center md:text-start">
        Various versions have evolved over the years, sometimes by accident,
      </p>

      <div className="mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center">
        <div className="card card-compact w-52 bg-base-100 shadow-xl mt-5">
          <div className="p-2">
            <Image src={img1} alt="img" layout="responsive"></Image>
          </div>
          <div className="p-2">
            <p className="text-center text-base font-bold">Jacob Jones</p>
            <p className="text-base text-[#6D737A] text-center">
              Ui-Ux Design Expert
            </p>
          </div>
        </div>
        <div className="card card-compact w-52 bg-base-100 shadow-xl mt-5">
          <div className="p-2">
            <Image src={img2} alt="img" layout="responsive"></Image>
          </div>
          <div className="p-2">
            <p className="text-center text-base font-bold">Jacob Jones</p>
            <p className="text-base text-[#6D737A] text-center">
              Ui-Ux Design Expert
            </p>
          </div>
        </div>
        <div className="card card-compact w-52 bg-base-100 shadow-xl mt-5">
          <div className="p-2">
            <Image src={img3} alt="img" layout="responsive"></Image>
          </div>
          <div className="p-2">
            <p className="text-center text-base font-bold">Jacob Jones</p>
            <p className="text-base text-[#6D737A] text-center">
              Ui-Ux Design Expert
            </p>
          </div>
        </div>
        <div className="card card-compact w-52 bg-base-100 shadow-xl mt-5">
          <div className="p-2">
            <Image src={img4} alt="img" layout="responsive"></Image>
          </div>
          <div className="p-2">
            <p className="text-center text-base font-bold">Jacob Jones</p>
            <p className="text-base text-[#6D737A] text-center">
              Ui-Ux Design Expert
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
