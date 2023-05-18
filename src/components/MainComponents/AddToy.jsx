import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2';

const AddToy = () => {

    const {user} = useContext(AuthContext);


    const handlePost = (event) =>{
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const toyImage = form.toyImage.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const seller = form.sellerName.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const email = form.email.value;
        const description = form.description.value;

        const toy = {
            toyName,
            toyImage,
            price,
            rating,
            seller,
            quantity,
            category,
            email,
            description
        }
        fetch("http://localhost:5000/add-toy",{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    "Your Toy Is Posted!!",
                    "Keep Adding!! Keep Growing!! Its the way of always Smiling",
                    'success'
                  )
            }
        })
        form.reset();
    }

  return (
    <>
      <div className="flex justify-center my-4">
        <h1 className="text-4xl font-bold rounded-lg text-orange-500 inline-block p-3 bg-orange-100">
          Add A Toy
        </h1>
      </div>
      <form onSubmit={handlePost} className="my-12 bg-orange-200 p-8 rounded-lg">
        {/* main grid div */}

        <div className="flex gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-lg font-bold text-orange-500">Toy Name</span>
            </label>
            <input
              type="text"
              name="toyName"
              placeholder="Toy name"
              required
              className="input input-bordered"
            />
          </div>
          {/* 2 div between */}
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-lg font-bold text-orange-500">Toy Image</span>
            </label>
            <input
              type="url"
              name="toyImage"
              placeholder="Toy Image"
              required
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-lg font-bold text-orange-500">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Toy Price"
              required
              className="input input-bordered"
            />
          </div>
          {/* 2 div between */}
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-lg font-bold text-orange-500">Rating</span>
            </label>
            <input
              type="number"
              name="rating"
              placeholder="Toy Rating"
              required
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-lg font-bold text-orange-500">Seller name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="sellerName"
              placeholder="Seller name"
              required
              className="input input-bordered"
            />
          </div>
          {/* 2 div between */}
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-lg font-bold text-orange-500">Available Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="Available Quantity"
              required
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-lg font-bold text-orange-500">Toy Category</span>
            </label>
            <select required name="category" className="select select-bordered w-full max-w-xs">
              <option disabled defaultValue="Select Toy Category">
                Select Toy Category
              </option>
              <option>Lego City</option>
              <option>Lego Star Wars</option>
              <option>Lego Cars</option>
            </select>
          </div>
          {/* 2 div between */}
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-lg font-bold text-orange-500">Seller Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Seller Email"
              required
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-lg font-bold text-orange-500">Toy Description</span>
            </label>
            <textarea
              className="textarea textarea-warning"
              name="description"
              placeholder="Toy Description"
              required
            ></textarea>
          </div>
          {/* 2 div between */}
          <div className="form-control w-1/3 my-auto mx-auto">
            <button type="submit" className="btn text-white btn-warning hover:bg-orange-600">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddToy;
