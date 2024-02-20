import Image from "next/image";
import React from "react";
import img1 from "@/assets/achievement.png";

import img2 from "@/assets/achiev2.png";
import img3 from "@/assets/achiev3.png";
import img4 from "@/assets/achiev4.png";
import img5 from "@/assets/achiev5.png";

const Achievement = () => {
  return (
    <div className="lg:w-[1100px] mx-4 lg:mx-auto py-4 lg:py-20">
      <h1 className="text-center md:text-start text-2xl lg:text-4xl font-semibol mb-4">
        Our{" "}
        <span className="text-[#20B486] border-[#FFC27A] border-b-4">
          Achievement
        </span>
      </h1>
      <p className="text-base text-[#6D737A] text-center md:text-start">
        Various versions have evolved over the years, sometimes by accident,
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-16 mx-auto">
        <div className="lg:w-1/2 grid grid-cols-2 lg:gap-12">
          <div className="cols-span-1 flex gap-4">
            <Image src={img2} layout="responsive" alt="img
            "></Image>
            <div>
              <h1 className="text-[20px] lg:text-[32px] font-semibold">300</h1>
              <p className="text-[#6D737A] ">Instructor</p>
            </div>
          </div>
          <div className="cols-span-1 flex gap-4">
            <Image src={img3} layout="responsive" alt="img
            "></Image>
            <div>
              <h1 className="text-[20px] lg:text-[32px] font-semibold">
                10,000+
              </h1>
              <p className="text-[#6D737A] ">Video</p>
            </div>
          </div>
          <div className="cols-span-1 flex gap-4">
            <Image src={img4} layout="responsive" alt="img
            "></Image>
            <div>
              <h1 className="text-[20px] lg:text-[32px] font-semibold">
                20,000+
              </h1>
              <p className="text-[#6D737A] ">Student</p>
            </div>
          </div>
          <div className="cols-span-1 flex gap-4">
            <Image src={img5} layout="responsive" alt="img
            "></Image>
            <div>
              <h1 className="text-[20px] lg:text-[32px] font-semibold">
                1,00,000+
              </h1>
              <p className="text-[#6D737A] ">Users</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-end items-center">
          <Image src={img1} layout="responsive" alt="img
          " width={312} height={453} objectFit="cover"></Image>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
