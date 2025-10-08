import React from "react";
import { Link } from "react-router";
import AppsCard from "../Components/AppsCard";
import useApps from "../hooks/useApps";

const Home = () => {
  // const apps = useLoaderData();
  const { apps, loading, error } = useApps();
  const featuredApps = apps.slice(0, 8);

  return (
    <div>
      <div className="mb-10 space-y-2 text-center">
        <h1 className="text-4xl font-bold">Trending Apps</h1>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuredApps.map((app) => (
          <AppsCard key={app.id} app={app} />
        ))}
      </div>
      <Link to="/apps" className="flex items-center justify-center my-10">
        <button
          className="btn text-white font-bold bg-gradient-to-r from-[#632EE3]
          to-[#9F62F2] px-6"
        >
          Show All
        </button>
      </Link>
    </div>
  );
};

export default Home;
