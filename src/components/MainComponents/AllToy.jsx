import React, { useEffect, useState } from "react";
import ToyTable from "./ToyTable";

const AllToy = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

    const handleSearch = () => {
      fetch(`http://localhost:5000/toyText/${searchText}`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        setAllToys(data);
      })
    }

  return (
    <div>
      <div className="flex justify-center my-6">
        <h1 className="text-4xl font-bold rounded-lg text-orange-500 inline-block p-3 bg-orange-100">
          All Lego Toys
        </h1>
      </div>

      <div className="flex justify-center gap-6 my-6">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search Toy Name"
          className="input input-bordered input-warning w-full max-w-xs"
        />
        <button onClick={handleSearch} className="btn btn-outline btn-warning">Search</button>
      </div>

      <div className="my-12">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="bg-orange-200 font-semibold text-base">
                  Sl No.
                </th>
                <th className="bg-orange-200 font-semibold text-base">
                  Seller Name
                </th>
                <th className="bg-orange-200 font-semibold text-base">
                  Toy Name
                </th>
                <th className="bg-orange-200 font-semibold text-base">
                  Sub-Category
                </th>
                <th className="bg-orange-200 font-semibold text-base">Price</th>
                <th className="bg-orange-200 font-semibold text-base">
                  Quantity
                </th>
                <th className="bg-orange-200 font-semibold text-base">
                  Information
                </th>
              </tr>
            </thead>

            {/* to avoid multiple table head rendering for each map */}

            {allToys.map((singleToy, i) => (
              <ToyTable
                key={singleToy._id}
                index={i}
                singleToy={singleToy}
              ></ToyTable>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToy;
