"use client";
import { getTeacherRequest } from "@/utilities/getTeacherRequest";
import React, { useContext, useEffect, useState } from "react";
import RequestCard from "./RequestCard";
import { Context } from "@/provider/ContextProvider";

const TeacherRequest = () => {
const {request} = useContext(Context);
  // console.log(request);
  return (
    <div className="flex flex-col justify-start items-start">
     <h1>Request : {request.length}</h1>
      <div className="grid grid-cols-4 gap-5">
      {request.slice(0, 16).map((req) => <RequestCard key={req.id} req={req}></RequestCard>)}
      </div>
    </div>
  );
};

export default TeacherRequest;
