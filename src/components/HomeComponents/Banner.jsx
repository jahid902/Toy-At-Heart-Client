import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/191360/pexels-photo-191360.jpeg?cs=srgb&dl=pexels-mike-bird-191360.jpg&fm=jpg")`,
        borderRadius: 20,
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl space-y-4">
          <h1 className="mb-5 text-5xl font-bold text-orange-200">
            <span className="text-orange-200 ">Toy At Heart</span> <br /> Discover the
            Magic of Toys!!!
          </h1>
          <p className="mb-5 text-white font-semibold">
            Discover a captivating collection of toys that will ignite your
            child's imagination, spark curiosity, and bring pure joy to their
            playtime. From cuddly plush companions that offer comfort and
            companionship to interactive games and puzzles that challenge young
            minds, our curated selection guarantees unforgettable moments of
            discovery and learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
