import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";

const RootLayout = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  return (
    <div>
      <Navbar />
      {navigation?.state === "loading" ? (
        <LoadingSpinner />
      ) : (
        <div className="mx-auto w-full py-4 md:py-8 lg:py-12">
          <Outlet />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default RootLayout;
