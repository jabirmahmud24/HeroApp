import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const AppsCard = ({ app }) => {
  const { title, image, downloads, ratingAvg, id } = app;

  return (
    <Link
      to={`/apps/${id}`}
      className="card bg-base-100 shadow-sm p-4 hover:scale-105 transition ease-in-out"
    >
      <figure className="w-full overflow-hidden">
        <img
          className="overflow-hidden object-center"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions justify-between">
          <div className="badge text-[#00D390] font-semibold bg-[#F1F5E8]">
            <Download color="#00D390" size={16} />
            {downloads / 1000000000}M
          </div>
          <div className="badge bg-[#FFF0E1] text-[#FF8811] font-semibold">
            <Star color="#FF8811" size={16} />
            {ratingAvg}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
