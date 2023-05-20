import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UsersToys from "./UsersToys";
import Swal from 'sweetalert2';
import useTitle from "../../Hooks/useTitle";

const MyToy = () => {

  useTitle('My-Toys');
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const url = `http://localhost:5000/toys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to retrieve this again!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`http://localhost:5000/toyDlt/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = myToys.filter(toy=> toy._id !== id);
            setMyToys(remaining);
        })

      }
    });
  };

  return (
    <>
      <div className="flex justify-center my-4">
        <h1 className="text-2xl font-bold rounded-lg text-orange-500 inline-block p-3 bg-orange-100">
          My Added Toys
        </h1>
      </div>

     <div className="flex justify-center my-2">
     <p className="text-lg font-semibold rounded-lg text-orange-500 inline-block p-2 bg-orange-50">sorted by price</p>
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
                  Update
                </th>
                <th className="bg-orange-200 font-semibold text-base">
                  Delete
                </th>
              </tr>
            </thead>

            {/* to avoid multiple table head rendering for each map */}

            {myToys.map((toy, i) => (
              <UsersToys
                handleDelete={handleDelete}
                toy={toy}
                key={toy._id}
                index={i}
              ></UsersToys>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default MyToy;
