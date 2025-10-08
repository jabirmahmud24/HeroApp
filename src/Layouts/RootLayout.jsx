import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto w-full py-4 md:py-8 lg:py-12  px-4 md:px-8 lg:px-12">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
