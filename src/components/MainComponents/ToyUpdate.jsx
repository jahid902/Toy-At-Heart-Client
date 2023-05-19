import React from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const ToyUpdate = () => {
  const { id } = useParams();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updatedData = {
      price,
      quantity,
      description,
    };
    fetch(`http://localhost:5000/updateToy/${id}`,{
        method: 'PATCH',
        headers:{'content-type' : 'application/json'},
        body: JSON.stringify(updatedData)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount > 0){
            Swal.fire(
                "Your Toy Is Updated!!",
                "Price, Quantity and Toy description updated",
                'success'
              )
        }
    })
    form.reset();
  };

  return (
    <>
      <div className="flex justify-center my-4">
        <h1 className="text-4xl font-bold rounded-lg text-orange-500 inline-block p-3 bg-orange-100">
          Update Toy Information
        </h1>
      </div>

      {/* <form onSubmit={handleUpdate} className="my-12 bg-orange-200 p-8 rounded-lg"> */}
      <div className="card mx-auto my-8 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleUpdate} className="card-body">
          <div className="form-control">
            <label className="label ">
              <span className="label-text text-lg font-bold text-orange-500">
                Price
              </span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Updated Price"
              required
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-bold text-orange-500">
                Quantity
              </span>
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="Updated Quantity"
              required
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-bold text-orange-500">
                Description
              </span>
            </label>
            <textarea
              className="textarea textarea-warning"
              name="description"
              placeholder="Updated Description"
              required
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-outline btn-warning" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
      {/* </form>  */}
    </>
  );
};

export default ToyUpdate;
