import React from "react";

const Gallery = () => {
  return (
    <>
      <div className="text-center space-y-3 mb-4 md:mb-12">
        <h1 className="text-5xl font-bold text-orange-400">
          Popular toys in store !!
        </h1>
        <p className="text-lg ">
          These are the most loved toys by kids. It bring's joy and a sense of
          peace in your kids heart. <br /> So, buy now from{" "}
          <span className="font-semibold text-orange-500">Toy At Haert.</span>
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 rounded-lg bg-orange-100 p-6">
        <div className="h-64 md:h-96 bg-slate-300 rounded-lg">
          <img
            className="object-fit md:object-cover w-full h-full rounded-md mask md:mask-hexagon "
            src="https://www.gameinformer.com/sites/default/files/styles/full/public/2021/04/09/1e7024ca/primeetwe.jpg"
            alt=""
          />
        </div>
        {/* img 1 */}
        <div className="h-64 md:h-96 bg-slate-300 rounded-lg">
          <img
            className="object-fit md:object-cover w-full h-full rounded-md mask md:mask-decagon"
            src="https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-80407606/80407606.jpg"
            alt=""
          />
        </div>
        {/* img 2 */}
        <div className="h-64 md:h-96 bg-slate-300 rounded-lg">
          <img
            className="object-fit md:object-cover w-full h-full rounded-md mask md:mask-parallelogram-4"
            src="https://allears.net/wp-content/uploads/2020/07/Toy-Story-Land-Disneys-Hollywood-Studios-Reopening-1.jpg"
            alt=""
          />
        </div>
        {/* img 3 */}
        <div className="h-64 md:h-96 bg-slate-300 rounded-lg">
          <img
            className="object-fit md:object-fit w-full h-full rounded-md mask md:mask-circle"
            src="https://cdn.shopify.com/s/files/1/0523/0955/7435/products/FalconCap-16_1024x1024@2x.jpg?v=1675021813"
            alt=""
          />
          
        </div>
        {/* img 4 */}
        <div className="h-64 md:h-96 bg-slate-300 rounded-lg">
          <img
            className="object-fit md:object-cover w-full h-full rounded-md mask md:mask-heart"
            src="https://hips.hearstapps.com/hmg-prod/images/queen-elizabeth-ii-barbie-buckingham-palace-1650571094.jpg?crop=0.668xw:1.00xh;0.0850xw,0&resize=1200:*"
            alt=""
          />
        </div>
        {/* img 5 */}
        <div className="h-64 md:h-96 bg-slate-300 rounded-lg">
          <img
            className="object-fit md:object-cover w-full h-full rounded-md mask md:mask-squircle"
            src="https://cdn11.bigcommerce.com/s-ag5o99/images/stencil/1280w/products/4947/9317/067129__62260.1643900091.jpg"
            alt=""
          />
        </div>
        {/* img 6 */}
      </div>
    </>
  );
};

export default Gallery;
