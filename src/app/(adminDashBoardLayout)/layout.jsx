import AdminDashBoardMenu from "@/components/AdminDashboard/AdminDashBoardMenu";
import AdminDashboardHeader from "@/components/AdminDashboard/AdminDashboardHeader";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="col-span-1">
        <h1><AdminDashBoardMenu></AdminDashBoardMenu></h1>
      </div>
      <div className="col-span-3 grid grid-rows-7 h-screen">
        <div className="row-span-1">
          <AdminDashboardHeader></AdminDashboardHeader>
        </div>
        <div className="row-span-6">{children}</div>
      </div>
    </div>
  );
};

export default layout;
