import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const AppsCard = ({ app }) => {
  const { title, image, downloads, ratingAvg, id } = app;
  const formatNumber = (number) => {
    if (number >= 10000000) {
      return `${(number / 10000000).toFixed(1)}M`;
    } else if (number >= 100000) {
      return `${(number / 100000).toFixed(1)}L`;
    } else if (number >= 1000) {
      return `${(number / 1000).toFixed(1)}K`;
    }
    return number.toString();
  };

  return (
    <Link
      to={`/apps/${id}`}
      className="card bg-base-100 shadow-xl p-4 hover:scale-105 transition ease-in-out"
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
            {formatNumber(downloads)}
          </div>
          <div className="badge bg-[#FFF0E1] text-[#FF8811] font-semibold">
            <Star color="#FF8811" size={16} />
            {formatNumber(ratingAvg)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
