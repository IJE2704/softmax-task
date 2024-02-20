import React from "react";

const Footer = () => {
  return (
    <div className="lg:w-[1100px] mx-4 lg:mx-auto py-4 lg:py-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="col-span-1 space-y-4">
        <h1 className="text-2xl lg:text-4xl text-[#20B486] font-bold">
          SOFTMAX
        </h1>
        <h1 className="text-xl font-bold">Contact us</h1>
        <p className="text-[#6D737A]">Call : +123 400 123</p>
        <p className="text-[#6D737A] text-wrap">
          Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor
          felis.
        </p>
        <p className="text-[#6D737A]">Email: example@mail.com</p>
      </div>
      <div className="col-span-1 space-y-4">
        <h1 className="text-xl font-bold">Explore</h1>
        <p className="text-[#6D737A]">Home</p>
        <p className="text-[#6D737A]">Course</p>
        <p className="text-[#6D737A]">About</p>
      </div>
      <div className="col-span-1 space-y-4">
        <h1 className="text-xl font-bold">Category</h1>
        <p className="text-[#6D737A]">Design</p>
        <p className="text-[#6D737A]">Development</p>
        <p className="text-[#6D737A]">Marketing</p>
        <p className="text-[#6D737A]">Business</p>
        <p className="text-[#6D737A]">Lifestyle</p>
        <p className="text-[#6D737A]">Photography</p>
        <p className="text-[#6D737A]">Music</p>
      </div>
      <div className="col-span-1 space-y-4">
        <h1 className="text-xl font-bold">Subscribe</h1>
        <p className="text-[#6D737A] text-wrap">
          Lorem Ipsum has been them an industry printer took a galley make book.
        </p>
        < div className="flex items-start">
          <input
            type="text"
            className=" text-white px-4 py-2 rounded-md border-none focus:outline-[#20B486] bg-[#6D737A] w-full"
            placeholder="Enter email"
          />
        </div>
        <button className='px-[24px] py-[10px] bg-[#20B486] hover:bg-[#16674d] rounded text-white'>Subscribe</button>
      </div>
    </div>
  );
};

export default Footer;
