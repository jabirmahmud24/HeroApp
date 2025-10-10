import React from "react";
import { useNavigate } from "react-router";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="/App-Error.png" alt="Error" />
      <div className="text-center space-y-3 my-5">
        <h1 className="text-4xl font-bold">Opps! Apps Not Found</h1>
        <p className="text-gray-600">The Page You are looking Is not Found.</p>

        <button
          onClick={() => navigate(-1)}
          className="btn text-white font-bold bg-gradient-to-r from-[#632EE3]
      to-[#9F62F2] px-6"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Error404;
