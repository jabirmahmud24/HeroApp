import React from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import RatingChart from "../Components/RatingChart";
import Swal from "sweetalert2";

const AppDeatils = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();

  const app = apps.find((p) => String(p.id) === id);

  if (loading) return <p>Loading...........</p>;

  const {
    image,
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app || {};
  const formatNumber = (number) => {
    if (number >= 10000000) {
      return `${(number / 10000000).toFixed(1)}M`; // Million
    } else if (number >= 100000) {
      return `${(number / 100000).toFixed(1)}L`; // Lakh
    } else if (number >= 1000) {
      return `${(number / 1000).toFixed(1)}K`; // Thousand
    }
    return number.toString();
  };

  // Check if app is already installed
  const existingList = JSON.parse(localStorage.getItem("instalation"));
  const isInstalled = existingList?.some((p) => p.id === app?.id);

  const handleAddToInstalation = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "It will saved your local storage!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Install it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Installed!",
          text: "Your app is Installed.",
          icon: "success",
        });
        window.location.reload();
      }
    });

    if (isInstalled) return; // Prevent action if already installed

    const existingList = JSON.parse(localStorage.getItem("instalation"));
    let updatedList = [];

    if (existingList) {
      updatedList = [...existingList, app];
    } else {
      updatedList.push(app);
    }

    localStorage.setItem("instalation", JSON.stringify(updatedList));

    // Refresh the page to update button state
    // if (result.isConfirmed) {
    //   window.location.reload();
    // }
  };

  return (
    <div className="px-8 md:px-16 lg:px-20">
      <div className="flex gap-12">
        <div>
          <img
            className="w-15 h-15 md:w-28 md:h-28 lg:w-48 lg:h-48  rounded-xl"
            src={image}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p>
            Devloped by: <span className="text-[#632EE3]">{companyName}</span>
          </p>
          <div className="border-1 border-gray-300 mt-2"></div>
          <div className="flex flex-col md:flex-row gap-8 mt-2">
            <div>
              <img className="h-8 w-8" src="../../icon-downloads.png" alt="" />
              <p className="text-gray-600 mt-2">Downloads</p>
              <h1 className="text-2xl font-bold">{formatNumber(downloads)}</h1>
            </div>
            <div>
              <img className="h-8 w-8" src="../../icon-ratings.png" alt="" />
              <p className="text-gray-600 mt-2">Avarage Ratings</p>
              <h1 className="text-2xl font-bold">{formatNumber(ratingAvg)}</h1>
            </div>
            <div>
              <img className="h-8 w-8" src="../../icon-review.png" alt="" />
              <p className="text-gray-600 mt-2">Total Reviews</p>
              <h1 className="text-2xl font-bold">{formatNumber(reviews)}</h1>
            </div>
          </div>

          <button
            onClick={() => handleAddToInstalation()}
            className={` text-white py-2 px-4 rounded-sm disabled:bg-[#3d7fbe] disabled:shadow-2xl disabled:cursor-not-allowed ${
              isInstalled ? "bg-[#00D390]" : "bg-[#00D390]"
            }`}
            disabled={isInstalled}
          >
            {isInstalled ? "Installed" : `Install Now (${size})`}
          </button>
        </div>
      </div>
      <div className="border-1 border-gray-300 mt-2"></div>
      {/*Rating Chart Will be plaed here */}
      <div className="mt-5">
        <h1 className="font-bold">Ratings</h1>
        <RatingChart ratings={ratings} />
      </div>
      {/* Description */}
      <div className="mt-5">
        <h1 className="font-bold">Description</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default AppDeatils;
