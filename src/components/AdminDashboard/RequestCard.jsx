import React from "react";

const RequestCard = ({ req }) => {
  return (
    <div className="bg-[#B2CAF7] flex justify-center items-center py-10 px-5 rounded-md gap-4">
      <div>
        <h1 className="text-2xl">{req.fullName}</h1>
        <p>{req.email}</p>
      </div>
      <div>
        <button
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
