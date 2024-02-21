import { Context } from "@/provider/ContextProvider";
import React, { useContext } from "react";
import Swal from "sweetalert2";

const RequestCard = ({ req }) => {
  const {token} = useContext(Context);
  console.log(token)
const handleApprov = async ()=>{
  const response = await fetch(`https://softmaxshop.com/user/approve-teacher/${req.id}`,{
    method:"GET",
    headers:{
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  console.log(response.status)
  if(response.ok)
  {
    Swal.fire({
      title: "Done!",
      text: "Successfully Approve teacher",
      icon: "success",
    });
  }
  else{
    Swal.fire({
      title: "Error!",
      text: "Something is wrong with this teacher.",
      icon: "error",
    });
  }
}
  return (
    <div className="bg-[#B2CAF7] flex flex-col 2xl:flex-row justify-center items-center py-5 px-2 2xl:py-10 2xl:px-5 rounded-md gap-4">
      <div className="flex flex-col justify-start items-start">
        <h1 className="text-base 2xl:text-xl">{req.fullName}</h1>
        <p>{req.email}</p>
      </div>
      <div>
        <button
        onClick={handleApprov}
          type="button" // Specify type as "button" to prevent form submission
          className="text-black hover:text-white hover:bg-[#20B486] py-2 px-4 rounded-md transition duration-300 border-[1px]"
        >
          Approved
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
