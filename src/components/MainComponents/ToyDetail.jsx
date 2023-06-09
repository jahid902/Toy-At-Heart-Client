import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from "../../Hooks/useTitle";
AOS.init();

const ToyDetail = () => {

  useTitle('Toy-Detail')
  const [toyData, setToyData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://toy-at-heart-server.vercel.app/toy/${id}`)
      .then((res) => res.json())
      .then((data) => setToyData(data));
  }, []);

  const handleAlert= () => {
    Swal.fire(
        "Added to cart!!",
        "Make payment and it's yours!!",
        'success'
      )
  }

  return (
    <>
        <div className="flex justify-center mt-3">
        <h1 className="text-4xl font-bold rounded-lg text-slate-500 inline-block p-3 bg-slate-100">
          {toyData?.toyName} Detail
        </h1>
      </div>
      <div className="hero min-h-screen my-2 md:my-6" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="50">
        <div className="hero-content rounded-md bg-slate-500 flex-col lg:flex-row p-1 md:p-6 gap-6">
          <img
            src={toyData?.toyImage}
            className="max-w-sm md:max-w-md h-96 rounded-lg shadow-2xl"
          />
          <div className="w-3/5 text-white">
            <div className="space-y-3">
            <h1 className="text-4xl font-bold">{toyData?.toyName}</h1>
            <h1 className="text-2xl font-bold">Seller Name : {toyData?.seller}</h1>
            <h3 className="text-xl font-semibold">
              <strong>Seller Email :</strong> {toyData?.email}
            </h3>
            </div>
            <p className="py-3">
              <strong>Toy Detail :</strong> {toyData?.description}
            </p>
            <div className="flex gap-12 mb-3">
              <p>
                <strong>Price :</strong> {toyData?.price}$
              </p>
              <p>
                <strong>Rating :</strong> {toyData?.rating} <span className="text-yellow-500 font-semibold text-base">Stars</span>
              </p>
            </div>
            <div className="flex gap-12 mb-3">
              <p>
                <strong>Category :</strong> {toyData?.category}
              </p>
              <p>
                <strong>Quantity :</strong> {toyData?.quantity} Pieces
              </p>
            </div>
            <div className="flex gap-12 my-4">
              <button onClick={handleAlert} className="btn btn-outline btn-primary">
                Add to cart
              </button>
              <Link to="/allToy">
                <button className="btn btn-outline btn-primary">
                  See All toys
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetail;
