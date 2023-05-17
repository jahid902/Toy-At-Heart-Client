import React from "react";

const Features = () => {
  return (
    <div className="my-4 md:my-12">
      <div className="text-center space-y-3 mb-6">
        <h1 className="text-5xl font-bold text-orange-400">Our Features</h1>
        <p className="text-lg">
          We tend to provide quality service for our customers. We try{" "}
          <span className="font-semibold text-orange-500">our level best</span>{" "}
          to make your purchase and overall experience amazing.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-center items-center  bg-orange-100 p-8 ">
        <div className="text-center flex flex-col items-center w-full">
          <img src="/public/activity.png" className="w-20 h-20" alt="" />
          <h1 className="text-orange-500 font-bold text-lg">Fast Delivery</h1>
          <p>Find tracking information and order details from Your Orders.</p>
        </div>
        <div className="text-center flex flex-col items-center w-full">
          <img src="/public/passkey.png" className="w-20 h-20" alt="" />
          <h1 className="text-orange-500 font-bold text-lg">Save Money</h1>
          <p>
            Save $5 every year compared to the monthly plan by paying yearly.
          </p>
        </div>
        <div className="text-center flex flex-col items-center w-full ">
          <img src="/public/rocket.png" className="w-20 h-20" alt="" />
          <h1 className="text-orange-500 font-bold text-lg">
            Fast Return Policy
          </h1>
          <p>Money back. If the item didn't suit you.</p>
        </div>
        <div className="text-center flex flex-col items-center w-full ">
          <img src="/public/sun.png" className="w-20 h-20" alt="" />
          <h1 className="text-orange-500 font-bold text-lg">Online Support</h1>
          <p>
            Use our 24/7 customer hotline so you're not alone if you have a
            question.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
