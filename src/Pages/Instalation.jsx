import { Download, Star } from "lucide-react";
import React, { useEffect, useState } from "react";

const Instalation = () => {
  const [instalation, setInstalation] = useState([]);
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("instalation"));
    if (savedList) setInstalation(savedList);
  }, []);
  return (
    <div>
      <div className="mb-10 space-y-2 text-center">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="space-y-6">
        <div>
          <div className="mb-5 text-xl font-semibold flex justify-between items-center">
            <div>({instalation.length}) Instaled</div>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {instalation.map((p) => (
          <div className="card card-side bg-base-100 shadow-xl p-2">
            <figure>
              <img className="h-30 w-30 rounded-xl" src={p.image} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{p.title}</h2>
              <div className="card-actions justify-between items-center">
                <div>
                  <div className="badge text-[#00D390] font-semibold">
                    <Download color="#00D390" size={16} />
                    {p.downloads / 1000000000}M
                  </div>
                  <div className="badge text-[#FF8811] font-semibold">
                    <Star color="#FF8811" size={16} />
                    {p.ratingAvg}
                  </div>
                  <div className="badge text-gray-500 font-semibold">
                    {p.size}MB
                  </div>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn text-white bg-[#00D390]">
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instalation;
