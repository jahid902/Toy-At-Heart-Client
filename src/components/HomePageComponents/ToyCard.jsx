import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ToyCard = ({ singleToy }) => {
  const { _id, toyName, toyImage, price, rating } = singleToy || {};

  const { user } = useContext(AuthContext);

  return (
    <div className="card w-full h-full md:h-96 bg-base-100 shadow-xl mb-3 md:mb-6 p-1 md:p-4">
      <div className="w-full h-full">
        <img
          className="h-48 w-full object-contain"
          src={toyImage}
          alt="toy image"
        />
      </div>
      <div className="card-body p-1 md:p-5">
        <h2 className="card-title">{toyName}</h2>
        <div className="badge badge-warning">
          {price > 250 ? <p>High Priced</p> : <p>Low Priced</p>}
        </div>
        <div className="card-actions justify-Start">
          <p>Price : {price}$</p>
          <p>
            Rating: {rating}{" "}
            <span className="text-yellow-500 font-semibold text-base">
              Stars
            </span>
          </p>
        </div>
        <div>
          <Link to={`/toy/${_id}`}>
            <button className="btn btn-outline btn-warning">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
