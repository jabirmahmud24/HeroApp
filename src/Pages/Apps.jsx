import React, { useState } from "react";
import useApps from "../hooks/useApps";
import AppsCard from "../Components/AppsCard";

const Apps = () => {
  const [search, setSearch] = useState("");
  const { apps } = useApps();

  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;
  // console.log(searchedApps);

  return (
    <div>
      <div>
        <div>
          <div className="mb-10 space-y-2 text-center">
            <h1 className="text-4xl font-bold">Our All Applications</h1>
            <p className="text-gray-500">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>
          <div className="mb-5 text-xl font-semibold flex justify-between items-center">
            <div>({searchedApps.length}) Apps Found</div>
            <div>
              <label className="input">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  required
                  placeholder="Search"
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {searchedApps.map((app) => (
              <AppsCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
