"use client";
import { Context } from "@/provider/ContextProvider";
import React, { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";

const Pagination = ({ onClose }) => {
  const {user } = useContext(Context);
  console.log(user)
  // console.log(student)
  // Your pagination component content here
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg min-h-[300px] min-w-[500px]">
       <div className="text-right"> <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" onClick={onClose}>Close</button></div>
        <div className="mt-20 flex flex-col justify-center items-center">
          <h1 className="text-2xl">Name: {user?.name}</h1>
          <h1 className="text-2xl">Phone:{user?.mobile_number}</h1>
        </div>
      </div>
    </div>
  );
};

const AdminDashboardHeader = () => {
  const { selectedMenu, user, student } = useContext(Context);
  const [paginationOpen, setPaginationOpen] = useState(false);
  console.log(user)
  const handleTogglePagination = () => {
    setPaginationOpen(!paginationOpen);
  };

  const handleClosePagination = () => {
    setPaginationOpen(false);
  };
  
  return (
    <div className="w-full h-full bg-[#ECC091] shadow-xl rounded-bl-lg flex justify-between items-center px-5 relative">
      <div>
        <h1 className="text-xl lg:text-4xl font-bold">{selectedMenu}</h1>
      </div>
      <div>
        <input
          type="text"
          className="w-full border border-gray-300 focus:outline-none focus:border-[#20B486] rounded-md py-2 px-4 custom-shadow transition duration-300 ease-in-out hover:border-[#20B486]"
          placeholder="Search..."
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <FaRegUser
          size={40}
          onClick={handleTogglePagination}
          style={{ cursor: "pointer" }}
        />
        <h1>{user?.name}</h1>
      </div>
      {paginationOpen && (
        <div className="pagination-overlay" onClick={handleClosePagination}>
          <Pagination onClose={handleClosePagination} />
        </div>
      )}
    </div>
  );
};

export default AdminDashboardHeader;
