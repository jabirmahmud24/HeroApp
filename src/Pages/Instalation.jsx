import { Download, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Instalation = () => {
  const [instalation, setInstalation] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("instalation"));
    if (savedList) setInstalation(savedList);
  }, []);
  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...instalation].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...instalation].sort((a, b) => b.size - a.size);
    } else {
      return instalation;
    }
  })();
  const handleUninstall = (id) => {
    // console.log("clicked");
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "It will remove from your local storage!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, uninstall it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          setInstalation(updatedList);
          swalWithBootstrapButtons.fire({
            title: "Uninstaled!",
            text: "Your app has been uninstalled.",
            icon: "success",
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
    const existingList = JSON.parse(localStorage.getItem("instalation"));
    let updatedList = existingList.filter((p) => p.id !== id);
    // For UI instant update
    // setInstalation(updatedList);

    localStorage.setItem("instalation", JSON.stringify(updatedList));
  };
  return (
    <div className="px-8 md:px-12 lg:px-20">
      <div className="mb-10 space-y-2 text-center">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="space-y-6">
        <div className="flex justify-between">
          <div className="mb-5 text-xl font-semibold flex justify-between items-center">
            <div>({instalation.length}) Instaled</div>
          </div>

          <label className="form-control w-full max-w-xs">
            <select
              className="select select-border"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              id=""
            >
              <option value="none">Sort by size</option>
              <option value="size-asc">Low-&gt;High</option>
              <option value="size-desc">High-&gt;Low</option>
            </select>
          </label>
        </div>
      </div>
      <div className="space-y-3 mt-10">
        {sortedItem.map((p) => (
          <div key={p.id} className="card card-side bg-base-100 shadow-xl p-2">
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
                  <button
                    onClick={() => handleUninstall(p.id)}
                    className="btn text-white bg-[#00D390]"
                  >
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
