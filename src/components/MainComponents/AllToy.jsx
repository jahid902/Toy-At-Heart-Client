import React, { useEffect, useState } from "react";
import ToyTable from "./ToyTable";

const AllToy = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-center my-6">
        <h1 className="text-4xl font-bold rounded-lg text-orange-500 inline-block p-3 bg-orange-100">
          All Lego Toys
        </h1>
      </div>

      <div className="my-12">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Seller Name</th>
                <th>Toy Name</th>
                <th>Sub-Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Information</th>
              </tr>
            </thead>

            {/* to avoid multiple table head rendering for each map */}

            {allToys.map((singleToy) => (
              <ToyTable key={singleToy._id} singleToy={singleToy}></ToyTable>
            ))}

          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToy;
