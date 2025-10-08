import React from "react";
import { useLoaderData } from "react-router";
import AppsCard from "../Components/AppsCard";

const Home = () => {
  const apps = useLoaderData();
  console.log(apps);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {apps.map((app) => (
          <AppsCard key={apps.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default Home;
