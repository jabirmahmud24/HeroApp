import React from "react";
import { Link, useNavigation } from "react-router";
import AppsCard from "../Components/AppsCard";
import useApps from "../hooks/useApps";
import HomeStatic from "../Components/HomeStatic";
import LoadingSpinner from "../Components/LoadingSpinner";

const Home = () => {
  // const apps = useLoaderData();
  const { apps, loading, error } = useApps();
  const featuredApps = apps.slice(12, 20);

  return (
    <div>
      <HomeStatic />
      {/* {navigation?.state==='loading' ? (
        <LoadingSpinner/>
      ) : ()
    } */}
      <div className="mb-10 space-y-2 text-center mt-20">
        <h1 className="text-4xl font-bold">Trending Apps</h1>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-16 lg-px-20">
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
