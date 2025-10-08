import React from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";

const AppDeatils = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();

  const app = apps.find((p) => String(p.id) === id);
  //   console.log(app);
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
  return (
    <div>
      <div className="flex gap-12">
        <div>
          <img className="w-48 h-48" src={image} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p>
            Devloped by: <span className="text-[#632EE3]">{companyName}</span>
          </p>
          <hr />
          <div className="flex gap-8 mt-2">
            <div>
              <img className="h-8 w-8" src="../../icon-downloads.png" alt="" />
              <p className="text-gray-600 mt-2">Downloads</p>
              <h1 className="text-2xl font-bold">8M+</h1>
            </div>
            <div>
              <img className="h-8 w-8" src="../../icon-ratings.png" alt="" />
              <p className="text-gray-600 mt-2">Avarage Ratings</p>
              <h1 className="text-2xl font-bold">4.9</h1>
            </div>
            <div>
              <img className="h-8 w-8" src="../../icon-review.png" alt="" />
              <p className="text-gray-600 mt-2">Total Reviews</p>
              <h1 className="text-2xl font-bold">54K</h1>
            </div>
          </div>
          <button className="btn text-white bg-[#00D390]">
            Install Now ({size})
          </button>
        </div>
      </div>
      {/* Chart */}
      <div className="h-48">
        <h1 className="font-bold">Ratings</h1>
      </div>
      {/* Description */}
      <div>
        <h1 className="font-bold">Description</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default AppDeatils;
