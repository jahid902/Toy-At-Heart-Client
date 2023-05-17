import React from "react";

const BlogPost = () => {
  return (
    <div className="my-4 md:my-12">
      <div className="text-center space-y-3 mb-6">
        <h1 className="text-5xl font-bold text-orange-400">Our Blogs</h1>
        <p className="text-lg">
          Latest post's from our customers. Their{" "}
          <span className="font-semibold text-orange-500">Happy</span> feedback
          for our amazing service.
        </p>
      </div>
      {/* img 1 */}
        <div className="hero min-h-full bg-slate-400 mb-5 md:mb-12 rounded-lg">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://static.wixstatic.com/media/d54457_c7148d3f7d2f484f8a2c2327ed0218ae~mv2.jpg/v1/fill/w_560,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Dad%20smiling%20and%20playing%20a%20toy%20guitar%20with%20his%20young%20daughter.jpg"
              className="max-w-sm md:max-w-lg rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold text-orange-400">What our Happy Clients say!!</h1>
              <p className="py-6">
                "Ordered some toys for my youngest kid and and was very pleased with the quick shipping
                time, great communication from operator's side and cute packaging when the product's 
                arrived! I will definitely order from them again."
                <br />
                <strong>- kelly Jay</strong>
              </p>
              <button className="btn btn-outline btn-warning">Read more</button>
            </div>
          </div>
        </div>
      {/* img 2 */}
      <div className="hero min-h-full bg-slate-400 mb-5 md:mb-12 rounded-lg">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://img.freepik.com/premium-photo/vietnamese-parents-children-sittig-floor-living-room-playing-with-plastic-toys-blocks_274689-21428.jpg"
              className="max-w-sm md:max-w-lg rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold text-orange-400">A satisfied customers feedback !! </h1>
              <p className="py-6">
                "
                I have been buying games and toys from this store for many years. The guys from this
                shop know exactly what our need and want. Also, they are always in trend, I totally 
                recommend them!"
                <br /> 
                <strong>- Sarah williams</strong>
              </p>
              <button className="btn btn-outline btn-warning">Write a feedback</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default BlogPost;
