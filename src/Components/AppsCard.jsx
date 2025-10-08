import React from "react";

const AppsCard = ({ app }) => {
  const { title, image } = app;
  console.log(app);
  return (
    <div className="card bg-base-100 shadow-sm p-4 border-2 hover:scale-105 transition ease-in-out border-amber-300">
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
          <div className="badge badge-outline">9M</div>
          <div className="badge badge-outline">*5</div>
        </div>
      </div>
    </div>
  );
};

export default AppsCard;
