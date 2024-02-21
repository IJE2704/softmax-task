"use client";
import { getTeacherRequest } from "@/utilities/getTeacherRequest";
import React, { useContext, useEffect, useState } from "react";
import RequestCard from "./RequestCard";
import { Context } from "@/provider/ContextProvider";

const TeacherRequest = () => {
  const { request,setRequest } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const requestsPerPage = 16;

  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
  const currentRequests = request.slice(indexOfFirstRequest, indexOfLastRequest);

  const totalPages = Math.ceil(request.length / requestsPerPage);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  useEffect(() => {
    const getRequestData = async () => {
      const data = await getTeacherRequest();
      setRequest(data);
    };
    getRequestData();
  }, []);
  return (
    <div className="flex flex-col justify-start items-start">
      <h1>Requests: {request.length}</h1>
      <div className="grid grid-cols-4 gap-5">
        {currentRequests.map((req) => (
          <RequestCard key={req.id} req={req}></RequestCard>
        ))}
      </div>
      <div className="flex mt-5">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="mr-2 px-3 py-1 bg-gray-200 rounded-md"
        >
          Prev
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TeacherRequest;
