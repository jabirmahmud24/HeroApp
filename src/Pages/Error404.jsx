import React from "react";
import { useNavigate } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <img src="/public/error-404.png" alt="Error" />
      <div className="text-center space-y-3 my-5">
        <h1 className="text-4xl font-bold">Opps! Page Not Found</h1>
        <p className="text-gray-600">The Page You are looking Is not Found!</p>

        <button
          onClick={() => navigate(-1)}
          className="btn text-white font-bold bg-gradient-to-r from-[#632EE3]
      to-[#9F62F2] px-6"
        >
          Go Back
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
