import React from "react";

const SocialButton = () => {
  return (
    <div className="flex flex-col w-full border-opacity-50">
      <div className="divider">OR</div>
      <div className="grid h-14 card rounded-box place-items-center bg-orange-100 hover:bg-orange-300 duration-500">
        <img src="/public/google (1).png" className="w-8 h-8  cursor-pointer" alt="" />
      </div>
    </div>
  );
};

export default SocialButton;
