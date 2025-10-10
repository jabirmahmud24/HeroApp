import React from "react";
import { Link } from "react-router";
import { Line } from "recharts";
import LoadingSpinner from "./LoadingSpinner";

const HomeStatic = () => {
  return (
    <div>
      <div className="text-center flex flex-col justify-center items-center space-y-5">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>
          &nbsp;Apps
        </h1>
        <div className="w-10/12 md:w-9/12 lg:w-7/12">
          <p className="text-gray-500">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>
        <div className="flex gap-5">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <img className="h-5 w-5" src="/google.png" alt="" /> Google Play
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <img className="h-5 w-5" src="/appstore.png" alt="" /> App Store
          </a>
        </div>
        <img className="mb-0" src="/public/hero.png" alt="" />
        <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-15 text-white w-full">
          <h1 className="text-3xl font-bold">
            Trusted by Millions, Built for You
          </h1>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            <div className="space-y-2 mt-5">
              <p className="text-gray-300">Total Downloads</p>
              <h1 className="text-5xl font-bold">29.6M</h1>
              <p className="text-gray-300">20% More Than Last Month</p>
            </div>
            <div className="space-y-2 mt-5">
              <p className="text-gray-300">Total Reviews</p>
              <h1 className="text-5xl font-bold">906K</h1>
              <p className="text-gray-300">46% More Than Last Month</p>
            </div>
            <div className="space-y-2 mt-5">
              <p className="text-gray-300">Active Apps</p>
              <h1 className="text-5xl font-bold">136+</h1>
              <p className="text-gray-300">31% More Than Last Month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStatic;
